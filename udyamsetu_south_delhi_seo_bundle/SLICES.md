# Slices — Shipping the 10 South Delhi Pages

Each slice is independently reviewable, mergeable, and shippable. Slices follow the publish order from `SEO_BUNDLE_OVERVIEW.md` so the highest-revenue commercial intent (Lead Generation) ships first and the most niche page (Nehru Place / Okhla B2B) ships last.

Architectural decisions (routing, data shape, shared components, JSON-LD, SEO files) live in `IMPLEMENTATION_PLAN.md` and are not repeated here.

## Conventions used in every slice

- Branch: `claude/sdlhi-<slice-id>-<short-name>`. PR title: `Slice <id>: <name>`.
- Each slice produces: a working route (or shared infra), updated sitemap, lint clean, build green.
- "Source of truth" for every page slice = the matching markdown in `pages/`.
- Done = all 10 items in `IMPLEMENTATION_PLAN.md` §13.

---

## Slice 0 — Foundations (no public-facing route)

**Goal.** Land the shared infra that the 10 page slices depend on, without shipping a page yet.

**Adds:**

- `landing/src/content/southDelhi/types.ts` — `PageContent` interface.
- `landing/src/content/southDelhi/shared.ts` — WhatsApp link, brand constants, `SOUTH_DELHI_PAGES` registry of `{slug, title, oneLiner, whatsappKeyword}` for all 10 pages (titles + slugs from `PAGE_MAP.md`).
- `landing/src/components/southDelhi/SouthDelhiPage.tsx` — composing template.
- `landing/src/components/southDelhi/{Hero, LocalPainSection, DeliverablesSection, FirstProjectsSection, ProcessSection, ProofSection, FinalCTASection, RelatedPagesSection, Breadcrumbs, JsonLd}.tsx`.
- `landing/src/app/sitemap.ts`, `landing/src/app/robots.ts`.
- Light extension of `CTAButtons` to accept `primaryLabel`, `whatsappKeyword`, `secondaryHref` (default behaviour unchanged).

**Verifies:** `npm run build` succeeds; sitemap returns the existing routes only (no new slugs yet); `SOUTH_DELHI_PAGES` is wired in but pages don't exist.

**Why first:** Slices 1–10 each touch ~1 file per page if foundations are done; they each touch ~10 files if not.

---

## Slice 1 — Lead Generation Services in South Delhi

- **Slug:** `/lead-generation-services-south-delhi`
- **Source doc:** `pages/04_lead_generation_services_south_delhi.md`
- **WhatsApp keyword:** `LEADS`
- **Conversion goal:** Free Growth Plan / lead-system audit.
- **Internal links to populate:** SEO Company, Website Development, AI Business Automation, Digital Marketing Automation, Real Estate Lead Generation.
- **Why first to publish:** Highest commercial-intent query, central conversion role, anchors the cluster.

**Adds:** `landing/src/content/southDelhi/lead-generation-services-south-delhi.ts` + `landing/src/app/lead-generation-services-south-delhi/page.tsx`. Sibling cards on this page point at routes that don't exist yet — link them anyway; they 404 until later slices and the sitemap update closes the gap.

**Verifies:** Route 200, JSON-LD validates, primary keyword "lead generation services South Delhi" in title/H1/intro, ≥4 visible FAQs match `FAQPage` JSON-LD, 3 WhatsApp CTAs.

---

## Slice 2 — SEO Company in South Delhi

- **Slug:** `/seo-company-south-delhi`
- **Source doc:** `pages/05_seo_company_south_delhi.md`
- **WhatsApp keyword:** `SEO MAP`
- **Conversion goal:** SEO footprint audit / South Delhi page map.
- **Internal links:** Lead Generation, Website Development, Nehru Place/Okhla B2B, Digital Marketing Automation, Portfolio.
- **Notes:** Proof block = search footprint map + safe citation inventory + no-spam link policy (per `DOS_AND_DONTS.md`). One contextual link in copy to Lead Generation closes the cluster's first triangle (Slice 1 ↔ Slice 2).

---

## Slice 3 — Website Development Company in South Delhi

- **Slug:** `/website-development-company-south-delhi`
- **Source doc:** `pages/06_website_development_company_south_delhi.md`
- **WhatsApp keyword:** `WEBSITE`
- **Conversion goal:** Website audit / conversion-website proposal.
- **Internal links:** Lead Generation, SEO Company, Digital Marketing Automation, AI Business Automation, Portfolio.
- **Notes:** Proof block = mobile mockups + page architecture + launch QA checklist. Heavy use of the existing `/portfolio` page as proof; one contextual deep-link into a relevant `ProjectCard`.

---

## Slice 4 — AI Business Automation Services in South Delhi

- **Slug:** `/ai-business-automation-services-south-delhi`
- **Source doc:** `pages/03_ai_business_automation_services_south_delhi.md`
- **WhatsApp keyword:** `AUTOMATE`
- **Conversion goal:** Workflow automation audit.
- **Internal links:** AI Consulting, Agentic AI, WhatsApp Lead Automation for Clinics, Digital Marketing Automation, Lead Generation.
- **Notes:** Proof block = before/after lead flow + WhatsApp script + CRM-lite pipeline. This page becomes the hub for the three AI pages.

---

## Slice 5 — AI Consulting Services in South Delhi

- **Slug:** `/ai-consulting-services-south-delhi`
- **Source doc:** `pages/01_ai_consulting_services_south_delhi.md`
- **WhatsApp keyword:** `AI AUDIT`
- **Conversion goal:** AI Opportunity Audit / consultation lead.
- **Internal links:** AI Business Automation, Agentic AI, Lead Generation, Website Development, Portfolio.
- **Notes:** Proof block = sample workflow map + pilot scorecard + governance/human-approval rules. Disclaimer: no autonomous legal/medical/financial decisions.

---

## Slice 6 — Digital Marketing Automation in South Delhi

- **Slug:** `/digital-marketing-automation-south-delhi`
- **Source doc:** `pages/07_digital_marketing_automation_south_delhi.md`
- **WhatsApp keyword:** `FUNNEL`
- **Conversion goal:** Marketing automation audit.
- **Internal links:** Lead Generation, AI Business Automation, SEO Company, Website Development, Real Estate Lead Generation.
- **Notes:** Distinguish from AI Business Automation by anchoring on campaigns + lead-source tracking + nurturing + reporting (not arbitrary internal workflows).

---

## Slice 7 — WhatsApp Lead Automation for Clinics in South Delhi

- **Slug:** `/whatsapp-lead-automation-clinics-south-delhi`
- **Source doc:** `pages/08_whatsapp_lead_automation_clinics_south_delhi.md`
- **WhatsApp keyword:** `CLINIC`
- **Conversion goal:** Clinic Lead Flow Audit.
- **Internal links:** AI Business Automation, Lead Generation, SEO Company, Website Development, AI Consulting.
- **Notes (critical):** Schema is `ProfessionalService` only — **do not** use `MedicalBusiness`; UdyamSetu is not the medical provider. Disclaimer: no diagnosis, no medical advice, human approval for sensitive replies. Saket / Malviya Nagar locality references where natural.

---

## Slice 8 — Real Estate Lead Generation in South Delhi

- **Slug:** `/real-estate-lead-generation-south-delhi`
- **Source doc:** `pages/09_real_estate_lead_generation_south_delhi.md`
- **WhatsApp keyword:** `PROPERTY`
- **Conversion goal:** Property Lead Funnel Audit.
- **Internal links:** Lead Generation, Digital Marketing Automation, Website Development, SEO Company, AI Business Automation.
- **Notes (critical):** Schema is `ProfessionalService` only — **do not** use `RealEstateAgent`. Proof block = buyer qualification questions + site-visit pipeline + CPL/quality reporting. Localities GK / Defence Colony / Vasant Kunj / Chhatarpur as buyer context only.

---

## Slice 9 — Agentic AI Solutions in South Delhi

- **Slug:** `/agentic-ai-solutions-south-delhi`
- **Source doc:** `pages/02_agentic_ai_solutions_south_delhi.md`
- **WhatsApp keyword:** `AGENT`
- **Conversion goal:** AI Agent Feasibility Call.
- **Internal links:** AI Consulting, AI Business Automation, Digital Marketing Automation, Lead Generation, Nehru Place / Okhla B2B.
- **Notes:** Don't market UdyamSetu as a product — it's an agentic AI **implementation service**. Heavy emphasis on bounded scope, human approval, escalation rules.

---

## Slice 10 — Nehru Place & Okhla B2B AI + SEO Growth Systems

- **Slug:** `/nehru-place-okhla-b2b-ai-seo-growth-systems`
- **Source doc:** `pages/10_nehru_place_okhla_b2b_ai_seo_growth_systems.md`
- **WhatsApp keyword:** `B2B`
- **Conversion goal:** B2B Growth System Audit (product / service / RFQ).
- **Internal links:** AI Business Automation, Lead Generation, SEO Company, Website Development, Agentic AI.
- **Notes:** This is the only locality-anchored page — Nehru Place IT vendors, Okhla manufacturers/exporters/distributors. Proof block = RFQ form + product category page + quote follow-up workflow. Locality phrasing is allowed densely *here* because the buyer journey is genuinely hub-specific (offsetting the don't-clone rule).

---

## Slice 11 — Cluster integration

After all 10 routes exist:

- **`app/page.tsx`** — add a "South Delhi AI, SEO & Lead Systems" section between the existing Modules and Packages sections, rendering 10 cards from `SOUTH_DELHI_PAGES`. This is the homepage hub the cluster needs.
- **`app/hi/page.tsx`** — same hub block with Hinglish labels (slugs unchanged; pages remain English for now).
- **`Footer.tsx`** — add a "South Delhi" column listing the 10 slugs, replacing nothing else.
- **`Header.tsx`** — add a single "South Delhi" nav item linking to `/#south-delhi` (the new homepage section).
- **`sitemap.ts`** — confirm all 10 slugs ship; set sensible `priority` (Lead Gen 0.9, others 0.8, B2B 0.7) and `changeFrequency: 'monthly'`.

**Verifies:** Click-through from homepage hub reaches every slug; every page's `RelatedPagesSection` links to ≥4 sibling pages; `gh` sitemap is reachable at `/sitemap.xml`.

---

## Slice 12 — Cluster QA pass

Not a code slice — a verification gate before announcing the cluster live.

**Checklist (run once per page, all 10):**

1. Lighthouse mobile ≥ 90 on Performance, Best Practices, SEO.
2. Google Rich Results test passes for FAQ + Breadcrumb + Service on every slug.
3. Primary keyword count ≤ 6 outside FAQs (manual scan).
4. `<h1>` count = 1; `<h2>` ordering logical; no orphan `<h3>` without `<h2>`.
5. Three WhatsApp CTAs present; each `wa.me` link uses the right page-specific keyword.
6. `RelatedPagesSection` shows 4–5 cards, each links to a real page.
7. No duplicated paragraph across two pages (spot-check 3 random sections per page).
8. `canonical`, `og:url`, and `breadcrumb itemListElement[2].item` all use the same absolute URL.
9. `areaServed` matches the doc; clinic page uses Saket/Malviya Nagar context, real-estate page uses GK/Vasant Kunj/Chhatarpur, B2B page uses Nehru Place/Okhla.
10. Homepage hub renders 10 cards in correct order; mobile menu reachable.

**Output:** A `QA_REPORT.md` in this folder with pass/fail per page and remediation tickets for any fail.

---

## Dependency graph

```
Slice 0 (foundations)
    ├─→ Slice 1 (Lead Gen)
    ├─→ Slice 2 (SEO)
    ├─→ Slice 3 (Website Dev)
    ├─→ Slice 4 (AI Automation)
    ├─→ Slice 5 (AI Consulting)
    ├─→ Slice 6 (Digital Marketing Automation)
    ├─→ Slice 7 (Clinics)
    ├─→ Slice 8 (Real Estate)
    ├─→ Slice 9 (Agentic AI)
    └─→ Slice 10 (Nehru Place / Okhla B2B)
                    │
                    └─→ Slice 11 (Cluster integration)
                                    │
                                    └─→ Slice 12 (QA)
```

Slices 1–10 are independent of each other and can be parallelised across reviewers; only Slice 0 blocks them, and only Slice 11 depends on all of them being merged.

## Effort estimate (rough)

| Slice | Effort | Notes |
| --- | --- | --- |
| 0 | M | Types + 9 components + sitemap + CTA extension |
| 1 | M | First content build, validates the template |
| 2–10 | S each | Mostly content authoring once Slice 1 lands |
| 11 | S | Homepage section + footer + header item |
| 12 | S | QA pass + report |

Total: ~12 slices, ~13–15 working units.
