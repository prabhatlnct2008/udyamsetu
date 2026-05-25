import type { Metadata } from 'next';
import MetaPixel from '@/components/offer70/MetaPixel';
import AnalyticsBeacon from '@/components/aiRevenueStudio/AnalyticsBeacon';
import ContactSection from '@/components/aiRevenueStudio/ContactSection';
import IncludedSection from '@/components/aiRevenueStudio/IncludedSection';
import LeadForm from '@/components/aiRevenueStudio/LeadForm';
import Nav from '@/components/aiRevenueStudio/Nav';
import SiteFooter from '@/components/aiRevenueStudio/SiteFooter';
import ValueStrip from '@/components/aiRevenueStudio/ValueStrip';

export const metadata: Metadata = {
  title: 'AI Revenue Studio — Your Website, AI-Designed. Live in 24 Hours. ₹99.',
  description:
    'Your website, AI-designed. Live in 24 hours. ₹99 launch offer for Indian small businesses.',
  alternates: { canonical: 'https://udyamsetuai.in/ai_revenue_studio' },
  openGraph: {
    title: 'Your website, AI-designed. Live in 24 hours. ₹99.',
    description:
      'Tell us about your business in 60 seconds. AI designs the site, our team ships it. Live tomorrow, ready to take leads.',
    url: 'https://udyamsetuai.in/ai_revenue_studio',
    siteName: 'AI Revenue Studio',
    type: 'website',
  },
};

const VALUE_STATS = [
  { stat: '24h', caption: 'From brief to live website. No "agency time".' },
  { stat: '₹99', caption: 'Pay only when you see the site. No upfront commitment.' },
  { stat: '5+', caption: 'Pages: home, about, services, contact, plus one custom.' },
  { stat: '∞', caption: 'WhatsApp + call button. Leads come to your phone directly.' },
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
];

export default function AiRevenueStudioPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <MetaPixel />
      <AnalyticsBeacon />
      <Nav />

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
            Your website, AI-designed.
            <br />
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Live in 24 hours.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Tell us about your business in 60 seconds. Our AI designs the site,
            our team ships it. You wake up tomorrow with a real website online —
            ready to take leads.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#lead-form"
              className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get yours for ₹99 →
            </a>
            <a
              href="#included"
              className="border-2 border-slate-200 hover:border-[#4F46E5] text-[#0F172A] px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              See what&apos;s included
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            500+ businesses launched · 4.9★ avg rating · Pay only when live
          </p>
        </div>
      </section>

      <ValueStrip stats={VALUE_STATS} />

      <IncludedSection
        title="A real website. Not a template. Built around your business."
        cards={INCLUDED}
      />

      {/* LEAD FORM */}
      <section id="lead-form" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold text-[#4F46E5] uppercase tracking-[0.2em]">
              Get yours in 60 seconds
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
              Two quick questions. Then we get to work.
            </h2>
            <p className="mt-4 text-slate-600">
              Once you submit, we&apos;ll WhatsApp you within minutes to confirm
              details and start design. Your site goes live in 24 hours.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-[#F8FAFC] border border-slate-100 p-6 md:p-8">
            <LeadForm />
          </div>
        </div>
      </section>

      <ContactSection
        eyebrow="Talk to us"
        title="Prefer a quick chat? We're listening."
        body="Skip the form. WhatsApp us directly with your business name and we'll take it from there."
      />

      <SiteFooter />
    </main>
  );
}
