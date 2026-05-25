'use client';

import { useState, type FormEvent } from 'react';
import {
  BUSINESS_TYPES,
  GOAL_OPTIONS,
  HAS_SITE_OPTIONS,
  TIMELINE_OPTIONS,
  buildWhatsAppLink,
  fireLeadPixel,
  validateIndianMobile,
} from '@/content/aiRevenueStudio';
import Chip from './Chip';
import { ThankYouModal } from './LeadForm';

export default function LeadFormV3() {
  const [businessType, setBusinessType] = useState('');
  const [hasSite, setHasSite] = useState('');
  const [timeline, setTimeline] = useState('');
  const [goal, setGoal] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const firstName = name.trim().split(/\s+/)[0] ?? '';
  const waLink = buildWhatsAppLink(
    `Hi! I filled the website plan form. Name: ${name.trim() || '—'}. ` +
      `Business: ${businessName.trim() || businessType || '—'}. ` +
      `Type: ${businessType || '—'}. Current site: ${hasSite || '—'}. ` +
      `Timeline: ${timeline || '—'}. Goal: ${goal || '—'}.`,
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!businessType) return setError('Tap the kind of business you run.');
    if (!hasSite) return setError('Tap whether you already have a website.');
    if (!timeline) return setError('Tap when you need it live.');
    if (!goal) return setError('Tap your main goal.');
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
          businessName: businessName.trim() || null,
          website: hasSite,
          timeline,
          goal,
          source: 'ai-revenue-studio-v3',
          formVariant: 'main',
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? 'Could not submit. Please WhatsApp us instead.');
        setSubmitting(false);
        return;
      }
      fireLeadPixel('v3_full_qualification');
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
        <Question
          label="1 · What kind of business do you run?"
          options={BUSINESS_TYPES}
          value={businessType}
          onChange={setBusinessType}
        />
        <Question
          label="2 · Do you already have a website?"
          options={HAS_SITE_OPTIONS}
          value={hasSite}
          onChange={setHasSite}
        />
        <Question
          label="3 · When do you need it live?"
          options={TIMELINE_OPTIONS}
          value={timeline}
          onChange={setTimeline}
        />
        <Question
          label="4 · What's the main goal?"
          options={GOAL_OPTIONS}
          value={goal}
          onChange={setGoal}
        />

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
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Business name (optional)"
          autoComplete="organization"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/40 focus:border-[#4F46E5]"
        />

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
            {submitting ? 'Sending…' : 'Start my website plan →'}
          </button>
          <p className="mt-3 text-center text-sm text-slate-500">
            One of our designers will WhatsApp you in 30 minutes to confirm
            scope.
          </p>
        </div>
      </form>

      {done && (
        <ThankYouModal
          title="Got it. We're reviewing your brief."
          body={`A designer will WhatsApp you in the next 30 minutes with 2-3 design directions and confirm your launch date. Talk soon, ${
            firstName || 'there'
          }.`}
          ctaLabel="Open WhatsApp →"
          waLink={waLink}
        />
      )}
    </>
  );
}

function Question({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-[#0F172A]">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <Chip
            key={o}
            label={o}
            selected={value === o}
            onClick={() => onChange(o)}
          />
        ))}
      </div>
    </fieldset>
  );
}
