# Decision Trees

## Framework

```
Is >30% of pages dynamic (auth, real-time, complex state)?
  YES → Next.js / SvelteKit / Remix
  NO → Astro

Does the project need any server-side rendering?
  NO → Astro static (default)
  YES, only for forms → Astro static + API routes (prerender = false)
  YES, for personalization/auth → Astro SSR with adapter
  YES, extensively → Consider Next.js
```

## Rendering Strategy

| Signal | Strategy |
|---|---|
| < 50 pages, rare updates, no auth | Static |
| < 50 pages, 1-3 API routes | Static + on-demand SSR routes |
| Daily editor updates | Static + CMS rebuild triggers |
| Personalized content, auth | SSR |
| Thousands of pages, frequent updates | SSR or ISR |

## Content Source

```
How many content items?
  < 20, developer edits → TypeScript data files in src/data/
  20-100, developer edits → Astro Content Collections (Markdown/MDX)
  Any, non-technical editor → Headless CMS
  Large catalog, automated → External API

How many locales?
  1-2 → Inline bilingual fields { en: '...', el: '...' }
  3-5 → CMS with locale fields
  6+ → CMS with robust i18n (Sanity, Contentful)
```

## CMS Selection

| CMS | Best for | Watch out for |
|---|---|---|
| Sanity | Flexible schemas, real-time preview | Learning curve, pricing at scale |
| Storyblok | Visual editing, component-based | Opinionated, pricing |
| Contentful | Enterprise, multi-team | Expensive, complex setup |
| Strapi | Self-hosted, full control | Hosting + maintenance |
| Keystatic | Astro-native, git-based | Newer ecosystem |
| None (TypeScript) | Small sites, dev-managed | Not editor-friendly |

## E-commerce

```
Does the site sell products?
  NO → Skip commerce entirely
  YES, showcase only (no cart) → Astro + external "Buy" links
  YES, digital products → Lemon Squeezy / Stripe Checkout
  YES, physical with cart/checkout → Shopify (theme or headless)
  YES, custom commerce needs → Medusa / Commerce Layer

RULE: Never build cart/checkout from scratch.
RULE: Never hardcode prices.
```

## Interaction Complexity

```
What interaction is needed?
  Scroll reveals, hover → CSS only (~5 lines JS)
  Menu toggle → Vanilla JS (~15 lines)
  Form submission → Vanilla fetch (~25 lines)
  Gallery/lightbox → Astro island (tiny lib, client:visible)
  Filter < 50 items → Astro island (client:visible)
  Filter 50+ items → Pagefind or Algolia
  Map → Astro island (Leaflet, client:visible)
  Booking calendar → Astro island (client:load)
  Product configurator → Astro island (React/Svelte, client:load)
  Auth portal → SSR pages or separate app

Island rules:
  client:visible → below-fold interactive components
  client:load → above-fold only
  client:idle → non-urgent
  Prefer Svelte/Preact over React (smaller runtime)
```

## Site Scale

| Scale | Pages | Architecture | Data | Risk |
|---|---|---|---|---|
| Small | 1-10 | Static, no CMS | TypeScript | Over-engineering |
| Medium | 10-50 | Static + API routes | TS or Collections | Inconsistency |
| Large | 50-200 | Static + CMS | CMS | Build time |
| Enterprise | 200+ | SSR/ISR + CMS | CMS + API | Complexity (consider if Astro is still right) |

## When it's NOT a website

If the project has:
- User accounts with dashboards → it's an app
- Real-time collaborative features → it's an app
- Multi-step transactional flows → it needs a commerce/app framework
- User-generated content feeds → it's a platform
- Complex search with facets, sorting, pagination → it may need a dedicated frontend

This skill is for websites. Applications need different architecture.
