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

// Best-effort Meta Pixel Lead event. content_name distinguishes the A/B
// variants so Ads Manager can report cost-per-lead per page.
export function fireLeadPixel(contentName: string): void {
  if (typeof window === 'undefined') return;
  try {
    (
      window as unknown as {
        fbq?: (c: string, n: string, p?: Record<string, unknown>) => void;
      }
    ).fbq?.('track', 'Lead', { content_name: contentName });
  } catch {
    // ignore
  }
  try {
    (
      window as unknown as {
        gtag?: (c: string, n: string, p?: Record<string, unknown>) => void;
      }
    ).gtag?.('event', 'generate_lead', { content_name: contentName });
  } catch {
    // ignore
  }
}
