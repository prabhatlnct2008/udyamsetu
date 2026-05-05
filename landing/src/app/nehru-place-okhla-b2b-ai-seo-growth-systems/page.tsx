import type { Metadata } from 'next';
import SouthDelhiPage from '@/components/southDelhi/SouthDelhiPage';
import content from '@/content/southDelhi/nehru-place-okhla-b2b-ai-seo-growth-systems';
import { buildCanonical } from '@/content/southDelhi/shared';

const canonical = buildCanonical(content.slug);

export const metadata: Metadata = {
  title: content.seoTitle,
  description: content.metaDescription,
  keywords: [content.primaryKeyword, ...(content.secondaryKeywords ?? [])].join(', '),
  alternates: { canonical },
  openGraph: {
    title: content.seoTitle,
    description: content.metaDescription,
    url: canonical,
    siteName: 'UdyamSetu',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: content.seoTitle,
    description: content.metaDescription,
  },
};

export default function Page() {
  return <SouthDelhiPage content={content} />;
}
