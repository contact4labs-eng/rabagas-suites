# Rabagas Sifnos Suites — Premium Rebuild

Heritage luxury suites in the heart of Apollonia, Sifnos. This repository is the new premium build replacing the legacy WordPress site at https://rabagas-suites.com/.

## Stack

- [Astro 6](https://astro.build) (static + on-demand SSR for the form endpoint via `@astrojs/node`)
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`, design tokens in `src/styles/global.css`
- TypeScript strict
- `@astrojs/sitemap` (auto-generated)
- Resend for transactional email (`/api/inquiry` → owner inbox; falls back to `console.log` in dev)

Three locales — display order **EL · EN · FR**:
- **EL** (default, no prefix): `/`, `/suites`, `/our-story`, `/contact`
- **EN**: `/en/`, `/en/suites`, `/en/our-story`, `/en/contact`
- **FR**: `/fr/`, `/fr/les-suites`, `/fr/notre-histoire`, `/fr/contact`

FR translates the path segments (`les-suites`, `notre-histoire`); the suite slug under `/fr/les-suites/<slug>` is shared with EN/EL for cross-locale linking.

## Where content lives

| What | Where |
|---|---|
| UI strings (per locale) | `src/data/translations.ts` (single dictionary, three values per key) |
| Suite inventory (6 suites, trilingual) | `src/data/suites.ts` |
| Guest testimonials | `src/data/testimonials.ts` |
| Image imports for the optimization pipeline | `src/data/images.ts` |
| i18n routing helpers | `src/lib/i18n.ts` |
| Layout / meta / analytics / hreflang | `src/layouts/BaseLayout.astro` |
| Page sections | `src/components/sections/` |
| Reusable UI bits | `src/components/ui/` |
| Form endpoint | `src/pages/api/inquiry.ts` (`prerender = false`) |
| Live-site extraction archive (gitignored) | `extraction/` (Phase 2 output) |

Phase 4 will migrate verified copy from `extraction/copy/*.{el,en,fr}.json` into the data files; for now FR values in `translations.ts` and `suites.ts` are EN strings prefixed with `[FR-TODO] ` so they are scannable.

## How to run

The repo includes `.claude/launch.json` with a server config named `dev` on port `4350`.

**From Claude Code:** call `preview_start` with `name: "dev"`. Do not run `npm run dev` directly — the harness routes through `preview_start` for log capture and reuse.

**Manually**, if needed:
```sh
npm install
npm run dev -- --port 4350
```

The dev server runs the project at <http://localhost:4350>.

## How forms work

`src/components/ui/BookingInquiry.astro` and `src/pages/{,en/,fr/}contact.astro` post to `POST /api/inquiry` (defined in `src/pages/api/inquiry.ts`). The endpoint validates server-side (`name` ≥ 2 chars, valid email regex, `checkin` for booking forms), formats the body, and:

- **Production:** sends via [Resend](https://resend.com) when `RESEND_API_KEY` is set, with `EMAIL_TO` as recipient (default `info@rabagas-suites.gr`). Sender domain `rabagas-suites.com` needs SPF/DKIM in Resend before launch.
- **Dev:** logs the formatted submission to the console with the marker `=== INQUIRY RECEIVED (no email service configured) ===`.

Real success / error states only — no fake `200`s, no `mailto:` fallback.

## Build & deploy

```sh
npm run build      # → ./dist/server (Node standalone) and ./dist/client
npm run preview    # serve the built output
```

Hosting target is **Cloudflare Pages**; the adapter swap from `@astrojs/node` is deferred to a later phase.

Required env vars at deploy:

| Var | Purpose |
|---|---|
| `RESEND_API_KEY` | Inquiry email delivery |
| `EMAIL_TO` | Inquiry recipient (defaults to `info@rabagas-suites.gr`) |

## Conventions and quality bar

- All content images go through `src/assets/` (and import via `src/data/images.ts`); Astro's `<Image>` does the responsive optimization. **Never reference content images from `/public/`** — those are not optimized.
- No `mailto:` as a primary form action.
- No fabricated trust signals (ratings, awards, press) — every claim verified against a real source. See [BUILD_PLAYBOOK.md](BUILD_PLAYBOOK.md) §12 and §16.
- No uniform motion. Reveal types vary across sections; reduced-motion disables everything.
- Mobile-first (390px iPhone Safari is primary canvas), desktop enhances.
- Every page is complete in all three locales before launch — zero `[FR-TODO]` markers in production.

## Authoritative documents

- [BUILD_PLAYBOOK.md](BUILD_PLAYBOOK.md) — internal studio manual specific to this project (sections, motion, forms, image rules, design tokens).
- [ELITE_WEB_BUILD_SYSTEM.md](ELITE_WEB_BUILD_SYSTEM.md) — universal playbook (archetypes, recipes, signature moments, 21st.dev exploration, QA).
- [extraction/](extraction/) — live-site extraction archive (gitignored): SITE_MAP.md, FLAGS.md, VOICE_NOTES.md, copy/*.json, images/.

## Phase status

| Phase | Status |
|---|---|
| 1 — Discovery & inventory | ✅ |
| 2 — Live-site extraction | ✅ |
| 3 — Foundation cleanup + 3-locale wiring | ✅ |
| 4 — Real FR translations + content port from extraction | ⏳ next |
| 5 — Image archive ingest into `src/assets/` | pending |
| 6 — Signature moment + motion authorship pass | pending |
| 7 — SEO/schema/hreflang final | pending |
| 8 — Performance + a11y audit | pending |
| 9 — Launch QA | pending |

## Ownership / contact

Property owners: George & Didi. Address: Apollonia, Sifnos 84003, Greece. Phone +30 211 715 9002. Email info@rabagas-suites.gr.
