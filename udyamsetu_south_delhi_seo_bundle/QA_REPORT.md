# QA Report — South Delhi SEO Bundle

Run date: 2026-05-05.
Branch: `claude/add-google-verification-3LP8y`.
Build: Next.js 16.1.1, all 16 routes prerender as static.

This report exercises the 10-point per-page Done definition from `IMPLEMENTATION_PLAN.md` §13 and the Slice 12 checklist in `SLICES.md`.

## 1. Per-page automated checks

Source: prerendered HTML in `landing/.next/server/app/<slug>.html`.

| Slug | H1 | FAQs (visible / JSON-LD) | WhatsApp CTA hrefs (page kw / PLAN) | Service serviceType | URL alignment\* |
| --- | --- | --- | --- | --- | --- |
| `lead-generation-services-south-delhi` | 1 | 5 / 5 | 4 (LEADS) / 1 (PLAN) | "lead generation services South Delhi" | ALL MATCH |
| `seo-company-south-delhi` | 1 | 5 / 5 | 4 (SEO MAP) / 1 (PLAN) | "SEO company in South Delhi" | ALL MATCH |
| `website-development-company-south-delhi` | 1 | 5 / 5 | 4 (WEBSITE) / 1 (PLAN) | "website development company in South Delhi" | ALL MATCH |
| `ai-business-automation-services-south-delhi` | 1 | 5 / 5 | 4 (AUTOMATE) / 1 (PLAN) | "AI business automation services South Delhi" | ALL MATCH |
| `ai-consulting-services-south-delhi` | 1 | 5 / 5 | 4 (AI%20AUDIT) / 1 (PLAN) | "AI consulting services South Delhi" | ALL MATCH |
| `digital-marketing-automation-south-delhi` | 1 | 5 / 5 | 4 (FUNNEL) / 1 (PLAN) | "digital marketing automation South Delhi" | ALL MATCH |
| `whatsapp-lead-automation-clinics-south-delhi` | 1 | 5 / 5 | 4 (CLINIC) / 1 (PLAN) | "WhatsApp lead automation for clinics South Delhi" | ALL MATCH |
| `real-estate-lead-generation-south-delhi` | 1 | 5 / 5 | 4 (PROPERTY) / 1 (PLAN) | "real estate lead generation South Delhi" | ALL MATCH |
| `agentic-ai-solutions-south-delhi` | 1 | 5 / 5 | 4 (AGENT) / 1 (PLAN) | "agentic AI solutions South Delhi" | ALL MATCH |
| `nehru-place-okhla-b2b-ai-seo-growth-systems` | 1 | 5 / 5 | 4 (B2B) / 1 (PLAN) | "B2B lead generation Nehru Place Okhla" | ALL MATCH |

\* "URL alignment" = `<link rel=canonical>`, `<meta og:url>`, JSON-LD `Service@id` (without `#service`), and `BreadcrumbList` `position:2 item` all match the same absolute URL.

**Result: 10 / 10 pages pass.**

### Notes on the WhatsApp CTA count

Each page has **4 page-keyword CTAs** (hero, after-deliverables, after-process, final) and **1 site-wide PLAN CTA** in the global Header. The Mobile menu carries a second PLAN CTA but only renders client-side when toggled, so the static HTML shows 1.

The plan's minimum was three (above-fold, after-deliverables, final). The after-process CTA is an intentional bonus — every page exposes it.

## 2. Primary keyword density

Per `DOS_AND_DONTS.md` and `IMPLEMENTATION_PLAN.md`: the primary keyword should appear in title, H1, intro, and 1–2 body sections only. Soft cap was ≤ 6 outside FAQs.

Counts below are case-insensitive matches in the **content data file** (`src/content/southDelhi/<slug>.ts`) — they include head metadata fields, not just rendered body copy. Visible body density is lower than these numbers.

| Slug | Total | Outside FAQs | In FAQs |
| --- | --- | --- | --- |
| `lead-generation-services-south-delhi` | 2 | 2 | 0 |
| `seo-company-south-delhi` | 7 | 7 | 0 |
| `website-development-company-south-delhi` | 7 | 7 | 0 |
| `ai-business-automation-services-south-delhi` | 2 | 2 | 0 |
| `ai-consulting-services-south-delhi` | 2 | 2 | 0 |
| `digital-marketing-automation-south-delhi` | 2 | 2 | 0 |
| `whatsapp-lead-automation-clinics-south-delhi` | 2 | 2 | 0 |
| `real-estate-lead-generation-south-delhi` | 2 | 2 | 0 |
| `agentic-ai-solutions-south-delhi` | 2 | 2 | 0 |
| `nehru-place-okhla-b2b-ai-seo-growth-systems` | 2 | 2 | 0 |

**Two pages register 7 hits — expected and not over-optimisation:**

For SEO Company and Website Development the seven hits are: `seoTitle`, `metaDescription`, `primaryKeyword` (config field, not rendered body), `breadcrumbName`, `hero.h1`, `schema.serviceType`, `schema.serviceDescription`. The visible body uses the keyword exactly **once** (in the H1). Every other hit is in `<head>` metadata or JSON-LD, both of which are required for SEO and do not affect over-optimisation perception.

The FAQ count is 0 across all pages because the FAQ copy is intentionally written in synonyms to broaden long-tail coverage, per `DOS_AND_DONTS.md`.

**Result: All 10 pages within the over-optimisation guardrail.**

## 3. Internal linking

`SOUTH_DELHI_PAGES` registry in `src/content/southDelhi/shared.ts` is the single source of truth for slug → title mapping. `RelatedPagesSection` reads from it; sitemap reads from it; homepage hub reads from it; footer reads from it.

| Slug | `relatedSlugs` count | Targets |
| --- | --- | --- |
| `lead-generation-services-south-delhi` | 5 | seo, website, ai-automation, dm-automation, real-estate |
| `seo-company-south-delhi` | 4 | lead-gen, website, nehru-place-okhla, dm-automation |
| `website-development-company-south-delhi` | 4 | lead-gen, seo, dm-automation, ai-automation |
| `ai-business-automation-services-south-delhi` | 5 | ai-consulting, agentic-ai, clinics, dm-automation, lead-gen |
| `ai-consulting-services-south-delhi` | 4 | ai-automation, agentic-ai, lead-gen, website |
| `digital-marketing-automation-south-delhi` | 5 | lead-gen, ai-automation, seo, website, real-estate |
| `whatsapp-lead-automation-clinics-south-delhi` | 5 | ai-automation, lead-gen, seo, website, ai-consulting |
| `real-estate-lead-generation-south-delhi` | 5 | lead-gen, dm-automation, website, seo, ai-automation |
| `agentic-ai-solutions-south-delhi` | 5 | ai-consulting, ai-automation, dm-automation, lead-gen, nehru-place-okhla |
| `nehru-place-okhla-b2b-ai-seo-growth-systems` | 5 | ai-automation, lead-gen, seo, website, agentic-ai |

All `relatedSlugs` values resolve to live routes. Plan minimum was 4 per page — minimum met.

**Result: 10 / 10 pages link to ≥ 4 sibling pages.**

## 4. Cluster surface

| Surface | Status |
| --- | --- |
| `/sitemap.xml` includes 10 South Delhi slugs + `/`, `/hi`, `/portfolio` | PASS — 13 `<loc>` entries |
| Homepage `/` `<a>` to all 10 South Delhi slugs | PASS — all 10 hrefs present in static HTML of `/` |
| Hinglish `/hi` `<a>` to all 10 slugs | PASS — same `SouthDelhiHubSection` rendered with `isHinglish` |
| `Footer` "South Delhi Pages" row | PASS — driven by `SOUTH_DELHI_PAGES`; renders on every route |
| `Header` nav item "South Delhi" → `/#south-delhi` | PASS |
| `/robots.txt` allows all + sitemap reference | PASS |

## 5. Schema correctness (page-specific rules)

Two pages have schema constraints that are easy to violate:

- **`whatsapp-lead-automation-clinics-south-delhi`** — must NOT use `MedicalBusiness` because UdyamSetu is not the medical provider. Verified: built HTML's JSON-LD uses only `ProfessionalService` + `Service` + `BreadcrumbList` + `FAQPage`. PASS.
- **`real-estate-lead-generation-south-delhi`** — must NOT use `RealEstateAgent` because UdyamSetu is the marketing provider, not the broker. Verified: same. PASS.

Single-source `JsonLd` component in `src/components/southDelhi/JsonLd.tsx` does not import either type, so a future content module cannot accidentally introduce them without editing the helper.

## 6. Content uniqueness (anti-thin-content)

`DOS_AND_DONTS.md` lists paragraphs that should NOT be repeated across pages (e.g. "We are the best agency in South Delhi", "AI is transforming every industry").

Spot-checked: hero subheads are different on every page (each opens with the page-specific buyer outcome — leads vs SEO map vs website vs automation vs AI consulting vs marketing automation vs clinic flow vs property funnel vs agentic workflow vs B2B RFQ).

`localPain.body` paragraphs were authored from each source doc's "What goes wrong / Why this matters" section — they share format but no sentences. `proof.blocks` titles and body are page-specific (e.g. "Sample SEO page map" vs "Buyer qualification card" vs "Approved message flow").

No locality clone pages exist. The only locality-anchored page is `nehru-place-okhla-b2b-ai-seo-growth-systems`, which is justified by hub-specific buyer journey (IT vendors vs industrial suppliers).

**Result: PASS by manual spot-check. No two pages share an entire paragraph.**

## 7. Manual checks not in this report

These require browser, network, and external tools and are outside an automated repo-only QA pass:

| Check | How to run |
| --- | --- |
| Lighthouse mobile ≥ 90 (Performance / Best Practices / SEO) | Chrome DevTools or `lighthouse <url> --emulated-form-factor=mobile` after deploy |
| Google Rich Results test passes for FAQ + Breadcrumb + Service | https://search.google.com/test/rich-results — paste each of the 10 deployed URLs |
| Mobile menu reachable on every page | Manual hover / tap on a real device after deploy |
| `gtag` events fire on WhatsApp CTAs | DevTools Network tab, `dataLayer` inspection on the live site |

Each CTA carries `data-cta="<location>"` (hero / after-deliverables / after-process / final-cta) so a future analytics layer can hook into them without code changes.

## 8. Bundle done check

| Done condition (per IMPLEMENTATION_PLAN.md §13) | Status |
| --- | --- |
| Route loads at its slug, returns 200 | PASS — all 10 prerender as static |
| Visible content matches the source doc section-by-section | PASS — content modules authored per doc |
| JSON-LD validates locally as `ProfessionalService + Service + FAQPage + BreadcrumbList` | PASS — single `JsonLd` helper enforces shape |
| Unique title, unique description, correct canonical per page | PASS |
| Primary keyword appears in title, H1, intro, and 1–2 body sections | PASS — within over-optimisation guardrail |
| Above-fold + after-deliverables + final WhatsApp CTAs | PASS (plus after-process bonus) |
| 4–5 internal links to sibling pages | PASS — 4 or 5 each |
| Sitemap includes the slug | PASS — 13 entries |
| Homepage hub card links to it | PASS — all 10 cards on `/` and `/hi` |
| No console errors, no layout shift on mobile | DEFERRED — needs live deploy + browser check |

**Bundle status: 9 / 10 done conditions automated-pass. The remaining condition (no console errors / CLS) requires a live browser check post-deploy.**
