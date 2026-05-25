import { trackEvent } from '@/lib/analytics';

export const WHATSAPP_NUMBER = '918882567801';
export const WHATSAPP_DISPLAY = '+91 88825 67801';
export const EMAIL = 'airevenuestudio@gmail.com';

export const BUSINESS_TYPES = [
  'Clinic / Doctor',
  'Restaurant / Cafe',
  'Retail Shop',
  'Service Business',
  'Real Estate',
  'Manufacturer',
  'Other',
];

export const HAS_SITE_OPTIONS = [
  'No, fresh start',
  "Yes, but it's outdated",
  'Just a Facebook / Insta page',
];

// v3 qualification questions
export const TIMELINE_OPTIONS = [
  'As soon as possible',
  'This week',
  'This month',
  'Just exploring',
];

export const GOAL_OPTIONS = [
  'Get more leads',
  'Look professional to clients',
  'Replace an old site',
  'Launch a new business',
];

export function buildWhatsAppLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function validateIndianMobile(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  const ten =
    digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits;
  return ten.length === 10 && /^[6-9]/.test(ten);
}

// Fires on successful form submit. content_name distinguishes the A/B
// variants so Ads Manager (Meta Pixel Lead) and the internal dashboard
// (/api/events form_submitted) can both report per-variant conversions.
export function fireLeadPixel(contentName: string): void {
  // Routes the conversion through the shared tracker: GA4 form_submitted +
  // Meta Pixel Lead (with content_name so Ads Manager breaks down per
  // variant) + internal /api/events form_submitted (page_path captured
  // automatically).
  trackEvent('form_submitted', { content_name: contentName });
}

// Fire once when the visitor first interacts with a form field/chip.
export function fireFieldFocus(contentName: string): void {
  trackEvent('form_field_focus', { content_name: contentName });
}
