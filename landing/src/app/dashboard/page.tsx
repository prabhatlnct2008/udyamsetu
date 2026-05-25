import type { Metadata } from 'next';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ADMIN_COOKIE_NAME } from '@/app/api/dashboard-auth/route';
import {
  ensureEventsTable,
  ensureLeadsTable,
  getTursoClient,
  TursoNotConfiguredError,
} from '@/lib/turso';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'Internal — UdyamSetu Analytics',
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{
    range?: string;
    event?: string;
    page?: string;
    sort?: string;
    dir?: string;
  }>;
}

type CurrentParams = {
  range?: string;
  event?: string;
  page?: string;
  sort?: string;
  dir?: string;
};

// Build a /dashboard URL preserving current params with overrides applied.
// Pass an empty string ('') to drop a param.
function buildHref(base: CurrentParams, overrides: CurrentParams): string {
  const merged: Record<string, string | undefined> = { ...base, ...overrides };
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(merged)) {
    if (v != null && v !== '') qs.set(k, v);
  }
  const s = qs.toString();
  return s ? `/dashboard?${s}` : '/dashboard';
}

// Sort keys are whitelisted to DB columns so they are safe to interpolate.
const SORT_COLUMNS: Record<string, string> = {
  time: 'id',
  event: 'name',
  page: 'page_path',
};

interface LeadRow {
  id: number;
  created_at: string;
  name: string;
  whatsapp: string;
  business_type: string | null;
  source: string | null;
  form_variant: string | null;
}

interface EventRow {
  id: number;
  created_at: string;
  name: string;
  page_path: string | null;
  location: string | null;
  session_id: string | null;
  params_json: string | null;
}

interface CountRow {
  name: string;
  count: number;
}

interface PageBreakdownRow {
  page: string;
  views: number;
  scroll60: number;
  dwell30: number;
  dwell60: number;
  fieldFocus: number;
  submits: number;
}

const FUNNEL_STEPS = [
  'view_landing_page',
  'scroll_25_pct',
  'scroll_60_pct',
  'form_field_focus',
  'form_submitted',
] as const;

function maskWhatsApp(num: string): string {
  if (!num) return '';
  if (num.length <= 4) return num;
  return num.slice(0, 2) + 'XXXX' + num.slice(-4);
}

function rangeToHours(range: string | undefined): { hours: number; label: string } {
  if (range === '1h') return { hours: 1, label: 'Last 1 hour' };
  if (range === '24h') return { hours: 24, label: 'Last 24 hours' };
  if (range === '30d') return { hours: 24 * 30, label: 'Last 30 days' };
  return { hours: 24 * 7, label: 'Last 7 days' };
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export default async function DashboardPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const expected = process.env.ADMIN_TOKEN;
  // If ADMIN_TOKEN is not set on the server, the dashboard is hard-disabled.
  if (!expected) {
    redirect('/dashboard/login?error=unconfigured');
  }
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(ADMIN_COOKIE_NAME)?.value ?? '';
  if (!cookieValue || !timingSafeEqual(cookieValue, expected)) {
    redirect('/dashboard/login');
  }

  const range = rangeToHours(params.range);
  const sinceClause = `datetime('now', '-${range.hours} hours')`;

  // Filter + sort state for the events log.
  const filterEvent = params.event && params.event.length <= 80 ? params.event : '';
  const filterPage = params.page && params.page.length <= 200 ? params.page : '';
  const sortKey = params.sort && SORT_COLUMNS[params.sort] ? params.sort : 'time';
  const sortCol = SORT_COLUMNS[sortKey];
  const sortDir = params.dir === 'asc' ? 'ASC' : 'DESC';

  const currentParams: CurrentParams = {
    range: params.range,
    event: filterEvent || undefined,
    page: filterPage || undefined,
    sort: sortKey,
    dir: params.dir === 'asc' ? 'asc' : 'desc',
  };

  // Build the events-log WHERE clause + parameterized args.
  const evWhere: string[] = [`created_at >= ${sinceClause}`];
  const evArgs: string[] = [];
  if (filterEvent) {
    evWhere.push('name = ?');
    evArgs.push(filterEvent);
  }
  if (filterPage) {
    evWhere.push('page_path = ?');
    evArgs.push(filterPage);
  }
  const evWhereSql = evWhere.join(' AND ');

  let totalLeads = 0;
  let totalLeadsAll = 0;
  let leads: LeadRow[] = [];
  let events: EventRow[] = [];
  let funnelCounts: Record<string, number> = {};
  let eventBreakdown: CountRow[] = [];
  let pageRows: PageBreakdownRow[] = [];
  let filteredCount = 0;
  let filteredSessions = 0;
  let dbError: string | null = null;

  try {
    const client = getTursoClient();
    await ensureLeadsTable();
    await ensureEventsTable();

    const [
      leadsRecent,
      leadsTotal,
      leadsRows,
      eventsRows,
      eventsBreakdown,
      eventsByPage,
      filteredAgg,
    ] = await Promise.all([
      client.execute({
        sql: `SELECT COUNT(*) AS c FROM leads WHERE created_at >= ${sinceClause}`,
        args: [],
      }),
      client.execute('SELECT COUNT(*) AS c FROM leads'),
      client.execute({
        sql: `SELECT id, created_at, name, whatsapp, business_type, source, form_variant
              FROM leads
              ORDER BY id DESC LIMIT 50`,
        args: [],
      }),
      // Events log — filtered + sorted. sortCol/sortDir are whitelisted;
      // event/page values are passed as parameterized args.
      client.execute({
        sql: `SELECT id, created_at, name, page_path, location, session_id, params_json
              FROM events
              WHERE ${evWhereSql}
              ORDER BY ${sortCol} ${sortDir}, id DESC LIMIT 200`,
        args: evArgs,
      }),
      client.execute({
        sql: `SELECT name, COUNT(*) AS count FROM events
              WHERE created_at >= ${sinceClause}
              GROUP BY name ORDER BY count DESC`,
        args: [],
      }),
      client.execute({
        sql: `SELECT page_path, name, COUNT(*) AS count FROM events
              WHERE created_at >= ${sinceClause} AND page_path IS NOT NULL
              GROUP BY page_path, name`,
        args: [],
      }),
      // Aggregation over the *filtered* event set.
      client.execute({
        sql: `SELECT COUNT(*) AS c, COUNT(DISTINCT session_id) AS s
              FROM events WHERE ${evWhereSql}`,
        args: evArgs,
      }),
    ]);

    totalLeads = Number(leadsRecent.rows[0]?.c ?? 0);
    totalLeadsAll = Number(leadsTotal.rows[0]?.c ?? 0);

    leads = leadsRows.rows.map((r) => ({
      id: Number(r.id),
      created_at: String(r.created_at),
      name: String(r.name ?? ''),
      whatsapp: String(r.whatsapp ?? ''),
      business_type: r.business_type == null ? null : String(r.business_type),
      source: r.source == null ? null : String(r.source),
      form_variant: r.form_variant == null ? null : String(r.form_variant),
    }));

    events = eventsRows.rows.map((r) => ({
      id: Number(r.id),
      created_at: String(r.created_at),
      name: String(r.name ?? ''),
      page_path: r.page_path == null ? null : String(r.page_path),
      location: r.location == null ? null : String(r.location),
      session_id: r.session_id == null ? null : String(r.session_id),
      params_json: r.params_json == null ? null : String(r.params_json),
    }));

    const breakdown = eventsBreakdown.rows.map((r) => ({
      name: String(r.name ?? ''),
      count: Number(r.count ?? 0),
    }));
    eventBreakdown = breakdown;

    for (const b of breakdown) {
      funnelCounts[b.name] = b.count;
    }

    // Pivot events-by-page into one row per page with the key funnel counts.
    const byPage = new Map<string, PageBreakdownRow>();
    for (const r of eventsByPage.rows) {
      const page = String(r.page_path ?? '');
      const name = String(r.name ?? '');
      const count = Number(r.count ?? 0);
      const row =
        byPage.get(page) ??
        {
          page,
          views: 0,
          scroll60: 0,
          dwell30: 0,
          dwell60: 0,
          fieldFocus: 0,
          submits: 0,
        };
      if (name === 'view_landing_page') row.views += count;
      else if (name === 'scroll_60_pct') row.scroll60 += count;
      else if (name === 'dwell_30s') row.dwell30 += count;
      else if (name === 'dwell_60s') row.dwell60 += count;
      else if (name === 'form_field_focus') row.fieldFocus += count;
      else if (name === 'form_submitted') row.submits += count;
      byPage.set(page, row);
    }
    pageRows = Array.from(byPage.values()).sort((a, b) => b.views - a.views);

    filteredCount = Number(filteredAgg.rows[0]?.c ?? 0);
    filteredSessions = Number(filteredAgg.rows[0]?.s ?? 0);
  } catch (err) {
    if (err instanceof TursoNotConfiguredError) {
      dbError =
        'Turso is not configured. Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN env vars on Vercel.';
    } else {
      console.error('[dashboard] query error', err);
      dbError = 'Could not query the database.';
    }
  }

  const funnelView = funnelCounts['view_landing_page'] ?? 0;
  const conversionRate =
    funnelView > 0
      ? ((funnelCounts['form_submitted'] ?? 0) / funnelView) * 100
      : 0;

  return (
    <main className="min-h-screen bg-[#FFF6E8]">
      <header className="bg-white border-b border-[#E9D8C3] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]"
          >
            UdyamSetu · Analytics
          </Link>
          <div className="flex items-center gap-3">
            <RangePicker active={params.range ?? '7d'} current={currentParams} />
            <form action="/api/dashboard-auth" method="POST">
              <input type="hidden" name="action" value="logout" />
              <button
                type="submit"
                className="text-xs text-[#1A1A1A]/60 hover:text-[#1F2A6D] underline"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
          Click analytics — {range.label}
        </h1>
        <p className="mt-1 text-sm text-[#1A1A1A]/65">
          Counts below are from the internal events store. GA4 and Meta Pixel
          maintain their own separate datasets.
        </p>

        {dbError && (
          <div className="mt-6 p-4 rounded-xl bg-yellow-50 border border-yellow-300 text-yellow-900 text-sm">
            <strong>Heads up:</strong> {dbError}
          </div>
        )}

        {/* Summary cards */}
        <section className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat label="Page views" value={funnelCounts['view_landing_page'] ?? 0} />
          <Stat label="Leads (range)" value={totalLeads} />
          <Stat label="Leads (all-time)" value={totalLeadsAll} />
          <Stat
            label="Conversion rate"
            value={`${conversionRate.toFixed(2)}%`}
            sub={`${funnelCounts['form_submitted'] ?? 0} of ${funnelView}`}
          />
        </section>

        {/* Funnel */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            Funnel
          </h2>
          <p className="mt-1 text-sm text-[#1A1A1A]/65">
            Counts by step in the {range.label.toLowerCase()}. Step-to-step
            drop-off relative to the previous step shown on the right.
          </p>
          <div className="mt-4 rounded-2xl bg-white border border-[#E9D8C3] overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#FFF6E8] text-[#1A1A1A]/65">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Step</th>
                  <th className="text-right px-4 py-3 font-semibold">Count</th>
                  <th className="text-right px-4 py-3 font-semibold">% of views</th>
                  <th className="text-right px-4 py-3 font-semibold">Drop-off from prev</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9D8C3]">
                {FUNNEL_STEPS.map((step, i) => {
                  const count = funnelCounts[step] ?? 0;
                  const pctOfViews =
                    funnelView > 0 ? (count / funnelView) * 100 : 0;
                  const prev =
                    i === 0 ? funnelView : funnelCounts[FUNNEL_STEPS[i - 1]] ?? 0;
                  const drop = prev > 0 ? ((prev - count) / prev) * 100 : 0;
                  return (
                    <tr key={step}>
                      <td className="px-4 py-3 text-[#1F2A6D] font-mono text-xs">
                        {step}
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums">{count}</td>
                      <td className="px-4 py-3 text-right tabular-nums">
                        {pctOfViews.toFixed(1)}%
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums text-[#1A1A1A]/70">
                        {i === 0 ? '—' : `${drop.toFixed(1)}%`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* By page / variant */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            By page (variant comparison)
          </h2>
          <p className="mt-1 text-sm text-[#1A1A1A]/65">
            Views → engagement → submits per landing page in the{' '}
            {range.label.toLowerCase()}. Compare the AI Revenue Studio variants
            (v1 / v2 / v3) and the ₹19,500 offer page side by side.
          </p>
          <div className="mt-4 rounded-2xl bg-white border border-[#E9D8C3] overflow-x-auto">
            <table className="w-full text-sm min-w-[760px]">
              <thead className="bg-[#FFF6E8] text-[#1A1A1A]/65">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Page</th>
                  <th className="text-right px-4 py-3 font-semibold">Views</th>
                  <th className="text-right px-4 py-3 font-semibold">Scrolled 60%</th>
                  <th className="text-right px-4 py-3 font-semibold">Dwell 30s</th>
                  <th className="text-right px-4 py-3 font-semibold">Dwell 60s</th>
                  <th className="text-right px-4 py-3 font-semibold">Form focus</th>
                  <th className="text-right px-4 py-3 font-semibold">Submits</th>
                  <th className="text-right px-4 py-3 font-semibold">Conv. rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9D8C3]">
                {pageRows.length === 0 && (
                  <tr>
                    <td className="px-4 py-6 text-[#1A1A1A]/55 text-center" colSpan={8}>
                      No page events in this range yet.
                    </td>
                  </tr>
                )}
                {pageRows.map((p) => {
                  const cr = p.views > 0 ? (p.submits / p.views) * 100 : 0;
                  return (
                    <tr key={p.page}>
                      <td className="px-4 py-3 font-mono text-xs text-[#1F2A6D]">
                        {p.page}
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums">{p.views}</td>
                      <td className="px-4 py-3 text-right tabular-nums">{p.scroll60}</td>
                      <td className="px-4 py-3 text-right tabular-nums">{p.dwell30}</td>
                      <td className="px-4 py-3 text-right tabular-nums">{p.dwell60}</td>
                      <td className="px-4 py-3 text-right tabular-nums">{p.fieldFocus}</td>
                      <td className="px-4 py-3 text-right tabular-nums font-semibold">
                        {p.submits}
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums">
                        {cr.toFixed(1)}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Event breakdown */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            All events by type
          </h2>
          <div className="mt-4 rounded-2xl bg-white border border-[#E9D8C3] overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#FFF6E8] text-[#1A1A1A]/65">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Event name</th>
                  <th className="text-right px-4 py-3 font-semibold">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9D8C3]">
                {eventBreakdown.length === 0 && (
                  <tr>
                    <td className="px-4 py-6 text-[#1A1A1A]/55 text-center" colSpan={2}>
                      No events in this range yet.
                    </td>
                  </tr>
                )}
                {eventBreakdown.map((e) => (
                  <tr key={e.name}>
                    <td className="px-4 py-3 font-mono text-xs text-[#1F2A6D]">
                      {e.name}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">{e.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent leads */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            Recent leads (last 50)
          </h2>
          <div className="mt-4 rounded-2xl bg-white border border-[#E9D8C3] overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead className="bg-[#FFF6E8] text-[#1A1A1A]/65">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">When (UTC)</th>
                  <th className="text-left px-4 py-3 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 font-semibold">WhatsApp</th>
                  <th className="text-left px-4 py-3 font-semibold">Business type</th>
                  <th className="text-left px-4 py-3 font-semibold">Source</th>
                  <th className="text-left px-4 py-3 font-semibold">Variant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9D8C3]">
                {leads.length === 0 && (
                  <tr>
                    <td className="px-4 py-6 text-[#1A1A1A]/55 text-center" colSpan={6}>
                      No leads yet.
                    </td>
                  </tr>
                )}
                {leads.map((l) => (
                  <tr key={l.id}>
                    <td className="px-4 py-3 text-[#1A1A1A]/70 font-mono text-xs whitespace-nowrap">
                      {l.created_at}
                    </td>
                    <td className="px-4 py-3">{l.name}</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      {maskWhatsApp(l.whatsapp)}
                    </td>
                    <td className="px-4 py-3">{l.business_type ?? '—'}</td>
                    <td className="px-4 py-3 text-[#1A1A1A]/70">{l.source ?? '—'}</td>
                    <td className="px-4 py-3 text-[#1A1A1A]/70">
                      {l.form_variant ?? '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Events log — filter + sort + aggregation */}
        <section className="mt-10 mb-16">
          <h2 className="text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            Events log
          </h2>

          {/* Filter bar (GET form; preserves range + sort via hidden fields) */}
          <form
            action="/dashboard"
            method="GET"
            className="mt-4 flex flex-wrap items-end gap-3 rounded-2xl bg-white border border-[#E9D8C3] p-4"
          >
            {params.range && (
              <input type="hidden" name="range" value={params.range} />
            )}
            <input type="hidden" name="sort" value={sortKey} />
            <input
              type="hidden"
              name="dir"
              value={currentParams.dir ?? 'desc'}
            />

            <label className="flex flex-col gap-1 text-xs text-[#1A1A1A]/65">
              Event type
              <select
                name="event"
                defaultValue={filterEvent}
                className="px-3 py-2 rounded-lg border border-[#E9D8C3] bg-white text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1F2A6D]/40"
              >
                <option value="">All events</option>
                {eventBreakdown.map((e) => (
                  <option key={e.name} value={e.name}>
                    {e.name} ({e.count})
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1 text-xs text-[#1A1A1A]/65">
              Page
              <select
                name="page"
                defaultValue={filterPage}
                className="px-3 py-2 rounded-lg border border-[#E9D8C3] bg-white text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1F2A6D]/40"
              >
                <option value="">All pages</option>
                {pageRows.map((p) => (
                  <option key={p.page} value={p.page}>
                    {p.page}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#1F2A6D] text-white text-sm font-semibold hover:bg-[#2a3580]"
            >
              Apply
            </button>
            {(filterEvent || filterPage) && (
              <Link
                href={buildHref(
                  { range: params.range, sort: sortKey, dir: currentParams.dir },
                  { event: '', page: '' },
                )}
                className="px-3 py-2 text-sm text-[#1A1A1A]/60 hover:text-[#1F2A6D] underline"
              >
                Clear filters
              </Link>
            )}
          </form>

          {/* Filtered aggregation summary */}
          <p className="mt-3 text-sm text-[#1A1A1A]/70">
            <strong className="text-[#1F2A6D] tabular-nums">{filteredCount}</strong>{' '}
            events
            {filterEvent ? ` · type “${filterEvent}”` : ''}
            {filterPage ? ` · page ${filterPage}` : ''} ·{' '}
            <strong className="text-[#1F2A6D] tabular-nums">
              {filteredSessions}
            </strong>{' '}
            unique sessions · showing newest {Math.min(filteredCount, 200)} below.
          </p>

          <div className="mt-4 rounded-2xl bg-white border border-[#E9D8C3] overflow-x-auto">
            <table className="w-full text-sm min-w-[800px]">
              <thead className="bg-[#FFF6E8] text-[#1A1A1A]/65">
                <tr>
                  <SortHeader label="When (UTC)" col="time" current={currentParams} />
                  <SortHeader label="Event" col="event" current={currentParams} />
                  <SortHeader label="Page" col="page" current={currentParams} />
                  <th className="text-left px-4 py-3 font-semibold">Location</th>
                  <th className="text-left px-4 py-3 font-semibold">Session</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9D8C3]">
                {events.length === 0 && (
                  <tr>
                    <td className="px-4 py-6 text-[#1A1A1A]/55 text-center" colSpan={5}>
                      No events match this filter in the selected range.
                    </td>
                  </tr>
                )}
                {events.map((e) => (
                  <tr key={e.id}>
                    <td className="px-4 py-3 text-[#1A1A1A]/70 font-mono text-xs whitespace-nowrap">
                      {e.created_at}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-[#1F2A6D]">
                      {e.name}
                    </td>
                    <td className="px-4 py-3 text-[#1A1A1A]/70">
                      {e.page_path ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-[#1A1A1A]/70">
                      {e.location ?? '—'}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-[#1A1A1A]/55">
                      {e.session_id ? e.session_id.slice(0, 8) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: number | string;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-[#E9D8C3] p-5">
      <p className="text-xs uppercase tracking-wider text-[#1A1A1A]/55">{label}</p>
      <p className="mt-2 text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] tabular-nums">
        {value}
      </p>
      {sub && <p className="mt-1 text-xs text-[#1A1A1A]/55">{sub}</p>}
    </div>
  );
}

function RangePicker({
  active,
  current,
}: {
  active: string;
  current: CurrentParams;
}) {
  const ranges: { key: string; label: string }[] = [
    { key: '1h', label: '1 hour' },
    { key: '24h', label: '24 hours' },
    { key: '7d', label: '7 days' },
    { key: '30d', label: '30 days' },
  ];
  return (
    <div className="flex items-center gap-1 text-xs">
      {ranges.map((r) => {
        const isActive = active === r.key || (r.key === '7d' && active === '');
        return (
          <Link
            key={r.key}
            href={buildHref(current, { range: r.key })}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              isActive
                ? 'bg-[#1F2A6D] text-white'
                : 'text-[#1F2A6D] hover:bg-[#EEF1FF]'
            }`}
          >
            {r.label}
          </Link>
        );
      })}
    </div>
  );
}

function SortHeader({
  label,
  col,
  current,
  align = 'left',
}: {
  label: string;
  col: string;
  current: CurrentParams;
  align?: 'left' | 'right';
}) {
  const isActive = (current.sort ?? 'time') === col;
  const nextDir = isActive && current.dir === 'asc' ? 'desc' : 'asc';
  const arrow = isActive ? (current.dir === 'asc' ? '▲' : '▼') : '';
  return (
    <th
      className={`px-4 py-3 font-semibold ${align === 'right' ? 'text-right' : 'text-left'}`}
    >
      <Link
        href={buildHref(current, { sort: col, dir: nextDir })}
        className={`inline-flex items-center gap-1 hover:text-[#1F2A6D] ${
          isActive ? 'text-[#1F2A6D]' : ''
        }`}
      >
        {label}
        <span className="text-[10px]">{arrow}</span>
      </Link>
    </th>
  );
}
