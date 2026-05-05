import type { PageContent } from '@/content/southDelhi/types';
import {
  PROFESSIONAL_SERVICE_NODE_ID,
  SHARED_AREA_SERVED,
  SITE_ORIGIN,
  buildCanonical,
} from '@/content/southDelhi/shared';

interface Props {
  content: PageContent;
}

export default function JsonLd({ content }: Props) {
  const canonical = buildCanonical(content.slug);
  const placeNames = Array.from(
    new Set([...SHARED_AREA_SERVED, ...(content.schema.areaServedExtras ?? [])]),
  );

  const graph: Record<string, unknown>[] = [
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
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: content.breadcrumbName,
      url: canonical,
      provider: { '@id': PROFESSIONAL_SERVICE_NODE_ID },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'South Delhi' },
        ...placeNames.map((name) => ({ '@type': 'Place', name })),
      ],
      serviceType: content.schema.serviceType,
      description: content.schema.serviceDescription,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: content.breadcrumbName,
          item: canonical,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: content.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ];

  const data = { '@context': 'https://schema.org', '@graph': graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
