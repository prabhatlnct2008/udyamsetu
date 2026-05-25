// Shared tracking helper used by all landing pages (offer70 + AI Revenue
// Studio). Three best-effort sinks; missing globals or network failures must
// never break the page:
//   1. GA4 via gtag (global on every route via app/layout.tsx)
//   2. Meta Pixel when NEXT_PUBLIC_META_PIXEL_ID is set
//   3. POST to /api/events for the internal click-analytics dashboard

type GtagFn = (
  command: 'event' | 'config' | 'js',
  ...args: unknown[]
) => void;

type FbqFn = (command: string, ...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    fbq?: FbqFn;
  }
}

export type OfferEventName =
  | 'view_landing_page'
  | 'scroll_25_pct'
  | 'scroll_50_percent'
  | 'scroll_60_pct'
  | 'dwell_30s'
  | 'dwell_60s'
  | 'cta_click_primary'
  | 'cta_click_whatsapp'
  | 'form_field_focus'
  | 'form_submitted'
  | 'whatsapp_click'
  | 'exit_modal_shown'
  | 'exit_modal_submitted'
  | 'pdf_downloaded';

const SESSION_KEY = 'us_session_id';

function getSessionId(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    let id = window.localStorage.getItem(SESSION_KEY);
    if (!id) {
      id =
        typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      window.localStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}

function postToInternalEvents(payload: object): void {
  if (typeof window === 'undefined') return;
  const body = JSON.stringify(payload);
  try {
    if ('sendBeacon' in navigator) {
      const blob = new Blob([body], { type: 'application/json' });
      navigator.sendBeacon('/api/events', blob);
      return;
    }
  } catch {
    // fall through to fetch
  }
  try {
    void fetch('/api/events', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    // best-effort
  }
}

export function trackEvent(
  name: OfferEventName,
  params: Record<string, string | number> = {},
): void {
  if (typeof window === 'undefined') return;

  // GA4
  try {
    window.gtag?.('event', name, params);
  } catch {
    // ignore
  }

  // Meta Pixel — map conversion events to standard names
  try {
    if (name === 'form_submitted') {
      window.fbq?.('track', 'Lead', params);
    } else if (name === 'pdf_downloaded') {
      window.fbq?.('track', 'CompleteRegistration', params);
    } else {
      window.fbq?.('trackCustom', name, params);
    }
  } catch {
    // ignore
  }

  // Internal analytics dashboard
  const location =
    typeof params.location === 'string' || typeof params.location === 'number'
      ? String(params.location)
      : null;
  postToInternalEvents({
    name,
    sessionId: getSessionId(),
    pagePath: window.location?.pathname ?? null,
    location,
    params,
  });
}

// Fires dwell_30s / dwell_60s based on time the page is actually VISIBLE
// (a tab opened then backgrounded does not accumulate time). Returns a
// cleanup function to call on unmount. Pure JS so it can be used from any
// client component's useEffect.
export function startDwellTracking(): () => void {
  if (typeof window === 'undefined') return () => {};
  let visibleMs = 0;
  let fired30 = false;
  let fired60 = false;

  const interval = setInterval(() => {
    if (document.visibilityState !== 'visible') return;
    visibleMs += 1000;
    if (!fired30 && visibleMs >= 30000) {
      fired30 = true;
      trackEvent('dwell_30s');
    }
    if (!fired60 && visibleMs >= 60000) {
      fired60 = true;
      trackEvent('dwell_60s');
      clearInterval(interval);
    }
  }, 1000);

  return () => clearInterval(interval);
}
