# Implementation Plan — South Delhi SEO Bundle (10 Pages)

This plan turns the 10 South Delhi page docs in `udyamsetu_south_delhi_seo_bundle/pages/` into live Next.js routes on the existing `landing/` site. It is the architectural decisions doc; the step-by-step shipping order lives in `SLICES.md`.

## 1. Goal and constraints

**Goal.** Ship 10 distinct, conversion-focused, SEO-optimised landing pages under the existing `landing/` Next.js app, one per `pages/*.md` doc, all linked from a South Delhi cluster hub.

**Hard constraints from `DOS_AND_DONTS.md` and `PAGE_MAP.md`:**

- Each page must be unique in audience, pain, deliverables, FAQs, proof block, schema, and CTA copy. No clone-and-swap.
- Primary keyword used in SEO title, H1, intro, and 1–2 body sections only — no over-optimisation.
- Each page needs visible FAQs that match the FAQPage JSON-LD.
- Each page needs a unique proof / trust block, not a generic "we are the best" paragraph.
- WhatsApp CTA appears above the fold, after deliverables, and in the final CTA. WhatsApp link: `https://wa.me/918882567801?text=<KEYWORD>` — keyword is page-specific (AI AUDIT, LEADS, SEO MAP, WEBSITE, AGENT, AUTOMATE, FUNNEL, CLINIC, PROPERTY, B2B).
- ProfessionalService + Service + FAQPage + BreadcrumbList JSON-LD on every page. No `MedicalBusiness` on the clinic page, no `RealEstateAgent` on the real-estate page.
- No fake address; use `areaServed` only.
- All 10 pages link to each other per the internal-link matrix in `SEO_BUNDLE_OVERVIEW.md` "Internal linking strategy".
- Homepage must surface a "South Delhi AI, SEO & Lead Systems" cluster section linking to all 10.

## 2. Existing code surface (what we reuse)

Already in `landing/src/`:

- `app/layout.tsx` — root metadata, GA gtag, google-site-verification.
- `app/page.tsx` — homepage (hero, pain, modules, packages, FAQ).
- `app/portfolio/page.tsx` — full portfolio with metadata pattern we will mirror.
- `app/hi/page.tsx` — Hinglish home.
- `components/Header.tsx`, `Footer.tsx`, `CTAButtons.tsx`, `FAQ.tsx`, `SectionCard.tsx`, `ModuleCard.tsx`, `PackageCard.tsx`, `ProjectCard.tsx`.
- Tokens already in use: `#FFF6E8` (bg), `#1F2A6D` (deep blue), `#FF8A00` (orange CTA), `#1F7A3A` (green check), `#E9D8C3` (border), `#EEF1FF` (info). Fonts: Poppins (display), Inter (body), Mukta (Hinglish).

We will **not** duplicate `Header`, `Footer`, `FAQ`, or `CTAButtons`. We add new section primitives only where the existing ones don't fit.

## 3. Routing and file layout

Next.js App Router, one route per page, slug matching the doc.

```
landing/src/app/
├── ai-consulting-services-south-delhi/page.tsx
├── agentic-ai-solutions-south-delhi/page.tsx
├── ai-business-automation-services-south-delhi/page.tsx
├── lead-generation-services-south-delhi/page.tsx
├── seo-company-south-delhi/page.tsx
├── website-development-company-south-delhi/page.tsx
├── digital-marketing-automation-south-delhi/page.tsx
├── whatsapp-lead-automation-clinics-south-delhi/page.tsx
├── real-estate-lead-generation-south-delhi/page.tsx
└── nehru-place-okhla-b2b-ai-seo-growth-systems/page.tsx
```

Each `page.tsx` is a **thin file**: it imports the page's data module + a shared `<SouthDelhiPage>` template and exports `metadata`.

## 4. Data-driven page architecture

Because the 10 pages share the same skeleton (hero → local pain → deliverables → first projects → process → proof → final CTA → FAQ → related links) but differ entirely in copy, we separate **content** from **presentation**.

```
landing/src/
├── app/<slug>/page.tsx                     # 30-line route file
├── content/southDelhi/
│   ├── types.ts                            # PageContent interface
│   ├── shared.ts                           # WhatsApp link, brand, areaServed list, related-link matrix
│   └── <slug>.ts                           # one data module per page (the 80% of work)
└── components/southDelhi/
    ├── SouthDelhiPage.tsx                  # composes all sections from PageContent
    ├── Hero.tsx
    ├── LocalPainSection.tsx
    ├── DeliverablesSection.tsx
    ├── FirstProjectsSection.tsx
    ├── ProcessSection.tsx
    ├── ProofSection.tsx
    ├── FinalCTASection.tsx
    ├── RelatedPagesSection.tsx
    ├── Breadcrumbs.tsx
    └── JsonLd.tsx                          # injects ProfessionalService+Service+FAQPage+BreadcrumbList
```

**`PageContent` shape (sketch, not final):**

```ts
interface PageContent {
  slug: string;                    // 'lead-generation-services-south-delhi'
  seoTitle: string;
  metaDescription: string;
  canonical: string;
  primaryKeyword: string;
  whatsappKeyword: string;         // 'LEADS', 'SEO MAP', etc.
  breadcrumbName: string;
  hero: { h1: string; subhead: string; bullets: string[]; ctaLabel: string; secondaryCta?: string };
  localPain: { heading: string; body: string[]; vignettes?: { area: string; story: string }[] };
  deliverables: { heading: string; intro?: string; items: { title: string; body: string }[] };
  firstProjects?: { heading: string; intro?: string; cards: { audience: string; pilot: string }[] };
  process: { heading: string; steps: { title: string; body: string }[] };
  proof: { heading: string; blocks: { title: string; body: string }[]; disclaimers?: string[] };
  finalCta: { heading: string; body: string; bullets?: string[]; ctaLabel: string };
  faqs: { question: string; answer: string }[];     // also feeds FAQPage JSON-LD
  relatedSlugs: string[];          // 4–5 sibling pages, per PAGE_MAP
  schema: {
    serviceType: string;           // 'AI consulting services South Delhi'
    serviceDescription: string;
    areaServedExtras?: string[];   // page-specific Place names if doc lists them
  };
}
```

The `SouthDelhiPage` template renders only the sections present on `content` (e.g. `firstProjects` is optional), so each doc's structure is preserved while sharing layout chrome.

## 5. SEO and metadata

Per page, in the route file:

```ts
export const metadata: Metadata = {
  title: content.seoTitle,
  description: content.metaDescription,
  alternates: { canonical: content.canonical },
  openGraph: { title: content.seoTitle, description: content.metaDescription, url: content.canonical, type: 'website', siteName: 'UdyamSetu' },
  twitter: { card: 'summary_large_image', title: content.seoTitle, description: content.metaDescription },
};
```

JSON-LD is rendered by `<JsonLd content={content} />` inside the page body. The helper composes the `@graph` exactly as shown in each doc's "Recommended JSON-LD" section, but reads `serviceType`, `description`, `areaServed`, FAQs, and breadcrumb from `content` so we never hand-maintain JSON-LD per page.

**Other SEO files we add:**

- `landing/src/app/sitemap.ts` — emit `/`, `/portfolio`, `/hi`, plus all 10 South Delhi slugs with `lastModified` + monthly `changeFrequency`.
- `landing/src/app/robots.ts` — allow all, point at sitemap.
- `landing/public/robots.txt` removed if present (we move to the dynamic version).

## 6. Visual / UX rules

- Reuse existing tokens and fonts. No new color system.
- Hero matches the existing `warli-pattern` treatment from `app/page.tsx` for visual continuity.
- Reuse `<CTAButtons>` for primary/secondary CTAs but allow per-page override of label and WhatsApp keyword via props (small, non-breaking extension: `primaryLabel?`, `whatsappKeyword?`, `secondaryHref?`).
- Reuse `<FAQ>` as-is for the FAQ accordion.
- Reuse `<Header>` and `<Footer>` unchanged. `Footer` already lists `/portfolio` and Hinglish toggle; we extend it later if we want the cluster in the footer.
- Mobile-first: every section uses the existing `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` rhythm.
- One H1 per page. H2 per major section. No `<h1>` inside sections.

## 7. CTA system

- Primary CTA on every page is WhatsApp with the page-specific keyword (e.g. `?text=LEADS`).
- Secondary CTA is in-page anchor (`#deliverables` or `#process`) or `/portfolio` for credibility.
- All 10 pages get the WhatsApp CTA above the fold, after deliverables, and in the final CTA block — the template enforces this.
- `wa.me/918882567801` is the single source of truth (already in `CTAButtons.tsx`).

## 8. Internal linking (cluster integration)

Two mechanisms, both required:

1. **Contextual in-copy links.** Inside each page's body copy, link to 1–2 sibling pages where the doc explicitly references them. Implemented by allowing inline `<a>` in section body strings — bodies become `string | ReactNode`.
2. **`<RelatedPagesSection>`** at the bottom of each page renders 4–5 sibling cards from `content.relatedSlugs`, fed by a single map of `{ slug → { title, oneLiner } }` in `content/southDelhi/shared.ts`. Order and choices come from `PAGE_MAP.md`.
3. **Homepage hub.** Add a "South Delhi AI, SEO & Lead Systems" section to `app/page.tsx` (plus Hinglish equivalent on `app/hi/page.tsx`) with cards for all 10 pages.

## 9. Analytics / verification

- GA gtag is already global via `app/layout.tsx`. Each page inherits.
- We add per-CTA event tracking later (out of scope for this bundle); for now, a `data-cta="<page>:<location>"` attribute on each CTA so a future `gtag('event', ...)` hook can pick it up.
- `google-site-verification` already in root metadata, applies to every new route.

## 10. Anti-thin-content guardrails

Mechanisms that make it hard to ship a clone:

- `PageContent` requires non-trivial fields (≥4 deliverables, ≥3 process steps, ≥4 FAQs, ≥1 disclaimer, ≥2 proof blocks). A small Zod-style assertion in the page route runs at module load in dev.
- Each `content/southDelhi/<slug>.ts` is sourced from its matching `pages/<NN>_<slug>.md`. Reviewer rule: copy must come from the doc, not from a sibling data file.
- `PAGE_MAP.md` and `DOS_AND_DONTS.md` are the source of truth; this doc and `SLICES.md` are the build plan.

## 11. Out of scope (intentionally)

- Hinglish translations of the 10 pages (English first, mirror later).
- A/B testing harness.
- Per-page hero illustrations / Warli artwork variants.
- Pricing tables on the new pages (the homepage `PackageCard` block is the pricing surface).
- Form-based lead capture (WhatsApp-first per existing positioning).

## 12. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Pages drift toward boilerplate | Source copy directly from `pages/*.md`, not from neighbouring data files. PR review checks one section at random. |
| JSON-LD divergence from visible content | `JsonLd.tsx` reads FAQs, breadcrumb, `areaServed` from the same `PageContent` object the page renders. |
| Over-optimisation for primary keyword | Lint rule (manual checklist in PR template): primary keyword count ≤ 6 per page outside FAQs. |
| Internal-link sprawl | `relatedSlugs` capped at 5 per page; `shared.ts` is the only registry. |
| Sitemap forgotten | `sitemap.ts` derives URLs from the same slug list used by `RelatedPagesSection`, so adding a page automatically registers it. |
| Lighthouse regressions | All sections SSR, no client JS except the existing `FAQ` accordion. |

## 13. Done definition

A page is done when:

1. Route loads at its slug, returns 200.
2. Visible content matches the doc section-by-section.
3. JSON-LD validates in Google's Rich Results test (FAQ + Breadcrumb + Service).
4. Metadata: unique title, unique description, correct canonical.
5. Primary keyword appears in title, H1, intro, and 1–2 body sections.
6. Above-the-fold WhatsApp CTA + after-deliverables CTA + final CTA all present.
7. 4–5 internal links to sibling pages (RelatedPagesSection + ≥1 contextual link).
8. Sitemap includes the slug.
9. Homepage hub card links to it.
10. No console errors, no layout shift on mobile.

The bundle is done when all 10 pages meet (1)–(10) and the homepage hub renders all 10 cards.
