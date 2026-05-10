# Checklists

## Trust Verification

Before including ANY trust element, verify it passes: "Can you show me the source?"

| Element | Verified (use) | Risky (caution) | Prohibited |
|---|---|---|---|
| Client logos | Written permission | Public LinkedIn listing | Invented/implied |
| Ratings | Linked verifiable source | Self-reported, plausible | Fabricated/inflated |
| Press mentions | Article URL exists | Passing mention, no article | Invented publications |
| Awards | Verifiable body, year stated | Obscure body | Made-up names |
| User counts | Public data | Approximate ("hundreds") | Specific fake numbers |
| Case metrics | Client-confirmed | Estimated with disclosure | Invented results |
| Certifications | Verifiable, current | Recently expired | Never held |
| Security claims | SOC2/ISO current | In progress | Unaudited claims |
| Sustainability | Third-party certified | Internal, documented | Greenwashing |
| AI claims | Demonstrable | In development | "AI-powered" without AI |
| Team members | Real employees, real photos | Contractors disclosed | Stock photos |
| Testimonials | Named, verifiable | Anonymous but real | Fabricated quotes |

## Form Implementation

- [ ] Server endpoint exists (`pages/api/`) with `prerender = false`
- [ ] Typed interface for form data
- [ ] Server-side validation with specific error messages
- [ ] Response format: `{ ok: true }` or `{ ok: false, errors: [...] }`
- [ ] Client-side: `fetch(form.action)` with `FormData`
- [ ] Success state: form hidden, confirmation message shown
- [ ] Error state: alert with server error messages
- [ ] Loading state: button disabled + "..." text
- [ ] CSS `:user-invalid` for terracotta/error border
- [ ] CSS `:user-valid` for olive/success border
- [ ] Hidden `<input name="form" value="[type]">` for routing
- [ ] Email delivery configured (Resend/equivalent)
- [ ] Dev mode: console.log fallback (clearly labeled)
- [ ] No `mailto:` as primary action
- [ ] No fake success states
- [ ] No FORM_ID placeholders
- [ ] Fallback contact (phone/email) near form
- [ ] Complex forms: `<fieldset>` + `<legend>` grouping

## Image Pipeline

- [ ] All content images in `src/assets/images/`
- [ ] Centralized imports in `data/images.ts`
- [ ] Using framework `<Image>` component everywhere (not raw `<img>`)
- [ ] Hero: `widths={[640, 1024, 1440, 1920]}`, `sizes="100vw"`, quality 80
- [ ] Cards: `widths={[400, 640, 800, 1200]}`, responsive sizes, quality 75
- [ ] Decorative: quality 60-70
- [ ] Hero: `loading="eager"` + `fetchpriority="high"`
- [ ] All others: `loading="lazy"`
- [ ] Decorative images: `alt="" aria-hidden="true"`
- [ ] Content images: descriptive `alt` text
- [ ] No images in `public/` except favicon, og-image, robots.txt
- [ ] No external image URLs in source code

## Accessibility

- [ ] Skip-to-content link: first `<body>` child, hidden until focus, localized
- [ ] `:focus-visible` on all interactive elements (accent outline, 3px offset)
- [ ] `prefers-reduced-motion: reduce` disables ALL animation/transition
- [ ] `scroll-behavior: auto` under reduced motion
- [ ] Form labels: `<label for="id">` on every field
- [ ] Form fields: `required`, `autocomplete` attributes
- [ ] Form errors: server messages displayed, `:user-invalid` CSS
- [ ] Menu: `aria-expanded`, `aria-label`, `aria-controls`
- [ ] Touch targets: minimum `h-12` (48px)
- [ ] Semantic HTML: `<section>`, `<nav>`, `<main>`, `<footer>`, `<fieldset>`, `<legend>`
- [ ] Color contrast: 4.5:1 body, 3:1 large text (WCAG AA)
- [ ] Safe-area: `env(safe-area-inset-bottom)` on sticky mobile elements

## Performance

- [ ] LCP < 2.5s on mobile
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] Total JS < 50KB (excl. analytics)
- [ ] Total CSS < 30KB (after purge)
- [ ] Fonts: 2 families, 2-3 weights each, `display=swap`
- [ ] Hero image < 150KB at served size
- [ ] Max 1-2 images above fold
- [ ] No render-blocking third-party scripts
- [ ] Zero animation libraries (CSS-only motion)

## Multilingual Parity

- [ ] Language switch preserves exact page context on every page
- [ ] Every nav label translated
- [ ] Every CTA translated
- [ ] Every form label and placeholder translated
- [ ] Every error message translated
- [ ] Every success message translated
- [ ] Every meta title and description localized
- [ ] Footer fully translated
- [ ] No mixed-language UI on any page
- [ ] hreflang alternates on every page

## Launch QA

### Build
- [ ] Build succeeds with zero errors
- [ ] All expected pages generate (count matches)
- [ ] No console warnings in production build

### Trust
- [ ] All trust elements verified against sources
- [ ] No fabricated ratings, logos, metrics, testimonials

### Forms
- [ ] Booking/inquiry: valid submit → success
- [ ] Booking/inquiry: invalid submit → error messages
- [ ] Contact: valid submit → success
- [ ] Contact: invalid submit → error messages
- [ ] Production email delivery tested

### Content
- [ ] All translations complete
- [ ] All detail pages consistent
- [ ] All contact data correct
- [ ] No dead links

### Images
- [ ] No external URLs in source
- [ ] All served through framework optimization
- [ ] Hero `eager` + `fetchpriority="high"`

### SEO
- [ ] Sitemap with production URLs
- [ ] OG image loads from production
- [ ] hreflang correct
- [ ] Canonical URLs correct
- [ ] Schema verified

### Analytics
- [ ] GA4/GTM firing
- [ ] No duplicate tags

### Devices
- [ ] iPhone Safari 390px
- [ ] Android 360px
- [ ] Tablet 768px
- [ ] Desktop 1440px

### Accessibility
- [ ] Keyboard tab through everything
- [ ] Skip link visible on focus
- [ ] Reduced motion works
- [ ] Contrast passes

### Performance
- [ ] LCP within budget
- [ ] No render-blocking resources

## Post-Launch

- [ ] Form submissions arriving in inbox
- [ ] Analytics data appearing
- [ ] No 404s in search console
- [ ] Sitemap indexed
- [ ] Core Web Vitals passing (check after 28 days)
