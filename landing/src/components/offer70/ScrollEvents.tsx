'use client';

import { useEffect } from 'react';
import { trackEvent } from './tracking';

export default function ScrollEvents() {
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
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
