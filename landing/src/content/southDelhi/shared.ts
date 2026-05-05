export const SITE_ORIGIN = 'https://udyamsetuai.in';
export const WHATSAPP_NUMBER = '918882567801';

export const buildWhatsAppLink = (keyword: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(keyword)}`;

export const buildCanonical = (slug: string): string =>
  `${SITE_ORIGIN}/${slug}`;

export interface PageRegistryEntry {
  slug: string;
  title: string;
  oneLiner: string;
  whatsappKeyword: string;
}

export const SOUTH_DELHI_PAGES: PageRegistryEntry[] = [
  {
    slug: 'lead-generation-services-south-delhi',
    title: 'Lead Generation Services in South Delhi',
    oneLiner:
      'Local SEO pages, conversion landing pages, WhatsApp qualification, and tracking — built for qualified enquiries, not click counts.',
    whatsappKeyword: 'LEADS',
  },
  {
    slug: 'seo-company-south-delhi',
    title: 'SEO Company in South Delhi',
    oneLiner:
      'Search footprint, technical SEO, local authority, and a South Delhi page map for businesses that want measurable visibility.',
    whatsappKeyword: 'SEO MAP',
  },
  {
    slug: 'website-development-company-south-delhi',
    title: 'Website Development Company in South Delhi',
    oneLiner:
      'Conversion-first websites and landing-page systems for South Delhi brands that want a lead-ready asset, not a brochure.',
    whatsappKeyword: 'WEBSITE',
  },
  {
    slug: 'ai-business-automation-services-south-delhi',
    title: 'AI Business Automation Services in South Delhi',
    oneLiner:
      'Workflow automation for follow-ups, WhatsApp, CRM, and reporting — built around real bottlenecks, not AI buzzwords.',
    whatsappKeyword: 'AUTOMATE',
  },
  {
    slug: 'ai-consulting-services-south-delhi',
    title: 'AI Consulting Services in South Delhi',
    oneLiner:
      'Practical AI consulting that picks one high-ROI pilot, scopes the build, and turns AI strategy into a measurable workflow.',
    whatsappKeyword: 'AI AUDIT',
  },
  {
    slug: 'digital-marketing-automation-south-delhi',
    title: 'Digital Marketing Automation in South Delhi',
    oneLiner:
      'Campaigns, lead-source tracking, nurturing, and reporting connected end-to-end — for marketing that actually compounds.',
    whatsappKeyword: 'FUNNEL',
  },
  {
    slug: 'whatsapp-lead-automation-clinics-south-delhi',
    title: 'WhatsApp Lead Automation for Clinics in South Delhi',
    oneLiner:
      'Appointment-aware WhatsApp flows, reminders, and lead capture for clinics — with human approval on sensitive replies.',
    whatsappKeyword: 'CLINIC',
  },
  {
    slug: 'real-estate-lead-generation-south-delhi',
    title: 'Real Estate Lead Generation in South Delhi',
    oneLiner:
      'Property lead funnels with budget, location, and possession-stage qualification — built for site-visit ready buyers.',
    whatsappKeyword: 'PROPERTY',
  },
  {
    slug: 'agentic-ai-solutions-south-delhi',
    title: 'Agentic AI Solutions in South Delhi',
    oneLiner:
      'Bounded AI agents for multi-step business workflows with human approval, escalation rules, and measurable outputs.',
    whatsappKeyword: 'AGENT',
  },
  {
    slug: 'nehru-place-okhla-b2b-ai-seo-growth-systems',
    title: 'Nehru Place & Okhla B2B AI + SEO Growth Systems',
    oneLiner:
      'B2B growth systems for Nehru Place IT vendors and Okhla suppliers — RFQ capture, quote follow-up, and category SEO.',
    whatsappKeyword: 'B2B',
  },
];

export const PAGES_BY_SLUG: Record<string, PageRegistryEntry> = Object.fromEntries(
  SOUTH_DELHI_PAGES.map((p) => [p.slug, p]),
);

export const SHARED_AREA_SERVED = [
  'Saket',
  'Hauz Khas',
  'Green Park',
  'Greater Kailash',
  'Malviya Nagar',
  'Defence Colony',
  'Lajpat Nagar',
  'South Extension',
  'Vasant Kunj',
  'Vasant Vihar',
  'Mehrauli',
  'Chhatarpur',
  'Nehru Place',
  'Okhla Industrial Area',
];

export const PROFESSIONAL_SERVICE_NODE_ID = `${SITE_ORIGIN}/#udyamsetu-growth-studio`;
