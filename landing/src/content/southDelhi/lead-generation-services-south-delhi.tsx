import Link from 'next/link';
import type { PageContent } from './types';

const LINK_CLASS =
  'text-[#1F2A6D] underline decoration-[#FF8A00]/40 hover:text-[#FF8A00] hover:decoration-[#FF8A00] transition-colors';

const content: PageContent = {
  slug: 'lead-generation-services-south-delhi',
  seoTitle:
    'Lead Generation Services in South Delhi | SEO, Landing Pages & WhatsApp Systems',
  metaDescription:
    'Lead generation services for South Delhi businesses using local SEO pages, conversion landing pages, Meta ad experiments, WhatsApp qualification, and lead tracking.',
  primaryKeyword: 'lead generation services South Delhi',
  secondaryKeywords: [
    'lead generation agency South Delhi',
    'B2B lead generation South Delhi',
    'qualified leads South Delhi',
    'local business lead generation Delhi',
    'WhatsApp lead generation Delhi',
    'lead generation company Delhi NCR',
  ],
  whatsappKeyword: 'LEADS',
  breadcrumbName: 'Lead Generation Services in South Delhi',

  hero: {
    h1: 'Lead Generation Services in South Delhi Built Around Qualified Enquiries',
    subhead:
      'Get more qualified enquiries from South Delhi — not just more clicks. We build local landing pages, SEO foundations, lead capture flows, and WhatsApp-first follow-up systems for businesses that want measurable pipeline.',
    bullets: [
      'Local SEO pages for service × area × intent',
      'WhatsApp-first qualification + routing',
      'Source, page, and campaign tracking',
      'Improvement loop based on real lead quality',
    ],
    primaryCtaLabel: 'Get My Free Growth Plan on WhatsApp',
    secondaryCtaLabel: 'See deliverables',
    secondaryCtaHref: '#deliverables',
    trustNote: 'Built for South Delhi clinics, real estate, B2B suppliers, and local services',
    trustChips: [
      'Saket',
      'Greater Kailash',
      'Hauz Khas',
      'Malviya Nagar',
      'Lajpat Nagar',
      'South Extension',
      'Nehru Place',
      'Okhla',
    ],
  },

  localPain: {
    heading: 'What goes wrong with typical lead generation',
    body: [
      'Many agencies focus on lead count. Business owners care about whether those leads answer calls, fit the budget, need the right service, and can convert. In South Delhi, where markets range from clinics and premium services to real estate, B2B suppliers, and local retail, the same campaign cannot work for everyone.',
      (
        <p key="leads-pain-2">
          Leads arrive on WhatsApp, get lost in chat, or sit in a sheet that no
          one reviews. Forms collect names without intent. Ads send traffic to a
          homepage that does not match the search. Owners cannot tell which
          page or campaign produced a serious enquiry, so improvements stall.
          The fix is rarely &ldquo;more leads&rdquo; — it is the right{' '}
          <Link href="/seo-company-south-delhi" className={LINK_CLASS}>
            SEO foundation
          </Link>
          ,{' '}
          <Link
            href="/ai-business-automation-services-south-delhi"
            className={LINK_CLASS}
          >
            workflow automation
          </Link>
          , and{' '}
          <Link
            href="/digital-marketing-automation-south-delhi"
            className={LINK_CLASS}
          >
            campaign-to-CRM tracking
          </Link>{' '}
          working together. For property teams specifically, see the dedicated{' '}
          <Link
            href="/real-estate-lead-generation-south-delhi"
            className={LINK_CLASS}
          >
            South Delhi real estate funnel approach
          </Link>
          .
        </p>
      ),
    ],
    pullquote:
      'A lead is not useful until it is captured, qualified, routed, followed up, and tracked.',
  },

  deliverables: {
    heading: 'The UdyamSetu Lead Engine',
    intro:
      'A connected system, not a one-off campaign. Each deliverable below is South Delhi-specific and tied to a measurable enquiry outcome.',
    items: [
      {
        title: 'Landing Page Factory',
        body: 'Service × location × intent pages for local demand — clinic enquiries near Saket, property leads in GK, B2B RFQs out of Nehru Place / Okhla. Each page has its own offer, proof, and CTA logic.',
      },
      {
        title: 'SEO Foundation',
        body: 'Technical setup, internal linking, citations, and content structure that compound over time — not link-spam shortcuts that put the brand at risk.',
      },
      {
        title: 'WhatsApp Lead Capture',
        body: 'Instant acknowledgement, qualification questions, routing rules, and templates so your team picks up enquiries in seconds, not hours.',
      },
      {
        title: 'Ad Experiments',
        body: 'Meta or Google tests when faster demand is needed — only after the offer page and tracking are ready, so the spend produces signal not noise.',
      },
      {
        title: 'Tracking',
        body: 'Source, page, campaign, lead status, and conversion notes captured per enquiry. You see which page produced the qualified lead, not only impressions and ranks.',
      },
      {
        title: 'Improvement Loop',
        body: 'Every two to four weeks we update pages and offers based on real lead quality and response patterns — not vanity metrics.',
      },
    ],
    ctaLabel: 'Ask for a South Delhi lead-system map',
  },

  firstProjects: {
    heading: 'High-intent lead examples by industry',
    intro:
      'Each business gets its own lead-quality definition before campaigns begin. Sample shapes:',
    cards: [
      {
        audience: 'Clinic',
        pilot:
          'Condition / service pages for queries like "dermatologist appointment Saket" or "dental clinic near Malviya Nagar", captured through WhatsApp booking questions.',
      },
      {
        audience: 'Real estate',
        pilot:
          'Lead form qualified by budget, location, property type, possession timeline, and site-visit intent before it ever reaches a sales caller.',
      },
      {
        audience: 'B2B supplier',
        pilot:
          'RFQ flow tagged by product category, quantity, delivery area, urgency, and purchase role — routed straight to the right desk.',
      },
      {
        audience: 'Professional service',
        pilot:
          'Consultation request capturing service needed, deadline, documents, budget range, and consultation timing — so calls start with context.',
      },
    ],
  },

  process: {
    heading: 'How we run a South Delhi lead-system engagement',
    steps: [
      {
        title: 'Goal definition',
        body: 'Decide what counts as a qualified enquiry for your business — service need, location, budget, urgency, contactability.',
      },
      {
        title: 'Audience and locality map',
        body: 'Identify the South Delhi clusters that matter for your offer and the search patterns that buyers actually use.',
      },
      {
        title: 'Page and offer build',
        body: 'Create the landing pages, service pages, proof blocks, FAQs, and CTA flows that convert intent into structured enquiries.',
      },
      {
        title: 'Tracking setup',
        body: 'Source tracking, pixel events, Search Console, and lead sheets wired together so every lead is attributable.',
      },
      {
        title: 'Launch and route',
        body: 'Connect WhatsApp, forms, and lead routing so enquiries land with the right person within seconds.',
      },
      {
        title: 'Review',
        body: 'Analyze lead quality, response gaps, and page performance every two to four weeks, then update what is working.',
      },
    ],
    ctaLabel: 'WhatsApp ‘LEADS’ for a page and lead-flow recommendation',
  },

  proof: {
    heading: 'How we earn trust before you commit',
    blocks: [
      {
        title: 'Sample lead-quality scorecard',
        body: 'A simple weekly scorecard showing total enquiries, qualified leads, source page, response time, and conversion outcome — sent so you actually open it.',
      },
      {
        title: 'Sample WhatsApp report',
        body: 'A weekly WhatsApp digest of pipeline status, top-performing pages, and follow-up gaps — readable in the same place your team already works.',
      },
      {
        title: 'Portfolio examples',
        body: 'Real local SEO pages and conversion landing pages from clinics, logistics, education, and travel businesses — see /portfolio for the live builds.',
      },
      {
        title: 'Lead pipeline view',
        body: 'CRM-lite columns covering New, Qualified, Site visit / call booked, Won, and Lost reasons so the business stops losing leads to chat scrolling.',
      },
    ],
    disclaimers: [
      'No fake guarantees, no purchased contact databases, no vanity-metric reporting.',
      'No risky link spam — citations and backlinks follow safe practices.',
      'Sales conversations are still owned by your team; we provide the system, scripts, and tracking.',
    ],
  },

  finalCta: {
    heading: 'Ready for South Delhi enquiries you can actually act on?',
    body: 'We will tell you which 10–30 pages, CTA questions, and follow-up steps are most likely to improve your South Delhi lead flow — and what is honestly not worth doing yet.',
    bullets: [
      'A starting page map for your services and localities',
      'A WhatsApp qualification script tuned to your offer',
      'A simple weekly reporting format your team will use',
    ],
    ctaLabel: 'Get My Free Growth Plan',
    supportingLine:
      'Best for clinics, local services, real estate, B2B suppliers, education, and professional firms across South Delhi.',
  },

  faqs: [
    {
      question: "What makes UdyamSetu's lead generation different?",
      answer:
        'The offer is positioned as a system: local pages, SEO, conversion copy, WhatsApp qualification, routing, tracking, and improvement loops rather than disconnected ads or random contact lists.',
    },
    {
      question: 'Can you generate leads without paid ads?',
      answer:
        'Yes, local SEO pages and website conversion improvements can generate organic enquiries over time. Paid ads can be used for faster testing when the offer and tracking are ready.',
    },
    {
      question: 'How do you define a qualified lead?',
      answer:
        'A qualified lead matches service need, location, budget range, urgency, and contactability. The exact criteria depend on the business and are agreed up front.',
    },
    {
      question: 'Do you handle WhatsApp follow-up?',
      answer:
        'The system can include auto-replies, qualification questions, templates, routing, and lead sheets. Manual sales conversations should still be handled by the business or its team.',
    },
    {
      question: 'Which South Delhi businesses benefit most?',
      answer:
        'Clinics, real estate teams, local service providers, institutes, professional firms, B2B suppliers, showrooms, and businesses with repeatable enquiries are strong fits.',
    },
  ],

  relatedSlugs: [
    'seo-company-south-delhi',
    'website-development-company-south-delhi',
    'ai-business-automation-services-south-delhi',
    'digital-marketing-automation-south-delhi',
    'real-estate-lead-generation-south-delhi',
  ],

  schema: {
    serviceType: 'lead generation services South Delhi',
    serviceDescription:
      'Lead generation services for South Delhi businesses using local SEO pages, conversion landing pages, Meta ad experiments, WhatsApp qualification, and lead tracking.',
    areaServedExtras: [],
  },
};

export default content;
