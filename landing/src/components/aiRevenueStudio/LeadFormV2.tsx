'use client';

import { useState, type FormEvent } from 'react';
import {
  buildWhatsAppLink,
  fireFieldFocus,
  fireLeadPixel,
  validateIndianMobile,
} from '@/content/aiRevenueStudio';
import { ThankYouModal } from './LeadForm';

export default function LeadFormV2() {
  const [whatsapp, setWhatsapp] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [touched, setTouched] = useState(false);

  const waLink = buildWhatsAppLink(
    'Hi, I dropped my number for the ₹99 website sample',
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!validateIndianMobile(whatsapp)) {
      setError('Enter a valid 10-digit WhatsApp number.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          whatsapp,
          source: 'ai-revenue-studio-v2',
          formVariant: 'main',
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? 'Could not submit. Please WhatsApp us instead.');
        setSubmitting(false);
        return;
      }
      fireLeadPixel('v2_phone_only');
      setDone(true);
    } catch (err) {
      console.error(err);
      setError('Could not submit. Please WhatsApp us instead.');
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-1 items-stretch rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#4F46E5]/40 focus-within:border-[#4F46E5]">
            <span className="flex items-center gap-1 px-4 bg-slate-50 text-[#0F172A] font-medium border-r border-slate-200 select-none">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              inputMode="numeric"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              onFocus={() => {
                if (!touched) {
                  setTouched(true);
                  fireFieldFocus('v2_phone_only');
                }
              }}
              placeholder="WhatsApp number"
              autoComplete="tel"
              className="flex-1 px-4 py-4 bg-white text-lg text-[#0F172A] placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] disabled:opacity-60 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
          >
            {submitting ? 'Sending…' : 'Send me a sample →'}
          </button>
        </div>

        {error && (
          <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <p className="text-sm text-slate-500 text-center">
          No payment. We&apos;ll WhatsApp you back.
        </p>
      </form>

      {done && (
        <ThankYouModal
          title="Sample coming your way ↓"
          body="We'll WhatsApp you in the next 2 hours with a preview of your site. Nothing to do until then."
          ctaLabel="Open WhatsApp →"
          waLink={waLink}
        />
      )}
    </>
  );
}
