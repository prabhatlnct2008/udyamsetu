'use client';

import { useState, type FormEvent } from 'react';
import {
  BUSINESS_TYPES,
  HAS_SITE_OPTIONS,
  buildWhatsAppLink,
  fireFieldFocus,
  fireLeadPixel,
  validateIndianMobile,
} from '@/content/aiRevenueStudio';
import Chip from './Chip';

export default function LeadForm() {
  const [businessType, setBusinessType] = useState('');
  const [hasSite, setHasSite] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [touched, setTouched] = useState(false);

  function onFirstInteract() {
    if (touched) return;
    setTouched(true);
    fireFieldFocus('v1_two_question');
  }

  const firstName = name.trim().split(/\s+/)[0] ?? '';
  const waLink = buildWhatsAppLink(
    `Hi! I want the ₹99 website. Name: ${name.trim() || '—'}. Business: ${
      businessType || '—'
    }. Current site: ${hasSite || '—'}`,
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!businessType) return setError('Tap the kind of business you run.');
    if (!hasSite) return setError('Tap whether you already have a website.');
    if (!name.trim()) return setError('Please enter your name.');
    if (!validateIndianMobile(whatsapp))
      return setError('Enter a valid 10-digit WhatsApp number.');

    setSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          whatsapp,
          businessType,
          website: hasSite,
          source: 'ai-revenue-studio-v1',
          formVariant: 'main',
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? 'Could not submit. Please WhatsApp us instead.');
        setSubmitting(false);
        return;
      }
      fireLeadPixel('v1_two_question');
      setDone(true);
    } catch (err) {
      console.error(err);
      setError('Could not submit. Please WhatsApp us instead.');
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-7" noValidate>
        <fieldset>
          <legend className="text-sm font-semibold text-[#0F172A]">
            1 · What kind of business do you run?
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {BUSINESS_TYPES.map((b) => (
              <Chip
                key={b}
                label={b}
                selected={businessType === b}
                onClick={() => {
                  onFirstInteract();
                  setBusinessType(b);
                }}
              />
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-[#0F172A]">
            2 · Do you already have a website?
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {HAS_SITE_OPTIONS.map((h) => (
              <Chip
                key={h}
                label={h}
                selected={hasSite === h}
                onClick={() => {
                  onFirstInteract();
                  setHasSite(h);
                }}
              />
            ))}
          </div>
        </fieldset>

        <div className="grid sm:grid-cols-2 gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/40 focus:border-[#4F46E5]"
          />
          <input
            type="tel"
            inputMode="numeric"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="WhatsApp number"
            autoComplete="tel"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/40 focus:border-[#4F46E5]"
          />
        </div>

        {error && (
          <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] disabled:opacity-60 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            {submitting ? 'Sending…' : 'Get my website for ₹99 →'}
          </button>
          <p className="mt-3 text-center text-sm text-slate-500">
            No payment now. Pay only when site is live.
          </p>
        </div>
      </form>

      {done && (
        <ThankYouModal
          title={`Thank you, ${firstName || 'there'}!`}
          body="We've got your details. Our team will WhatsApp you within the next few minutes to confirm and start your website. Your site goes live within 24 hours."
          ctaLabel="Open WhatsApp now →"
          waLink={waLink}
        />
      )}
    </>
  );
}

export function ThankYouModal({
  title,
  body,
  ctaLabel,
  waLink,
}: {
  title: string;
  body: string;
  ctaLabel: string;
  waLink: string;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="thankyou-title"
    >
      <div className="bg-white rounded-2xl max-w-md w-full p-7 md:p-8 shadow-2xl text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-2xl">
          ✓
        </div>
        <h3
          id="thankyou-title"
          className="mt-5 text-2xl font-bold text-[#0F172A] font-[family-name:var(--font-poppins)]"
        >
          {title}
        </h3>
        <p className="mt-3 text-slate-600">{body}</p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
