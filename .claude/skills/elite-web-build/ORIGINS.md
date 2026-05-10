# What This Skill Inherits from the Rabagas Build

This skill was derived from a real production rebuild of rabagas-suites.com — a luxury boutique hospitality website in Sifnos, Greece. The following hard-won lessons became universal rules:

## Trust verification discipline
A 9.7/10 Booking.com rating was included for several review cycles before being caught as unverifiable. This proved that trust claims MUST be independently verified for every build, every industry. The verification matrix in `CHECKLISTS.md` exists because of this failure.

## Image pipeline discipline
Images placed in `public/` were presented as "optimized" in early passes. They were not. Astro only processes images imported from `src/assets/`. This is the #1 image pipeline mistake and it applies to every Astro project. The hard rule — content images in `src/assets/` only — exists because of this.

## Real forms, not decorative ones
The booking inquiry form went through mailto, then fake-success-on-no-endpoint, then a real server endpoint. Each intermediate state was correctly rejected. The rule "no fake forms" with real server validation, real error states, and real email delivery is non-negotiable because users trust forms.

## Motion authorship over quantity
The final site uses 7 motion types but each section gets at most one. Some sections (dark testimonials) use none — the background color change IS the moment. Uniform fade-up on every section was correctly identified as "template feel." The variety-with-restraint principle is now a core motion rule.

## Editorial asymmetry defeats templates
Breaking uniform grids with featured/secondary hierarchy, image-left/text-right alternation, and varied section backgrounds is what separated the final Rabagas build from its early template-feeling passes. The visual authorship rules in `WOW_SYSTEM.md` codify this.

## Link reset caveat
Tailwind v4's `@layer base` loses specificity to browser visited-link styles, causing blue underlined links on logos and brand elements. The fix requires the link reset OUTSIDE `@layer` plus inline styles on critical links. This is framework-specific but affects every Tailwind 4 project.

## Emotional differentiator per entity
Adding a `moodLine` field — a unique emotional one-liner per suite — was the single biggest upgrade to entity differentiation. "Designed for two. A place to disappear together." creates completely different desire than "Space to breathe. Room to gather." Every primary content entity benefits from this pattern.

## Concierge framing converts better than transactional
"Reserve Your Stay" outperforms "Book Now." Field grouping with `<fieldset>` (About you / Your stay / Anything else) outperforms flat field lists. Naming the hosts in reassurance copy ("George & Didi confirm personally") outperforms generic "We'll get back to you." The inquiry form is a hospitality moment, not a checkout step.
