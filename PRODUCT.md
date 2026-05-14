# PRODUCT — Rabagas Suites

Context file for design skills (Impeccable, frontend-design) and any future Claude Code work on this repo. Distilled from `CLAUDE.md`, `BUILD_PLAYBOOK.md`, `ELITE_WEB_BUILD_SYSTEM.md`, the live-site audit, and the current implementation. Practical, not aspirational.

## What Rabagas is

A six-suite restored Cycladic settlement in the heart of Apollonia, Sifnos. Each suite is an independent pre-1910 residence with its own door, outdoor space, and character. Hosted personally by George & Didi. The name comes from Kleanthis Triantafyllou ("Rabagas"), a 19th-century Sifnian journalist whose square the buildings sit beside.

Not a hotel. Not a rental. A small, quiet, expensive, family-run boutique stay.

## Target audience

Primary:
- Couples (honeymoons, romantic weeks, anniversary trips), 30–55, EU/UK/US/AU.
- Repeat Greek-island travellers who already know Santorini/Mykonos are too loud.
- Slow-travel foodies, design-aware travellers, low-key affluence ("quiet luxury").
- Greek domestic audience that reads Athinorama/Vivre — recognizes the brand from press.

Secondary:
- Families with one or two children booking the larger suites (Sunshine, Apollonia).
- Small groups of friends (4-5) for the largest residences.

Not the audience: party crowd, packages, large groups, conference travel, transient one-nighters.

## Brand position

> Luxury can be discreet.

The voice is editorial, unhurried, slightly literary. Not aspirational-marketer voice. Not influencer voice. Closer to a well-edited travel magazine column than a hotel brochure. Greek-confident, French-fluent, English-warm.

Anti-references (these things weaken the brand):
- WordPress hotel theme energy
- Generic villa-rental aggregator copy
- "Book now / Save 10% / Limited time!" urgency tropes
- Generic "discover paradise" hospitality clichés
- Influencer-style superlatives
- Stock photography
- Star ratings the property doesn't officially hold

## Conversion goals

In priority order:

1. **Direct booking inquiry** via `/api/inquiry` (the form on home + contact + suite detail). George & Didi reply in person within hours.
2. **Phone or email** to `+30 211 715 9002` or `info@rabagas-suites.gr`.
3. **Newsletter** — intentionally not built. Re-evaluate post-launch only with a real provider.

The inquiry form is the only conversion endpoint. No third-party booking widget, no live availability, no Booking.com embed on-site. The reply is by humans.

## Key site goals (in order)

1. Establish premium positioning in the first 4 seconds (hero, type, restraint).
2. Communicate the six-suite distinct-residence story without making the visitor pick.
3. Build trust with verified press (Condé Nast Traveller, Athinorama, in2life, Vivre Athènes) and real guest reviews.
4. Resolve practical questions before they're asked (getting to Sifnos, where to base, what's worth doing) — this is the Journal's job.
5. Convert quietly through the inquiry form. No popups, no countdowns, no upsells.

## Old-site functionality that must be preserved

Already migrated in Phase 12, do not regress:
- Six suite identities (Boutique, Epicure, Euphoria, Moonshine, Sunshine, Apollonia) with distinct copy + galleries.
- Heritage / origin story (Kleanthis Triantafyllou, the 1872 Sardou play, the 1878 magazine, the Kikladonxoros venue years, the restoration).
- Real verified press: Condé Nast Traveller, Athinorama, in2life, Vivre Athènes, Travel Girl.
- Concierge partners: Sifnos Elite Rides, Apollo Rental Kamares, Auto Moto Rent, Vento Cruises, Valema Yachting, Bluestar Ferries, Seajets, Flyhopper.
- Real contact: Apollonia, Sifnos 84003 · +30 211 715 9002 · info@rabagas-suites.gr.
- Real socials: Instagram (rabagas.suites), Facebook (Rabagas Suites Sifnos).

Pending owner re-verification before public launch:
- The 10% direct-booking offer code (currently feature-flagged via `PUBLIC_OFFER_CODE`, not published).
- TripAdvisor + TikTok handles (omitted until URLs are confirmed).

## Old-site functionality that must NOT be copied

- Rome / placeholder contact strings, "reservations@yourdomain.com", any template-residue fake info.
- Login / register / lost-password UI (WordPress backend leakage).
- The bottom-right "Get 10% off" interrupt popup.
- The footer dump of partner links styled as a bulleted plugin list.
- `{title}` / `{vendor_count}` cookie consent placeholders.
- Generic Twitter / Facebook placeholders that don't point to real accounts.
- Tag clouds, archive widgets, WordPress sidebar widgets, search bar.
- Auto-playing carousels, urgency timers, "X people viewing now" tropes.

## Trust rules

Non-negotiable:
- Zero fabricated ratings, awards, stars, or press claims. Every press item has a verifiable external link via `isBasedOn` schema.
- `aggregateRating`, `starRating`, `checkinTime`, `checkoutTime`, `petsAllowed` are all omitted from `Hotel` schema until officially documented.
- `smokingAllowed: false` is the only behavior claim — defensible by Greek law N.3868/2010.
- Testimonials use real first names, real arrival contexts, no last-name fabrication.
- Hosts are named (George & Didi). Reply time claims are real ("within hours").
- The inquiry form's success state is real — the email actually sends via Resend in production.

## Locale requirements

Three locales, **complete parity** required for launch:
- **EL** (default, root path) — Modern Greek. Primary domestic audience. Correct spelling: `Απολλωνία` (single π, double λ). Reject `Αππολωνία`.
- **EN** (`/en/`) — UK/US English. Primary international audience.
- **FR** (`/fr/...` with translated path segments: `/les-suites`, `/notre-histoire`) — French travel audience.

Rules:
- No `[FR-TODO]`, no mixed-language strings, no untranslated UI labels.
- Every new route must exist in all three locales before it ships (or be explicitly behind a flag).
- Language switcher preserves page context — switching from `/en/suites/euphoria-suite` lands on `/fr/les-suites/euphoria-suite`, not the home page.
- Journal posts use per-locale slugs (one canonical key, three localized slugs).
- Hreflang trio + x-default emitted on every content page.

## Launch blockers (must clear before public launch)

- GitHub push of Phase 12 + 12.1 commits (currently blocked on gh auth).
- Owner confirmation of the 2026 direct-booking offer code (or decision to skip).
- Owner verification of every concierge partner URL (we used canonical brand domains; some may have moved).
- TripAdvisor + TikTok handles confirmed or formally dropped.
- `PRODUCT.md` + `DESIGN.md` (this turn) reviewed and signed off.
- A real Impeccable audit run, with the ranked findings either addressed or explicitly deferred.

## Out of scope for this build

- Direct online booking with availability calendar and payments. (Inquiry-only by design.)
- User accounts, login, password recovery, wishlists.
- Multi-vendor / multi-property listings.
- Live chat / chatbot.
- Currency switcher (price is not displayed publicly).
- Newsletter (until provider chosen).
- Figma source — no Figma URL exists; design is being built directly in code from the old-site audit and the playbook.

## How design skills should respect this

When `impeccable` / `frontend-design` / any future skill operates on this repo:

- Read this file and `DESIGN.md` first.
- Treat `elite-web-build` as the master playbook — these external skills are supporting tools, not overrides.
- Do not redesign approved sections (Hero, OriginStory, ArrivalNarrative, SuitesPreview, HostsModule, the Our Story essay) unless a real regression is found.
- Polish, not pivot. If the audit finds a problem, fix it in place. If it suggests a different aesthetic, push back and ask.
- Three-locale parity is required for every change.
- No new third-party JS, no animation libraries, no Figma adapters, no CMS integrations.
