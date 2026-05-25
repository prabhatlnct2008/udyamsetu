import type { Metadata } from 'next';
import MetaPixel from '@/components/offer70/MetaPixel';
import AnalyticsBeacon from '@/components/aiRevenueStudio/AnalyticsBeacon';
import ContactSection from '@/components/aiRevenueStudio/ContactSection';
import IncludedSection from '@/components/aiRevenueStudio/IncludedSection';
import LeadFormV3 from '@/components/aiRevenueStudio/LeadFormV3';
import Nav from '@/components/aiRevenueStudio/Nav';
import SiteFooter from '@/components/aiRevenueStudio/SiteFooter';
import ValueStrip from '@/components/aiRevenueStudio/ValueStrip';

export const metadata: Metadata = {
  title:
    'AI Revenue Studio — A website that earns its ₹99 back in the first week.',
  description:
    'Tell us about your business. We design a site built around your customers, your offers, and your conversion goals. Live in 24 hours.',
  alternates: { canonical: 'https://udyamsetuai.in/ai_revenue_studio/v3' },
  openGraph: {
    title: 'A website that earns its ₹99 back in the first week.',
    description:
      'We design a site built around your customers, offers, and conversion goals. Live in 24 hours.',
    url: 'https://udyamsetuai.in/ai_revenue_studio/v3',
    siteName: 'AI Revenue Studio',
    type: 'website',
  },
};

// Value strip rephrased around ROI / outcomes.
const VALUE_STATS = [
  { stat: '24h', caption: 'From brief to live website.' },
  { stat: '₹99', caption: 'Pay only when satisfied. No retainers.' },
  { stat: '5+', caption: 'Pages tailored to your specific business goal.' },
  { stat: '∞', caption: 'Every page wired to convert visitors into leads.' },
];

const INCLUDED = [
  {
    n: '01',
    title: 'AI-designed pages',
    body: 'Our AI studies your business, your competitors, and your customers — then designs pages that match. Not a drag-and-drop template.',
  },
  {
    n: '02',
    title: 'Mobile-first, fast',
    body: '85% of your visitors are on mobile. Sites load in under 2 seconds, look sharp on every screen, and rank well on Google.',
  },
  {
    n: '03',
    title: 'Leads to WhatsApp',
    body: 'Every page has a tap-to-WhatsApp and tap-to-call button. Leads land in your phone, not in some dashboard you forget to check.',
  },
  {
    n: '04',
    title: 'Built to convert, not just look pretty',
    body: "We start from your customer's question, not a template. Every page is designed to move them one step closer to choosing you.",
  },
];

export default function AiRevenueStudioV3Page() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <MetaPixel />
      <AnalyticsBeacon />
      <Nav ctaLabel="Plan my website →" />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(79,70,229,0.10),transparent_70%)]"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <span className="inline-flex items-center gap-2 bg-[#EEF1FF] text-[#4F46E5] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
            From ₹99 · live in 24 hours
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight font-[family-name:var(--font-poppins)]">
            A website that earns its{' '}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              ₹99
            </span>{' '}
            back in the first week.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Tell us about your business. We design a site built around your
            customers, your offers, and your conversion goals. Live in 24 hours.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href="#lead-form"
              className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Plan my website →
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            500+ websites launched · Avg lead time: 3 days · Pay only when live
          </p>
        </div>
      </section>

      <ValueStrip stats={VALUE_STATS} />

      <IncludedSection
        title="A real website. Not a template. Built around your business."
        cards={INCLUDED}
      />

      {/* LEAD FORM — 4-question qualification */}
      <section id="lead-form" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold text-[#4F46E5] uppercase tracking-[0.2em]">
              Plan your website in 60 seconds
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
              Four quick questions. Then a designer takes over.
            </h2>
            <p className="mt-4 text-slate-600">
              The more we know, the sharper your first design directions. A
              designer WhatsApps you in 30 minutes to confirm scope.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-[#F8FAFC] border border-slate-100 p-6 md:p-8">
            <LeadFormV3 />
          </div>
        </div>
      </section>

      <ContactSection
        eyebrow="Need to ask something first?"
        title="Talk to us before you start."
        body="WhatsApp, call, or email us — whatever is quickest for you."
      />

      <SiteFooter />
    </main>
  );
}
