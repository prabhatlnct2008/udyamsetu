'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { BUSINESS_TYPES, SOUTH_DELHI_LOCALITIES } from '@/content/offer70';
import { trackEvent } from './tracking';

interface LeadFormProps {
  variant?: 'main' | 'exit';
  source?: string;
  onSuccess?: (name: string) => void;
}

interface Step1State {
  name: string;
  whatsapp: string;
  businessType: string;
}

interface Step2State {
  businessName: string;
  locality: string;
  website: string;
  problem: string;
  consent: boolean;
}

const initialStep1: Step1State = { name: '', whatsapp: '', businessType: '' };
const initialStep2: Step2State = {
  businessName: '',
  locality: '',
  website: '',
  problem: '',
  consent: false,
};

function validatePhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  const ten = digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits;
  return ten.length === 10 && /^[6-9]/.test(ten);
}

export default function LeadForm({
  variant = 'main',
  source = '70-discount-offering',
  onSuccess,
}: LeadFormProps) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [step1, setStep1] = useState<Step1State>(initialStep1);
  const [step2, setStep2] = useState<Step2State>(initialStep2);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isExit = variant === 'exit';

  function handleStep1Submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!step1.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!validatePhone(step1.whatsapp)) {
      setError('Enter a valid 10-digit Indian WhatsApp number.');
      return;
    }
    if (!step1.businessType) {
      setError('Please pick a business type.');
      return;
    }
    trackEvent('form_step_1_complete', { variant });
    if (isExit) {
      // Exit modal: only step 1 fields + consent. Submit immediately if consent set.
      if (!step2.consent) {
        setStep(2);
        return;
      }
      void submit();
      return;
    }
    setStep(2);
  }

  async function handleStep2Submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!isExit) {
      if (!step2.businessName.trim()) {
        setError('Business name is required.');
        return;
      }
      if (!step2.locality) {
        setError('Pick your South Delhi locality.');
        return;
      }
    }
    if (!step2.consent) {
      setError('Please tick the consent box to continue.');
      return;
    }
    await submit();
  }

  async function submit() {
    setSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: step1.name,
          whatsapp: step1.whatsapp,
          businessType: step1.businessType,
          businessName: step2.businessName || null,
          locality: step2.locality || null,
          website: step2.website || null,
          problem: step2.problem || null,
          consent: step2.consent,
          source,
          formVariant: variant,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? 'Could not submit. Please try WhatsApp.');
        setSubmitting(false);
        return;
      }
      const firstName = step1.name.trim().split(/\s+/)[0] ?? '';
      const last4 = step1.whatsapp.replace(/\D/g, '').slice(-4);
      onSuccess?.(firstName);
      router.push(
        `/70-discount-offering/thank-you?name=${encodeURIComponent(firstName)}&last4=${encodeURIComponent(last4)}&v=${variant}`,
      );
    } catch (err) {
      console.error(err);
      setError('Could not submit. Please try WhatsApp.');
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={step === 1 ? handleStep1Submit : handleStep2Submit}
      className="space-y-4"
      noValidate
    >
      {step === 1 && (
        <>
          <FieldText
            label="Your name"
            placeholder="Rohan Sharma"
            value={step1.name}
            onChange={(v) => setStep1({ ...step1, name: v })}
            autoComplete="name"
            autoFocus
          />
          <FieldText
            label="WhatsApp number"
            placeholder="98XXXXXXXX"
            value={step1.whatsapp}
            onChange={(v) => setStep1({ ...step1, whatsapp: v })}
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
          />
          <FieldSelect
            label="Type of business"
            value={step1.businessType}
            onChange={(v) => setStep1({ ...step1, businessType: v })}
            options={BUSINESS_TYPES}
            placeholder="Select..."
          />
        </>
      )}

      {step === 2 && (
        <>
          {!isExit && (
            <>
              <FieldText
                label="Business name"
                placeholder="Sharma Dental Clinic"
                value={step2.businessName}
                onChange={(v) => setStep2({ ...step2, businessName: v })}
                autoComplete="organization"
                autoFocus
              />
              <FieldSelect
                label="Your South Delhi locality"
                value={step2.locality}
                onChange={(v) => setStep2({ ...step2, locality: v })}
                options={SOUTH_DELHI_LOCALITIES}
                placeholder="Pick locality..."
              />
              <FieldText
                label="Current website or Instagram (optional)"
                placeholder="yourbusiness.com / @yourhandle"
                value={step2.website}
                onChange={(v) => setStep2({ ...step2, website: v })}
              />
              <FieldTextarea
                label="Biggest marketing problem right now (optional)"
                placeholder="Not enough leads, do not know what to post…"
                value={step2.problem}
                onChange={(v) => setStep2({ ...step2, problem: v })}
              />
            </>
          )}
          <label className="flex items-start gap-3 text-sm text-[#1A1A1A]/85">
            <input
              type="checkbox"
              checked={step2.consent}
              onChange={(e) =>
                setStep2({ ...step2, consent: e.target.checked })
              }
              className="mt-1 h-4 w-4 rounded border-[#E9D8C3] text-[#1F2A6D] focus:ring-[#1F2A6D]"
            />
            <span>
              I agree to be contacted by UdyamSetu AI about this offer on
              WhatsApp.
            </span>
          </label>
        </>
      )}

      {error && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#FF8A00] hover:bg-[#F57C00] disabled:opacity-60 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
      >
        {submitting
          ? 'Sending…'
          : step === 1
          ? 'Continue →'
          : isExit
          ? '📥 Send Me the Free Proposal'
          : '📥 Send Me the Complete Proposal'}
      </button>

      {step === 2 && !isExit && (
        <button
          type="button"
          onClick={() => setStep(1)}
          className="w-full text-sm text-[#1A1A1A]/60 hover:text-[#1F2A6D] transition-colors"
        >
          ← Edit details
        </button>
      )}

      <p className="text-xs text-[#1A1A1A]/60 text-center">
        🔒 We only use your details to send the proposal and follow up once on
        WhatsApp. We do not sell or spam.
      </p>
    </form>
  );
}

interface FieldBaseProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

function FieldText({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  inputMode,
  autoComplete,
  autoFocus,
}: FieldBaseProps & {
  type?: string;
  inputMode?: 'text' | 'tel' | 'numeric' | 'email';
  autoComplete?: string;
  autoFocus?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#1A1A1A]/85 mb-1">
        {label}
      </span>
      <input
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-[#E9D8C3] bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1F2A6D]/40 focus:border-[#1F2A6D]"
      />
    </label>
  );
}

function FieldSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
}: FieldBaseProps & { options: string[] }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#1A1A1A]/85 mb-1">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-[#E9D8C3] bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1F2A6D]/40 focus:border-[#1F2A6D]"
      >
        <option value="" disabled>
          {placeholder ?? 'Select…'}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function FieldTextarea({
  label,
  value,
  onChange,
  placeholder,
}: FieldBaseProps) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#1A1A1A]/85 mb-1">
        {label}
      </span>
      <textarea
        rows={3}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-[#E9D8C3] bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1F2A6D]/40 focus:border-[#1F2A6D]"
      />
    </label>
  );
}
