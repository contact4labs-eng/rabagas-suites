# Prompt Templates

## Build New Site

```
You are building a premium website using the elite-web-build skill.

CATEGORY: [HOSPITALITY / AGENCY / SAAS / SERVICE / LOCAL / ECOMMERCE / EDITORIAL / PORTFOLIO / REAL_ESTATE / PROFESSIONAL / EVENT / COMMUNITY]
BRAND: [name and brief description]
CONVERSION_GOAL: [bookings / leads / signups / sales / subscriptions / inquiries / demos]
LOCALES: [en / en+el / en+fr / single-locale]
CONTENT_SCALE: [SMALL <10p / MEDIUM 10-50p / LARGE 50-200p / ENTERPRISE 200+p]
CONTENT_SOURCE: [typescript / content-collections / headless-cms / api]
COMMERCE: [none / external-links / shopify / headless-commerce]
AUTH: [none / gated-content / member-accounts]

WOW_LEVEL: [restrained / premium / flagship]
ART_DIRECTION: [minimal / editorial / cinematic / bold]
21ST_EXPLORATION: [light / standard / aggressive]
MOTION_STYLE: [restrained / authored / dramatic]
TRUST_SENSITIVITY: [normal / strict / ultra-strict]
BUILD_SPEED: [fast / standard / meticulous]

Follow SKILL.md. Choose archetype from RECIPES.md. Apply decisions from DECISION_TREES.md.
Explore creative options per 21ST_DEV_SYSTEM.md at the specified depth.
Create signature moments per WOW_SYSTEM.md at the specified level.
Run all checks from CHECKLISTS.md before considering the build complete.
Avoid everything in ANTI_PATTERNS.md.
```

## Rebuild Existing Site

```
You are rebuilding [URL] as a premium website using the elite-web-build skill.

Phase 1: Audit the current site completely.
- Extract: content inventory, imagery, contact info, trust elements, suite/product/service data
- Verify: every rating, press mention, testimonial, metric against real sources
- Note: what to preserve, rewrite, or remove

Phase 2: Apply the build workflow.
CATEGORY: [from audit]
WOW_LEVEL: [client requirement]
ART_DIRECTION: [from brand assessment]

Follow SKILL.md phases 1-12. Use DECISION_TREES.md for architecture.
Do NOT clone the old design. Preserve brand essence. Redesign the experience.
```

## Flagship / High Art Direction Build

```
You are building a flagship website. This is the highest quality tier.

WOW_LEVEL: flagship
ART_DIRECTION: [editorial / cinematic]
21ST_EXPLORATION: aggressive
MOTION_STYLE: dramatic
BUILD_SPEED: meticulous

Requirements:
- Explore 6+ surfaces on 21st.dev with 4+ variants each (21ST_DEV_SYSTEM.md)
- Create one signature homepage moment (WOW_SYSTEM.md)
- Full editorial asymmetry and desktop composition attention
- Authored motion with section-specific types (no uniform reveals)
- Every entity gets a unique moodLine emotional differentiator
- Full QA on every page, every device, every locale, every form state

[Include standard parameters: CATEGORY, BRAND, CONVERSION_GOAL, LOCALES, etc.]
```

## Production Hardening

```
The site design is approved. Do NOT redesign.
Focus only on launch readiness:

1. Replace any mailto: with real server endpoints
2. Verify all images in src/assets/ with <Image> component
3. Configure sitemap + site URL
4. Create OG image
5. Add analytics (GA4/GTM)
6. Set production env vars for email delivery
7. Run CHECKLISTS.md > Launch QA completely
8. Fix any issues found
9. Run CHECKLISTS.md > Post-Launch monitoring setup
```

## Content/Trust Verification

```
Audit this website's trust elements:

For each of these, verify or flag:
- Client logos → written permission or public listing?
- Ratings/scores → link to verifiable source?
- Press mentions → article URL exists?
- Awards → verifiable body and year?
- Testimonials → real named people?
- Metrics → source documentation?
- Team → real employees with real photos?
- Certifications → current and verifiable?

Remove anything that fails: "Can you show me the source?"
```

## Multilingual Build

```
Building a multilingual site with [N] locales: [list locales]

Requirements:
- File-based routing: default at root, others prefixed (/el/, /fr/)
- Translation dictionary in data/translations.ts
- Every content entity has locale-aware fields
- Language switch preserves exact page context
- hreflang alternates on every page
- Complete translation on every page before launch
- Run CHECKLISTS.md > Multilingual Parity before considering complete
```

## Commerce-Aware Build

```
Building a site with commerce: [shopify / headless / external-links]

If shopify: Use Shopify Storefront API for product data. Never hardcode prices.
If headless: Connect to [Medusa / Commerce Layer / etc]. Product data from API.
If external-links: Simple "Buy on [platform]" CTAs. No cart needed.

RULE: Never build cart/checkout from scratch.
RULE: Product prices must reflect real current data.
RULE: Inventory claims must be real or omitted.
```

## CMS-Aware Build

```
Building with CMS: [sanity / storyblok / contentful / strapi / keystatic]

Requirements:
- Content schema defined in CMS matching TypeScript interfaces
- Build triggers on content publish
- Preview/draft support if CMS offers it
- Multilingual: use CMS locale fields, not duplicate entries
- Images: download to src/assets/ at build time, or use CMS image CDN
- Cache: implement appropriate caching for API calls
```

---

## Example invocations

### Luxury boutique hotel
```
CATEGORY: HOSPITALITY
BRAND: Rabagas Suites — heritage luxury suites in Apollonia, Sifnos, Greece
CONVERSION_GOAL: bookings
LOCALES: en+el
CONTENT_SCALE: MEDIUM
CONTENT_SOURCE: typescript
WOW_LEVEL: flagship
ART_DIRECTION: editorial
21ST_EXPLORATION: aggressive
MOTION_STYLE: authored
TRUST_SENSITIVITY: strict
BUILD_SPEED: meticulous
```

### SaaS marketing site
```
CATEGORY: SAAS
BRAND: Acme Analytics — real-time analytics for e-commerce teams
CONVERSION_GOAL: demos
LOCALES: en
CONTENT_SCALE: SMALL
CONTENT_SOURCE: typescript
WOW_LEVEL: premium
ART_DIRECTION: minimal
21ST_EXPLORATION: standard
MOTION_STYLE: restrained
TRUST_SENSITIVITY: normal
BUILD_SPEED: standard
```

### Design agency
```
CATEGORY: AGENCY
BRAND: Studio Lateral — branding and digital for premium brands
CONVERSION_GOAL: inquiries
LOCALES: en
CONTENT_SCALE: MEDIUM
CONTENT_SOURCE: content-collections
WOW_LEVEL: flagship
ART_DIRECTION: bold
21ST_EXPLORATION: aggressive
MOTION_STYLE: dramatic
TRUST_SENSITIVITY: strict
BUILD_SPEED: meticulous
```

### Local restaurant
```
CATEGORY: LOCAL
BRAND: Taverna Melos — modern Greek restaurant in Brooklyn
CONVERSION_GOAL: visits
LOCALES: en
CONTENT_SCALE: SMALL
CONTENT_SOURCE: typescript
WOW_LEVEL: restrained
ART_DIRECTION: editorial
21ST_EXPLORATION: light
MOTION_STYLE: restrained
TRUST_SENSITIVITY: normal
BUILD_SPEED: fast
```

### Real estate listings
```
CATEGORY: REAL_ESTATE
BRAND: Aegean Properties — luxury villas and land in the Cyclades
CONVERSION_GOAL: inquiries
LOCALES: en+el
CONTENT_SCALE: LARGE
CONTENT_SOURCE: headless-cms
WOW_LEVEL: premium
ART_DIRECTION: editorial
21ST_EXPLORATION: standard
MOTION_STYLE: restrained
TRUST_SENSITIVITY: strict
BUILD_SPEED: standard
```

### E-commerce brand
```
CATEGORY: ECOMMERCE
BRAND: Noma Ceramics — handmade pottery from Sifnos
CONVERSION_GOAL: sales
LOCALES: en
CONTENT_SCALE: MEDIUM
CONTENT_SOURCE: typescript
COMMERCE: shopify
WOW_LEVEL: premium
ART_DIRECTION: editorial
21ST_EXPLORATION: standard
MOTION_STYLE: authored
TRUST_SENSITIVITY: normal
BUILD_SPEED: standard
```
