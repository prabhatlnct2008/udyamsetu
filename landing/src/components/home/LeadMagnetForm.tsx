'use client';

import { useState, type FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

const PACK_OPTIONS = [
  { value: 'Marketing', label: 'Marketing pack' },
  { value: 'Sales', label: 'Sales pack' },
  { value: 'Appointment', label: 'Appointment pack' },
  { value: 'All three', label: 'All three' },
];

function validateIndianMobile(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  const ten =
    digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits;
  return ten.length === 10 && /^[6-9]/.test(ten);
}

export default function LeadMagnetForm() {
  const [whatsapp, setWhatsapp] = useState('');
  const [pack, setPack] = useState('Marketing');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [touched, setTouched] = useState(false);

  function onFirstInteract() {
    if (touched) return;
    setTouched(true);
    trackEvent('form_field_focus', { variant: 'home_lead_magnet' });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!validateIndianMobile(whatsapp)) {
      setError('Enter a valid 10-digit Indian WhatsApp number.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          whatsapp,
          // Pack choice lands in the business_type column so it shows up in
          // the dashboard's "Business type" cell for each lead.
          businessType: pack,
          source: 'lead-magnet-n8n-pack',
          formVariant: 'main',
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? 'Could not submit. Please try again.');
        setSubmitting(false);
        return;
      }
      trackEvent('form_submitted', { variant: 'home_lead_magnet', pack });
      setDone(true);
    } catch (err) {
      console.error(err);
      setError('Could not submit. Please try again.');
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-[#EEF1FF] border border-[#1F2A6D]/20 p-6 text-center">
        <p className="text-2xl">✅</p>
        <h3 className="mt-2 text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
          On its way to your WhatsApp.
        </h3>
        <p className="mt-2 text-[#1A1A1A]/80">
          You&apos;ll get the <strong>{pack}</strong> template pack and a short
          setup walkthrough within the next few minutes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="lm-whatsapp"
          className="block text-sm font-medium text-[#1A1A1A]/85 mb-1"
        >
          Your WhatsApp number
        </label>
        <input
          id="lm-whatsapp"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="98XXXXXXXX"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          onFocus={onFirstInteract}
          className="w-full px-4 py-3 rounded-xl border border-[#E9D8C3] bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1F2A6D]/40 focus:border-[#1F2A6D]"
        />
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-[#1A1A1A]/85 mb-2">
          Which pack first?
        </legend>
        <div className="grid sm:grid-cols-2 gap-2">
          {PACK_OPTIONS.map((p) => {
            const selected = pack === p.value;
            return (
              <label
                key={p.value}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                  selected
                    ? 'border-[#1F2A6D] bg-[#EEF1FF] text-[#1F2A6D]'
                    : 'border-[#E9D8C3] bg-white hover:border-[#1F2A6D]/40'
                }`}
              >
                <input
                  type="radio"
                  name="pack"
                  value={p.value}
                  checked={selected}
                  onChange={() => {
                    onFirstInteract();
                    setPack(p.value);
                  }}
                  className="h-4 w-4 text-[#1F2A6D] focus:ring-[#1F2A6D]"
                />
                <span className="font-medium">{p.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {error && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#FF8A00] hover:bg-[#F57C00] disabled:opacity-60 text-white px-6 py-3.5 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      >
        {submitting ? 'Sending…' : 'Send me the pack →'}
      </button>

      <p className="text-xs text-[#1A1A1A]/60 text-center">
        🔒 No spam. One follow-up message with a setup walkthrough, then it&apos;s
        yours.
      </p>
    </form>
  );
}
