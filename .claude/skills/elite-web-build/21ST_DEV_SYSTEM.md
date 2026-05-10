# 21st.dev Creative Direction System

## Purpose
21st.dev is a creative exploration tool. Use it to discover patterns, compare approaches, and elevate design decisions. Never copy-paste React components into Astro.

## When to explore

| Surface | Always | If time | Skip |
|---|---|---|---|
| Hero | 3-5 variants | | |
| Navigation/menu | 3 variants | | |
| Primary card system | 3-4 variants | | |
| Inquiry/lead form | 2-3 variants | | |
| Signature moment | 2-4 variants | | |
| Testimonials | | 2-3 variants | |
| Footer | | 2 variants | |
| Feature grid | | 3 variants | |
| Pricing | | 2-3 variants | |
| Editorial splits | | 2 variants | |
| Simple contact | | | Build custom |
| Comparison tables | | | Build custom |

## Exploration intensity by wow level

| WOW Level | Surfaces | Variants per surface |
|---|---|---|
| Restrained | Hero + cards (2 surfaces) | 2-3 each |
| Premium | Hero + cards + inquiry + nav (4 surfaces) | 3 each |
| Flagship | Hero + cards + inquiry + nav + signature + footer (6+ surfaces) | 4-5 each |

## Exploration loop

```
1. DEFINE surface + purpose
   Example: "Hero → create arrival mood, drive to booking CTA"

2. DEFINE criteria (use table below)

3. SEARCH with 2-3 query variations
   Use 21st_magic_component_inspiration tool

4. COMPARE returned variants against criteria

5. CHOOSE direction (or combine best elements)

6. ADAPT to Astro
   - Extract Tailwind classes + layout structure
   - Discard React runtime, Framer Motion, external deps
   - Rewrite as .astro component

7. TEST on mobile first (390px)

8. TEST coherence in full page context

9. REFINE spacing, typography, motion to match site design system

10. LOCK — document in JSDoc which pattern inspired the section
```

## Comparison criteria

| Criterion | Weight | Check |
|---|---|---|
| Premium feel | HIGH | Does it feel expensive or template-like? |
| Mobile quality | HIGH | Does it work at 390px without compromise? |
| Clarity | HIGH | Is content hierarchy immediately clear? |
| Coherence | HIGH | Does it fit the rest of the site? |
| Conversion support | MEDIUM | Does it guide toward CTA? |
| Originality | MEDIUM | Distinctive or generic? |
| Desktop elegance | MEDIUM | Uses wide space well? |
| Astro adaptability | MEDIUM | Works without React/Framer? |
| Motion potential | LOW | Can CSS enhance it? |

**Decision rule**: Premium feel + mobile + clarity wins over novelty. Coherence > cool factor.

## Query bank

### Hero
- `"hero section full image luxury"` — hospitality, real estate
- `"hero section gradient bold"` — SaaS, startup
- `"hero scroll animation editorial"` — agency, luxury
- `"hero video background"` — event, venue
- `"hero split text image"` — service, professional
- `"hero minimal clean"` — portfolio, editorial

### Navigation
- `"navbar glass morphism premium"` — luxury, editorial
- `"navbar scroll transparent solid"` — marketing, SaaS
- `"mobile menu fullscreen"` — any premium
- `"navbar minimal clean"` — portfolio, editorial
- `"navbar sticky shrink"` — marketing, service

### Cards
- `"image overlay card hotel room"` — hospitality, real estate
- `"featured card grid editorial"` — agency, editorial
- `"product card hover"` — e-commerce
- `"pricing card comparison"` — SaaS
- `"team member card"` — service, agency
- `"case study card"` — agency, service

### Social proof
- `"testimonial card review"` — any with reviews
- `"logo cloud clients"` — agency, SaaS
- `"stats counter section"` — SaaS, service

### Forms
- `"booking inquiry form dark"` — hospitality
- `"contact form card"` — any
- `"demo request form"` — SaaS
- `"newsletter signup minimal"` — editorial, e-commerce
- `"multi-step form"` — complex inquiries

### Features
- `"feature grid icons"` — SaaS, service
- `"bento grid features"` — SaaS, product
- `"feature split image text"` — any
- `"comparison table"` — SaaS, service

### Signature moments
- `"scroll reveal mask text"` — brand statement
- `"text reveal staggered fade"` — editorial moment
- `"parallax hero scroll animation"` — cinematic hero
- `"horizontal scroll carousel"` — portfolio, gallery
- `"split screen editorial image text luxury"` — narrative section

### Footer
- `"footer premium dark"` — luxury, agency
- `"footer minimal clean"` — portfolio, editorial

### Other surfaces
- `"pricing card comparison"` — SaaS
- `"travel directions steps"` — hospitality, location
- `"portfolio work showcase"` — agency, portfolio
- `"community member proof"` — community, membership
- `"event venue spaces"` — event, venue

## Misuse warnings

1. **Token usage**: One surface, one variant, no comparison — provides zero creative value
2. **Copy-paste**: React components dropped into Astro without rewriting — breaks architecture
3. **Style mixing**: Brutalist nav with elegant serif hero — kills coherence
4. **JS bloat**: Importing Framer Motion for a CSS-achievable fade — unnecessary weight
5. **Cool over coherent**: Section that looks great alone but clashes with the page
6. **Ignoring mobile**: Choosing a desktop-impressive variant that breaks at 390px
