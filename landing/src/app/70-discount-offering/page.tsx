import type { Metadata } from 'next';
import Link from 'next/link';
import CtaButton from '@/components/offer70/CtaButton';
import ExitIntentModal from '@/components/offer70/ExitIntentModal';
import FaqAccordion from '@/components/offer70/FaqAccordion';
import LeadForm from '@/components/offer70/LeadForm';
import MetaPixel from '@/components/offer70/MetaPixel';
import NotebookVisual from '@/components/offer70/NotebookVisual';
import ScrollEvents from '@/components/offer70/ScrollEvents';
import StickyMobileCta from '@/components/offer70/StickyMobileCta';
import WhatsAppFloating from '@/components/offer70/WhatsAppFloating';
import {
  ANCHOR_PRICE,
  COHORT_CAP_LABEL,
  DISCOUNT_PERCENT,
  OFFER_FAQS,
  OFFER_PRICE,
  PROPOSAL_PDF_PATH,
  SAVINGS_AMOUNT,
  WHATSAPP_PRESET_TEXT,
} from '@/content/offer70';

export const metadata: Metadata = {
  title: `${ANCHOR_PRICE} marketing setup, yours at ${OFFER_PRICE} (${DISCOUNT_PERCENT}% off) | UdyamSetu AI`,
  description: `Landing page + 30 SEO pages + AI workflow + 30-day content calendar — the complete marketing setup most South Delhi businesses do not have. ${ANCHOR_PRICE} value, ${OFFER_PRICE} launch offer (${DISCOUNT_PERCENT}% off). Done in 14 days.`,
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://udyamsetuai.in/70-discount-offering' },
  openGraph: {
    title: `${ANCHOR_PRICE} worth of marketing setup. Yours at ${OFFER_PRICE}.`,
    description: `Landing page + 30 SEO pages + AI follow-up + 30-day content calendar. Done in 14 days for South Delhi businesses. ${OFFER_PRICE} launch offer (${DISCOUNT_PERCENT}% off).`,
    url: 'https://udyamsetuai.in/70-discount-offering',
    siteName: 'UdyamSetu',
    type: 'website',
  },
};

const WHATSAPP_HREF = `https://wa.me/918882567801?text=${encodeURIComponent(WHATSAPP_PRESET_TEXT)}`;

const SERVICE_CARDS = [
  {
    n: '1',
    title: 'Landing Page',
    body: 'One conversion-focused page that turns visitors into enquiries.',
    cost: '₹15,000 – ₹25,000',
  },
  {
    n: '2',
    title: '30 SEO Pages',
    body: 'Thirty pages targeting real Google searches in your South Delhi locality.',
    cost: '₹20,000 – ₹30,000',
  },
  {
    n: '3',
    title: 'AI Workflow',
    body: 'Automated follow-up that responds to leads in seconds, day or night.',
    cost: '₹10,000 – ₹15,000',
  },
  {
    n: '4',
    title: '30-Day Content Calendar',
    body: 'A month of post ideas with captions, ready to post.',
    cost: '₹10,000 – ₹15,000',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: OFFER_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function OfferPage() {
  return (
    <main className="min-h-screen bg-[#FFF6E8]">
      <MetaPixel />
      <ScrollEvents />

      {/* Minimal header — no nav distractions */}
      <header className="bg-white border-b border-[#E9D8C3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]"
          >
            UdyamSetu
          </Link>
          <span className="text-xs text-[#1A1A1A]/60 hidden sm:inline">
            {COHORT_CAP_LABEL}
          </span>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="warli-pattern relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#FF8A00]/10 text-[#FF8A00] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse" />
                {DISCOUNT_PERCENT}% LAUNCH OFFER · LIMITED COHORT
              </span>

              <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-[#1F2A6D] leading-tight font-[family-name:var(--font-poppins)]">
                {ANCHOR_PRICE} worth of marketing setup.
                <br />
                <span className="text-[#FF8A00]">
                  Yours at {OFFER_PRICE}.
                </span>
              </h1>

              <p className="mt-3 text-lg md:text-xl text-[#1A1A1A]/85 font-medium">
                See exactly what is inside before you decide.
              </p>

              <p className="mt-4 text-base md:text-lg text-[#1A1A1A]/80">
                Landing page + 30 SEO pages + AI workflow + 30-day content
                calendar — the complete marketing setup most South Delhi
                businesses do not have. Done for you in 14 days, not months.
              </p>

              <ul className="mt-6 space-y-2 text-[#1A1A1A]">
                {[
                  'One conversion-focused landing page',
                  '30 SEO pages targeting South Delhi searches',
                  'AI workflow that follows up with leads on its own',
                  '30-day content calendar with captions ready to post',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-[#1F7A3A] mt-0.5">✅</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <CtaButton location="hero" size="large">
                  📥 See the Full Breakdown — Free PDF
                </CtaButton>
              </div>
              <p className="mt-4 text-sm text-[#1A1A1A]/60">
                Instant PDF on WhatsApp · One follow-up only · No call required
              </p>
            </div>

            <div className="order-first lg:order-last pt-2">
              <NotebookVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR SERVICE CARDS — mirror the ad creative */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#FF8A00] uppercase tracking-[0.2em]">
              What is included — all four, built together
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              The complete marketing setup. Done for you.
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {SERVICE_CARDS.map((c) => (
              <div
                key={c.n}
                className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1F2A6D] text-white font-bold text-xl flex items-center justify-center font-[family-name:var(--font-poppins)]">
                    {c.n}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[#1A1A1A]/85">{c.body}</p>
                    <p className="mt-3 text-sm text-[#1A1A1A]/60">
                      Typical agency cost:{' '}
                      <span className="font-semibold text-[#1A1A1A]/80">
                        {c.cost}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. PRICE ANCHOR BLOCK — directly under the four cards */}
          <div className="mt-10 rounded-2xl bg-[#1F2A6D] text-white p-6 md:p-8 max-w-3xl mx-auto text-center">
            <p className="text-white/80 text-sm uppercase tracking-wider">
              Total typical agency cost
            </p>
            <p className="mt-1 text-2xl font-semibold">₹55,000 – ₹85,000</p>

            <div className="mt-6 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1">
              <span className="text-white/70 text-lg line-through">
                {ANCHOR_PRICE}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-[#FF8A00] font-[family-name:var(--font-poppins)]">
                {OFFER_PRICE}
              </span>
              <span className="text-white/85 text-sm">
                {DISCOUNT_PERCENT}% off · {COHORT_CAP_LABEL}
              </span>
            </div>

            <p className="mt-4 text-white/85">
              You save <span className="font-semibold">{SAVINGS_AMOUNT}</span>.
              Inclusive of GST. No hidden fees.
            </p>

            <div className="mt-6 flex justify-center">
              <CtaButton location="after-price" size="large">
                📥 See the Full Breakdown — Free PDF
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT IS IN THE PDF — preview block above the form */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#FF8A00] uppercase tracking-[0.2em] text-center">
            What is in the PDF you will download
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Page-by-page breakdown of exactly what we build for you',
              'Sample landing page section + 5 real SEO page titles for your locality',
              'Day-by-day 14-day timeline + transparent pricing breakdown',
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E9D8C3]"
              >
                <span className="text-2xl leading-none">✅</span>
                <span className="text-[#1A1A1A]/85">{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-sm text-[#1A1A1A]/65">
            12 pages · Mobile-friendly · 5-minute read · No sales call required
          </p>
        </div>
      </section>

      {/* 5. THE 3-FIELD FORM */}
      <section
        id="lead-form"
        className="py-14 md:py-20 bg-[#1F2A6D] text-white scroll-mt-16"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
              Send me the PDF on WhatsApp.
            </h2>
            <p className="mt-3 text-white/85">
              Three fields. 30 seconds. Instant download.
            </p>
          </div>

          <div className="mt-8 bg-white text-[#1A1A1A] rounded-2xl p-6 md:p-8 shadow-2xl">
            <LeadForm variant="main" source="70-discount-offering" />
          </div>
        </div>
      </section>

      {/* 6. PROBLEM */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            You are not lazy. You are missing the system.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[#1A1A1A]/85">
            <p>
              You have tried. You posted reels. You ran a small ad once. You
              hired a freelancer who ghosted. You spoke to one agency that
              quoted ₹60,000 and disappeared. You are now back to posting
              whenever you remember, and waiting for leads that do not come.
            </p>
            <p>
              This is not because your business is bad. It is because the one
              thing you are doing — posting on Instagram or Facebook — is
              roughly 10% of what actually generates leads online.
            </p>
          </div>
        </div>
      </section>

      {/* 7. WHAT IS INCLUDED IN DETAIL */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              What you actually get in the {OFFER_PRICE} setup
            </h2>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              Four deliverables. One coordinated system. Done in 14 days.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                num: '1',
                title: 'One conversion-focused landing page',
                body: 'A clean, mobile-first page that explains what you do, builds trust quickly, and pushes visitors to call, WhatsApp, or fill a form. Built around your business, your locality, and your top 1–2 services.',
                cost: '₹15,000–25,000',
              },
              {
                num: '2',
                title: '30 SEO pages targeting South Delhi searches',
                body: 'Thirty individual pages, each targeting a real search someone in your area types — "physiotherapist in Greater Kailash", "yoga classes in Saket", "dental clinic in Defence Colony". Properly optimised, indexed, and linked together.',
                cost: '₹20,000–30,000',
              },
              {
                num: '3',
                title: 'AI workflow setup',
                body: 'When someone fills your form or messages you, an automated workflow responds within seconds — confirms their request, sends them your basic info, and keeps the conversation warm until you can reply personally.',
                cost: '₹10,000–15,000',
              },
              {
                num: '4',
                title: '30-day content calendar',
                body: 'A complete month of post ideas, hooks, and captions — written for your business, your locality, and your tone. You just open it and post.',
                cost: '₹10,000–15,000',
              },
            ].map((d) => (
              <div
                key={d.num}
                className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1F2A6D] text-white font-bold text-xl flex items-center justify-center font-[family-name:var(--font-poppins)]">
                    {d.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-[#1A1A1A]/85">{d.body}</p>
                    <p className="mt-3 text-sm text-[#1A1A1A]/60">
                      Typical agency cost:{' '}
                      <span className="font-semibold text-[#1A1A1A]/80">
                        {d.cost}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMPARISON */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Posting alone is not a marketing system.
          </h2>
          <p className="mt-4 text-center text-[#1A1A1A]/80 max-w-2xl mx-auto">
            Most South Delhi businesses are doing one or two things. A real
            marketing system has at least four working together.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white border border-[#E9D8C3] p-6">
              <p className="text-xs font-semibold text-[#1A1A1A]/50 uppercase tracking-wider">
                What you are probably doing
              </p>
              <ul className="mt-4 space-y-3 text-[#1A1A1A]/80">
                {[
                  'One reel a week',
                  'A Facebook page that has not been updated',
                  'Replying manually when someone DMs',
                  '"I will figure out content later"',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 line-through opacity-80">
                    <span>•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#1F2A6D] text-white p-6 shadow-xl">
              <p className="text-xs font-semibold text-[#FF8A00] uppercase tracking-wider">
                What actually generates leads
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'A landing page that converts visitors into enquiries',
                  '30 SEO pages bringing you Google traffic from your locality',
                  'An AI workflow that responds within seconds, day or night',
                  'A 30-day content calendar with captions ready to post',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="text-[#FF8A00]">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY THIS WORKS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Three reasons this setup actually moves the needle.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              {
                num: '1',
                title: 'Most local leads start on Google, not Instagram.',
                body: 'When someone in Saket urgently searches "skin clinic near me", they land on whoever Google ranks. The 30 SEO pages bring in people who are already looking. Reels are awareness. SEO is intent.',
              },
              {
                num: '2',
                title: 'Speed of reply matters more than effort.',
                body: 'The business that replies first usually wins the lead — far more than the one with the prettier brochure. The AI workflow makes sure you reply in seconds, even when you are with a customer.',
              },
              {
                num: '3',
                title: 'A landing page beats a homepage every time.',
                body: 'A page built specifically to convert — clear offer, trust signals, single CTA — converts 3–5x better than a generic "About / Services / Contact" website.',
              },
            ].map((r) => (
              <div
                key={r.num}
                className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-6"
              >
                <div className="text-3xl font-bold text-[#FF8A00] font-[family-name:var(--font-poppins)]">
                  {r.num}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                  {r.title}
                </h3>
                <p className="mt-3 text-[#1A1A1A]/85 text-sm">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHO THIS IS FOR / NOT FOR */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              Built for South Delhi businesses like yours.
            </h2>
            <p className="mt-3 text-[#1A1A1A]/80">If you run any of these, the setup fits without modification:</p>
            <ul className="mt-5 space-y-2 text-[#1A1A1A]/85">
              {[
                'Clinics & wellness — doctors, dentists, derma, physio, salons, spas',
                'Coaches & consultants — business, fitness, life, finance, career',
                'Local services — interior, design, photography, legal, CA',
                'Local shops & studios — boutiques, cafes, niche food, decor',
                'Institutes — tuition, language, music, dance, kids activities',
                'Solo professionals — freelancers, consultants, single-owner services',
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="text-[#1F7A3A] mt-0.5">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-[#1A1A1A]/70">
              We build for businesses based in or serving GK, Saket, Hauz Khas,
              Vasant Vihar, Defence Colony, Lajpat Nagar, Green Park, Malviya
              Nagar, South Extension, Chittaranjan Park, and the rest of South
              Delhi.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              Honestly, this is not for everyone.
            </h2>
            <p className="mt-3 text-[#1A1A1A]/80">Probably not the right fit if:</p>
            <ul className="mt-5 space-y-2 text-[#1A1A1A]/85">
              {[
                'You already have a working landing page, full SEO setup, and a content calendar',
                'You are a large enterprise with an in-house marketing team',
                'You run a high-volume e-commerce store doing several lakhs in monthly revenue',
                'You expect leads to start flowing on day 2 — SEO takes 4–8 weeks to rank',
                'You will not share your basics (logo, services, photos) within 3 days',
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="text-[#FF8A00] mt-0.5">⚠️</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11. HOW IT WORKS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            How we deliver in 14 days.
          </h2>
          <ol className="mt-10 space-y-3">
            {[
              ['Day 0', 'You download the proposal', 'Read it, ask questions on WhatsApp, confirm. Pay ' + OFFER_PRICE + '.'],
              ['Day 1–2', 'Onboarding', 'Short Google Form. Share business basics, services, target locality, logo, 5–10 photos. One 20-minute call (optional, on WhatsApp).'],
              ['Day 3–7', 'Landing page goes live', 'We build, share a preview, take your feedback once, and launch.'],
              ['Day 5–10', '30 SEO pages built and indexed', 'Page titles aligned to South Delhi search terms, internal links, schema, submitted to Google.'],
              ['Day 8–12', 'AI workflow set up', 'Configured on your WhatsApp / email. We test it with you live.'],
              ['Day 12–14', '30-day content calendar handed over', 'Google Doc + Notion board + 10-min walkthrough video.'],
              ['Day 14', 'Handover & 7-day support', 'Ask any clarification question for 7 days. Most clients keep chatting on WhatsApp anyway.'],
            ].map(([day, title, body]) => (
              <li
                key={title}
                className="flex gap-4 rounded-xl bg-[#FFF6E8] border border-[#E9D8C3] p-5"
              >
                <span className="flex-shrink-0 w-20 text-sm font-semibold text-[#FF8A00] uppercase tracking-wider">
                  {day}
                </span>
                <div>
                  <p className="font-semibold text-[#1F2A6D]">{title}</p>
                  <p className="mt-1 text-[#1A1A1A]/80 text-sm">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={OFFER_FAQS} />
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA + form repeat link */}
      <section className="py-16 md:py-24 bg-[#FFF6E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            See the full breakdown before you decide.
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/80">
            {ANCHOR_PRICE} value, {OFFER_PRICE} launch price for the first 50
            South Delhi businesses. The PDF takes 5 minutes to read. The
            decision is yours.
          </p>

          <div className="mt-8 flex justify-center">
            <CtaButton location="final-cta" size="large">
              📥 Send Me the PDF on WhatsApp
            </CtaButton>
          </div>

          <p className="mt-6 text-sm text-[#1A1A1A]/60">
            Inclusive of GST · No sales call · Built for South Delhi businesses ·{' '}
            {COHORT_CAP_LABEL}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2A6D] text-white/70 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p>
            © {new Date().getFullYear()} UdyamSetu Growth Studio. All prices
            inclusive of GST.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <a
              href={PROPOSAL_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Proposal PDF
            </a>
          </div>
        </div>
      </footer>

      <StickyMobileCta />
      <WhatsAppFloating />
      <ExitIntentModal />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
