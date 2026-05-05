import type { MetadataRoute } from 'next';
import { SITE_ORIGIN, SOUTH_DELHI_PAGES } from '@/content/southDelhi/shared';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_ORIGIN}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_ORIGIN}/hi`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    {
      url: `${SITE_ORIGIN}/portfolio`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/faqs`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const priorityBySlug: Record<string, number> = {
    'lead-generation-services-south-delhi': 0.9,
    'nehru-place-okhla-b2b-ai-seo-growth-systems': 0.7,
  };

  const southDelhiRoutes: MetadataRoute.Sitemap = SOUTH_DELHI_PAGES.map((p) => ({
    url: `${SITE_ORIGIN}/${p.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: priorityBySlug[p.slug] ?? 0.8,
  }));

  return [...staticRoutes, ...southDelhiRoutes];
}
