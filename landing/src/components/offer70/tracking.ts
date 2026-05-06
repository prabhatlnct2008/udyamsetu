// Thin wrapper over gtag (already global on every route via app/layout.tsx) and
// Meta Pixel (loaded only when NEXT_PUBLIC_META_PIXEL_ID is set).
//
// Calling these is safe in any environment: missing globals are no-ops.

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
  | 'scroll_50_percent'
  | 'cta_click_primary'
  | 'cta_click_whatsapp'
  | 'form_step_1_complete'
  | 'form_submitted'
  | 'whatsapp_click'
  | 'exit_modal_shown'
  | 'exit_modal_submitted'
  | 'pdf_downloaded';

export function trackEvent(
  name: OfferEventName,
  params: Record<string, string | number> = {},
): void {
  if (typeof window === 'undefined') return;
  try {
    window.gtag?.('event', name, params);
  } catch {
    // ignore
  }
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
}
