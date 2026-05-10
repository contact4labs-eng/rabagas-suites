# Premium Luxury Website Build Playbook

Internal studio manual for building flagship hospitality websites.
Derived from the Rabagas Suites rebuild (Sifnos, Greece).
Reusable for any premium boutique hospitality, lifestyle, or luxury brand site.

---

## 1. Purpose

This playbook produces websites that feel expensive, editorial, and emotionally persuasive. The output must look like a destination brand, not a property listing template.

Target quality: top 5% of hospitality web design. The kind of site that makes people want to visit, not just book.

---

## 2. Non-Negotiable Quality Standard

Every build must satisfy ALL of these:

- **Premium**: Feels expensive through typography, spacing, restraint, and composition
- **Editorial**: Reads like a luxury travel magazine, not a brochure
- **Mobile-first**: iPhone Safari at 390px is the primary design target
- **Accessible**: Keyboard navigable, screen-reader clear, reduced-motion safe
- **Performant**: Sub-2s LCP, minimal JS, optimized images
- **Truthful**: Zero fabricated ratings, awards, or press mentions
- **Launch-ready**: No placeholder logic, no fake success states, no TODO in production
- **Bilingual parity**: EN and EL (or any two locales) must be complete and consistent

### What it must NEVER feel like:
- A WordPress theme
- A generic villa rental template
- A tech startup landing page
- A nightclub luxury site (dark + flashy)
- An over-animated showcase

---

## 3. Core Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Astro (latest stable) | Static-first with on-demand SSR for API routes. Zero client JS by default. |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` | Utility-first with `@theme` for design tokens. No CSS-in-JS overhead. |
| Typography | Google Fonts (Cormorant Garamond + Inter) | Serif display + sans body. Both render well in Latin and Greek. |
| Images | Astro `<Image>` from `astro:assets` | Automatic WebP generation, responsive `srcset`, quality control. |
| i18n | File-based routing with shared data layer | EN at root, EL under `/el/`. Manual translation dictionaries. |
| Forms | Astro API routes (`pages/api/`) with `prerender = false` | Server-side validation, Resend for email, real success/error states. |
| Motion | CSS-only with IntersectionObserver | Zero animation libraries. `data-reveal` attributes. `prefers-reduced-motion` respected. |
| SEO | `@astrojs/sitemap`, schema.org, hreflang | Automatic sitemap generation. LodgingBusiness structured data. |
| Analytics | GA4 + GTM | `is:inline` scripts in `<head>`. GTM noscript in `<body>`. |
| Deployment | `@astrojs/node` adapter (standalone) | Works with Vercel, Netlify, Railway, or any Node host. |

### PostCSS note
If a parent directory has a `postcss.config.js` (e.g., from another project), create a local `postcss.config.cjs` with `module.exports = { plugins: [] }` to prevent Vite from loading it.

---

## 4. Architecture Blueprint

```
src/
  assets/images/          # Source images for Astro optimization
    property/             # Hero, courtyard, editorial photos
    suites/               # One hero image per suite
  components/
    layout/               # Header, Footer, LanguageSwitcher, MobileBookingBar
    sections/             # Full-width page sections (Hero, Testimonials, etc.)
    ui/                   # Reusable cards, forms, badges
  data/                   # TypeScript content models
    suites.ts             # Suite inventory with bilingual fields
    translations.ts       # UI string dictionary
    testimonials.ts       # Guest reviews (verified only)
    images.ts             # Centralized static image imports
  layouts/
    BaseLayout.astro      # Single shared layout with all meta, fonts, analytics
  lib/
    i18n.ts               # Locale detection, path generation, translation helper
  pages/
    api/inquiry.ts        # Server-side form endpoint
    index.astro           # EN homepage
    suites/index.astro    # EN suites index
    suites/[slug].astro   # EN suite detail (dynamic)
    our-story.astro       # EN brand story
    contact.astro         # EN arrival/contact
    el/                   # Greek mirrors of all above
  styles/
    global.css            # Tailwind import + @theme tokens + base layer
    motion.css            # Reveal system, hero choreography, hover effects
public/
  favicon.svg
  og-image.webp           # Default OG image (real property photo)
  og-image.svg            # Branded SVG fallback
```

### Naming conventions
- Components: PascalCase (`SuiteCard.astro`)
- Data files: camelCase (`suites.ts`)
- CSS files: kebab-case (`motion.css`)
- Pages: kebab-case (`our-story.astro`)
- Image files: kebab-case (`detail-1.webp`)

---

## 5. Build Workflow

Follow this exact sequence for every project:

### Phase 1: Audit
1. Research the current site/brand thoroughly
2. Extract: suite inventory, contact info, testimonials, press mentions
3. Verify every trust claim against real sources
4. Download and audit all usable photography
5. Note what content to preserve vs. rewrite

### Phase 2: Information Architecture
1. Define routes for both locales
2. Map the homepage narrative journey (mood > place > suites > lifestyle > trust > convert > close)
3. Define which pages need server-side rendering (API routes only)

### Phase 3: Content Modeling
1. Create typed TypeScript interfaces for all content (suites, translations, testimonials)
2. Every text field must be `{ en: string; el: string }` or equivalent
3. Create centralized image import map in `data/images.ts`
4. Add `moodLine` (emotional one-liner) to every product/room/suite

### Phase 4: Design System
1. Define `@theme` tokens in `global.css`: colors, fonts, shadows, easing
2. Use warm neutrals (cream/sand/stone) + one cool accent (aegean) + one warm accent (terra/olive)
3. Define `label-uppercase` utility for section labels
4. Hero font: `clamp(2.75rem, 8vw, 6.5rem)` — fluid, never fixed
5. Body: 1rem base, 1.6 line-height
6. Headings: font-weight 300 (light), letter-spacing -0.02em

### Phase 5: Page Composition
1. Build BaseLayout first (meta, fonts, analytics, skip-link, header, footer, mobile bar, reveal observer)
2. Build homepage section by section in narrative order
3. Build suite detail template with dynamic data
4. Mirror all pages for second locale
5. Every page passes `locale` prop through to all components

### Phase 6: Motion
1. Add `motion.css` with `data-reveal` system
2. Add IntersectionObserver script in BaseLayout
3. Use `data-reveal` (default up), `data-reveal="left"`, `data-reveal="right"`, `data-reveal="editorial"` (slower)
4. Use `data-reveal-stagger` for card grids (80ms child delay)
5. Hero uses `.hero-enter` class with sequential animation-delay
6. Hero image uses `.hero-image-animate` (Ken Burns zoom-out)
7. NEVER animate every section the same way

### Phase 7: Forms
1. Create `pages/api/inquiry.ts` with `prerender = false`
2. Validate server-side: name, email, form-type-specific fields
3. Return `{ ok: true }` or `{ ok: false, errors: [...] }`
4. Client-side: `fetch(form.action)` with FormData
5. Show real success/error states — never fake success
6. Include hidden `<input name="form" value="booking|contact" />`
7. Use Resend (or equivalent) for production email, console.log for dev

### Phase 8: Image Pipeline
1. All images in `src/assets/images/`
2. Create `data/images.ts` with static ESM imports
3. Use Astro `<Image>` component everywhere
4. Hero: `widths={[640, 1024, 1440, 1920]}` sizes `100vw` quality `80`
5. Cards: `widths={[400, 640, 800, 1200]}` sizes responsive quality `75`
6. Decorative/background: quality `60-70`
7. Hero: `loading="eager"` + `fetchpriority="high"`. Everything else: `loading="lazy"`

### Phase 9: SEO
1. Set `site` in astro.config
2. Add `@astrojs/sitemap`
3. Every page: unique `<title>` + `<meta description>` in both locales
4. `<link rel="canonical">` + `<link rel="alternate" hreflang="en|el|x-default">`
5. OG: `og:title`, `og:description`, `og:image`, `og:locale`, `og:site_name`
6. Schema: `LodgingBusiness` with verified data only

### Phase 10: Accessibility
1. Skip-to-content link (bilingual) as first `<body>` child
2. `:focus-visible` with aegean color, 3px offset
3. `prefers-reduced-motion: reduce` disables ALL motion
4. All form fields: `<label>` with `for`/`id`, `required`, `autocomplete`
5. Menu: `aria-expanded`, `aria-label`, `aria-controls`
6. Semantic: `<section>`, `<nav>`, `<main>`, `<footer>`, `<fieldset>`, `<legend>`
7. Touch targets: minimum `h-12` (48px)

### Phase 11: QA
1. Build must succeed with zero errors
2. Verify all 20 pages generate
3. Test form submission end-to-end (success + validation failure)
4. Test language switch preserves page context
5. Visual check on mobile (375-430px), tablet, desktop
6. Verify no external image dependencies remain
7. Verify no `mailto:` as primary form action
8. Verify no unverified trust claims

### Phase 12: Launch Hardening
1. Set `RESEND_API_KEY` and `EMAIL_TO` env vars
2. Verify sitemap URLs use production domain
3. Verify OG image loads from production URL
4. Remove any dev-only console.log (keep inquiry dev fallback)
5. Test GA4/GTM firing

---

## 6. Design Language Rules

### Typography hierarchy
| Element | Font | Size | Weight | Tracking |
|---|---|---|---|---|
| Display (hero) | Cormorant Garamond | `clamp(2.75rem, 8vw, 6.5rem)` | 300 | tight |
| H1 | Cormorant Garamond | `clamp(2.5rem, 6vw, 4.5rem)` | 300 | tight |
| H2 | Cormorant Garamond | `clamp(2rem, 4.5vw, 3.5rem)` | 300 | tight |
| H3 | Cormorant Garamond | `text-xl` to `text-2xl` | 400 | normal |
| Body | Inter | `text-base` (1rem) | 400 | normal |
| Body large | Inter | `text-lg` | 300 | normal |
| Label | Inter | `0.7rem` | 500 | `0.15em` uppercase |
| CTA | Inter | `0.65-0.7rem` | 600 | `0.15-0.18em` uppercase |

### Color usage
- **Background**: `cream` (#FAF8F5) — main body
- **White sections**: `bg-white` — for contrast rhythm
- **Dark sections**: `bg-charcoal` (#3A3530) or `bg-ink` (#1E1B18) — for testimonials, inquiry, hosts
- **Text primary**: `ink` — headings, names, key content
- **Text secondary**: `stone-500` to `stone-600` — body copy
- **Text muted**: `stone-400` — labels, metadata, timestamps
- **Accent links**: `aegean-600` — for action links
- **Success**: `olive-500` — checkmarks, valid states
- **Error**: `terra-500` — validation errors
- **Hover CTA**: `ink` with `shadow-[0_8px_32px_rgba(0,0,0,0.15)]`

### Spacing rhythm
- Section padding: `py-24 md:py-32` (6rem/8rem) for major sections
- Section padding (dark/narrative): `py-24 md:py-36` (6rem/9rem) for emphasis
- Inner gaps: `gap-5` (1.25rem) for card grids, `gap-8` to `gap-16` for editorial splits
- Text-to-content: `mt-4` to `mt-6` for subtitles, `mt-8` to `mt-10` for body sections
- Page content max-width: `max-w-7xl` (main container), `max-w-5xl` (editorial), `max-w-2xl` or `max-w-xl` (narrow/form)

### CTA system
- **Primary**: `bg-white text-charcoal` on dark backgrounds, `bg-charcoal text-white` on light. Height `h-14` (56px) mobile, `h-12` (48px) desktop. `rounded-none` (sharp edges). Arrow icon on hover.
- **Secondary**: `border border-white/30` outline on dark, `border border-stone-300` on light. Same height.
- **Ghost**: Text-only with `.link-premium` animated underline.
- **Never**: `rounded-full` on primary CTAs (too casual). No gradient buttons.

### Card system
- Image-overlay cards: `rounded-xl`, gradient `from-black/70 via-black/20 to-transparent`, `group-hover:scale-105` on image
- Info cards: `rounded-xl border border-sand-200 bg-white`, `hover:shadow-premium`
- Grid cards (1px border): `gap-px bg-sand-200` container with `bg-white` children, `hover:bg-cream`

### Section transitions
- Cream-to-white: direct (no divider needed)
- Cream-to-dark: direct (contrast is the transition)
- Hero-to-content: bottom gradient fade from hero image into `cream` background
- Section dividers within: `h-px w-10 bg-stone-300` (short line, never full-width)

---

## 7. Motion Rules

### Allowed motion
| Effect | Where | Timing |
|---|---|---|
| Fade-up reveal | Content sections | 0.8s ease-premium |
| Stagger reveal | Card grids | 80ms delay per child |
| Left/right reveal | Editorial split layouts | 0.8s ease-premium |
| Editorial reveal | Brand/statement sections | 1.2s (slower, gentler) |
| Ken Burns | Hero background image | 12s zoom-out from 1.08 to 1.0 |
| Hero entrance | Hero text elements | 0.9s staggered at 0.2s intervals |
| Image hover zoom | Cards with `.img-zoom` | 0.7s to scale(1.04) |
| Link underline | `.link-premium` links | 0.4s width grow |
| CTA arrow shift | Group-hover `translate-x-1` | 0.3s |

### Forbidden motion
- Parallax scrolling (jank risk, distraction)
- Bouncing/elastic animations
- Auto-playing carousels or sliders
- Mouse-tracking effects
- Page transitions (complexity, no clear UX benefit)
- Scale effects larger than 1.08 (feels cheap)
- Blur transitions on content (performance)
- Identical reveal on every section (boring, not authored)

### Motion authorship rule
Each section should have AT MOST one type of motion. Vary the motion type across the page to create rhythm. Hero gets choreographed entrance. Brand statement gets editorial reveal. Card grid gets stagger. Editorial splits get directional reveals. Dark sections can use no motion at all (the color contrast IS the moment).

### Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  [data-reveal], [data-reveal-stagger] > *, .hero-enter > * {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 8. Content Modeling

### Suite interface (TypeScript)
```typescript
interface Suite {
  id: string;                          // 'sunshine'
  slug: string;                        // 'sunshine-suite'
  name: { en: string; el: string };
  tagline: { en: string; el: string }; // Factual subtitle
  moodLine: { en: string; el: string }; // Emotional one-liner (unique per suite)
  description: { en: string; el: string };
  shortDescription: { en: string; el: string };
  capacity: { guests: number; extraGuests?: number };
  bedrooms: number;
  bathrooms: number;
  hasJacuzzi: boolean;
  hasKitchen: boolean;
  hasBalcony: boolean;
  hasPrivateYard: boolean;
  bestFor: { en: string[]; el: string[] };
  highlights: { en: string[]; el: string[] };
  order: number;
}
```

### Translation dictionary
```typescript
const t: Record<string, { en: string; el: string }> = {
  'nav.home': { en: 'Home', el: 'Αρχική' },
  // ... 70+ keys
};
```

### Image mapping
```typescript
import heroImg from '../assets/images/property/hero.webp';
export const propertyImages = { hero: heroImg, ... } as const;
export const suiteCardImages: Record<string, ImageMetadata> = { ... };
```

**Critical rule**: Every image used in the site must be statically imported from `src/assets/`. No `public/` images for content (only for favicon, robots.txt, OG fallback).

---

## 9. Image System

### Where images belong
- `src/assets/images/property/` — hero, courtyard, editorial detail shots
- `src/assets/images/suites/` — one hero image per suite
- `public/` — ONLY favicon.svg, og-image.webp, og-image.svg

### Astro Image usage
```astro
import { Image } from 'astro:assets';
import { propertyImages } from '../../data/images';

<Image
  src={propertyImages.hero}
  alt="Descriptive alt text"
  widths={[640, 1024, 1440, 1920]}
  sizes="100vw"
  loading="eager"
  fetchpriority="high"
  quality={80}
  class="h-full w-full object-cover"
/>
```

### Loading strategy
| Position | loading | fetchpriority | quality |
|---|---|---|---|
| Hero (above fold) | `eager` | `high` | 80 |
| First suite card | `lazy` | - | 75 |
| All other images | `lazy` | - | 70-75 |
| Decorative/BG | `lazy` | - | 60 |

### Sizes attribute
- Full-width: `sizes="100vw"`
- Half-width on desktop: `sizes="(max-width: 768px) 100vw, 50vw"`
- Third-width on desktop: `sizes="(max-width: 640px) 100vw, 33vw"`
- Featured card: `sizes="(max-width: 640px) 100vw, 66vw"`

### Overlay rules
- Hero: `bg-gradient-to-b from-black/50 via-black/10 to-black/70` + bottom fade to cream
- Cards: `bg-gradient-to-t from-black/70 via-black/20 to-transparent`
- CTA background: `bg-charcoal/60 backdrop-blur-[2px]`
- Decorative BG: `opacity-15` on the `<img>`, parent has solid color

---

## 10. Forms and Inquiry

### Architecture
- Server endpoint: `src/pages/api/inquiry.ts` with `export const prerender = false`
- Client: `fetch(form.action, { method: 'POST', body: new FormData(form) })`
- Response: `{ ok: true }` or `{ ok: false, errors: ['...'] }`
- Email: Resend API in production (`RESEND_API_KEY` env var), console.log in dev

### Inquiry form structure
Three fieldset groups with `<legend>`:
1. **About you** — name, email
2. **Your stay** — suite selector, arrival date, departure date
3. **Anything else** — free-text textarea

### Concierge microcopy rules
- Heading: "Reserve Your Stay" (not "Book Now" or "Contact Us")
- Subtitle: mention hosts by name ("George & Didi confirm every booking personally")
- Suite dropdown: include "Not decided yet" as first option
- Textarea placeholder: helpful prompts ("Arriving by ferry? Need a transfer?")
- Submit: "Request Availability" (not "Submit" or "Send")
- Benefits: displayed as subtle dots below submit (best rate, flexible dates, welcome basket, personal concierge)
- Fallback: phone + email below form with "Prefer a personal touch?"

### Validation
- Client: `form.checkValidity()` + `form.reportValidity()` before fetch
- Server: name min 2 chars, valid email regex, arrival date required for booking forms
- CSS: `:user-invalid` for terracotta border, `:user-valid` for olive border
- Error state: terracotta-bordered alert with server error messages
- Success state: olive checkmark + "Thank you" + personal reassurance

### Hard rules
- No `mailto:` as primary form action
- No fake success states (no "if endpoint missing, show success anyway")
- No FORM_ID placeholders in production code
- Suite detail sidebar CTA links to `#booking` anchor, not mailto

---

## 11. Internationalization

### Route structure
- EN: `/`, `/suites`, `/suites/moonshine-suite`, `/our-story`, `/contact`
- EL: `/el/`, `/el/suites`, `/el/suites/moonshine-suite`, `/el/our-story`, `/el/contact`

### Language switch behavior
- Every page's Header computes the equivalent path in the alternate locale
- `/el/suites/epicure-suite` switch target: `/suites/epicure-suite`
- The `<a hreflang="en|el">` link preserves exact page context

### Translation approach
- UI strings: centralized `translations.ts` dictionary with `translate(key, locale)` function
- Content strings: inline in each data model (suites, testimonials) as `{ en: '...', el: '...' }`
- Page-level copy: hardcoded in each `.astro` file per locale (not in dictionary — avoids over-abstraction)

### Typography note
Cormorant Garamond renders Greek polytonic beautifully. Inter handles Greek well too. Both are loaded via Google Fonts with `display=swap`. Reduce font weights to only what's used (300, 400 for Cormorant; 300, 400, 500 for Inter).

---

## 12. SEO / Sharing / Structured Data

### Per-page requirements
- `<title>`: unique, descriptive, brand-suffixed (`Moonshine Suite — Rabagas Suites Sifnos`)
- `<meta description>`: unique, 120-160 chars, includes location and key differentiator
- `<link rel="canonical">`: absolute URL with production domain
- `<link rel="alternate" hreflang="en|el|x-default">`: all three on every page

### OG tags
```html
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="/og-image.webp" />
<meta property="og:url" content={canonical} />
<meta property="og:locale" content="en_US" />
```

### Schema.org
```json
{
  "@type": "LodgingBusiness",
  "name": "Rabagas Suites",
  "telephone": "+302117159002",
  "email": "info@rabagas-suites.gr",
  "address": { ... },
  "geo": { "latitude": 36.972574, "longitude": 24.72438 }
}
```
**No `aggregateRating`** unless verified and current. No invented review scores.

### Trust verification rule
Before including ANY trust element (rating, press mention, award), verify it against a real source. Press mentions must link back to verifiable articles. Guest quotes must come from the property's own verified testimonials.

---

## 13. Accessibility

| Requirement | Implementation |
|---|---|
| Skip link | First `<body>` child, bilingual, hidden until focus |
| Focus visible | `:focus-visible` with aegean-400 outline, 3px offset |
| Reduced motion | `prefers-reduced-motion: reduce` disables ALL animation/transition |
| Scroll behavior | `scroll-behavior: auto` under reduced motion |
| Form labels | Every `<input>` has `<label for="id">`. `required` attribute. `autocomplete`. |
| Form errors | Server returns specific error messages. CSS `:user-invalid` styling. |
| Menu | `aria-expanded`, `aria-label="Open menu"`, `aria-controls="mobile-nav"` |
| Touch targets | Minimum `h-12` (48px) for all interactive elements |
| Semantic HTML | `<section>`, `<nav>`, `<main>`, `<footer>`, `<fieldset>`, `<legend>` |
| Images | Descriptive `alt` text. Decorative images: `alt="" aria-hidden="true"` |
| Safe-area | Mobile bar: `padding-bottom: max(0.75rem, env(safe-area-inset-bottom))` |

---

## 14. Performance

| Rule | Implementation |
|---|---|
| Image optimization | Astro `<Image>` with `widths` + `sizes` + `quality` |
| Hero LCP | `loading="eager"` + `fetchpriority="high"` |
| Font loading | Google Fonts with `display=swap`, minimal weight subset |
| JS budget | Zero animation libraries. Only: IntersectionObserver (8 lines), header scroll (20 lines), menu toggle (15 lines), form submit (25 lines) |
| CSS | Tailwind purges unused classes. Two CSS files total (global + motion) |
| Animation budget | CSS-only transitions. Max 12s for Ken Burns. Most reveals 0.6-1.2s |

### What to avoid
- Framer Motion or GSAP for basic reveals
- External image CDNs when Astro handles optimization
- Multiple font families beyond two
- Client-side routing or SPA behavior
- Heavy carousel/slider libraries

---

## 15. 21st.dev Workflow

### How to use it properly
1. **Explore**: Use `21st_magic_component_inspiration` to search for patterns by concept, not by name
2. **Compare**: Request 2-3 variants for each surface (hero, cards, nav, forms)
3. **Extract patterns**: Don't copy React components. Extract the Tailwind classes, layout structure, and interaction patterns
4. **Adapt to Astro**: Rewrite as `.astro` components with zero React dependency
5. **Document**: Note which 21st.dev component inspired each section in a JSDoc comment

### Good search queries
- `"hero section full image"` — for hospitality heroes
- `"navbar glass morphism premium"` — for scroll-aware headers
- `"testimonial card review stars"` — for social proof
- `"contact info card grid icons"` — for arrival/contact pages
- `"scroll reveal mask text transition editorial"` — for signature moments
- `"featured card grid editorial magazine layout"` — for varied card hierarchies

### What to avoid
- Using 21st.dev components as-is (they're React, this is Astro)
- Copying animation libraries (Framer Motion) when CSS does the job
- Token/checkbox usage (using it once for one component)
- Losing coherence by mixing patterns from incompatible design systems

---

## 16. Anti-Patterns

**NEVER do these:**

1. **Fake trust**: No invented Booking.com scores, no unverified press mentions, no fabricated review counts
2. **Placeholder logic in production**: No `FORM_ID` strings, no `mailto:` as primary action, no "if no endpoint, show success"
3. **Public-only images**: Images in `public/` are NOT optimized by Astro. Content images MUST be in `src/assets/`
4. **Uniform motion**: Every section getting the same `data-reveal` fade-up feels generic, not authored
5. **Default link styling**: Browser blue/underline WILL bleed through unless explicitly reset with high-specificity rules
6. **Generic CTA language**: "Book Now" feels transactional. "Reserve Your Stay" or "Request Availability" feels concierge
7. **Overcrowded sections**: More content does not equal more value. Fewer, better-framed elements win
8. **Template card grids**: Every card the same size with identical rhythm reads as generic. Use featured/secondary hierarchy
9. **Hover-only interactions**: Nothing critical should require hover. All interactions must work on tap
10. **Mixed-language UI**: Every string, label, placeholder, and error message must be translated. Test by switching locales on every page

---

## 17. Rebuild Procedure (This Site)

1. `npm create astro@latest . -- --template minimal --typescript strict`
2. Install: Tailwind, sitemap, node adapter
3. Create folder structure per Section 4
4. Copy `global.css` and `motion.css`
5. Copy `data/` directory (suites, translations, testimonials, images)
6. Download property images to `src/assets/images/`
7. Build BaseLayout with meta, fonts, analytics, observer script
8. Build Header, Footer, MobileBookingBar, LanguageSwitcher
9. Build sections: Hero, BrandStatement, ArrivalNarrative, SuitesPreview, StayExperience, WhyRabagas, Testimonials, BookingInquiry, FinalCTA
10. Build pages: index, suites/index, suites/[slug], our-story, contact
11. Mirror all pages under `/el/`
12. Create `pages/api/inquiry.ts`
13. Build, test forms, test language switch, verify images, deploy

---

## 18. Fresh Build Procedure (New Project)

1. Audit client's brand, inventory, photography, and existing content
2. Verify all trust claims
3. Define IA (routes, page types, narrative flow)
4. Adapt the color palette: keep the warm-neutral + cool-accent + warm-accent structure, change specific hex values
5. Adapt the content model: replace `Suite` with the client's product type, keep bilingual structure
6. Build using the same phase sequence (Section 5)
7. Customize the motion system: change timing and direction choices, keep the `data-reveal` infrastructure
8. Use 21st.dev to explore alternatives for hero, cards, and key sections
9. Test all forms end-to-end before launch
10. Run the full launch checklist (Section 19)

---

## 19. Launch Checklist

- [ ] Build succeeds with zero errors
- [ ] All pages generate (count matches expected)
- [ ] No external image URLs in source code
- [ ] No `mailto:` as primary form action
- [ ] No `FORM_ID` or placeholder strings in production
- [ ] No unverified trust claims (ratings, awards, press)
- [ ] Form submission works end-to-end (success + error states)
- [ ] Language switch preserves page context on every page
- [ ] All translations complete (zero mixed-language UI)
- [ ] Sitemap generates with correct production URLs
- [ ] OG image loads from production URL
- [ ] GA4/GTM firing correctly
- [ ] `RESEND_API_KEY` set in production environment
- [ ] `site` config set to production domain
- [ ] Schema.org data verified (no aggregateRating unless real)
- [ ] iPhone Safari 390px — all pages look correct
- [ ] Android narrow (360px) — no broken layouts
- [ ] Desktop 1440px — compositions feel expansive
- [ ] Keyboard navigation: tab through all interactive elements
- [ ] Skip link visible on focus
- [ ] Reduced motion: no animation when system preference set
- [ ] Hero LCP under 2.5s on mobile
- [ ] No console errors in production

---

## 20. Claude Execution Prompt Template

Use this to start a new premium website build:

```
You are a senior web architect building a flagship luxury website.

Stack: Astro (latest), Tailwind CSS 4, TypeScript, @astrojs/sitemap, @astrojs/node.
Languages: English + [second locale].
Quality bar: Top 5% hospitality web design.

Follow the BUILD_PLAYBOOK.md in this repository exactly.

Phase 1: Audit the brand. Extract inventory, contact, trust elements. Verify all claims.
Phase 2: Define IA and narrative flow.
Phase 3: Model content in TypeScript with bilingual fields.
Phase 4: Build design system in global.css @theme.
Phase 5: Build pages section by section.
Phase 6: Add motion system (CSS-only, data-reveal attributes).
Phase 7: Build real form backend (API route, server validation, email delivery).
Phase 8: Set up Astro image pipeline (src/assets, <Image>, widths/sizes/quality).
Phase 9: Implement SEO (sitemap, hreflang, OG, schema).
Phase 10: Accessibility hardening (skip link, focus, reduced motion, semantics).
Phase 11: QA (forms, i18n, images, trust, devices).
Phase 12: Launch hardening (env vars, analytics, final verification).

Rules:
- No fake trust signals
- No placeholder form logic
- No mailto as primary submission
- No public/ images for content
- No uniform motion across all sections
- No template-feeling layouts
- Mobile-first (390px is primary target)
- Every element must be translated
- Every image must go through Astro optimization

Use 21st.dev MCP for exploration, not blind copying.
Document which patterns inspired each section.
```
