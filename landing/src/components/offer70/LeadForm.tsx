'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { BUSINESS_TYPES } from '@/content/offer70';
import { trackEvent } from './tracking';

interface LeadFormProps {
  variant?: 'main' | 'exit';
  source?: string;
  onSuccess?: (name: string) => void;
  submitLabel?: string;
}

interface FormState {
  name: string;
  whatsapp: string;
  businessType: string;
}

const initialState: FormState = {
  name: '',
  whatsapp: '',
  businessType: '',
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
  submitLabel,
}: LeadFormProps) {
  const router = useRouter();
  const [state, setState] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  function fireFieldFocus() {
    if (!touched) {
      setTouched(true);
      trackEvent('form_field_focus', { variant });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!state.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!validatePhone(state.whatsapp)) {
      setError('Enter a valid 10-digit Indian WhatsApp number.');
      return;
    }
    if (!state.businessType) {
      setError('Pick a business type.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: state.name,
          whatsapp: state.whatsapp,
          businessType: state.businessType,
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
      const firstName = state.name.trim().split(/\s+/)[0] ?? '';
      const last4 = state.whatsapp.replace(/\D/g, '').slice(-4);
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

  const defaultSubmit = submitLabel ?? '📥 Send Me the PDF on WhatsApp';

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <FieldText
        label="Your name"
        placeholder="Rohan Sharma"
        value={state.name}
        onChange={(v) => setState({ ...state, name: v })}
        autoComplete="name"
        onFocus={fireFieldFocus}
      />
      <FieldText
        label="WhatsApp number"
        placeholder="98XXXXXXXX"
        value={state.whatsapp}
        onChange={(v) => setState({ ...state, whatsapp: v })}
        type="tel"
        inputMode="numeric"
        autoComplete="tel"
        onFocus={fireFieldFocus}
      />
      <FieldSelect
        label="What kind of business is this for?"
        value={state.businessType}
        onChange={(v) => setState({ ...state, businessType: v })}
        options={BUSINESS_TYPES}
        placeholder="Select…"
        onFocus={fireFieldFocus}
      />

      {error && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#FF8A00] hover:bg-[#F57C00] disabled:opacity-60 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
      >
        {submitting ? 'Sending…' : defaultSubmit}
      </button>

      <p className="text-sm text-[#1A1A1A]/75 text-center">
        🔒 We send the PDF instantly. We WhatsApp you once. If you ignore us,
        we leave you alone.
      </p>
    </form>
  );
}

interface FieldBaseProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  onFocus?: () => void;
}

function FieldText({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  inputMode,
  autoComplete,
  onFocus,
}: FieldBaseProps & {
  type?: string;
  inputMode?: 'text' | 'tel' | 'numeric' | 'email';
  autoComplete?: string;
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
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
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
  onFocus,
}: FieldBaseProps & { options: string[] }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#1A1A1A]/85 mb-1">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
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
