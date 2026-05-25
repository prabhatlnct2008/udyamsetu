import type { Metadata } from 'next';
import MetaPixel from '@/components/offer70/MetaPixel';
import AnalyticsBeacon from '@/components/aiRevenueStudio/AnalyticsBeacon';
import IncludedSection from '@/components/aiRevenueStudio/IncludedSection';
import LeadFormV2 from '@/components/aiRevenueStudio/LeadFormV2';
import Nav from '@/components/aiRevenueStudio/Nav';
import SiteFooter from '@/components/aiRevenueStudio/SiteFooter';
import ValueStrip from '@/components/aiRevenueStudio/ValueStrip';
import { WHATSAPP_DISPLAY, buildWhatsAppLink } from '@/content/aiRevenueStudio';

export const metadata: Metadata = {
  title: 'AI Revenue Studio — Get your website on WhatsApp. ₹99.',
  description:
    'Drop your WhatsApp number. We send a sample design in 2 hours. Full site live in 24. ₹99, pay only when you say yes.',
  alternates: { canonical: 'https://udyamsetuai.in/ai_revenue_studio/v2' },
  openGraph: {
    title: 'Get your website on WhatsApp. ₹99.',
    description:
      'Drop your WhatsApp number. Sample in 2 hours. Live in 24. WhatsApp-only.',
    url: 'https://udyamsetuai.in/ai_revenue_studio/v2',
    siteName: 'AI Revenue Studio',
    type: 'website',
  },
};

// Value strip reordered: lead with the WhatsApp-native promise.
const VALUE_STATS = [
  { stat: '∞', caption: 'WhatsApp + call button. Leads come to your phone directly.' },
  { stat: '24h', caption: 'From brief to live website. No "agency time".' },
  { stat: '₹99', caption: 'Pay only when you see the site. No upfront commitment.' },
  { stat: '5+', caption: 'Pages: home, about, services, contact, plus one custom.' },
];

const INCLUDED = [
  {
    n: '01',
    title: 'See it before you pay',
    body: 'We send a working sample in 2 hours. ₹99 only when you say yes.',
  },
  {
    n: '02',
    title: 'Lives on WhatsApp',
    body: 'Updates, leads, edits — all in your phone. No dashboards.',
  },
];

const WHATSAPP_DIRECT = buildWhatsAppLink(
  'Hi, I want the ₹99 website. Can you send me a sample design?',
);

export default function AiRevenueStudioV2Page() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <MetaPixel />
      <AnalyticsBeacon />
      <Nav ctaLabel="Send me a sample →" />

      {/* HERO IS THE FORM — headline + one-field form + WhatsApp escape hatch,
          all above the fold on a 375×667 viewport. Everything else is below. */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(79,70,229,0.10),transparent_70%)]"
        />
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-[#EEF1FF] text-[#4F46E5] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
              24-hour delivery
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-[family-name:var(--font-poppins)]">
              Get your website on WhatsApp.{' '}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                ₹99.
              </span>
            </h1>

            <p className="mt-3 text-base md:text-lg text-slate-600">
              Drop your number. We send a sample design in 2 hours.
            </p>
          </div>

          {/* The form, right here */}
          <div id="lead-form" className="mt-6 scroll-mt-20">
            <LeadFormV2 />
          </div>

          {/* Escape hatch for users who won't fill a form */}
          <div className="mt-6 flex items-center gap-3 text-slate-400 text-sm">
            <span className="flex-1 h-px bg-slate-200" />
            or
            <span className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="mt-3 text-center">
            <a
              href={WHATSAPP_DIRECT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-[#25D366] text-[#1ba34c] hover:bg-[#25D366]/10 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              WhatsApp directly →
            </a>
          </div>
        </div>
      </section>

      <ValueStrip stats={VALUE_STATS} />

      <IncludedSection
        title="A real website. Not a template. Built around your business."
        cards={INCLUDED}
      />

      {/* No contact section in v2 — just a tiny call line */}
      <section className="py-12 text-center">
        <p className="text-sm text-slate-500">
          Prefer to call? {WHATSAPP_DISPLAY}
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
