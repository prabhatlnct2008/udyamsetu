import type { ReactNode } from 'react';

export type RichText = string | ReactNode;

export interface HeroBlock {
  h1: string;
  subhead: RichText;
  bullets?: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  trustChips?: string[];
  trustNote?: string;
}

export interface LocalPainBlock {
  heading: string;
  body: RichText[];
  vignettes?: { area: string; story: string }[];
  pullquote?: string;
}

export interface DeliverableItem {
  title: string;
  body: RichText;
}

export interface DeliverablesBlock {
  heading: string;
  intro?: RichText;
  items: DeliverableItem[];
  ctaLabel?: string;
}

export interface FirstProjectsBlock {
  heading: string;
  intro?: RichText;
  cards: { audience: string; pilot: string }[];
  closingNote?: RichText;
}

export interface ProcessStep {
  title: string;
  body: RichText;
}

export interface ProcessBlock {
  heading: string;
  steps: ProcessStep[];
  ctaLabel?: string;
}

export interface ProofBlock {
  heading: string;
  blocks: { title: string; body: RichText }[];
  disclaimers?: string[];
}

export interface FinalCtaBlock {
  heading: string;
  body: RichText;
  bullets?: string[];
  ctaLabel: string;
  supportingLine?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SchemaBlock {
  serviceType: string;
  serviceDescription: string;
  areaServedExtras?: string[];
}

export interface PageContent {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  whatsappKeyword: string;
  breadcrumbName: string;
  hero: HeroBlock;
  localPain: LocalPainBlock;
  deliverables: DeliverablesBlock;
  firstProjects?: FirstProjectsBlock;
  process: ProcessBlock;
  proof: ProofBlock;
  finalCta: FinalCtaBlock;
  faqs: FaqItem[];
  relatedSlugs: string[];
  schema: SchemaBlock;
}
