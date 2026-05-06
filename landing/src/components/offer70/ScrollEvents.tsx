'use client';

import { useEffect } from 'react';
import { trackEvent } from './tracking';

export default function ScrollEvents() {
  useEffect(() => {
    trackEvent('view_landing_page');

    let fired50 = false;
    function onScroll() {
      if (fired50) return;
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const depth = window.scrollY / max;
      if (depth >= 0.5) {
        fired50 = true;
        trackEvent('scroll_50_percent');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
