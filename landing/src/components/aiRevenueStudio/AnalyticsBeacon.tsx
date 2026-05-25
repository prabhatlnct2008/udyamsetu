'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

// Page-level analytics for the AI Revenue Studio variants:
//   - view_landing_page on mount
//   - scroll_25_pct / scroll_60_pct on scroll depth
//   - cta_click_primary  (delegated: any <a href="#lead-form">)
//   - whatsapp_click      (delegated: any wa.me link)
// All events carry page_path (set inside trackEvent) so the dashboard can
// break them down per variant (v1 / v2 / v3).
export default function AnalyticsBeacon() {
  useEffect(() => {
    trackEvent('view_landing_page');

    let fired25 = false;
    let fired60 = false;
    function onScroll() {
      if (fired25 && fired60) return;
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const depth = window.scrollY / max;
      if (!fired25 && depth >= 0.25) {
        fired25 = true;
        trackEvent('scroll_25_pct');
      }
      if (!fired60 && depth >= 0.6) {
        fired60 = true;
        trackEvent('scroll_60_pct');
      }
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      if (href.includes('wa.me')) {
        trackEvent('whatsapp_click', { location: 'page' });
      } else if (href.includes('#lead-form')) {
        trackEvent('cta_click_primary', { location: 'page' });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return null;
}
