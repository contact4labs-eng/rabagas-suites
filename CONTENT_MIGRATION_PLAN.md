# Journal content migration plan

Status snapshot for the Journal collection at Phase 13. Each row is the
truth, not a wish. Strict labels per the Phase 13 brief:

- `migrated` — body sourced from the old WordPress article, cleaned into
  Rabagas voice (facts preserved, marketer-tic phrases removed)
- `rewritten` — original prose written for the new site, not based on
  an old article body
- `summarized` — short editorial summary of a third-party feature
- `draft` — frontmatter `draft: true`, hidden from build, sitemap, routes
- `verified` — factual claims checked against the source / public record
- `needs owner sign-off` — content is in place, but owner approval is
  required before flipping `draft: false`

## Live (shipping) journal posts

| Canonical | Locale | Slug | Source | Action | Status |
|---|---|---|---|---|---|
| `sifnos-holidays` | EN | `sifnos-holidays-complete-guide` | WP REST: post id 6151 (2026-04-17) | migrated, voice-edited, internal links rebuilt | **shipping** |
| `how-to-get-to-sifnos` | EN | `how-to-get-to-sifnos` | WP REST: `how-to-get-to-sifnos-travel` | migrated, voice-edited | **shipping** |
| `things-to-do-in-sifnos` | EN | `things-to-do-in-sifnos` | WP REST: `things-to-do-in-sifnos-guide` | migrated, voice-edited | **shipping** |
| `where-to-stay-in-sifnos` | EN | `where-to-stay-in-sifnos` | WP REST: `where-to-stay-in-sifnos-guide` | migrated, voice-edited | **shipping** |
| `press-conde-nast` | EL / EN / FR | `anafora-conde-nast-traveller` / `featured-in-conde-nast-traveller` / `cite-dans-conde-nast-traveller` | Real CN Traveller "On the Move" gallery | summarized, verified, `isBasedOn` schema | **shipping** |
| `press-athinorama` | EL / EN / FR | `afieroma-athinorama` / `tribute-on-athinorama` / `hommage-athinorama` | Real Athinorama recommendation | summarized, verified, `isBasedOn` schema | **shipping** |

## Hidden (draft) — pending content work

EL and FR variants of the four migrated guides are still `draft: true`.
The current EL/FR bodies are AI-translations of earlier starter content
and have **not** been re-translated against the newly migrated EN bodies.

| Canonical | Locale | Slug | Current body | Required action | Status |
|---|---|---|---|---|---|
| `sifnos-holidays` | EL | `diakopes-sti-sifno-odigos` | AI-translated from earlier starter | re-translate from migrated EN, human review | **draft** |
| `sifnos-holidays` | FR | `sejours-a-sifnos-guide` | AI-translated from earlier starter | re-translate from migrated EN, human review | **draft** |
| `how-to-get-to-sifnos` | EL | `pos-ftano-sti-sifno` | AI-translated from earlier starter | re-translate from migrated EN, human review | **draft** |
| `how-to-get-to-sifnos` | FR | `comment-aller-a-sifnos` | AI-translated from earlier starter | re-translate from migrated EN, human review | **draft** |
| `things-to-do-in-sifnos` | EL | `ti-na-kanete-sti-sifno` | AI-translated from earlier starter | re-translate from migrated EN, human review | **draft** |
| `things-to-do-in-sifnos` | FR | `que-faire-a-sifnos` | AI-translated from earlier starter | re-translate from migrated EN, human review | **draft** |
| `where-to-stay-in-sifnos` | EL | `pou-na-meinete-sti-sifno` | AI-translated from earlier starter | re-translate from migrated EN, human review | **draft** |
| `where-to-stay-in-sifnos` | FR | `ou-loger-a-sifnos` | AI-translated from earlier starter | re-translate from migrated EN, human review | **draft** |

To flip a row off-draft: replace the body with a translation of the
migrated EN, have an EL or FR native speaker review for tone and
factual accuracy, then set `draft: false` in frontmatter.

## Not migrated (post-launch fast-follow)

The old WordPress site has 14 additional SEO guide articles that are
not represented in the current Journal collection. They are real,
accessible via the WP REST API, and migratable using the same process
as the 4 priorities above. None are launch blockers — the four shipping
guides cover the highest-volume search intents for Apollonia / Sifnos.

| Canonical | Old slug | Priority |
|---|---|---|
| `accommodation-in-sifnos` | `accommodation-in-sifnos-guide` | medium |
| `beaches-in-sifnos` | `beaches-in-sifnos-10-best-spots-for-4-6-nights` | high |
| `best-areas-to-stay-in-sifnos` | `best-areas-to-stay-in-sifnos` | high (overlaps with `where-to-stay`) |
| `best-hotels-in-sifnos` | `best-hotels-in-sifnos-guide` | medium |
| `best-luxury-suites-apollonia` | `best-luxury-suites-apollonia` | medium |
| `best-places-to-stay-couples` | `best-places-to-stay-in-sifnos-for-couples` | medium |
| `exclusive-suites-online` | `exclusive-suites-in-sifnos-online` | low |
| `greek-islands-for-holidays` | `greek-islands-for-holidays-full-guide` | low (broad-match query) |
| `hotels-in-sifnos-apollonia` | `hotels-in-sifnos-apollonia-why-rabagas` | medium |
| `is-sifnos-worth-visiting` | `is-sifnos-worth-visiting-reasons` | medium |
| `sifnos-or-serifos` | `sifnos-or-serifos-which-is-better` | medium |
| `sifnos-rooms-to-let` | `sifnos-rooms-to-let-smart-tips` | low |
| `what-sifnos-known-for` | `what-sifnos-known-for-7-reasons` | medium |
| `where-to-stay-no-car` | `where-to-stay-in-sifnos-without-a-car` | medium |

These 14 are not in `public/_redirects` as specific rules. The
catch-all `/blog/* → /en/journal/` covers them — visitors land on the
index, not a 404, until they're migrated.

## Migration recipe (for whoever picks this up)

1. Pull the body:
   ```sh
   curl -sL "https://rabagas-suites.com/wp-json/wp/v2/posts?slug=<old-slug>&_fields=slug,date,title,content,excerpt" \
     | python -m json.tool > /tmp/<slug>.json
   ```
2. Strip WP class-soup and convert to Markdown (see the Phase 13 turn
   for the conversion script; ~50 lines of Python with `re` + `html`).
3. Read the result against `DESIGN.md` and `PRODUCT.md` voice rules:
   - Strip "Here is the thing", "Real talk", "TikTok backdrop" etc.
   - Replace second-person urgency ("you absolutely should") with calm
     editorial ("the smart move is").
   - Tighten paragraphs; cut anything that reads like a content brief.
4. Update internal links to new Astro paths (`/en/suites/`,
   `/en/contact/`, NOT absolute URLs).
5. Add `updatedAt: YYYY-MM-DD` to frontmatter.
6. Set `draft: false`.
7. Build, eyeball the rendered output in the dev server, ship.

## Decision rules that were applied this turn

- **EN guides where the WP body exists → migrate now.** The 4 priorities.
- **EL/FR guides → keep draft.** A translation of newly migrated EN content
  needs human review, which is owner action.
- **Old WP articles with no clear migration target** (e.g. broad query
  pages) → defer to fast-follow.
- **Press features** → already shipping. No change.
- **Never publish synthesized "general knowledge" guides** as if they
  were migrated. The Phase 12.2 starter prose was correctly hidden, and
  this turn replaces the EN bodies with real migrated content.
