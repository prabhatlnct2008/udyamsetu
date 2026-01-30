import type { Metadata } from 'next';
import { Header, Footer } from '@/components';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Portfolio | Landing Pages, Local SEO Websites & WhatsApp Lead Systems | UdyamSetu',
  description:
    "Explore UdyamSetu's portfolio of conversion-focused landing pages, Local SEO city/area pages, and WhatsApp lead capture systems across healthcare, logistics, travel, education, mobility, and SaaS.",
  keywords:
    'landing page portfolio, local SEO websites, WhatsApp lead capture, conversion landing pages, India landing pages, city SEO pages, area pages, lead generation websites, healthcare landing page, logistics website, travel landing page, education landing page, SaaS landing page',
  openGraph: {
    title: 'Portfolio | Landing Pages, Local SEO Websites & WhatsApp Lead Systems | UdyamSetu',
    description:
      "Explore UdyamSetu's portfolio of conversion-focused landing pages, Local SEO city/area pages, and WhatsApp lead capture systems across healthcare, logistics, travel, education, mobility, and SaaS.",
    url: 'https://udyamsetu.com/portfolio',
    siteName: 'UdyamSetu',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Landing Pages, Local SEO Websites & WhatsApp Lead Systems | UdyamSetu',
    description:
      "Explore UdyamSetu's portfolio of conversion-focused landing pages, Local SEO city/area pages, and WhatsApp lead capture systems.",
  },
  alternates: {
    canonical: 'https://udyamsetu.com/portfolio',
  },
};

// Project data
const projects = [
  {
    title: 'Dwarka Fine Arts',
    category: 'Local Business Website • Local SEO • Education',
    positioning: '"Delhi\'s Most Creative Art Studio"',
    summary:
      'A bright, parent-friendly landing page for a fine arts institute in Dwarka—designed to attract toddlers, teens, and adults with clear service tiers, trust-led messaging, and locality cues for Delhi / Dwarka searches.',
    highlights: [
      'Local-first SEO structure (Dwarka + Delhi)',
      'Clear offer segmentation (kids / teens / adults)',
      'Emotion-led copy + conversion layout',
    ],
    chips: ['Local SEO', 'Education', 'Landing Page'],
    projectUrl: 'https://dwarka-fine-arts-c34510f0.base44.app/',
    imageSrc: '/portfolio/dwarka-fine-arts.png',
    imageAlt: 'Dwarka Fine Arts - Art Studio Landing Page',
  },
  {
    title: 'MentorPath AI',
    category: 'Education Landing Page • Lead Generation • Course Funnel',
    positioning: undefined,
    summary:
      'A premium course funnel for learning Generative AI by building real projects—built for credibility, clarity, and conversion. Suitable for performance marketing and organic acquisition.',
    highlights: [
      'Outcome-based messaging (ship production apps)',
      'Structured 6-week positioning',
      'Clean modern UI ideal for ads + SEO',
    ],
    chips: ['Education', 'Lead Generation', 'SaaS'],
    projectUrl: 'https://mentorpathai-mu.vercel.app/',
    imageSrc: '/portfolio/mentorpath.png',
    imageAlt: 'MentorPath AI - GenAI Bootcamp Website',
  },
  {
    title: 'Demo Logistics Solutions',
    category: 'Local SEO • Logistics Website • B2B Services',
    positioning: undefined,
    summary:
      'A conversion-first page for a logistics service in Bangalore—positioned around reliability, on-time delivery, and coverage for local + interstate transport.',
    highlights: [
      'Bangalore-local SEO targeting',
      'Strong trust positioning (on-time, safe delivery)',
      'Service clarity: pickups, interstate transport, business logistics',
    ],
    chips: ['Local SEO', 'Logistics', 'B2B'],
    projectUrl: 'https://demologisticsolutions.vercel.app/',
    imageSrc: '/portfolio/logistics.png',
    imageAlt: 'Demo Logistics Solutions - Bangalore Logistics Landing Page',
  },
  {
    title: 'Home Physiotherapy',
    category: 'Healthcare Landing Page • Service SEO • Lead Capture',
    positioning: undefined,
    summary:
      'A high-trust landing page for physiotherapy delivered at home—built around conditions like back pain, knee pain, sports injuries, stroke rehab—each a high-intent SEO keyword.',
    highlights: [
      'Condition-based SEO sections (high intent)',
      'Home-service framing (skip the clinic)',
      'Clean CTA structure for quick enquiries',
    ],
    chips: ['Healthcare', 'Local SEO', 'Lead Generation'],
    projectUrl: 'https://physiotherapy-neon.vercel.app/',
    imageSrc: '/portfolio/physiocare.png',
    imageAlt: 'Home Physiotherapy - Healthcare Landing Page',
  },
  {
    title: 'Kerala Premium Escape',
    category: 'Travel Landing Page • Premium Positioning • Conversion',
    positioning: undefined,
    summary:
      'A premium travel offer page for Kerala—designed to sell a 4 nights / 5 days small-group itinerary with clear inclusions.',
    highlights: [
      'Premium itinerary positioning',
      'Small group credibility (12–15)',
      'Strong experience framing (houseboat, Munnar, local hosts)',
    ],
    chips: ['Travel', 'Landing Page', 'WhatsApp Capture'],
    projectUrl: 'https://kerela-landing-pages.vercel.app/kerala-premium-escape',
    imageSrc: '/portfolio/kerala-escape.png',
    imageAlt: 'Kerala Premium Escape - Travel Landing Page',
  },
  {
    title: 'Cab Booking',
    category: 'Mobility • Lead Conversion • Booking UX',
    positioning: '"Cleaner Ride in Seconds"',
    summary:
      'A clean cab booking landing page focused on speed and trust: clean cars, verified drivers, transparent pricing, and booking in under 15 seconds.',
    highlights: [
      'Conversion-led value props (clean, verified, fast)',
      'Booking-first layout',
      'Trust + safety framing',
    ],
    chips: ['Mobility', 'Lead Generation', 'Landing Page'],
    projectUrl: 'https://cab-booking-six-chi.vercel.app/',
    imageSrc: '/portfolio/sai-samarth.png',
    imageAlt: 'Cab Booking - Mobility Landing Page',
  },
  {
    title: 'Sai Samarth Travels',
    category: 'Local Service • Trust Branding • Conversion',
    positioning: undefined,
    summary:
      'A reliability-focused ride service page built around three pillars: verified drivers, clean cars, and transparent pricing.',
    highlights: [
      'Trust-led service positioning',
      'Simple, premium reliability narrative',
      'Strong base for Local SEO expansion',
    ],
    chips: ['Mobility', 'Local SEO', 'Landing Page'],
    projectUrl: 'https://sai-samarth-travels-b79c4e18.base44.app/',
    imageSrc: '/portfolio/sai-samarth.png',
    imageAlt: 'Sai Samarth Travels - Premium Ride Service Website',
  },
  {
    title: 'Research Workflow Manager',
    category: 'SaaS • Workflow Management • Product UX',
    positioning: undefined,
    summary:
      'A SaaS application concept for managing workflows in primary research agencies—built to demonstrate structured product UX and operational clarity.',
    highlights: [
      'SaaS workflow framing + product narrative',
      'Designed for operations-heavy teams',
      'Strong foundation for demos and MVP pitching',
    ],
    chips: ['SaaS', 'Product UX', 'Workflow'],
    projectUrl: 'https://research-workflow-manager-c15b81c4.base44.app/',
    imageSrc: '/portfolio/research-workflow.png',
    imageAlt: 'Research Workflow Manager - SaaS Application',
  },
];

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'UdyamSetu Portfolio',
  description:
    'Portfolio of high-converting landing pages, Local SEO websites, and WhatsApp lead capture systems',
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.summary,
      url: project.projectUrl,
      creator: {
        '@type': 'Organization',
        name: 'UdyamSetu',
        url: 'https://udyamsetu.com',
      },
      keywords: project.chips.join(', '),
    },
  })),
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UdyamSetu',
  url: 'https://udyamsetu.com',
  description:
    'UdyamSetu builds landing pages for Indian businesses, Local SEO city pages, area-wise service pages, and conversion-focused websites.',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: '+91-8882567801',
    availableLanguage: ['English', 'Hindi'],
  },
};

export default function PortfolioPage() {
  const whatsappConsultation =
    'https://wa.me/918882567801?text=Hi, I want a free consultation for my landing page';
  const whatsappPricing =
    'https://wa.me/918882567801?text=Hi, I want to know about your plans and pricing';

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#FFF6E8] pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] leading-tight">
                Portfolio: High-Converting Landing Pages &amp; Local SEO Websites
              </h1>
              <p className="mt-6 text-lg text-[#1A1A1A]/80 max-w-3xl mx-auto">
                We build conversion-focused landing pages, city/area SEO pages, and WhatsApp lead
                capture flows for Indian businesses and global startups—designed to load fast, rank
                locally, and generate enquiries.
              </p>
              <p className="mt-4 text-[#1A1A1A]/60">
                What you&apos;ll see below: real projects across education, logistics, healthcare,
                travel, mobility, and SaaS—each built with clear messaging, modern UI, and
                SEO-ready structure.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappConsultation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF8A00] hover:bg-[#F57C00] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon />
                  <span>Get a Free Consultation</span>
                </a>
                <a
                  href={whatsappPricing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#1F2A6D] text-[#1F2A6D] hover:bg-[#EEF1FF] px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Request a Similar Landing Page</span>
                </a>
              </div>

              {/* Tagline */}
              <p className="mt-8 text-sm font-semibold text-[#1F2A6D] tracking-wide">
                Fast. Mobile-first. SEO-ready. Built to convert.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white py-8 border-y border-[#E9D8C3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                  8+
                </p>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">Production-ready projects</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                  6+
                </p>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">Industries covered</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#FF8A00] font-[family-name:var(--font-poppins)]">
                  SEO
                </p>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">Built for lead conversion</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#1F7A3A] font-[family-name:var(--font-poppins)]">
                  WhatsApp
                </p>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">First markets ready</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build Section */}
        <section className="py-16 md:py-24 bg-[#FFF6E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center mb-12">
              What We Build
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Conversion-Focused Landing Pages */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E9D8C3] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#EEF1FF] rounded-xl flex items-center justify-center mb-4">
                  <LandingPageIcon />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] mb-3">
                  Conversion-Focused Landing Pages
                </h3>
                <p className="text-[#1A1A1A]/70">
                  We craft high-clarity landing pages with strong CTAs, offer positioning, social
                  proof, and speed optimization—ideal for Meta ads, Google Ads, and organic inbound.
                </p>
              </div>

              {/* Local SEO Pages */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E9D8C3] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#EEF1FF] rounded-xl flex items-center justify-center mb-4">
                  <LocalSEOIcon />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] mb-3">
                  Local SEO Pages at Scale
                </h3>
                <p className="text-[#1A1A1A]/70">
                  Need city-wise or area-wise pages? We build programmatic landing page systems for
                  Local SEO—helping businesses rank for &quot;near me&quot; and location-intent
                  searches.
                </p>
              </div>

              {/* WhatsApp Lead Capture */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E9D8C3] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#EEF1FF] rounded-xl flex items-center justify-center mb-4">
                  <WhatsAppLargeIcon />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] mb-3">
                  WhatsApp Lead Capture &amp; Automation
                </h3>
                <p className="text-[#1A1A1A]/70">
                  For India-first growth: we integrate Click-to-WhatsApp flows, auto-replies, lead
                  qualification, and tracking so you don&apos;t miss enquiries when you&apos;re
                  busy.
                </p>
              </div>

              {/* Speed & Mobile UX */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E9D8C3] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#EEF1FF] rounded-xl flex items-center justify-center mb-4">
                  <SpeedIcon />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] mb-3">
                  Speed, Mobile UX &amp; Tracking
                </h3>
                <p className="text-[#1A1A1A]/70">
                  Every page is optimized for mobile-first users with fast load times, clean
                  responsive design, and built-in analytics tracking for data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24 bg-white" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center mb-4">
              Featured Projects
            </h2>
            <p className="text-center text-[#1A1A1A]/60 mb-12 max-w-2xl mx-auto">
              Real landing pages and websites built for businesses across India and globally
            </p>

            {/* Projects Grid */}
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 md:py-20 bg-[#EEF1FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center mb-8">
              Industries We&apos;ve Built For
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Healthcare',
                'Logistics',
                'Travel',
                'Education',
                'Mobility',
                'SaaS',
              ].map((industry) => (
                <span
                  key={industry}
                  className="px-6 py-3 bg-white rounded-full text-[#1F2A6D] font-medium border border-[#E9D8C3] hover:border-[#FF8A00] hover:shadow-sm transition-all cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center mb-12">
              Our Process
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-2">
              {[
                { step: 'Discovery', icon: '1' },
                { step: 'Page Map', icon: '2' },
                { step: 'Copy/UI', icon: '3' },
                { step: 'Build', icon: '4' },
                { step: 'Launch', icon: '5' },
                { step: 'Improve', icon: '6' },
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#FF8A00] rounded-full flex items-center justify-center text-white font-bold">
                      {item.icon}
                    </div>
                    <span className="mt-2 text-sm font-medium text-[#1F2A6D]">{item.step}</span>
                  </div>
                  {index < 5 && (
                    <div className="hidden md:block w-12 h-0.5 bg-[#E9D8C3] mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-[#1F2A6D] warli-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white font-[family-name:var(--font-poppins)] mb-6">
              Want a Similar Landing Page for Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              If you want more enquiries from Google, Local SEO visibility, and a WhatsApp-first
              lead system, we can ship a polished page fast—with clear deliverables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={whatsappConsultation}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF8A00] hover:bg-[#F57C00] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                <span>Get a Free Consultation</span>
              </a>
              <a
                href="/#packages"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>See Plans &amp; Pricing</span>
              </a>
            </div>

            <p className="text-white/60 text-sm">
              Launch in 7–14 days • SEO-ready structure • Premium copy • WhatsApp lead capture
            </p>
          </div>
        </section>

        {/* SEO Footer Copy */}
        <section className="py-12 bg-[#FFF6E8] border-t border-[#E9D8C3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-[#1A1A1A]/60 text-center leading-relaxed">
              UdyamSetu builds landing pages for Indian businesses, Local SEO city pages, area-wise
              service pages, and conversion-focused websites for industries like healthcare,
              logistics, travel, education, mobility, and SaaS. If you&apos;re looking for website
              design for lead generation, Local SEO landing pages, or WhatsApp automation for
              enquiries, you&apos;re in the right place.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Icon Components
function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LandingPageIcon() {
  return (
    <svg className="w-6 h-6 text-[#1F2A6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function LocalSEOIcon() {
  return (
    <svg className="w-6 h-6 text-[#1F2A6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function WhatsAppLargeIcon() {
  return (
    <svg className="w-6 h-6 text-[#1F2A6D]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg className="w-6 h-6 text-[#1F2A6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}
