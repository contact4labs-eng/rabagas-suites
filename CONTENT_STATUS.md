# Content status matrix — Rabagas Suites

Single source of truth for what's live, what's draft, what's deferred,
and what's redirected. Cross-checks at any time with:

```bash
npm run build
find dist/client -name "*.html" | sort
grep -E '<loc>' dist/client/sitemap-0.xml | sort
```

Strict labels:

- **live** — prerendered to `dist/client/`, listed in sitemap, indexed
- **draft** — `frontmatter.draft: true`, excluded from build / sitemap / hreflang
- **deferred** — exists on the old site, has not been migrated yet
- **migrated** — body sourced from the old WP article, voice-edited
- **rewritten** — original prose written for the new site
- **summarized** — short editorial summary of a third-party feature
- **redirected** — 301 in `public/_redirects` (no canonical page exists)

## A. Live core pages (12 per locale × 3 locales = 36)

| Route | Source | Status |
|---|---|---|
| `/` / `/en/` / `/fr/` | Original prose | **live** |
| `/suites` / `/en/suites` / `/fr/les-suites` | `src/data/suites.ts` | **live** |
| `/suites/{6 slugs}` × 3 locales | `src/data/suites.ts` | **live** |
| `/our-story` / `/en/our-story` / `/fr/notre-histoire` | Original 5-section essay | **live** |
| `/contact` / `/en/contact` / `/fr/contact` | Original copy + Concierge section | **live** |
| `/journal` / `/en/journal` / `/fr/journal` | Content Collection index | **live** |

## B. Live journal posts (8 — present in build, sitemap, and routes)

Press posts ship in all three locales. Migrated guides ship in EN only
(old site had no EL or FR guide translations to migrate).

| Canonical | Locale | Slug | Kind | Source | Status |
|---|---|---|---|---|---|
| `press-conde-nast` | EL | `anafora-conde-nast-traveller` | press | cntraveller.com (real `externalUrl`) | **live · summarized · verified** |
| `press-conde-nast` | EN | `featured-in-conde-nast-traveller` | press | cntraveller.com | **live · summarized · verified** |
| `press-conde-nast` | FR | `cite-dans-conde-nast-traveller` | press | cntraveller.com | **live · summarized · verified** |
| `press-athinorama` | EL | `afieroma-athinorama` | press | athinorama.gr | **live · summarized · verified** |
| `press-athinorama` | EN | `tribute-on-athinorama` | press | athinorama.gr | **live · summarized · verified** |
| `press-athinorama` | FR | `hommage-athinorama` | press | athinorama.gr | **live · summarized · verified** |
| `sifnos-holidays` | EN | `sifnos-holidays-complete-guide` | guide | WP article (post id 6151, 2026-04-17), voice-edited | **live · migrated · verified** |
| `how-to-get-to-sifnos` | EN | `how-to-get-to-sifnos` | guide | WP article (`how-to-get-to-sifnos-travel`), voice-edited | **live · migrated · verified** |
| `things-to-do-in-sifnos` | EN | `things-to-do-in-sifnos` | guide | WP article (`things-to-do-in-sifnos-guide`), voice-edited | **live · migrated · verified** |
| `where-to-stay-in-sifnos` | EN | `where-to-stay-in-sifnos` | guide | WP article (`where-to-stay-in-sifnos-guide`), voice-edited | **live · migrated · verified** |

## C. Draft journal posts (8 — hidden from build, sitemap, routes, hreflang)

EL + FR variants of the 4 migrated guides. They are hidden because the
current bodies are AI-translations of the earlier starter prose, not
translations of the migrated EN. They need re-translation against the
new EN bodies + native-speaker review.

| Canonical | Locale | Slug | Action required |
|---|---|---|---|
| `sifnos-holidays` | EL | `diakopes-sti-sifno-odigos` | Re-translate from migrated EN, native review, set `draft: false` |
| `sifnos-holidays` | FR | `sejours-a-sifnos-guide` | Same |
| `how-to-get-to-sifnos` | EL | `pos-ftano-sti-sifno` | Same |
| `how-to-get-to-sifnos` | FR | `comment-aller-a-sifnos` | Same |
| `things-to-do-in-sifnos` | EL | `ti-na-kanete-sti-sifno` | Same |
| `things-to-do-in-sifnos` | FR | `que-faire-a-sifnos` | Same |
| `where-to-stay-in-sifnos` | EL | `pou-na-meinete-sti-sifno` | Same |
| `where-to-stay-in-sifnos` | FR | `ou-loger-a-sifnos` | Same |

These rows do NOT generate URLs. They do NOT appear in the sitemap.
They do NOT show in the journal index. They do NOT add hreflang
entries on the EN guide pages — the EN pages emit only `en` +
`x-default` until EL/FR equivalents flip off-draft.

## D. Deferred journal posts (14 — old WP articles not yet migrated)

Documented in [CONTENT_MIGRATION_PLAN.md](CONTENT_MIGRATION_PLAN.md)
as fast-follow content work. None are launch blockers; the 4 priority
canonicals (B) cover the highest-volume search intents.

| Old WP slug | Date | SEO priority |
|---|---|---|
| `hotels-in-sifnos-apollonia-why-rabagas` | 2026-04-16 | medium |
| `accommodation-in-sifnos-guide` | 2026-04-16 | medium |
| `sifnos-or-serifos-which-is-better` | 2026-04-15 | medium |
| `exclusive-suites-in-sifnos-online` | 2026-04-14 | low |
| `what-sifnos-known-for-7-reasons` | 2026-03-19 | medium |
| `best-areas-to-stay-in-sifnos` | 2026-03-19 | high (overlap with `where-to-stay`) |
| `is-sifnos-worth-visiting-reasons` | 2026-03-18 | medium |
| `sifnos-rooms-to-let-smart-tips` | 2026-03-18 | low |
| `best-places-to-stay-in-sifnos-for-couples` | 2026-03-15 | medium |
| `where-to-stay-in-sifnos-without-a-car` | 2026-03-14 | medium |
| `beaches-in-sifnos-10-best-spots-for-4-6-nights` | 2026-02-19 | high |
| `best-luxury-suites-apollonia` | 2026-02-17 | medium |
| `best-hotels-in-sifnos-guide` | 2026-02-15 | medium |
| `greek-islands-for-holidays-full-guide` | 2026-02-10 | low (broad-match) |

All 14 are reachable via the WP REST API (`/wp-json/wp/v2/posts?slug=…`).
The migration recipe in `CONTENT_MIGRATION_PLAN.md` works the same for
each one.

## E. Redirected legacy slugs (no canonical destination on the new site)

`public/_redirects` ships with the build and is honored by Cloudflare
Workers Static Assets at the edge.

| From | To | Why |
|---|---|---|
| `/hotel-room/{6 slugs}` | `/en/suites/{slug}/` | Old WP CPT, direct mapping |
| `/hotel-room/*` (catch) | `/en/suites/` | Any other old-slug variant |
| `/blog/sifnos-holidays-complete-guide` | `/en/journal/sifnos-holidays-complete-guide/` | Migrated guide |
| `/blog/how-to-get-to-sifnos-travel` | `/en/journal/how-to-get-to-sifnos/` | Migrated guide |
| `/blog/things-to-do-in-sifnos-guide` | `/en/journal/things-to-do-in-sifnos/` | Migrated guide |
| `/blog/where-to-stay-in-sifnos-guide` | `/en/journal/where-to-stay-in-sifnos/` | Migrated guide |
| `/blog/were-featured-on-conde-nast-traveller` | `/en/journal/featured-in-conde-nast-traveller/` | Press EN |
| `/blog/nous-figurons-dans-le-conde-nast-traveller` | `/fr/journal/cite-dans-conde-nast-traveller/` | Press FR |
| `/blog/mas-parousiazei-to-conde-nast-traveller` | `/journal/anafora-conde-nast-traveller/` | Press EL |
| `/blog/tribute-to-rabagas-suites-on-athinorama-gr` | `/en/journal/tribute-on-athinorama/` | Press EN |
| `/blog/afieroma-stis-souites-rabagas-sto-athinorama-gr` | `/journal/afieroma-athinorama/` | Press EL |
| `/blog/hommage-a-rabagas-suites-sur-athinorama-gr` | `/fr/journal/hommage-athinorama/` | Press FR |
| `/blog/afieroma-apo-to-athinorama` (and `-2`) | `/en/journal/tribute-on-athinorama/` and `/journal/afieroma-athinorama/` | Press variants |
| `/blog/un-hommage-dathinorama` | `/fr/journal/hommage-athinorama/` | Press FR variant |
| `/our-news` (+ trailing slash) | `/en/journal/` | Old news index |
| `/blog/*` (catch-all) | `/en/journal/` | 14 deferred guides + anything else |
| `/suites-in-sifnos` (+ trailing slash) | `/en/suites/` | Old suites index |
| `/wp-login.php` | `/` | WP backend leakage |
| `/wp-admin` (+ trailing slash) | `/` | WP backend leakage |
| `/login`, `/register`, `/lost-password` | `/` | WP backend leakage |
| `/my-account` (+ trailing slash) | `/` | WP backend leakage |

## F. Locale completeness

| Page | EL | EN | FR |
|---|---|---|---|
| Home | ✓ | ✓ | ✓ |
| Suites index | ✓ | ✓ | ✓ |
| Suite detail × 6 | ✓ × 6 | ✓ × 6 | ✓ × 6 |
| Our Story | ✓ | ✓ | ✓ |
| Contact | ✓ | ✓ | ✓ |
| Journal index | ✓ | ✓ | ✓ |
| Press post × 2 canonical | ✓ × 2 | ✓ × 2 | ✓ × 2 |
| Guide post × 4 canonical | (draft) | ✓ × 4 | (draft) |

EL & FR core navigation is 100% complete. The locale gap is only on
the 4 migrated guides, which is documented and disclosed to crawlers
via hreflang (no broken alternate entries are emitted).

## G. Publish readiness summary

- **Engineering-ready**: yes — build is clean, all routes work, all
  schema validates, no placeholders, fail-closed inquiry, consent gate
  honest, drafts hidden.
- **Content-ready for launch**: yes if owner approves the EN guide
  migration (see OWNER_SIGNOFF.md item 6). The site can launch
  immediately with EN guides + 6 press posts; EL/FR guides flip off-draft
  whenever translations are approved.
- **Operationally-ready**: pending `RESEND_API_KEY` configuration in
  Cloudflare (see DEPLOYMENT_HANDOFF.md §5–§7).

The four documents in this folder map clearly:

| Doc | Reader | Purpose |
|---|---|---|
| [PRODUCT.md](PRODUCT.md) | Engineering, Claude Code, future writers | Brand truth + preserve / do-not-copy lists |
| [DESIGN.md](DESIGN.md) | Engineering, Impeccable, designers | Approved aesthetic + tokens + anti-patterns |
| [CONTENT_MIGRATION_PLAN.md](CONTENT_MIGRATION_PLAN.md) | Whoever picks up the remaining 14 articles | Recipe + status |
| [CONTENT_STATUS.md](CONTENT_STATUS.md) | Everyone | This file — what's live, draft, deferred, redirected |
| [DEPLOYMENT_HANDOFF.md](DEPLOYMENT_HANDOFF.md) | The person running the deploy | Commands, env, verification |
| [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) | Project manager | 9-item engineering ↔ owner blocker list (older, kept for history) |
| [OWNER_SIGNOFF.md](OWNER_SIGNOFF.md) | The owner | 10 yes/no questions |
| [STAGING.md](STAGING.md) | Historical | Phase 11b state — superseded by DEPLOYMENT_HANDOFF for the inquiry + secrets sections |
| [CLAUDE.md](CLAUDE.md) | Future Claude Code sessions | Project memory + skill priority |
