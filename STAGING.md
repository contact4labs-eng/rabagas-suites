# Rabagas Suites — Staging

The Phase 11a build is deployed to **Cloudflare Workers Static Assets** at
the URL below. This is a pre-launch surface for internal QA and PM review.
**Production cutover** (DNS swing on `rabagas-suites.com`) ships in Phase 12.

## Staging URL

**https://rabagas-suites.contact-4labs.workers.dev**

Stable across all redeploys. Same Worker hosts staging now and will host
the production custom domain at Phase 12 cutover (per Plan Q5 —
renaming would break `wrangler rollback` continuity).

## Account context

- Cloudflare account: `contact.4labs@gmail.com`
- Account ID: `27fde171888b7ff4b383498977ecdf64` (recorded in
  `wrangler.toml`; not a secret per Cloudflare's identifier model)
- Auth method: OAuth via `wrangler login`. Session token in
  `~/.config/.wrangler/config/default.toml`. Revocable via
  Cloudflare dashboard → My Profile → API Tokens.
- Worker version ID at first deploy: `f33bcf0c-9357-4793-ad2d-443903dc61b2`

## Build + deploy

```bash
# clean build
npm run build

# dry-run (verify bundling before touching Cloudflare)
npx wrangler deploy --config dist/server/wrangler.json \
  --dry-run --outdir .wrangler/dry-run

# real deploy
npx wrangler deploy --config dist/server/wrangler.json
```

The deploy uploads only changed assets (Cloudflare deduplicates by hash),
so redeploys after small edits typically transfer ~5–50 KB.

## Secrets state

| Name | Value | Phase 11b state |
|---|---|---|
| `EMAIL_TO` | `info@rabagas-suites.gr` | **SET** |
| `RESEND_API_KEY` | _real key from Resend dashboard_ | **DELIBERATELY UNSET** (Plan Q4) |

Without `RESEND_API_KEY`, the inquiry endpoint's `if (resendKey)` branch
falls through to `console.log` and returns `{ok: true}` 200. The form
submits cleanly for UX testing; no real emails are sent. This is the
intended state until **Phase 12 prerequisite #1**: provision the real
Resend API key.

To set secrets:

```bash
# EMAIL_TO (already set; example for reference)
echo "info@rabagas-suites.gr" | \
  npx wrangler secret put EMAIL_TO --config dist/server/wrangler.json

# RESEND_API_KEY (do NOT run until Phase 12; placeholder behavior is
# intentional)
echo "re_REAL_KEY_HERE" | \
  npx wrangler secret put RESEND_API_KEY --config dist/server/wrangler.json
```

To list current secrets (names only; values are not retrievable):

```bash
npx wrangler secret list --config dist/server/wrangler.json
```

## Tail logs

```bash
npx wrangler tail --config dist/server/wrangler.json
```

While `wrangler tail` is running, every Worker invocation (including
`/api/inquiry` POSTs and any 4xx/5xx) streams to stdout. Useful for
observing the `INQUIRY RECEIVED` console fallback during form testing.

## Absolute-URL caveat (Phase 11b only)

`astro.config.mjs` has `site: 'https://rabagas-suites.com'`. The staging
build therefore emits:

- `<link rel="canonical">` → `https://rabagas-suites.com/<route>/`
- `<link rel="alternate" hreflang>` → all three locale variants on the
  production domain
- JSON-LD `url`, `@id` URIs → `rabagas-suites.com`
- Sitemap `<loc>` entries → `rabagas-suites.com`
- Open Graph `og:url`, `og:image` → `rabagas-suites.com`

This is intentional (Plan Q6): the staging build IS the production
artifact, just served from a different hostname. Crawlers respect the
canonical and won't index the `*.workers.dev` URL as duplicate content.

**Operational consequences while in Phase 11b:**

- **Do NOT share the staging URL on social.** OG previews resolve to
  `rabagas-suites.com` which is still the legacy WordPress site.
- Manually clicking a "View Map" canonical link, an hreflang alternate,
  or a sitemap `<loc>` from the staging page will jump to the WordPress
  site — expected, not a bug.
- All UX and functional checks work without leaving the workers.dev URL
  (clicks within the site use locale-aware relative paths from
  `getLocalizedPath()`).

## Disable / back-out

If a deploy goes badly, the safest one-click action is to **disable**
the Worker via the Cloudflare dashboard:

1. Cloudflare dashboard → Workers & Pages → `rabagas-suites`
2. Settings → Disable (top-right corner)
3. Confirm. Propagation ~10s.

A disabled Worker returns 1027 "no-content" to all requests; the
deployment is preserved for forensic inspection. To recover after fixing
the underlying issue, re-enable in the dashboard and `wrangler deploy`
again.

`wrangler rollback` has no target on the first deploy. Once we have ≥2
deploys, `npx wrangler rollback --config dist/server/wrangler.json` can
swap back to a previous Version ID.

**Note:** disabling the staging Worker has zero effect on production —
`rabagas-suites.com` is still served by WordPress until Phase 12 DNS
cutover.

## Phase 12 cutover prerequisites

Before swinging DNS from WordPress → Cloudflare Workers:

1. **Real `RESEND_API_KEY` provisioned** via `wrangler secret put` (see
   Secrets section). Verify by submitting the booking inquiry form on
   staging and confirming an email lands at `info@rabagas-suites.gr`.
2. **`/_image` runtime route fixed.** The current build's `getImage()`
   call in `BaseLayout.astro` (for the LCP-image preload `<link>`)
   emits `/_image?href=...` URLs that 404 on the deployed Worker
   because `imageService: 'passthrough'` disables the runtime image
   service. The fix is to use Astro's static asset URLs directly
   instead of `getImage()` in BaseLayout, or switch to a different
   image-service strategy. This is the root cause of the EN home LCP
   regression on the deployed staging — see "Known issues" below.
3. **Custom domain binding.** Cloudflare dashboard → Workers & Pages
   → rabagas-suites → Custom Domains → Add `rabagas-suites.com`.
   Cloudflare auto-provisions a TLS cert and routes traffic to the
   Worker once DNS is in place.
4. **DNS swing.** A/AAAA records for `rabagas-suites.com` point to
   Cloudflare's proxy. The legacy WordPress host is decommissioned.
5. **HSTS escalation.** `public/_headers` ships `max-age=31536000;
   includeSubDomains` for Phase 11b. After cutover stabilises (suggest
   1–2 weeks observation), escalate to
   `max-age=63072000; includeSubDomains; preload` and submit to
   hstspreload.org.

## Known issues (deferred to Phase 12)

| Issue | Impact | Fix |
|---|---|---|
| `/_image?href=...` URLs in hero-image preload link 404 on deployed Worker | EN home warm LCP 3.0s / cold LCP 4.0s (target <2.5s/<3.5s) + Lighthouse BP 0.96 (3× console 404s) | Replace `getImage()` calls in `BaseLayout.astro` with build-time hashed `/_astro/*.webp` URLs (or switch `imageService` strategy). Investigate before Phase 12 cutover. |
| Duplicate `Cache-Control` on `/_astro/*` (one from the specific rule + one from the catch-all in `_headers`) | Cosmetic — browsers honor the most permissive immutable directive | Re-order `_headers` rules or use a more selective catch-all (e.g. `/*.html` instead of `/*`) |
| `Astro.locals.runtime.env` was removed in Astro 6 | `/api/inquiry` now uses `import { env } from 'cloudflare:workers'` (Cloudflare-only) | No further action — documented in `inquiry.ts` |

## Quick reference

| Action | Command |
|---|---|
| Build | `npm run build` |
| Local preview (wrangler dev) | `npm run preview` |
| Dry-run deploy | `npx wrangler deploy --config dist/server/wrangler.json --dry-run --outdir .wrangler/dry-run` |
| Real deploy | `npx wrangler deploy --config dist/server/wrangler.json` |
| Tail logs | `npx wrangler tail --config dist/server/wrangler.json` |
| List secrets | `npx wrangler secret list --config dist/server/wrangler.json` |
| Set secret | `echo "value" \| npx wrangler secret put NAME --config dist/server/wrangler.json` |
| Rollback (after ≥2 deploys) | `npx wrangler rollback --config dist/server/wrangler.json` |
| Who am I | `npx wrangler whoami` |
