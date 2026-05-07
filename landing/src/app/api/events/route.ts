import { NextResponse } from 'next/server';
import { insertEvent, TursoNotConfiguredError } from '@/lib/turso';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface EventPayload {
  name?: unknown;
  sessionId?: unknown;
  pagePath?: unknown;
  location?: unknown;
  params?: unknown;
}

const ALLOWED_NAMES = new Set([
  'view_landing_page',
  'scroll_25_pct',
  'scroll_50_percent',
  'scroll_60_pct',
  'cta_click_primary',
  'cta_click_whatsapp',
  'form_field_focus',
  'form_step_1_complete',
  'form_submitted',
  'whatsapp_click',
  'exit_modal_shown',
  'exit_modal_submitted',
  'pdf_downloaded',
]);

function asStr(v: unknown, max = 500): string | null {
  if (typeof v !== 'string') return null;
  const t = v.trim();
  return t.length === 0 ? null : t.slice(0, max);
}

export async function POST(request: Request) {
  let payload: EventPayload;
  try {
    payload = (await request.json()) as EventPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name = asStr(payload.name, 80);
  if (!name || !ALLOWED_NAMES.has(name)) {
    return NextResponse.json(
      { error: 'Invalid or missing event name' },
      { status: 400 },
    );
  }

  const sessionId = asStr(payload.sessionId, 80);
  const pagePath = asStr(payload.pagePath, 200);
  const location = asStr(payload.location, 80);
  const params =
    payload.params && typeof payload.params === 'object'
      ? (payload.params as Record<string, unknown>)
      : null;

  const userAgent = asStr(request.headers.get('user-agent'), 400);
  const referrer = asStr(request.headers.get('referer'), 500);

  try {
    await insertEvent({
      name,
      sessionId,
      pagePath,
      location,
      params,
      userAgent,
      referrer,
    });
  } catch (err) {
    if (err instanceof TursoNotConfiguredError) {
      // Silent no-op when Turso is not configured; do not break the page.
      return NextResponse.json({ ok: true, stored: false }, { status: 200 });
    }
    console.error('[events] insert failed', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
