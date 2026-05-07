'use client';

import { useEffect, useState } from 'react';
import { trackEvent } from './tracking';

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur border-t border-[#E9D8C3] shadow-[0_-4px_12px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="#lead-form"
        onClick={() => trackEvent('cta_click_primary', { location: 'sticky-mobile' })}
        className="block w-full text-center bg-[#FF8A00] hover:bg-[#F57C00] text-white font-semibold py-3.5 rounded-xl"
      >
        📥 Send Me the PDF on WhatsApp
      </a>
    </div>
  );
}
