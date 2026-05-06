'use client';

import { useEffect, useState, useRef } from 'react';
import LeadForm from './LeadForm';
import { trackEvent } from './tracking';

const COOKIE_NAME = 'udyamsetu_exit_shown';
const COOKIE_TTL_HOURS = 24;
const MOBILE_SCROLL_THRESHOLD = 0.5;
const MOBILE_RAPID_UP_DELTA = -120; // px per check window

function hasExitCookie(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie.split('; ').some((c) => c.startsWith(`${COOKIE_NAME}=`));
}

function setExitCookie(): void {
  if (typeof document === 'undefined') return;
  const expiry = new Date(Date.now() + COOKIE_TTL_HOURS * 60 * 60 * 1000);
  document.cookie = `${COOKIE_NAME}=1; expires=${expiry.toUTCString()}; path=/; SameSite=Lax`;
}

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const triggeredRef = useRef(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    if (hasExitCookie()) return;

    function trigger() {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      setExitCookie();
      setOpen(true);
      trackEvent('exit_modal_shown');
    }

    function onMouseLeave(e: MouseEvent) {
      if (e.clientY < 30) trigger();
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight,
        );
        const depth = y / max;
        const delta = y - lastScrollYRef.current;
        lastScrollYRef.current = y;
        if (depth > MOBILE_SCROLL_THRESHOLD && delta < MOBILE_RAPID_UP_DELTA) {
          trigger();
        }
        ticking = false;
      });
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full text-[#1A1A1A]/60 hover:text-[#1F2A6D] hover:bg-[#EEF1FF] transition-colors flex items-center justify-center"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-xs font-semibold text-[#FF8A00] uppercase tracking-wider mb-2">
          Before you go
        </div>
        <h2
          id="exit-modal-title"
          className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]"
        >
          Leaving without seeing the full ₹20,000 growth setup?
        </h2>
        <p className="mt-3 text-[#1A1A1A]/80">
          The Complete Proposal is a free PDF. It shows you exactly what is
          included in the ₹6,000 launch offer — every deliverable, every
          timeline, sample work, and what we do not do.
        </p>
        <p className="mt-2 text-sm text-[#1A1A1A]/70">
          Read it on your phone in 5 minutes. No call. No commitment.
        </p>

        <div className="mt-6">
          <LeadForm
            variant="exit"
            source="70-discount-offering-exit"
            onSuccess={() => trackEvent('exit_modal_submitted')}
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-4 w-full text-sm text-[#1A1A1A]/55 hover:text-[#1A1A1A]/80 transition-colors"
        >
          No thanks, I&apos;ll keep posting reels and waiting
        </button>
      </div>
    </div>
  );
}
