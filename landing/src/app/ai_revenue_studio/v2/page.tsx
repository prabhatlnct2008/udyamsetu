import type { Metadata } from 'next';
import MetaPixel from '@/components/offer70/MetaPixel';
import AnalyticsBeacon from '@/components/aiRevenueStudio/AnalyticsBeacon';
import IncludedSection from '@/components/aiRevenueStudio/IncludedSection';
import LeadFormV2 from '@/components/aiRevenueStudio/LeadFormV2';
import Nav from '@/components/aiRevenueStudio/Nav';
import SiteFooter from '@/components/aiRevenueStudio/SiteFooter';
import ValueStrip from '@/components/aiRevenueStudio/ValueStrip';
import { WHATSAPP_DISPLAY } from '@/content/aiRevenueStudio';

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

export default function AiRevenueStudioV2Page() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <MetaPixel />
      <AnalyticsBeacon />
      <Nav ctaLabel="Send me a sample →" />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(79,70,229,0.10),transparent_70%)]"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <span className="inline-flex items-center gap-2 bg-[#EEF1FF] text-[#4F46E5] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
            Launch offer · 24-hour delivery
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight font-[family-name:var(--font-poppins)]">
            Get your website on WhatsApp.{' '}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              ₹99.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Drop your WhatsApp number. We&apos;ll send you a sample design in 2
            hours. If you like it, your full site goes live in 24.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href="#lead-form"
              className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Send me a sample →
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            No forms. No calls. WhatsApp-only.
          </p>
        </div>
      </section>

      <ValueStrip stats={VALUE_STATS} />

      <IncludedSection
        title="A real website. Not a template. Built around your business."
        cards={INCLUDED}
      />

      {/* LEAD FORM — phone only */}
      <section id="lead-form" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold text-[#4F46E5] uppercase tracking-[0.2em]">
              Just one step
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
              Drop your WhatsApp. We&apos;ll handle the rest.
            </h2>
            <p className="mt-4 text-slate-600">
              We&apos;ll send a sample design in 2 hours. Pay nothing until you
              see it.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-[#F8FAFC] border border-slate-100 p-6 md:p-8">
            <LeadFormV2 />
          </div>
        </div>
      </section>

      {/* No contact section in v2 — just a tiny call line */}
      <section className="pb-16 text-center">
        <p className="text-sm text-slate-500">
          Prefer to call? {WHATSAPP_DISPLAY}
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
