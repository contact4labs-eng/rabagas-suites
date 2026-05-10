# Build Recipes

## Recipe: 5-Page Premium Brochure
**Pages**: Home, About, Services, Portfolio/Work, Contact
**Stack**: Astro static, Tailwind, TypeScript data
**Sections**: Hero, brand statement, 3-4 service cards, testimonials, CTA, footer
**Motion**: Restrained — hero entrance + 2-3 section reveals
**21st.dev**: Light — hero + card system (3 variants each)
**Forms**: Contact form with server endpoint
**Images**: 5-10 total in `src/assets/`
**Risk**: Over-engineering. One layout, one rhythm.
**QA**: Mobile, forms, images, trust

## Recipe: 20-Page Premium Marketing Site
**Pages**: Home, 4-6 feature pages, About, Team, Case Studies (3-5), Blog (optional), Contact
**Stack**: Astro + API routes, Tailwind, TypeScript + Content Collections for case studies
**Sections**: Cinematic hero, brand narrative, feature grid, case study showcase, testimonials, pricing, inquiry, CTA
**Motion**: Authored — hero choreography, staggered grids, editorial splits, one signature moment
**21st.dev**: Aggressive — hero, nav, features, case studies, inquiry, footer (6+ surfaces)
**Forms**: Lead form (grouped fields) + contact
**Images**: 20-40 total
**Risk**: Inconsistency. Enforce component reuse.
**QA**: All pages consistent, forms end-to-end, mobile every page

## Recipe: Bilingual Luxury Site
**Pages**: 2x (Home, Offerings index, 5-8 details, Story, Contact) = 20-25 pages
**Stack**: Astro + API routes + i18n, Tailwind, TypeScript bilingual fields
**Sections**: Cinematic hero, brand statement word reveal, destination narrative, offering discovery (featured + grid), lifestyle, heritage, testimonials, concierge inquiry, CTA
**Motion**: Authored — hero + brand statement + editorial splits + staggered grids
**21st.dev**: Aggressive across all surfaces
**Forms**: Booking inquiry (grouped: about you / stay / requests) + contact
**Images**: 15-25 total
**Risk**: Incomplete translations. Mixed-language states.
**QA**: Language switch every page, complete translations, forms in both locales

## Recipe: Catalog / Listing Site
**Pages**: Home, Categories (3-5), Listing index (filterable), Details (20-100+), About, Contact
**Stack**: Astro + search island (Pagefind), Tailwind, CMS or Content Collections
**Sections**: Hero, search/filter bar, listing grid, detail hero + content, inquiry sidebar, related items
**Motion**: Restrained — reveals on editorial pages only, not listing grids
**21st.dev**: Standard — hero, listing cards, detail layout, filter UI
**Forms**: Per-listing inquiry + general contact
**Risk**: Build time. Filter state not in URL. Poor empty states.
**QA**: Filter combinations, detail consistency, image loading, mobile browse

## Recipe: Content-Heavy Editorial Site
**Pages**: Home, Categories (5-10), Articles (50+), Authors, About, Subscribe
**Stack**: Astro + Content Collections (MDX), Tailwind, optional CMS
**Sections**: Featured article hero, category previews, article grid, newsletter signup
**Motion**: Restrained — hero + article card stagger only
**21st.dev**: Light — hero, article cards
**Forms**: Newsletter signup + contact
**Risk**: Build time with many pages. Inconsistent article formatting.
**QA**: Article consistency, reading experience, image loading, RSS

## Recipe: Conversion-Heavy Service Site
**Pages**: Home, Services (4-8), Case Studies (3-5), About, Contact
**Stack**: Astro + API routes, Tailwind, TypeScript
**Sections**: Authority hero, service cards with CTA each, case study impact blocks, testimonials, multi-path inquiry
**Motion**: Standard — hero + staggered services
**21st.dev**: Standard — hero, service cards, inquiry form
**Forms**: Main inquiry (grouped) + per-service mini-form + contact
**Risk**: Too many CTAs competing. Form fatigue.
**QA**: Every CTA path works, forms end-to-end, mobile conversion flow

## Recipe: Fast Premium Build
**Timeline**: 1-2 days
**Scope**: 5-8 pages, single locale
**Stack**: Astro static + one API route, Tailwind, TypeScript data only
**Skip**: CMS, Content Collections, search/filter, islands
**Motion**: Hero entrance + 2 reveals only
**21st.dev**: Hero + cards (2 variants each, pick fast)
**Forms**: One contact/inquiry form
**QA**: Mobile + forms + trust only
**Rule**: Choose speed over perfection but never compromise trust, forms, or mobile

## Recipe: Flagship / High Art Direction Build
**Timeline**: 5-7 days
**Scope**: 15-30 pages, possibly bilingual
**Stack**: Full — Astro + API routes + optional CMS, Tailwind, TypeScript
**Motion**: Full authored system — hero choreography, brand statement reveal, editorial splits, staggered grids, Ken Burns, section-specific types
**21st.dev**: Aggressive — 6+ surfaces, 4+ variants each, full exploration loop
**Signature moment**: Required — one per homepage. See `WOW_SYSTEM.md`.
**Desktop attention**: Full — asymmetric compositions, editorial splits with vertical offset, varied section widths
**Forms**: Concierge-style grouped inquiry + contact
**QA**: Meticulous — every page, every device, every locale, every form state
**Rule**: Quality over speed. Every section must feel authored.

## Archetype homepage flows

| Archetype | Homepage section sequence |
|---|---|
| Hospitality | Mood > Brand statement > Place > Suites > Lifestyle > Heritage > Trust > Inquiry > Close |
| Agency | Impact > Work showcase > Capabilities > Process > Trust > Inquiry |
| SaaS | Value prop > Product > Features > Social proof > Pricing > CTA |
| Service | Expertise > Services > Process > Results > Testimonials > Contact |
| Local | What+Where > Services > Location > Reviews > Contact |
| E-commerce | Hero product > Brand > Featured > Social proof > Newsletter |
| Editorial | Featured > Sections > Trending > Newsletter |
| Portfolio | Identity > Selected work > About > Contact |
| Real Estate | Search/featured > Positioning > Trust > Inquiry |
| Professional | Expertise > Practice areas > Team > Results > Contact |
| Event | Space in action > Capabilities > Past events > Inquiry |
| Community | Value > Highlights > Stories > Features > Join |
