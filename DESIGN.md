# DESIGN — Rabagas Suites

Context file for design skills (Impeccable, frontend-design) and any future Claude Code work. Distilled from `BUILD_PLAYBOOK.md` §§ 6–7, the current implementation in `src/`, and the live-site audit. Use this to evaluate, not to redesign.

## Direction in one paragraph

Quiet luxury. Cycladic heritage held by editorial restraint. Cinematic but slow. The page should feel like a well-edited travel column — generous breathing room, large serif headlines, narrow body measure, and one moment per section rather than ten. The site never raises its voice.

## Approved aesthetic

- **Premium quiet.** White space is the loudest element on the page. Whitespace > decoration.
- **Cycladic heritage.** Cream, ink, charcoal, Aegean blue, olive, terra. Whitewashed lanes, hand-troweled plaster, warm stone underfoot. Never tropical, never beach-club.
- **Editorial.** Long-form reads, body measure, drop-cap moments. Pull-quotes are rare and earned.
- **Cinematic.** Hero gets a 12s Ken Burns. Heading entrances are choreographed at 0.2s intervals. One signature motion per section.
- **Discreet.** No popups, no countdowns, no "X people viewing" tropes. The site whispers; the inquiry form is the conversion.

## Typography

| Role | Family | Size | Weight | Tracking |
|---|---|---|---|---|
| Display (hero) | Cormorant Garamond | `clamp(2.75rem, 8vw, 6.5rem)` | 300 | tight |
| H1 | Cormorant Garamond | `clamp(2.5rem, 6vw, 4.5rem)` | 300 | tight |
| H2 | Cormorant Garamond | `clamp(2rem, 4.5vw, 3.5rem)` | 300 | tight |
| H3 | Cormorant Garamond | `text-xl` to `text-2xl` | 400 | normal |
| Body | Inter | `text-base` (1rem) | 400 | normal |
| Body large (editorial) | Inter | `text-lg` | 300 | normal |
| Label kicker | Inter | `0.6–0.7rem` | 500 | `0.15em` uppercase |
| CTA | Inter | `0.6–0.7rem` | 600 | `0.15–0.2em` uppercase |

Greek headlines fall back to the OS serif (Cormorant has no Greek subset on Google Fonts) — this is the historical rendering and is intentional. Latin + Greek Inter subsets are self-hosted from `public/fonts/`.

## Color tokens (Tailwind `@theme` in `src/styles/global.css`)

| Token | Hex | Usage |
|---|---|---|
| `cream` | #FAF8F5 | Main body background |
| `sand-50 / 100 / 200` | warm off-whites | Subtle section banding, borders |
| `white` | #FFFFFF | Contrast sections |
| `charcoal` | #3A3530 | Dark hero / testimonials / booking |
| `ink` | #1E1B18 | Headings, key text, the deepest dark |
| `stone-400 / 500 / 600` | warm greys | Secondary copy, labels, metadata |
| `aegean-600 / 700` | Aegean blue | Link accent, hover state |
| `olive-500` | sage | Success affordances |
| `terra-500` | warm rust | Error affordances |

**Never:** pure black on cream (use `ink`), pure white on charcoal (use `cream`), or neon/saturated accents.

## Spacing & rhythm

- Section padding: `py-24 md:py-32` for major sections; `py-24 md:py-36` for narrative emphasis.
- Card-grid gap: `gap-5` (1.25rem) to `gap-10` (2.5rem).
- Editorial split gap: `gap-8` to `gap-16`.
- Page max-widths: `max-w-7xl` (main shell), `max-w-5xl` (editorial sections), `max-w-3xl` (essay body / journal post), `max-w-xl` (form).
- Section dividers within: `h-px w-10 bg-stone-300` (short rule, never full-width).

## Section transitions

- Cream → white: direct, no divider.
- Cream → charcoal/ink: direct, contrast IS the transition.
- Hero → content: bottom gradient fade from hero image into cream.
- Inside section: short stone-300 rule under kickers.

## CTA system

- **Primary** (dark surface): `bg-cream text-charcoal`, `h-14` mobile / `h-12` desktop, `rounded-none`, sharp edges, arrow icon shifts on hover.
- **Primary** (light surface): `bg-ink text-cream`, same height, same sharpness.
- **Secondary**: `border border-stone-300` (light) or `border border-white/30` (dark).
- **Ghost / inline**: text-only with `.link-premium` underline grow on hover.
- **Never:** `rounded-full` on primaries (too casual). No gradient buttons. No drop shadows on dark CTAs.

## Card system

- **Image-overlay cards** (suites): `rounded-xl`, gradient `from-black/70 via-black/20 to-transparent`, image scales to `1.04–1.05` on `group-hover`.
- **Info cards** (booking benefits, hosts): `rounded-xl border border-sand-200 bg-cream/white`, `hover:shadow-premium`.
- **Grid cards with 1px border** (contact 3-step): `gap-px bg-sand-200` container with `bg-white` children, `hover:bg-cream`.
- **Journal cards** (added Phase 12): borderless, top-rule, large serif headline, single para excerpt, footer-rule with read affordance. Press variant swaps the affordance for "Featured in {publication}".

## Motion (CSS-only, IntersectionObserver-triggered)

Allowed:
- `data-reveal` fade-up on content sections (0.8s ease-premium).
- `data-reveal-stagger` for card grids (80ms per child).
- `data-reveal="left"` / `"right"` for editorial splits (0.8s).
- Editorial reveal for brand/statement (1.2s, slower).
- Ken Burns on hero background (12s zoom-out 1.08 → 1.0).
- Hero text entrance staggered at 0.2s intervals (0.9s total).
- `.img-zoom` on cards (0.7s to `scale(1.04)`).
- `.link-premium` underline grow (0.4s).
- CTA arrow `translate-x-1` on group-hover (0.3s).

Forbidden:
- Parallax scrolling.
- Bouncing / elastic / spring overshoot.
- Auto-playing carousels.
- Mouse-tracking cursor effects.
- Astro view-transitions / ClientRouter (removed in Phase 9).
- Scale > 1.08 on hover.
- Blur transitions on content.
- The SAME reveal type on every section — varies the rhythm.

Motion authorship rule: **one motion type per section, varied across the page.** Hero choreographed. Brand statement editorial reveal. Card grid stagger. Editorial split directional. Dark testimonial / booking sections may use no motion at all — the contrast itself is the moment.

`prefers-reduced-motion` is respected globally via the `@media` block in `motion.css`.

## Image / art-direction principles

- All content images live in `src/assets/`, never `/public/`. The Astro `<Image>` pipeline generates hashed WebPs at the right widths.
- Real property photography only. No stock. No AI generations. No tropical seascape that isn't the actual Aegean view.
- Galleries are 4-column on desktop, 2-col on mobile. Lightbox is a single page-level instance.
- Hero LCP image is preloaded with a matching `<link rel="preload" imagesrcset>` to align with the rendered `<img>`.
- OG image is the property courtyard photo; defaults to `/og-image.webp` (1200×630).

## What is approved and locked

Do not redesign without a real bug/regression. Polish in place only:

- **Hero** (video/image, "Luxury can be discreet" tagline, primary + secondary CTA)
- **BrandStatement** (scroll-linked word reveal)
- **OriginStory** (3-beat 1850→today essay with `<em class="rabagas-mark">` accent)
- **ArrivalNarrative** (editorial split, "Apollonia is the quiet heart of Sifnos", featured-in row)
- **SuitesPreview** (6 suite cards, mood line, capacity, view-all CTA)
- **StayExperience** (morning / afternoon / evening rhythm)
- **WhyRabagas** (6-tile reasons grid)
- **Testimonials** (TestimonialCard component, real first names)
- **BookingInquiry** (form, benefits row, fallback contact)
- **FinalCTA** (closing line in italic)
- **Our Story** 5-section essay (neighbourhood → poet → nickname → venue years → suites)
- **HostsModule** (George & Didi bio, signature)
- **Suite detail pages** (hero, description, amenities, gallery, capacity table, related)
- **Suites index comparison table**
- **Footer brand block** (Rabagas Suites · Sifnos, Explore/Connect/Social/Location columns)
- **Header glass-morphism nav** with scroll-aware state
- **Mobile booking bar** at viewport bottom
- **Hreflang trio + canonical** on every page

## What's still open for polish (Phase 12 outputs — fair game)

- **Journal index** — filter chips, featured-card hierarchy, mobile spacing
- **Journal detail** — typography measure, drop-cap moment (not yet present), reading-rhythm above 1200px
- **Concierge section** — partner-card density, category-header hierarchy, "Have us arrange it" CTA tone
- **Cookie consent banner** — desktop position, mobile drawer fit, dark-on-cream contrast
- **BookingOffer ribbon** — currently feature-flagged + dormant; design needs final review when content lands
- **Footer cookie-prefs re-opener** — type weight, hover state

## Anti-patterns (will fail an Impeccable audit)

Visual / template-feel:
- Cards with hard drop shadows on cream
- `text-blue-500` or other un-tokenized colors
- `text-center` everywhere — wrecks editorial rhythm
- Buttons with rounded-full + emoji icon
- Hero with auto-playing sound
- Multi-color gradient backgrounds
- Stock-looking 3-up "feature" boxes with stock icons
- Floating "Trusted by" logo strip with generic logos

Type:
- Body text smaller than 15px on mobile
- Line-height under 1.4 on body
- Letter-spacing on body text
- Mixing 4+ font weights on one page
- All-caps paragraphs

Motion:
- Hover effects on touch-only elements
- Animation on every element on scroll
- Parallax of the hero image while scrolling
- Bouncy/spring easings on premium surfaces

Trust:
- Star ratings the property doesn't have
- "Awarded best…" without a verifiable link
- Stock guest photos as testimonials
- Mailto as the primary form action
- "Limited time / Only N left" copy

Code:
- New animation libraries (we use CSS only)
- New CSS-in-JS layer (we use Tailwind 4 + utility classes)
- React/Vue islands without justification (Astro pages are static)
- Inline `style="color: red"` instead of token classes

## How to evaluate (the bar)

If a reviewer can't tell whether the page is Rabagas or a generic Cycladic hotel, the page has failed. Premium quiet luxury looks the same as cheap minimalism *only* until you read the copy and feel the cadence. The job of the design is to make the cadence visible — through type, spacing, and one signature moment per section.
