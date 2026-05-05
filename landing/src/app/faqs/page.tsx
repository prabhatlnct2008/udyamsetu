import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components';
import FaqGroupSection from '@/components/FaqGroupSection';
import WhatsAppCta from '@/components/southDelhi/WhatsAppCta';
import {
  FAQ_GROUPS,
  FAQ_INTRO,
  FAQ_INTRO_LOCATIONS,
  getAllFaqItems,
} from '@/content/faqs';
import {
  PROFESSIONAL_SERVICE_NODE_ID,
  SITE_ORIGIN,
} from '@/content/southDelhi/shared';

const SLUG = 'faqs';
const CANONICAL = `${SITE_ORIGIN}/${SLUG}`;
const SEO_TITLE =
  'South Delhi Business FAQs | Websites, SEO, Lead Generation & AI Automation';
const META_DESCRIPTION =
  '50 practical answers for South Delhi clinics, designers, realtors, coaching centres, salons, and consultants — covering websites, Google Maps, local SEO, WhatsApp lead follow-up, AI automation, and growth.';

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    'South Delhi business FAQs',
    'local SEO FAQs South Delhi',
    'Google Business Profile FAQs',
    'WhatsApp lead follow-up FAQs',
    'AI automation FAQs Delhi',
    'website FAQs Delhi',
    'lead generation FAQs South Delhi',
  ].join(', '),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: SEO_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL,
    siteName: 'UdyamSetu',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TITLE,
    description: META_DESCRIPTION,
  },
};

function buildJsonLd() {
  const allFaqs = getAllFaqItems();
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': PROFESSIONAL_SERVICE_NODE_ID,
        name: 'UdyamSetu Growth Studio',
        url: `${SITE_ORIGIN}/`,
        telephone: '+91-8882567801',
        priceRange: '₹₹',
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'South Delhi' },
          { '@type': 'City', name: 'Delhi NCR' },
        ],
        serviceType: [
          'AI consulting',
          'AI automation',
          'lead generation systems',
          'SEO',
          'website services',
          'digital marketing automation',
        ],
        description:
          'UdyamSetu Growth Studio builds AI, SEO, website, landing-page, WhatsApp automation, and lead-generation systems for Indian businesses.',
      },
      {
        '@type': 'WebPage',
        '@id': `${CANONICAL}#webpage`,
        url: CANONICAL,
        name: SEO_TITLE,
        description: META_DESCRIPTION,
        inLanguage: 'en',
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
        about: { '@id': PROFESSIONAL_SERVICE_NODE_ID },
        breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${CANONICAL}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_ORIGIN}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'FAQs',
            item: CANONICAL,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${CANONICAL}#faq`,
        mainEntity: allFaqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ],
  };
}

export default function FaqsPage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="min-h-screen bg-[#FFF6E8]">
      <Header />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-[#1A1A1A]/70"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-[#1F2A6D] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1F2A6D] font-medium">FAQs</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="warli-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#FF8A00] uppercase tracking-wider">
              South Delhi business help centre
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold text-[#1F2A6D] leading-tight font-[family-name:var(--font-poppins)]">
              Frequently asked questions for South Delhi businesses using AI,
              SEO, websites, and lead generation
            </h1>
            <p className="mt-6 text-lg text-[#1A1A1A]/80">{FAQ_INTRO}</p>
            <p className="mt-3 text-sm text-[#1A1A1A]/70">
              {FAQ_INTRO_LOCATIONS}
            </p>

            <div className="mt-8 flex justify-center">
              <WhatsAppCta
                keyword="PLAN"
                label="Talk to UdyamSetu on WhatsApp"
                size="large"
                location="faqs-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-10 md:py-12 bg-white border-y border-[#E9D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
              Jump to a section
            </h2>
            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {FAQ_GROUPS.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="block px-4 py-3 rounded-xl bg-[#FFF6E8] border border-[#E9D8C3] hover:border-[#1F2A6D] hover:bg-[#EEF1FF]/60 transition-all text-[#1F2A6D] font-medium"
                  >
                    {g.heading}
                    <span className="ml-2 text-sm text-[#1A1A1A]/60">
                      ({g.items.length})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ groups */}
      <div className="bg-[#FFF6E8]">
        {FAQ_GROUPS.map((g) => (
          <FaqGroupSection key={g.id} group={g} />
        ))}
      </div>

      {/* Final CTA */}
      <section
        id="final-cta"
        className="py-16 md:py-24 bg-[#1F2A6D] text-white warli-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
              Have a question that is not in this list?
            </h2>
            <p className="mt-6 text-lg text-white/85">
              Tell us your service, locality, and current bottleneck on
              WhatsApp. We will share a short, practical recommendation —
              websites, SEO, lead generation, or AI automation — based on your
              real situation.
            </p>
            <div className="mt-10 flex justify-center">
              <WhatsAppCta
                keyword="PLAN"
                label="Get My Free Growth Plan on WhatsApp"
                size="large"
                location="faqs-final-cta"
              />
            </div>
            <p className="mt-6 text-sm text-white/70">
              Built for clinics, designers, realtors, coaching centres,
              salons, consultants, and B2B service providers across South
              Delhi.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
