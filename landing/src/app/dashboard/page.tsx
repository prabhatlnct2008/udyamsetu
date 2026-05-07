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
  searchParams: Promise<{ range?: string }>;
}

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

  let totalLeads = 0;
  let totalLeadsAll = 0;
  let leads: LeadRow[] = [];
  let events: EventRow[] = [];
  let funnelCounts: Record<string, number> = {};
  let eventBreakdown: CountRow[] = [];
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
      client.execute({
        sql: `SELECT id, created_at, name, page_path, location, session_id, params_json
              FROM events
              WHERE created_at >= ${sinceClause}
              ORDER BY id DESC LIMIT 100`,
        args: [],
      }),
      client.execute({
        sql: `SELECT name, COUNT(*) AS count FROM events
              WHERE created_at >= ${sinceClause}
              GROUP BY name ORDER BY count DESC`,
        args: [],
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
            <RangePicker active={params.range ?? '7d'} />
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

        {/* Recent events */}
        <section className="mt-10 mb-16">
          <h2 className="text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            Recent events (last 100, in range)
          </h2>
          <div className="mt-4 rounded-2xl bg-white border border-[#E9D8C3] overflow-x-auto">
            <table className="w-full text-sm min-w-[800px]">
              <thead className="bg-[#FFF6E8] text-[#1A1A1A]/65">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">When (UTC)</th>
                  <th className="text-left px-4 py-3 font-semibold">Event</th>
                  <th className="text-left px-4 py-3 font-semibold">Page</th>
                  <th className="text-left px-4 py-3 font-semibold">Location</th>
                  <th className="text-left px-4 py-3 font-semibold">Session</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9D8C3]">
                {events.length === 0 && (
                  <tr>
                    <td className="px-4 py-6 text-[#1A1A1A]/55 text-center" colSpan={5}>
                      No events in this range yet.
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

function RangePicker({ active }: { active: string }) {
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
            href={`/dashboard?range=${r.key}`}
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
