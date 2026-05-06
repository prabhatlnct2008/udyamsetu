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
  OFFER_FAQS,
  PROPOSAL_PDF_PATH,
  WHATSAPP_PRESET_TEXT,
} from '@/content/offer70';

export const metadata: Metadata = {
  title:
    'Complete Marketing Setup for South Delhi Businesses — ₹6,000 Launch Offer | UdyamSetu AI',
  description:
    'Landing page + 30 SEO pages + AI follow-up workflow + 30-day content calendar. The complete marketing setup most South Delhi businesses do not have, done for you in 14 days. ₹20,000 → ₹6,000 launch offer.',
  // Paid ad landing page — keep out of organic search to avoid offer-page
  // dilution and to control attribution via the Facebook campaign only.
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://udyamsetuai.in/70-discount-offering' },
  openGraph: {
    title:
      'Posting a reel is 10% of marketing. We build the missing 90% — in days.',
    description:
      'Landing page + 30 SEO pages + AI follow-up + 30-day content calendar. Done in 14 days for South Delhi businesses. ₹6,000 launch offer.',
    url: 'https://udyamsetuai.in/70-discount-offering',
    siteName: 'UdyamSetu',
    type: 'website',
  },
};

const WHATSAPP_HREF = `https://wa.me/918882567801?text=${encodeURIComponent(WHATSAPP_PRESET_TEXT)}`;

export default function OfferPage() {
  return (
    <main className="min-h-screen bg-[#FFF6E8]">
      <MetaPixel />
      <ScrollEvents />

      {/* Minimal header — no nav distractions on a paid LP */}
      <header className="bg-white border-b border-[#E9D8C3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]"
          >
            UdyamSetu
          </Link>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#1F2A6D] hover:text-[#FF8A00] font-medium"
          >
            Ask on WhatsApp →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="warli-pattern relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#FF8A00]/10 text-[#FF8A00] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse" />
                70% launch offer · until cohort fills
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-[#1F2A6D] leading-tight font-[family-name:var(--font-poppins)]">
                Posting a reel is 10% of marketing.
                <br />
                <span className="text-[#FF8A00]">
                  We build the missing 90% — in days.
                </span>
              </h1>
              <p className="mt-5 text-lg text-[#1A1A1A]/85">
                Landing page + 30 SEO pages + 1 AI workflow + 30-day content
                calendar. The complete marketing setup most South Delhi
                businesses do not have — done for you in 14 days, not months.
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

              <div className="mt-7 inline-flex items-baseline gap-3 bg-white border border-[#E9D8C3] rounded-xl px-4 py-3">
                <span className="text-[#1A1A1A]/50 line-through">₹20,000</span>
                <span className="text-3xl font-bold text-[#1F2A6D]">
                  ₹6,000
                </span>
                <span className="text-sm text-[#1F7A3A] font-semibold">
                  Save ₹14,000
                </span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <CtaButton location="hero" size="large">
                  📥 Download Complete Proposal — Free
                </CtaButton>
                <CtaButton
                  href={WHATSAPP_HREF}
                  external
                  location="hero-whatsapp"
                  eventName="cta_click_whatsapp"
                  variant="secondary"
                  size="large"
                >
                  💬 Or ask us anything on WhatsApp →
                </CtaButton>
              </div>
              <p className="mt-4 text-sm text-[#1A1A1A]/60">
                ✓ No call required · Free PDF · We follow up only on WhatsApp
              </p>
            </div>

            <div className="order-first lg:order-last pt-2">
              <NotebookVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-14 md:py-20 bg-white">
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
            <p>
              The other 90% is invisible to most local business owners until
              someone shows it to them:
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-[#1A1A1A]/85">
            {[
              'A landing page that turns visitors into enquiries',
              'SEO pages so people in your locality find you on Google',
              'An automated follow-up so the lead does not go cold while you are busy',
              'A monthly content plan so you are not staring at Canva at 11 PM wondering what to post',
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="text-[#1F7A3A] mt-0.5">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg text-[#1F2A6D] font-semibold">
            That is the missing 90%. That is what UdyamSetu AI builds for you.
          </p>
        </div>
      </section>

      {/* Posting is not a system — comparison */}
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

          <p className="mt-8 text-center text-[#1A1A1A]/85 max-w-2xl mx-auto">
            Doing one without the others is like opening a clinic with a doctor
            but no signboard, no phone line, and no receptionist. The work
            happens. The leads do not.
          </p>
          <p className="mt-3 text-center text-[#1F2A6D] font-semibold">
            UdyamSetu AI builds the full setup, not the missing piece. ₹20,000
            of work, set up for ₹6,000 in our launch offer.
          </p>
        </div>
      </section>

      {/* What is included */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              What you get in the Complete Growth Setup
            </h2>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              Four deliverables. One coordinated system. Done in 14 days.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
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

          <p className="mt-10 max-w-3xl mx-auto text-center text-[#1A1A1A]/80">
            Built and delivered together, the four work as a system — the SEO
            pages and reels send people to the landing page, the landing page
            captures the lead, the AI workflow keeps it warm, and the content
            calendar keeps you visible. Each piece makes the others work harder.
          </p>
        </div>
      </section>

      {/* Price / Value */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              What it would normally cost. What you pay.
            </h2>
          </div>

          <div className="mt-10 rounded-2xl bg-white border border-[#E9D8C3] overflow-hidden">
            <div className="divide-y divide-[#E9D8C3]">
              {[
                ['Conversion landing page', '₹15,000 – 25,000'],
                ['30 SEO pages', '₹20,000 – 30,000'],
                ['AI workflow setup', '₹10,000 – 15,000'],
                ['30-day content calendar', '₹10,000 – 15,000'],
                ['Total typical cost', '₹55,000 – 85,000'],
              ].map(([k, v], i, arr) => (
                <div
                  key={k}
                  className={`flex items-center justify-between px-5 py-4 ${
                    i === arr.length - 1 ? 'bg-[#EEF1FF] font-semibold' : ''
                  }`}
                >
                  <span className="text-[#1A1A1A]/85">{k}</span>
                  <span className="text-[#1A1A1A]/85">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-[#1F2A6D] text-white p-6 md:p-8 text-center">
            <p className="text-white/85">Our standard package: ₹20,000</p>
            <p className="mt-3 text-3xl md:text-4xl font-bold">
              Launch offer: <span className="text-[#FF8A00]">₹6,000</span>
            </p>
            <p className="mt-1 text-white/85">You save ₹14,000</p>
            <p className="mt-4 text-sm text-white/70 max-w-xl mx-auto">
              We are building our first cohort of South Delhi businesses,
              learning faster from each delivery, and using internal tools that
              compress 3-month agency timelines into 14 days. Once the launch
              cohort closes, the price moves to ₹20,000.
            </p>
            <p className="mt-3 text-xs text-white/60">
              No hidden fees. Hosting, domain, ad spend, and any tools you add
              later are separate and listed in the proposal. Prices inclusive
              of GST.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <CtaButton location="after-price" size="large">
              📥 Download the Complete Proposal — see exactly what is included →
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Why this works */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Why this setup actually moves the needle.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              {
                num: '1',
                title: 'Most local leads start on Google, not Instagram.',
                body: 'When someone in Saket urgently searches "skin clinic near me", they land on whoever Google ranks. That is where the 30 SEO pages do their job — quietly bringing in people who are already looking. Reels are awareness. SEO is intent.',
              },
              {
                num: '2',
                title: 'Speed of reply matters more than effort.',
                body: 'The business that replies first usually wins the lead — far more than the one with the prettier brochure. The AI workflow makes sure you reply in seconds, even when you are with a patient, client, or customer.',
              },
              {
                num: '3',
                title: 'A landing page outperforms a homepage every time.',
                body: 'A page built specifically to convert — clear offer, trust signals, single CTA — converts 3–5x better than a generic "About / Services / Contact" website. We build that page, not another homepage.',
              },
              {
                num: '4',
                title: 'Posting becomes easier when you have a calendar.',
                body: 'The biggest reason owners stop posting is not laziness — it is decision fatigue. A 30-day calendar removes the decision. You open the doc, see today is post, and ship it in 5 minutes.',
              },
            ].map((r) => (
              <div
                key={r.num}
                className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-[#FF8A00] font-[family-name:var(--font-poppins)]">
                    {r.num}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                    {r.title}
                  </h3>
                </div>
                <p className="mt-3 text-[#1A1A1A]/85">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Built for South Delhi businesses like yours.
          </h2>
          <p className="mt-4 text-center text-[#1A1A1A]/80 max-w-2xl mx-auto">
            If you run any of these, the setup fits without modification:
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Clinics & wellness',
                items: 'Doctors, dentists, dermatologists, physiotherapists, nutritionists, yoga and pilates studios, salons, spas',
              },
              {
                title: 'Coaches & consultants',
                items: 'Business coaches, fitness trainers, life coaches, financial advisors, career counsellors',
              },
              {
                title: 'Local services',
                items: 'Interior designers, architects, photographers, event planners, lawyers, CAs',
              },
              {
                title: 'Local shops & studios',
                items: 'Boutiques, studios, cafes, niche food brands, home decor',
              },
              {
                title: 'Institutes',
                items: 'Tuition centres, language classes, music academies, dance studios, kids activities',
              },
              {
                title: 'Solo professionals',
                items: 'Freelancers, consultants, anyone running a service business under their own name',
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-xl bg-white border border-[#E9D8C3] p-5"
              >
                <p className="font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                  {b.title}
                </p>
                <p className="mt-1 text-sm text-[#1A1A1A]/80">{b.items}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[#1A1A1A]/80 max-w-2xl mx-auto">
            We build for businesses based in or serving Greater Kailash, Saket,
            Hauz Khas, Vasant Vihar, Defence Colony, Lajpat Nagar, Green Park,
            Malviya Nagar, South Extension, Chittaranjan Park, and the rest of
            South Delhi.
          </p>
        </div>
      </section>

      {/* Who this is NOT for */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Honestly, this is not for everyone.
          </h2>
          <p className="mt-4 text-center text-[#1A1A1A]/80">
            We would rather tell you upfront than waste your time. This is
            probably not the right fit if:
          </p>
          <ul className="mt-8 space-y-3 text-[#1A1A1A]/85">
            {[
              'You already have a working landing page, full SEO setup, and a content calendar — you do not need a setup, you need optimisation',
              'You are a large enterprise with an in-house marketing team',
              'You run a high-volume e-commerce store doing several lakhs in monthly revenue — your needs are different and bigger',
              'You expect leads to start flowing on day 2 — SEO pages take 4–8 weeks to rank',
              'You are not willing to send us your basics (logo, services, photos, business info) within the first 3 days',
            ].map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#FFF6E8] border border-[#E9D8C3]"
              >
                <span className="text-[#FF8A00] mt-0.5">⚠️</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-[#1A1A1A]/75 text-sm">
            If any of the above are you, talk to us on WhatsApp anyway — we will
            either say &ldquo;this is not right for you&rdquo; or recommend the right next
            step.
          </p>
        </div>
      </section>

      {/* Inside the proposal */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            What is inside the free proposal you will download.
          </h2>
          <p className="mt-4 text-center text-[#1A1A1A]/80">
            A clean PDF. Around 12 pages. Designed to be read on a phone in 5
            minutes.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-[#1A1A1A]/85">
            {[
              'A clear breakdown of all four deliverables — what they are, why they matter, what we will actually build for your type of business',
              'The exact 14-day timeline, day by day',
              'Real examples of SEO page titles for South Delhi businesses',
              'A sample landing page section and sample content calendar entries',
              'Exact price, payment terms, and what is not included',
              'Refund and revision policy in plain language',
              '12 frequently asked questions answered honestly',
              'WhatsApp contact for any follow-up question',
            ].map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 p-3 rounded-lg bg-white border border-[#E9D8C3]"
              >
                <span className="text-[#1F7A3A] mt-0.5">✓</span>
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-[#1A1A1A]/70">
            No sales call required to read it. No commitment. If after reading
            it you decide it is not for you, that is fine.
          </p>
        </div>
      </section>

      {/* How we deliver */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            How we deliver in 14 days.
          </h2>
          <ol className="mt-10 space-y-4">
            {[
              {
                day: 'Day 0',
                title: 'You download the proposal',
                body: 'You read it, ask questions on WhatsApp if needed, and confirm you want to proceed. Pay ₹6,000.',
              },
              {
                day: 'Day 1–2',
                title: 'Onboarding',
                body: 'We send you a short Google Form. You share your business basics, services, target locality, logo, and 5–10 photos. One 20-minute call (optional, on WhatsApp).',
              },
              {
                day: 'Day 3–7',
                title: 'Landing page goes live',
                body: 'We build, share a preview, take your feedback once, and launch on your domain.',
              },
              {
                day: 'Day 5–10',
                title: '30 SEO pages built and indexed',
                body: 'Page titles aligned to South Delhi search terms, internal links, meta tags, schema, submitted to Google.',
              },
              {
                day: 'Day 8–12',
                title: 'AI workflow set up',
                body: 'Configured on your WhatsApp Business / email. We test it with you live.',
              },
              {
                day: 'Day 12–14',
                title: '30-day content calendar handed over',
                body: 'You get the calendar in a Google Doc and a Notion board. We walk you through how to use it (10-min video).',
              },
              {
                day: 'Day 14',
                title: 'Handover & 7-day support window',
                body: 'You can ask any clarification question for the next 7 days. After that, you are independent — though most clients chat with us on WhatsApp anyway.',
              },
            ].map((s) => (
              <li
                key={s.title}
                className="flex gap-4 rounded-xl bg-[#FFF6E8] border border-[#E9D8C3] p-5"
              >
                <span className="flex-shrink-0 w-20 text-sm font-semibold text-[#FF8A00] uppercase tracking-wider">
                  {s.day}
                </span>
                <div>
                  <p className="font-semibold text-[#1F2A6D]">{s.title}</p>
                  <p className="mt-1 text-[#1A1A1A]/80 text-sm">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Inline lead form */}
      <section
        id="lead-form"
        className="py-16 md:py-20 bg-[#1F2A6D] text-white scroll-mt-16"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
              Get the Complete Proposal — free.
            </h2>
            <p className="mt-3 text-white/85">
              Fill these 60 seconds of details. We will WhatsApp you the PDF
              instantly. No sales call, no spam.
            </p>
          </div>

          <div className="mt-8 bg-white text-[#1A1A1A] rounded-2xl p-6 md:p-8 shadow-2xl">
            <LeadForm variant="main" source="70-discount-offering" />
          </div>

          <p className="mt-6 text-center text-sm text-white/70">
            Or{' '}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#FF8A00]"
            >
              ask us anything on WhatsApp →
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={OFFER_FAQS} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-[#FFF6E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            Stop waiting for leads after one reel. Get the complete setup.
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/80">
            You can keep posting and waiting. Or you can have a real marketing
            system live on your domain in 14 days, for ₹6,000.
          </p>
          <p className="mt-2 text-[#1A1A1A]/70">
            The proposal is free. The form takes 60 seconds. The download is
            instant.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <CtaButton location="final-cta" size="large">
              📥 Download Complete Proposal — Free
            </CtaButton>
            <CtaButton
              href={WHATSAPP_HREF}
              external
              location="final-cta-whatsapp"
              eventName="cta_click_whatsapp"
              variant="whatsapp"
              size="large"
            >
              💬 Or ask us on WhatsApp first
            </CtaButton>
          </div>

          <p className="mt-6 text-sm text-[#1A1A1A]/60">
            ✅ No sales call required ✅ Instant PDF download ✅ Built for
            South Delhi businesses ✅ ₹6,000 launch price · 70% off
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
              href={`/${PROPOSAL_PDF_PATH.replace(/^\//, '')}`}
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
    </main>
  );
}
