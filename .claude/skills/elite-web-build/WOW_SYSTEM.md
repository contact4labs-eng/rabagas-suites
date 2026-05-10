# Wow System

## Signature Moments

A signature moment is ONE authored interaction or composition per homepage that makes it unforgettable. Not an animation. Not a gimmick. A design decision that could only exist on THIS site.

### Rules
- Exactly ONE per homepage
- Must be restrained — if it feels "flashy," it's wrong
- Must survive mobile without degradation
- Must respect reduced-motion
- Must support content, not compete with it

### By archetype

| Archetype | Signature moment idea |
|---|---|
| Hospitality | Scroll-triggered brand statement — words reveal from muted to full |
| Agency | Full-bleed case study hero with mask/reveal on scroll |
| SaaS | Product screenshot that scales and reframes on scroll |
| E-commerce | Collection grid with 2x featured product, staggered entry |
| Service | Split-screen authority — founder portrait + key credential, slow directional reveal |
| Editorial | Featured headline in massive serif with masked image behind text |

### Premium vs gimmicky
- **Premium**: Serves the content. Feels inevitable. Works without motion if reduced-motion is on.
- **Gimmicky**: Calls attention to itself. Feels trendy. Breaks without JS.

### Wow levels

| Level | What to build |
|---|---|
| Restrained | Clean hero + 1-2 reveals. No signature moment. |
| Premium | Cinematic hero + brand statement + editorial rhythm. Standard signature moment. |
| Flagship | Cinematic hero + signature scroll moment + editorial narrative + authored section choreography. |

---

## Visual Authorship Rules

### What makes it feel premium
1. **Spacing confidence** — generous whitespace that says "we don't need to fill every pixel"
2. **Typography hierarchy** — massive display contrasted with restrained body
3. **Image breathing room** — hero fills viewport, editorial images placed asymmetrically
4. **Restraint** — fewer sections, fewer words, fewer colors, each more impactful
5. **Contrast pacing** — light > dark > light > dark creates visual rhythm
6. **Compositional asymmetry** — image left / text right, then reversed
7. **Silence** — some sections have no motion, no decoration, just a statement and space

### How to avoid the template look
1. Break uniform grids — one card larger than others
2. Use editorial splits — 60/40 image/text with vertical offset
3. Vary backgrounds — cream, white, dark, not all same
4. Let titles bleed from hero into content — unique composition
5. Use brand statements — large serif with generous padding
6. Differentiate entities — each needs unique emotional hook (moodLine), not just data
7. Design transitions — how sections end and begin matters as much as the sections

### Desktop rules
- Content expansive, not stretched. Use `max-w-5xl` for editorial.
- Asymmetric columns: `grid-cols-[1.2fr_1fr]` not `grid-cols-2`
- Vertical offset between image/text: `md:pt-16`
- Hero text: `max-w-3xl` centered, not stretching full width

### Mobile rules
- Primary CTA in bottom viewport half
- Touch targets: 48px minimum
- Sticky bar: appears after scroll, safe-area padding
- Form inputs: `h-12` minimum
- Menu links: generous padding (`py-5`)

---

## Premium Section Recipes

### Hero
**Purpose**: Arrival mood + desire.
**Content**: Background image, label, display headline, subtitle, 1-2 CTAs, optional press trust.
**Layout**: Full viewport. Centered or bottom-aligned text. Multi-stop gradient overlay.
**Motion**: Ken Burns (12s), staggered text (0.2s intervals), bottom fade to content bg.
**CTA**: Primary solid + secondary outline. Sharp edges. Arrow on hover.
**Image**: `loading="eager"`, `fetchpriority="high"`, quality 80.
**Mistakes**: Stock hero. Too much text. Tiny CTAs. No gradient = unreadable.

### Brand Statement
**Purpose**: Signature moment. One sentence that IS the brand.
**Content**: 10-20 words. Large serif. Centered.
**Layout**: `py-28 md:py-40`. `max-w-4xl`.
**Motion**: Word-by-word scroll reveal OR editorial slow fade.
**Mistakes**: Too many words. Adding images. Rushing past.

### Narrative Section
**Purpose**: Sell context — place, brand, feeling.
**Content**: Portrait image + editorial copy. Optional trust badges.
**Layout**: Asymmetric 2-column. Image left, text right (or reversed).
**Motion**: Directional — image from left, text from right.
**Mistakes**: Generic copy. Stock photos. Centering everything.

### Discovery Grid
**Purpose**: Make browsing irresistible.
**Content**: Featured item (full-width) + grid of remaining.
**Layout**: Featured: `aspect-[16/7]` gradient overlay. Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
**Motion**: Featured: editorial (1.2s). Grid: staggered (80ms).
**Mistakes**: All same size. No mood lines. Overcrowded metadata.

### Testimonials
**Purpose**: Trust through real voices.
**Content**: 4-6 verified quotes. Decorative quote mark. No unverified ratings.
**Layout**: 2-col desktop, 1-col mobile. Optional dark background.
**Motion**: Staggered children.
**Mistakes**: Fake ratings. Too many. Generic quotes.

### Inquiry Form
**Purpose**: Convert. Feel like concierge, not form.
**Content**: Personal heading. Grouped fields. Intent language submit. Benefits. Fallback contact.
**Layout**: Dark bg. White form card. Centered narrow.
**Motion**: Editorial reveal.
**Mistakes**: "Submit" button. No grouping. No reassurance. Fake success.

### Contact / Arrival
**Purpose**: Beginning of hosted experience.
**Content**: Travel steps (if applicable). Contact info. Concierge services.
**Layout**: Dark hero. Numbered steps. Asymmetric contact + services.
**Mistakes**: Admin dump. Missing hours. No map link.

### Story / About
**Purpose**: Brand identity as emotional asset.
**Content**: Lead statement. Alternating editorial splits. Team/founder on dark bg. Closing quote.
**Layout**: `max-w-5xl`. Alternating columns with vertical offset.
**Mistakes**: Wall of text. No images. No personality.

### Pricing
**Purpose**: Make right plan obvious.
**Content**: 2-4 tiers. Comparison. Recommended highlighted.
**Layout**: Card grid, one emphasized.
**Mistakes**: Too many tiers. Hidden features.

### Footer
**Purpose**: Elegant close. Brand bookend.
**Content**: Centered brand lockup. 4-col links. Social. Copyright + tagline.
**Layout**: Dark bg. Centered brand top. Grid below.
**Motion**: None.
**Mistakes**: Cluttered. Duplicating full nav.

---

## Motion System

### Implementation
CSS-only + IntersectionObserver (5 lines). Zero libraries.

```javascript
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => observer.observe(el));
```

### Types
| Attribute | Effect | Duration |
|---|---|---|
| `data-reveal` | Fade up 24px | 0.8s |
| `data-reveal="left"` | From left 32px | 0.8s |
| `data-reveal="right"` | From right 32px | 0.8s |
| `data-reveal="editorial"` | Slow up 32px | 1.2s |
| `data-reveal-stagger` | Children at 80ms | 0.6s each |
| `.hero-enter` | Sequential entrance | 0.9s, 0.2s stagger |
| `.hero-image-animate` | Ken Burns zoom-out | 12s |
| `.img-zoom` | Hover scale 1.04 | 0.7s |
| `.link-premium` | Underline grow | 0.4s |

### Authorship rule
Not every section gets motion. Dark sections can use none — contrast IS the moment.

### Forbidden
Parallax. Bouncing. Auto-carousels. Mouse-tracking. Uniform reveals. Scale > 1.08.

### Reduced motion
`prefers-reduced-motion: reduce` → all animation/transition disabled via `!important`.
