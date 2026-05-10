# Elite Web Build System v3

Universal studio-grade playbook for building premium, state-of-the-art websites. Decision-driven, recipe-based, creatively demanding. Produces websites that feel authored, expensive, and memorable — not just clean and functional.

---

## 1. Purpose

This system builds websites that win clients, convert visitors, and feel unmistakably premium. It works across hospitality, SaaS, agencies, e-commerce, services, editorial, portfolios, real estate, and any category where quality is a competitive advantage.

It is designed to be followed step by step under real project pressure.

---

## 2. Quality Standard

Every build must be:
- **Premium** — feels expensive through restraint, spacing, typography
- **Authored** — has a visible design point of view
- **Mobile-first** — 390px iPhone Safari is primary canvas
- **Accessible** — keyboard, screen-reader, reduced-motion safe
- **Performant** — within budgets (Section 22)
- **Truthful** — zero fabricated trust signals (Section 19)
- **Complete** — no placeholders, fake states, or TODO in production
- **Memorable** — at least one signature moment per homepage (Section 12)

---

## 3. When This System Is Wrong

Do NOT use this for:

| Project | Why | Use instead |
|---|---|---|
| Web apps / dashboards | Complex state, real-time | Next.js, SvelteKit, dedicated app framework |
| Marketplaces | Multi-vendor, transactions | Full-stack + commerce platform |
| Social / UGC platforms | User content, feeds | Full-stack with database |
| Heavy transactional | Checkout, inventory, payments | Commerce platform + frontend |

**Rule**: If >30% of pages need authenticated state, real-time data, or complex client interaction, this is an application.

---

## 4. Quick Decision Paths

### Premium local business
Stack: Astro static. Content: TypeScript. Pages: 5-8. CMS: none. Forms: contact only. Motion: restrained. 21st.dev: light (hero + cards). Build time: 1-2 days.

### Luxury hospitality
Stack: Astro + API routes. Content: TypeScript. Pages: 15-25. CMS: none or Keystatic. Forms: booking inquiry + contact. Motion: authored. 21st.dev: aggressive (hero, suites, inquiry, nav). Build time: 3-5 days.

### Agency / studio
Stack: Astro static. Content: Content Collections (MDX for case studies). Pages: 10-20. CMS: optional. Forms: project inquiry. Motion: authored. 21st.dev: aggressive (hero, work showcase, nav). Build time: 2-4 days.

### SaaS marketing
Stack: Astro static. Content: TypeScript + MDX blog. Pages: 8-15. CMS: optional for blog. Forms: demo request + newsletter. Motion: standard. 21st.dev: standard (hero, features, pricing). Build time: 2-3 days.

### Service business
Stack: Astro + API routes. Content: TypeScript. Pages: 10-20. CMS: none. Forms: consultation request. Motion: restrained. 21st.dev: standard (hero, services, testimonials). Build time: 2-3 days.

### Real estate listings
Stack: Astro + island for search/filter. Content: CMS or API. Pages: 20-100+. CMS: recommended. Forms: property inquiry. Motion: restrained. 21st.dev: standard (hero, listing cards, detail). Build time: 3-5 days.

### E-commerce brand
Stack: Astro + Shopify Storefront API or external links. Content: commerce backend. Pages: 10-50. Forms: newsletter + contact. Motion: standard. 21st.dev: standard (hero, product cards, collection). Build time: 3-5 days.

### Editorial / magazine
Stack: Astro + Content Collections. Content: MDX. Pages: 50+. CMS: recommended. Forms: newsletter. Motion: restrained. 21st.dev: light (hero, article cards). Build time: 3-5 days.

---

## 5. Build Recipes

### Recipe: 5-Page Premium Brochure

**Pages**: Home, About, Services, Portfolio/Work, Contact
**Stack**: Astro static, Tailwind, TypeScript
**Content**: `data/` TypeScript files
**Sections**: Hero, Brand statement, 3-4 service cards, Testimonials, CTA, Footer
**Motion**: Restrained — hero entrance + 2-3 section reveals
**21st.dev**: Hero + card system + footer (3 surfaces, 3 variants each)
**Forms**: Contact form with server endpoint
**Images**: 5-10 total, all in `src/assets/`
**Risk**: Over-engineering. Keep simple. One layout, one rhythm.
**QA priority**: Mobile, forms, images, trust elements

### Recipe: 20-Page Premium Marketing Site

**Pages**: Home, 4-6 service/feature pages, About, Team, Case Studies (3-5), Blog (optional), Contact
**Stack**: Astro + API routes, Tailwind, TypeScript
**Content**: TypeScript data + Content Collections for case studies/blog
**Sections**: Cinematic hero, brand narrative, feature grid, case study showcase, testimonials, pricing (optional), inquiry, CTA
**Motion**: Authored — hero choreography, staggered grids, editorial split reveals, signature moment
**21st.dev**: Aggressive — hero, nav, feature grid, case studies, inquiry, footer (6+ surfaces, 3-5 variants each)
**Forms**: Lead form (grouped fields) + contact form
**Images**: 20-40 total
**Risk**: Inconsistency across pages. Enforce component reuse and section rhythm.
**QA priority**: All pages consistent, forms end-to-end, mobile every page

### Recipe: Bilingual Luxury Site

**Pages**: 2x (Home, Offerings index, 5-8 detail pages, Story, Arrival/Contact) = 20-25 pages
**Stack**: Astro + API routes + i18n config, Tailwind, TypeScript
**Content**: TypeScript with `{ en: '...', el: '...' }` bilingual fields
**Sections**: Cinematic hero, brand statement, destination narrative, offering discovery (featured + grid), lifestyle, heritage, testimonials, concierge inquiry, CTA
**Motion**: Authored — hero + brand statement word reveal + editorial splits + staggered grids
**21st.dev**: Aggressive across all key surfaces
**Forms**: Booking inquiry (grouped: about you / your stay / anything else) + contact
**Images**: 15-25 total
**Risk**: Incomplete translations. Missing locale parity. Mixed-language states.
**QA priority**: Language switch on every page, complete translations, form in both locales

### Recipe: Catalog / Listing Site

**Pages**: Home, Category pages (3-5), Listing index (filterable), Detail pages (20-100+), About, Contact
**Stack**: Astro + search island (Pagefind or Fuse.js), Tailwind
**Content**: CMS or Content Collections
**Sections**: Hero, search/filter bar, listing grid, detail hero + content, inquiry sidebar, related items
**Motion**: Restrained — reveals only on editorial pages, not on listing grid
**21st.dev**: Standard — hero, listing cards, detail layout, filter UI
**Forms**: Per-listing inquiry + general contact
**Images**: Many — enforce quality threshold, lazy load everything except hero
**Risk**: Slow builds with many pages. Filter state not in URL. Poor empty states.
**QA priority**: Filter combinations, listing detail consistency, image loading, mobile browse experience

---

## 6. Fast Start Modes

### Best Default Path
Use for most projects. Astro static + API routes. Tailwind. TypeScript data. Standard motion. Standard 21st.dev exploration. Follow phases 1-12.

### Fast Premium Path
For tight timelines. Skip CMS. TypeScript data only. Restrained motion (hero + 2 reveals). Light 21st.dev (hero + cards only). Focus QA on mobile + forms + trust.

### High Art Direction Path
For flagship builds. Aggressive 21st.dev exploration (5+ surfaces, 4+ variants each). Authored motion with signature moments. Editorial asymmetry. Cinematic hero. Full desktop composition attention. Meticulous QA.

### Content-Heavy Path
Blog/editorial focus. Content Collections with MDX. Category taxonomy. RSS feed. Article schema. Reading time. Author pages. Light motion. Focus QA on content consistency.

### Conversion-Heavy Path
Lead gen focus. Every page has a CTA path to inquiry. Sticky mobile booking bar. Prominent form. A/B-ready headline structure. Forms with grouped fields and reassurance copy. Focus QA on conversion flow + mobile.

---

## 7. Core Stack

| Layer | Default | When to change |
|---|---|---|
| Framework | Astro (latest) | >30% dynamic pages: Next.js. Heavy client state: SvelteKit. |
| Styling | Tailwind CSS 4 | Team preference |
| Language | TypeScript strict | Never downgrade |
| Images | Astro `<Image>` from `astro:assets` | Platform image CDN |
| Forms | Astro API routes (`prerender = false`) | External service if fully static |
| Email | Resend or equivalent | Any transactional API |
| i18n | File-based routing + dictionary | CMS for 3+ locales |
| SEO | `@astrojs/sitemap` + manual meta | Always |
| Analytics | GA4 + GTM | Plausible/Fathom for privacy |
| Adapter | `@astrojs/node` | Match to host |

**Framework caveats**: Tailwind v4 link reset needed outside `@layer`. Astro only optimizes `src/assets/` images. Parent-directory PostCSS configs can break Vite.

---

## 8. Architecture

```
src/
  assets/images/          # Content images (optimized by framework)
  components/
    layout/               # Header, Footer, Nav, MobileBar
    sections/             # Full-width page sections
    ui/                   # Cards, forms, badges
    islands/              # Interactive client-side components
  content/                # Content Collections (if used)
  data/                   # TypeScript models, translations, image maps
  layouts/                # BaseLayout (meta, fonts, analytics, observer)
  lib/                    # i18n, helpers
  pages/
    api/                  # Server endpoints
    [locale]/             # Locale-prefixed mirrors
  styles/
    global.css            # Tailwind + @theme + base
    motion.css            # Reveals, choreography, hover
public/
  favicon.svg, og-image.webp
```

---

## 9. CMS Strategy

| Volume | Frequency | Editor | Source |
|---|---|---|---|
| < 20 items | Rarely | Developer | TypeScript files |
| 20-100 | Monthly | Developer | Content Collections |
| Any | Weekly+ | Non-technical | Headless CMS |
| Large | Daily | System | External API |

---

## 10. E-commerce Strategy

- Showcase only (no cart): Astro + external links
- Full commerce: Shopify (hosted or headless), Medusa, Commerce Layer
- Digital products: Lemon Squeezy, Paddle, Stripe Checkout
- **Rule**: Never build cart/checkout from scratch. Never hardcode prices.

---

## 11. Interaction Complexity

| Need | Approach | JS cost |
|---|---|---|
| Reveals, hover | CSS only | ~5 lines |
| Menu toggle | Vanilla JS | ~15 lines |
| Form submit | Vanilla fetch | ~25 lines |
| Gallery, lightbox | Astro island | Small, lazy |
| Filter (< 50 items) | Astro island | Small |
| Filter (50+) | Pagefind/Algolia | Medium |
| Map | Astro island (Leaflet) | External, lazy |
| Auth | SSR or external | Depends |

**Island rules**: `client:visible` below fold. `client:load` above fold only. Prefer Svelte/Preact over React.

---

## 12. Signature Moments and Wow System

A signature moment is a single authored interaction or composition that makes a homepage unforgettable. Not an animation. Not a gimmick. A design decision that could only exist on THIS site.

### Rules
- Every homepage gets exactly ONE signature moment
- It must be restrained — if it feels "flashy," it's wrong
- It must survive mobile without degradation
- It must respect reduced-motion
- It must support, not compete with, the content

### Wow spectrum

| Level | What it means | When to use |
|---|---|---|
| **Restrained** | Clean hero + one reveal | Local business, fast builds, content-heavy sites |
| **Premium** | Cinematic hero + brand statement + editorial rhythm | Marketing sites, service businesses, most projects |
| **Flagship** | Cinematic hero + signature scroll moment + editorial narrative + authored section choreography | Luxury hospitality, agency flagships, high-budget brands |

### Signature moment ideas by archetype

**Hospitality**: Scroll-triggered brand statement word reveal between hero and content. Words materialize from muted to full as you scroll — editorial, textural, sensory.

**Agency**: Full-bleed case study hero that masks/reveals on scroll. The project image expands as the user enters the section — dramatic but controlled.

**SaaS**: Product screenshot that scales and reframes as you scroll past the feature section. Starts as a small preview, grows to full-width — demonstrates the product IS the hero.

**E-commerce**: Collection image grid where the featured product image is 2x the size of others, with the grid staggering into view. Creates desire hierarchy.

**Service**: Split-screen authority section — large portrait of the founder/team on one side, credentials and key outcome on the other. Slow directional reveal. Trust through presence.

**Editorial**: The featured story headline in massive serif type with a masked image reveal behind the text. Typography IS the visual.

### What makes it premium vs gimmicky
- **Premium**: Serves the content, feels inevitable, works without motion if reduced-motion is on
- **Gimmicky**: Calls attention to itself, feels trendy, breaks if motion is disabled

---

## 13. 21st.dev Creative Direction System

### Purpose
21st.dev is a creative exploration tool, not a component library. Use it to discover patterns, compare approaches, and elevate decisions. Never copy-paste.

### When to explore

| Surface | Always explore | Explore if time allows | Skip |
|---|---|---|---|
| Hero | Yes (3-5 variants) | | |
| Navigation/menu | Yes (3 variants) | | |
| Primary card system | Yes (3-4 variants) | | |
| Inquiry/lead form | Yes (2-3 variants) | | |
| Testimonials | | Yes (2-3 variants) | |
| Footer | | Yes (2 variants) | |
| Feature grid | | Yes (3 variants) | |
| Pricing | | Yes (2-3 variants) | |
| Signature moment | Yes (2-4 variants) | | |
| Editorial splits | | Yes (2 variants) | |
| Comparison tables | | | Skip (build custom) |
| Simple contact | | | Skip (build custom) |

### Exploration loop

```
1. DEFINE the surface and its purpose (hero → create arrival mood and drive to CTA)
2. DEFINE intent criteria (premium feel, mobile quality, conversion support, Astro adaptability)
3. SEARCH 21st.dev with 2-3 query variations
4. COMPARE returned variants against criteria
5. CHOOSE direction (or combine elements from multiple)
6. ADAPT to Astro — extract Tailwind classes + layout structure, discard React runtime
7. TEST on mobile first
8. TEST coherence in full page context
9. REFINE spacing, typography, motion to match site design system
10. LOCK — document which 21st.dev pattern inspired the section
```

### Comparison criteria

| Criterion | Weight | What to check |
|---|---|---|
| Premium feel | High | Does it feel expensive or template-like? |
| Mobile quality | High | Does it work at 390px without compromise? |
| Clarity | High | Is the content hierarchy immediately clear? |
| Originality | Medium | Does it feel distinctive or generic? |
| Conversion support | Medium | Does it guide toward the CTA? |
| Desktop elegance | Medium | Does it use wide-screen space well? |
| Astro adaptability | Medium | Can it work without React/Framer Motion? |
| Motion potential | Low | Can it be enhanced with CSS motion? |
| Coherence | High | Does it fit the rest of the site's design language? |

**Decision rule**: If a variant scores high on premium feel + mobile quality + clarity, choose it even if it's less "original." Coherence > novelty.

### Query bank

**Hero**
- `"hero section full image luxury"` — hospitality, real estate
- `"hero section gradient bold"` — SaaS, startup
- `"hero scroll animation editorial"` — agency, luxury brand
- `"hero video background"` — event, venue, hospitality
- `"hero split text image"` — service, professional

**Navigation**
- `"navbar glass morphism premium"` — luxury, editorial
- `"navbar scroll transparent solid"` — marketing, SaaS
- `"mobile menu fullscreen"` — any premium site
- `"navbar minimal clean"` — portfolio, editorial

**Cards**
- `"image overlay card hotel room"` — hospitality, real estate
- `"featured card grid editorial"` — agency, editorial
- `"product card hover"` — e-commerce
- `"pricing card comparison"` — SaaS
- `"team member card"` — service, agency

**Social proof**
- `"testimonial card review"` — any with reviews
- `"logo cloud clients"` — agency, SaaS
- `"stats counter section"` — SaaS, service

**Forms**
- `"booking inquiry form dark"` — hospitality
- `"contact form card"` — any
- `"demo request form"` — SaaS
- `"newsletter signup minimal"` — editorial, e-commerce

**Features**
- `"feature grid icons"` — SaaS, service
- `"bento grid features"` — SaaS, product
- `"feature split image text"` — any

**Motion / Signature**
- `"scroll reveal mask text"` — brand statement
- `"text reveal staggered fade"` — editorial moment
- `"parallax hero scroll"` — cinematic hero
- `"horizontal scroll carousel"` — portfolio, gallery

**Footer**
- `"footer premium dark"` — luxury, agency
- `"footer minimal clean"` — portfolio, editorial

### Misuse warnings
- **Token usage**: Using 21st.dev for one surface, one variant, no comparison — provides no design value
- **Copy-paste**: Dropping React components into Astro without rewriting — breaks architecture
- **Style mixing**: Combining a brutalist nav with an elegant serif hero — kills coherence
- **JS bloat**: Importing Framer Motion for a fade-in that CSS handles — unnecessary weight
- **Cool over coherent**: A section that looks great in isolation but clashes with the page

---

## 14. Visual Authorship Rules

### What makes a website feel premium
1. **Spacing confidence** — generous whitespace that says "we don't need to fill every pixel"
2. **Typography hierarchy** — massive display type contrasted with restrained body text
3. **Image breathing room** — hero images that fill the viewport, editorial images with asymmetric placement
4. **Restraint** — fewer sections, fewer words, fewer colors, fewer effects — each one more impactful
5. **Contrast pacing** — light > dark > light > dark sections create visual rhythm
6. **Compositional asymmetry** — image left / text right, then reversed — breaks the grid
7. **Silence** — some sections have no motion, no decoration, just a statement and space

### How to avoid the template look
1. **Break the uniform grid** — one card larger than the rest creates hierarchy
2. **Use editorial splits** — 60/40 or 50/50 image/text layouts with asymmetric vertical alignment
3. **Vary section backgrounds** — cream, white, dark, cream, not cream, cream, cream, cream
4. **Let hero images bleed** — title overlapping from hero into content creates a unique composition
5. **Use brand statements** — large serif text with generous padding is a signature, not a waste of space
6. **Differentiate entities** — each product/suite/service needs a unique emotional hook, not just different data
7. **Design the transitions** — how one section ends and the next begins is as important as the sections themselves

### Desktop composition rules
- Content should feel expansive, not stretched
- Use `max-w-5xl` for editorial (not always `max-w-7xl`)
- Asymmetric grid columns: `grid-cols-[1.2fr_1fr]` instead of `grid-cols-2`
- Images and text should have intentional vertical offset (`md:pt-16`)
- Wide-screen hero text should NOT stretch — `max-w-3xl` centered

### Mobile thumb ergonomics
- Primary CTA in bottom half of viewport
- Touch targets: 48px minimum height
- Sticky mobile bar: appears after scroll, safe-area padding
- Form inputs: `h-12` minimum
- Menu links: generous padding (`py-5`)

---

## 15. Premium Section Recipes

### Hero
**Purpose**: Create arrival mood and immediate desire.
**Content**: Background image, location/label, display headline, subtitle, 1-2 CTAs, optional trust signal.
**Layout**: Full viewport height. Text centered or bottom-aligned. Multi-stop gradient overlay.
**Motion**: Ken Burns on image (12s), staggered text entrance (0.2s intervals), bottom gradient fade into content.
**CTA**: Primary solid + secondary outline. Sharp edges. Arrow on hover.
**Image**: `loading="eager"`, `fetchpriority="high"`, quality 80, `sizes="100vw"`.
**21st.dev**: Search `"hero section full image"`, compare 3-5 options.
**Mistakes**: Generic stock hero. Too much text. CTAs too small on mobile. No gradient = unreadable text.

### Brand Statement
**Purpose**: Signature moment. Distill the brand into one memorable sentence.
**Content**: One sentence, 10-20 words. Large serif. Centered.
**Layout**: Generous vertical padding (`py-28 md:py-40`). `max-w-4xl`.
**Motion**: Scroll-triggered word reveal (words start muted, become full color on stagger). Or editorial reveal (slow 1.2s fade-up).
**21st.dev**: Search `"text reveal staggered fade"`, `"scroll reveal mask text"`.
**Mistakes**: Too many words. Adding imagery (this is a typography-only section). Rushing past it.

### Narrative / Destination Section
**Purpose**: Sell the context — the place, the brand, the feeling.
**Content**: Portrait image + editorial copy with emotional specificity. Optional press trust.
**Layout**: Asymmetric 2-column grid. Image left, text right (or reversed).
**Motion**: Directional reveals — image from left, text from right.
**Image**: Portrait ratio (`aspect-[3/4]`), quality 75.
**21st.dev**: Search `"split screen editorial image text"`.
**Mistakes**: Generic copy. Stock photography. Centering everything instead of asymmetry.

### Discovery Grid (Offerings)
**Purpose**: Make browsing irresistible. Create desire for each item.
**Content**: Featured item (full-width) + grid of remaining items. Each with image, name, mood line, metadata badges.
**Layout**: Featured: `aspect-[16/7]` full-width with gradient overlay. Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
**Motion**: Featured: editorial reveal (1.2s). Grid: staggered children (80ms).
**Image**: Featured: quality 80, `sizes="100vw"`. Grid: quality 75, responsive sizes.
**21st.dev**: Search `"featured card grid editorial"`, `"image overlay card"`.
**Mistakes**: All cards identical size (no hierarchy). No mood lines (just facts). Overcrowded metadata.

### Testimonials
**Purpose**: Build trust through real voices.
**Content**: 4-6 verified quotes. Name, location, date. Decorative serif quote mark. No star ratings unless verifiable.
**Layout**: 2-column grid on desktop, single column mobile. Optional dark background for contrast.
**Motion**: Staggered children reveal.
**21st.dev**: Search `"testimonial card review"`.
**Mistakes**: Fake ratings. Too many quotes (4 is better than 10). Generic "Great service!" quotes.

### Inquiry / Lead Form
**Purpose**: Convert interest into action. Feel like a concierge, not a form.
**Content**: Heading with personal reassurance. Fields grouped by intent (`<fieldset>` + `<legend>`). Submit button with intent language. Benefits. Fallback contact.
**Layout**: Dark background (`bg-ink`). White form card. Centered, narrow (`max-w-xl`).
**Motion**: Editorial reveal (1.2s).
**21st.dev**: Search `"booking inquiry form dark"`, `"contact form card"`.
**Mistakes**: Generic "Submit" button. No field grouping. No reassurance copy. No fallback contact. Fake success state.

### Contact / Location
**Purpose**: Make reaching out feel like the beginning of a hosted experience.
**Content**: Address, phone, email, hours. Optional travel/arrival steps. Concierge services list.
**Layout**: Dark hero with title. 3-column numbered steps. Asymmetric contact info + services card grid.
**Motion**: Steps: staggered. Contact: directional.
**21st.dev**: Search `"contact info card grid"`, `"travel directions steps"`.
**Mistakes**: Just dumping address/phone/email with no framing. Missing hours. No map link.

### Story / About
**Purpose**: Turn brand identity into an emotional asset.
**Content**: Lead statement (large serif). Alternating editorial splits (image + text, reversed). Hosts/team section on dark background. Closing quote.
**Layout**: Narrow editorial (`max-w-5xl`). Alternating image/text columns with vertical offset.
**Motion**: Lead: editorial reveal. Splits: directional. Team section: no motion (dark bg is the moment).
**21st.dev**: Search `"split screen editorial"`.
**Mistakes**: Wall of text. No images. No personality. Generic corporate bio.

### Pricing
**Purpose**: Make the right plan obvious.
**Content**: 2-4 tiers. Feature comparison. Highlighted recommended plan.
**Layout**: Card grid with one emphasized. Toggle for monthly/annual if applicable.
**Motion**: Staggered card reveal.
**21st.dev**: Search `"pricing card comparison"`.
**Mistakes**: Too many tiers. Hidden important features. No recommended plan emphasis.

### Footer
**Purpose**: Elegant close. Navigation safety net. Brand bookend.
**Content**: Centered brand lockup. 4-column link grid. Social links. Copyright + brand tagline.
**Layout**: Dark background (`bg-ink`). Centered brand top. Grid below.
**Motion**: None (footer is static).
**21st.dev**: Search `"footer premium dark"`.
**Mistakes**: Cluttered. Duplicating full nav. Inconsistent link styling.

---

## 16. Design Language

### Typography
Choose one pattern: Editorial Luxury (serif + sans), Modern Professional (geometric sans), Bold Statement (heavy + readable), Classic Authority (transitional serif + humanist sans).

Fluid display: `clamp()`. Body: 1rem, 1.6 line-height. Labels: 0.7rem, 500 weight, 0.15em tracking, uppercase. Load 2-3 weights only.

### Colors
Define: Background, Background Alt, Background Dark, Text Primary, Text Secondary, Text Muted, Accent Cool, Accent Warm, Error, Border.

### Spacing
Sections: `py-24 md:py-32`. Emphasis: `py-24 md:py-36`. Containers: `max-w-7xl` wide, `max-w-5xl` editorial, `max-w-2xl` narrow. Dividers: `h-px w-10` short line.

### CTAs
Primary: solid fill, 48-56px height, sharp corners, arrow on hover. Secondary: outline, same height. Ghost: `.link-premium` animated underline. Use intent-specific language.

---

## 17. Motion System

CSS-only + IntersectionObserver (5 lines). Zero libraries.

Types: `data-reveal` (fade up), `data-reveal="left|right"` (directional), `data-reveal="editorial"` (slow), `data-reveal-stagger` (children 80ms), `.hero-enter` (sequential), `.hero-image-animate` (Ken Burns), `.img-zoom` (hover), `.link-premium` (underline).

**Rule**: Not every section gets motion. Vary types. Dark sections can use none.

**Forbidden**: Parallax, bouncing, auto-carousels, mouse-tracking, uniform reveals, scale > 1.08.

**Reduced motion**: `prefers-reduced-motion: reduce` disables everything.

---

## 18. Content Modeling

Universal `Entity` pattern with locale-aware fields. Extend per archetype. Centralized `data/images.ts` with static ESM imports. Every primary entity gets a `moodLine` — unique emotional differentiator.

---

## 19. Trust Verification

13 categories (client logos, ratings, press, awards, metrics, case studies, certs, security, sustainability, AI, before/after, team, testimonials) each classified as: **Verified** (use freely), **Risky** (use with disclosure), **Prohibited** (never).

**Rule**: If it cannot survive "Show me the source?", it does not appear.

---

## 20. Forms

Server endpoint with validation. `{ ok, errors }` response. Real success/error states. CSS `:user-invalid`/`:user-valid`. No mailto primary. No fake success. Grouped fields with `<fieldset>`. Fallback contact near every form.

---

## 21. SEO / Structured Data

Schema by archetype (Section 10). Unique title + description per page. Canonical + hreflang. OG tags. Sitemap. Only verified `aggregateRating`.

---

## 22. Performance Budgets

| Metric | Budget |
|---|---|
| LCP | < 2.5s mobile |
| CLS | < 0.1 |
| INP | < 200ms |
| Total JS | < 50KB (excl. analytics) |
| Total CSS | < 30KB |
| Fonts | 2 families, 2-3 weights |
| Hero image | < 150KB served |
| Above-fold images | 1-2 max |

---

## 23. Accessibility

Skip link, focus-visible, reduced motion, form labels/required/autocomplete, aria on menu, 48px touch targets, semantic HTML, descriptive alt text, 4.5:1 contrast.

---

## 24. i18n

Default locale at root, others prefixed. Language switch preserves page context. 2 locales: inline bilingual fields. 3+: CMS. Verify complete translations on every page before launch.

---

## 25. QA System

### Pre-launch
- [ ] Build: zero errors, all pages generate
- [ ] Trust: no fabricated elements
- [ ] Forms: success + error tested end-to-end
- [ ] Locale: switch works, all translations complete
- [ ] Images: no external URLs, all optimized
- [ ] SEO: sitemap, OG, hreflang, schema verified
- [ ] Analytics: firing correctly
- [ ] Devices: 390px, 768px, 1440px verified
- [ ] Accessibility: keyboard, skip link, reduced motion, contrast
- [ ] Performance: within budgets

### Post-launch
- [ ] Forms delivering to inbox
- [ ] Analytics data appearing
- [ ] No 404s in search console
- [ ] CWV passing after 28 days

---

## 26. Optional Modules

Blog/Editorial, Catalog/Listing, Search/Filter, Map/Location, Auth/Member, Multi-locale, Analytics/Privacy — each with when to include, core rules, common mistakes, QA points.

---

## 27. Anti-Patterns

**Trust**: Fake ratings, stock team, invented logos, unverifiable press.
**UX**: Hover-only interactions, fake scarcity, dark patterns, autoplaying media.
**Technical**: Public-only images, mailto forms, placeholder strings, JS for CSS-achievable effects.
**Content**: Lorem ipsum, identical copy, stock heroes, buzzword copy.
**Motion**: Uniform reveals, parallax, bouncing, auto-carousels.
**Business**: "AI-powered" without AI, unsubstantiated claims, greenwashing.

---

## 28. Prompt Template

```
You are building a premium website.

CATEGORY: [HOSPITALITY / AGENCY / SAAS / SERVICE / LOCAL / ECOMMERCE / EDITORIAL / PORTFOLIO / REAL_ESTATE / PROFESSIONAL / EVENT / COMMUNITY]
BRAND: [name and description]
CONVERSION_GOAL: [bookings / leads / signups / sales / subscriptions / inquiries / demos]
LOCALES: [en / en+el / en+fr+de / single]
CONTENT_SCALE: [SMALL / MEDIUM / LARGE / ENTERPRISE]
CONTENT_SOURCE: [typescript / collections / cms / api]
COMMERCE: [none / external-links / shopify / headless]
AUTH: [none / gated / accounts]

WOW_LEVEL: [restrained / premium / flagship]
ART_DIRECTION: [minimal / editorial / cinematic / bold]
21ST_EXPLORATION: [light / standard / aggressive]
MOTION_STYLE: [restrained / authored / dramatic]
TRUST_SENSITIVITY: [normal / strict / ultra-strict]
BUILD_SPEED: [fast / standard / meticulous]

Follow ELITE_WEB_BUILD_SYSTEM.md.

If WOW_LEVEL = flagship: explore 5+ surfaces on 21st.dev with 4+ variants each. Create signature homepage moment. Full desktop composition attention.
If WOW_LEVEL = premium: explore 3-4 surfaces with 3 variants each. Standard signature moment.
If WOW_LEVEL = restrained: explore hero + cards. No signature moment required.

If ART_DIRECTION = cinematic: Ken Burns hero, editorial splits, dark contrast sections.
If ART_DIRECTION = editorial: Serif display, asymmetric layouts, generous spacing.
If ART_DIRECTION = minimal: Sans display, clean grids, restrained color.
If ART_DIRECTION = bold: Heavy type, strong color, high contrast.

If TRUST_SENSITIVITY = ultra-strict: Every trust element must link to verification source.
If TRUST_SENSITIVITY = strict: All claims verified, no approximations.
If TRUST_SENSITIVITY = normal: Standard verification rules from Section 19.

If BUILD_SPEED = fast: Use Fast Premium Path. Skip CMS. Light 21st.dev. Focus QA on mobile + forms.
If BUILD_SPEED = meticulous: Full phases. Aggressive 21st.dev. Full device QA. Polish pass.

Execute phases 1-12. Apply archetype from Section 10. Meet budgets from Section 22. Run QA from Section 25.
```

---

## What Still Needed Improvement Before This Pass

1. No recipe-style execution paths — every project got the same abstract 12-phase process
2. No quick decision shortcuts for common project types
3. 21st.dev guidance was "search and adapt" without a structured exploration loop, variant count targets, or comparison criteria
4. No signature moment system — "add motion" is not "create wow"
5. No premium section recipes — builders had to invent composition from scratch every time
6. No visual authorship rules — the doc prevented bad design but didn't teach great design
7. No execution intensity modes — a fast brochure and a flagship hotel got the same process
8. No template-avoidance system — the anti-pattern existed but the positive guidance was thin
9. The prompt template had no creative direction parameters (wow level, art direction, motion style)
10. The 21st.dev query bank was flat — no archetype-specific organization or surface-by-surface coverage

## Why This Version Is Easier to Follow

1. **Quick Decision Paths**: 8 common project types with one-paragraph stack/approach decisions
2. **Build Recipes**: 4 detailed recipes (brochure, marketing, bilingual luxury, catalog) with exact priorities
3. **Fast Start Modes**: 5 named modes (default, fast, high-art, content-heavy, conversion-heavy) for instant calibration
4. **Section Recipes**: 10 premium section recipes with purpose, content, layout, motion, image, and mistake guidance
5. **Exploration Loop**: 10-step loop for every 21st.dev surface — define, search, compare, choose, adapt, test, lock
6. **Prompt Parameters**: 6 creative intensity settings that change execution behavior

## Why This Version Can Produce True Wow-Factor Websites

1. **Signature Moment System**: Every homepage gets at least one authored moment, with ideas per archetype
2. **Visual Authorship Rules**: Specific guidance on spacing confidence, breathing room, contrast pacing, compositional asymmetry, and silence
3. **Template Avoidance System**: 7 specific techniques for breaking the template look
4. **Section Recipes**: Not just "build a hero" but "here's what makes a hero premium, what motion it gets, what image treatment, what CTA style, and what mistakes to avoid"
5. **21st.dev as creative system**: Structured exploration with variant targets, comparison criteria, and coherence checks
6. **WOW_LEVEL parameter**: Explicitly calibrates how much creative investment each build gets

## How 21st.dev Is Now Used as a Serious Creative System

Previously: "Use 21st.dev for inspiration, adapt to Astro."

Now:
1. **Structured exploration loop** — 10 explicit steps from defining the surface to locking the decision
2. **Variant targets** — specific numbers: 3-5 for hero, 3-4 for cards, 2-3 for forms
3. **Comparison criteria** — 9 weighted criteria including premium feel, mobile quality, clarity, coherence
4. **Decision rule** — premium + mobile + clarity wins over novelty
5. **Surface-by-surface query bank** — 30+ specific queries organized by component type and archetype
6. **Misuse warnings** — 5 explicit anti-patterns (token use, copy-paste, style mixing, JS bloat, cool over coherent)
7. **Always/sometimes/never matrix** — clear guidance on which surfaces always warrant exploration vs which to skip
8. **WOW_LEVEL calibration** — light (hero + cards only) vs standard (3-4 surfaces) vs aggressive (5+ surfaces, 4+ variants)

## What Should Remain Customizable Per Project

1. Color palette specific values (role system is fixed)
2. Typography pairing choice (pattern categories are fixed)
3. Homepage narrative flow order (archetype provides default)
4. Content model extended fields (base Entity is fixed)
5. Motion type per section (available types are fixed)
6. CMS vendor (decision matrix is fixed)
7. Deployment adapter (architecture is fixed)
8. Form field sets (archetypes exist, exact fields are per-business)
9. Schema type (matrix maps it, specific fields are per-business)
10. Signature moment style (wow system provides ideas, final choice is per-brand)
