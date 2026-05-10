---
name: elite-web-build
description: Build premium, state-of-the-art websites across any industry. Decision-driven architecture, 21st.dev creative exploration, real forms, optimized images, verified trust, flagship motion, rigorous QA.
user-invocable: true
---

# Elite Web Build

Build premium websites that feel authored, expensive, and memorable. Works for hospitality, SaaS, agencies, e-commerce, services, editorial, portfolios, real estate, and any category where quality is a competitive advantage.

## Read this first, then branch

1. Read this file (SKILL.md) top to bottom — it's the operational core
2. At each decision step, branch to the companion file referenced
3. For a fast start: `QUICKSTART.md`
4. For architecture choices: `DECISION_TREES.md`
5. For step-by-step recipes: `RECIPES.md`
6. For creative direction: `WOW_SYSTEM.md` + `21ST_DEV_SYSTEM.md`
7. Before launch: `CHECKLISTS.md`
8. For reusable prompts: `PROMPT_TEMPLATES.md`

## When to use
- Building a new website from scratch
- Rebuilding an existing website
- Any project where the output must feel premium, not templated

## When NOT to use
- Web applications (dashboards, tools, complex state) → use a full-stack app framework
- Marketplaces (multi-vendor, transactions) → dedicated marketplace platform
- Social/UGC platforms → full-stack with database
- Projects where >30% of pages need auth, real-time data, or complex client interaction

## Core rules (non-negotiable)

1. **No fabricated trust.** Every rating, logo, press mention, testimonial, metric must be independently verifiable. See `CHECKLISTS.md > Trust Verification`.
2. **No fake forms.** Server-validated, real delivery, real error states. No `mailto:` primary. No fake success. See `CHECKLISTS.md > Forms`.
3. **Content images in `src/assets/` only.** Framework optimization only works on imported assets. `public/` files are served raw. See `CHECKLISTS.md > Images`.
4. **No uniform motion.** Vary animation types across the page. Not every section gets a reveal. See `WOW_SYSTEM.md > Motion`.
5. **Mobile-first.** 390px iPhone Safari is the primary canvas. Desktop enhances.
6. **Ship complete.** No placeholders, TODO markers, fake states, or incomplete translations in production.

## Step 1: Choose execution mode

| Mode | When | 21st.dev depth | Motion | QA |
|---|---|---|---|---|
| **Fast Premium** | Tight timeline, small site | Light (hero + cards) | Restrained | Mobile + forms + trust |
| **Standard** | Most projects | Standard (3-4 surfaces) | Authored | Full checklist |
| **Flagship** | High-budget, brand-defining | Aggressive (5+ surfaces, 4+ variants) | Dramatic + signature moment | Meticulous, all devices |

## Step 2: Choose archetype

See `RECIPES.md` for full recipes. Core archetypes:
- **Hospitality** → bookings, destination desire
- **Agency** → client inquiries, capability proof
- **SaaS** → signups/demos, product showcase
- **Service** → leads, authority + outcomes
- **Local** → calls/visits, local trust
- **E-commerce** → sales, brand desire
- **Editorial** → readership, subscriptions
- **Portfolio** → opportunities, skill proof
- **Real Estate** → property inquiries
- **Professional** → high-value leads, credibility
- **Event** → bookings, space showcase
- **Community** → member conversion

## Step 3: Choose architecture

See `DECISION_TREES.md` for full logic. Quick path:
- Under 50 pages, rare updates, no auth → **Astro static**
- Need 1-3 form endpoints → **Astro static + API routes** (`prerender = false`)
- Daily editor updates → **Astro + headless CMS** with rebuild triggers
- Personalized/auth pages → **Astro SSR** or consider Next.js/SvelteKit
- Heavy dynamic content → **Next.js or SvelteKit**

## Step 4: Choose content source

See `DECISION_TREES.md`. Quick path:
- < 20 items, dev edits → **TypeScript data files**
- 20-100 items, dev edits → **Astro Content Collections**
- Non-technical editors → **Headless CMS** (Sanity, Storyblok, Contentful)
- Large catalog, automated → **External API**

## Step 5: Choose wow level and art direction

| Setting | Effect |
|---|---|
| `WOW = restrained` | Clean hero + 1-2 reveals. No signature moment required. |
| `WOW = premium` | Cinematic hero + brand statement + editorial rhythm. Standard signature moment. |
| `WOW = flagship` | Full creative investment. Signature moment. Editorial asymmetry. Desktop composition attention. |
| `ART = minimal` | Sans display, clean grids, restrained color |
| `ART = editorial` | Serif display, asymmetric layouts, generous spacing |
| `ART = cinematic` | Full-bleed imagery, Ken Burns, dark contrast sections |
| `ART = bold` | Heavy type, strong color, high contrast |

See `WOW_SYSTEM.md` for signature moments, section recipes, and visual authorship rules.
See `21ST_DEV_SYSTEM.md` for creative exploration process.

## Step 6: Execute the build

Follow these 12 phases in order:

1. **Audit** — Research brand, content, trust elements. Verify everything.
2. **Architecture** — Choose archetype + rendering + CMS + scale. See `DECISION_TREES.md`.
3. **Content modeling** — TypeScript interfaces, translations, image imports. Every entity gets a `moodLine`.
4. **Design system** — `@theme` tokens, typography pairing, color roles, CTA strategy.
5. **Composition** — Build pages section by section following archetype flow. See `RECIPES.md`.
6. **Motion** — CSS reveal system, section-appropriate types. See `WOW_SYSTEM.md`.
7. **Forms** — Server endpoint, validation, success/error states, email delivery. See `CHECKLISTS.md`.
8. **Images** — All in `src/assets/`, `<Image>` everywhere, responsive widths/sizes/quality.
9. **SEO** — Sitemap, schema (by archetype), hreflang, OG, canonical.
10. **Accessibility** — Skip link, focus states, reduced motion, semantics, touch targets.
11. **QA** — Full checklist from `CHECKLISTS.md`.
12. **Launch** — Env vars, analytics, monitoring.

## Step 7: Apply safeguards

Before marking anything "done":
- [ ] No fabricated trust elements anywhere
- [ ] All forms submit to real server endpoint with real validation
- [ ] All content images served through framework optimization
- [ ] No `mailto:` as primary form action
- [ ] No placeholder strings in production code
- [ ] Language switch preserves page context (if multilingual)
- [ ] All translations complete
- [ ] Performance within budgets (LCP < 2.5s, CLS < 0.1, JS < 50KB)
- [ ] Reduced motion disables ALL animation
- [ ] Touch targets ≥ 48px

## Step 8: Launch QA

Run the full checklist in `CHECKLISTS.md > Launch QA`. No exceptions.

## Expected outputs

A Claude run following this skill should produce:
- A fully built, deployable website
- All pages in all locales
- Working forms with server validation and real success/error states
- Optimized images through the framework pipeline
- Sitemap, schema, OG, hreflang
- CSS-only motion system with reduced-motion support
- Skip link, focus states, semantic HTML
- Analytics configured
- Zero placeholder logic
- Zero fabricated trust signals

## Companion files

| File | Purpose |
|---|---|
| `QUICKSTART.md` | How to start a new project fast |
| `DECISION_TREES.md` | Architecture, CMS, commerce, interaction, scale decisions |
| `RECIPES.md` | Step-by-step recipes for common project types |
| `WOW_SYSTEM.md` | Signature moments, section recipes, visual authorship, motion |
| `21ST_DEV_SYSTEM.md` | Creative exploration process, queries, comparison, adaptation |
| `CHECKLISTS.md` | Trust, forms, images, accessibility, performance, launch QA |
| `ANTI_PATTERNS.md` | What never to do, grouped by domain |
| `PROMPT_TEMPLATES.md` | Reusable prompts for different build scenarios |
| `ORIGINS.md` | Hard-won lessons from the Rabagas build that became universal rules |

## Common failure modes

These are the mistakes most likely to slip through. Check for them explicitly.

1. **Images in `public/` called "optimized"** — they are NOT. Framework optimization only works on `src/assets/` imports.
2. **Fake form success** — a styled success state that shows without real server submission. Test by actually submitting.
3. **Unverified trust claim** — a Booking.com score, press mention, or client logo that looks real but has no source. Verify every one.
4. **Uniform motion** — every section with the same fade-up reveal. It reads as a plugin, not authorship. Vary types.
5. **Blue visited links** — Tailwind v4 base layer loses to browser default link color. The explicit reset outside `@layer` is required.
6. **Mixed-language UI** — one untranslated CTA, form label, or error message breaks the entire bilingual experience.
7. **Desktop stretch** — mobile layout that simply widens to 1440px. Desktop needs its own composition: asymmetry, varied widths, editorial splits.
8. **Template feel** — uniform card grids, centered everything, same section backgrounds. Break it with featured hierarchy, asymmetry, and contrast pacing.
