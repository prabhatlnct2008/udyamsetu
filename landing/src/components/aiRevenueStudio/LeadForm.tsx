'use client';

import { useState, type FormEvent } from 'react';

const BUSINESS_TYPES = [
  'Clinic / Doctor',
  'Restaurant / Cafe',
  'Retail Shop',
  'Service Business',
  'Real Estate',
  'Manufacturer',
  'Other',
];

const HAS_SITE_OPTIONS = [
  'No, fresh start',
  "Yes, but it's outdated",
  'Just a Facebook / Insta page',
];

const WHATSAPP_NUMBER = '918882567801';

function validatePhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  const ten =
    digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits;
  return ten.length === 10 && /^[6-9]/.test(ten);
}

function buildWhatsAppLink(name: string, businessType: string, hasSite: string) {
  const text = `Hi! I want the ₹99 website. Name: ${name || '—'}. Business: ${
    businessType || '—'
  }. Current site: ${hasSite || '—'}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function trackSubmit() {
  if (typeof window === 'undefined') return;
  try {
    (
      window as unknown as {
        gtag?: (c: string, n: string, p?: Record<string, unknown>) => void;
      }
    ).gtag?.('event', 'generate_lead', { source: 'ai-revenue-studio' });
  } catch {
    // ignore
  }
}

export default function LeadForm() {
  const [businessType, setBusinessType] = useState('');
  const [hasSite, setHasSite] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const firstName = name.trim().split(/\s+/)[0] ?? '';
  const waLink = buildWhatsAppLink(name.trim(), businessType, hasSite);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!businessType) {
      setError('Tap the kind of business you run.');
      return;
    }
    if (!hasSite) {
      setError('Tap whether you already have a website.');
      return;
    }
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!validatePhone(whatsapp)) {
      setError('Enter a valid 10-digit WhatsApp number.');
      return;
    }
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
          source: 'ai-revenue-studio',
          formVariant: 'main',
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? 'Could not submit. Please WhatsApp us instead.');
        setSubmitting(false);
        return;
      }
      trackSubmit();
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
        {/* Q1 */}
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
                onClick={() => setBusinessType(b)}
              />
            ))}
          </div>
        </fieldset>

        {/* Q2 */}
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
                onClick={() => setHasSite(h)}
              />
            ))}
          </div>
        </fieldset>

        {/* Contact */}
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
              Thank you, {firstName || 'there'}!
            </h3>
            <p className="mt-3 text-slate-600">
              We&apos;ve got your details. Our team will WhatsApp you within the
              next few minutes to confirm and start your website. Your site
              goes live within 24 hours.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
            >
              Open WhatsApp now →
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
        selected
          ? 'bg-[#0F172A] text-white border-[#0F172A]'
          : 'bg-white text-[#0F172A] border-slate-200 hover:border-[#4F46E5] hover:text-[#4F46E5]'
      }`}
    >
      {label}
    </button>
  );
}
