# Working notes for Claude on this repo

This file is project memory — read it at session start and follow the rules below without prompting.

## Project context

- **Project:** Rabagas Sifnos Suites premium rebuild — replacement for the WordPress site at https://rabagas-suites.com/.
- **Stack:** Astro 6 + Tailwind 4 + TypeScript + `@astrojs/node` (deferred Cloudflare Pages migration).
- **Three locales:** EL (default at root), EN at `/en/`, FR at `/fr/`. FR translates path segments (`/fr/les-suites`, `/fr/notre-histoire`).
- **Authoritative docs:** [BUILD_PLAYBOOK.md](BUILD_PLAYBOOK.md) and [ELITE_WEB_BUILD_SYSTEM.md](ELITE_WEB_BUILD_SYSTEM.md). The `elite-web-build` skill bundles both.
- **Live-site extraction archive:** `extraction/` (gitignored) — site-map, copy/*.json, images, voice notes from Phase 2.

## Workflow protocol

The build runs as a turn-based loop driven by an external **project manager** (a separate Claude instance):

1. The manager issues a phase prompt to me.
2. I execute, then emit a **phase report** in the exact structure the manager requested.
3. The user (Tassos) relays the report back to the manager, who issues the next phase.

A "phase" is therefore a complete unit of work bounded by a manager prompt and my structured report.

## Auto-commit + push at end of every phase

When I finish a phase (i.e. just before emitting the final report markdown), I:

1. Run `git status --short` to confirm what's about to land.
2. Stage everything tracked + the new files (gitignored `extraction/` won't be included).
3. Commit with a message of the form:
   ```
   Phase N: <one-line summary>

   <bulleted summary of the deliverables that turn>

   Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
   ```
4. `git push origin main`.
5. Include the resulting commit SHA + push status in the phase report.

If anything blocks the push (e.g. hook failure, network error, merge conflict), I:
- Surface it loudly in the report.
- Do **not** force-push, skip hooks, or amend.
- Investigate and fix before the next phase.

I do **not** auto-commit during a phase — only at the boundary, right before the final report.

## Authentication

- `gh` CLI is authenticated. Active account: `contact4labs-eng` (writes to repo). `taakf` is configured but inactive.
- `gh auth setup-git` is configured — git's credential helper delegates to `gh`. Tokens stay in macOS keychain. **Never paste a PAT in chat.** If a PAT does get pasted, instruct the user to revoke it immediately.
- Commit identity: `TK <tassos.karamanof@gmail.com>` (existing global git config).

## Dev server

- Always start via `preview_start` (config name `dev`, port 4350). **Never** run raw `npm run dev`.
- `.claude/launch.json` lives at `/Users/tassos/Desktop/rabagas/.claude/launch.json` (one level above this repo) — the harness expects it there.
- The dev server runs `sh -c "cd rabagas-suites && npm run dev -- --port 4350"`.
- Restart the server after `astro.config.mjs` changes or page-route relocations.

## Quality bar (from the playbooks, locked)

- No fabricated trust signals.
- No `mailto:` as primary form action — `/api/inquiry` is the real endpoint.
- Content images live in `src/assets/`, never `/public/`.
- No uniform motion across sections.
- Mobile-first (390px iPhone Safari).
- Every page complete in **all three locales** before any launch — zero `[FR-TODO]` markers.
- Greek canonical spelling: `Απολλωνία` (single π, double λ). Reject `Αππολωνία`.

## Don'ts

- Don't write CLAUDE.md, README.md, or other docs unless the manager explicitly asks (this file excepted, since it captures your operating contract).
- Don't introduce new components without a manager prompt that asks for them.
- Don't move images out of `extraction/` into `src/assets/` unless that's the current phase's deliverable.
- Don't commit secrets. If you see something that looks like an API key, env var with a value, or PAT in source, halt and surface it.
