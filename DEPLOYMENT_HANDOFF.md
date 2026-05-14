# Deployment handoff — Rabagas Suites

Operational guide for shipping the site to production. Pairs with
[OWNER_SIGNOFF.md](OWNER_SIGNOFF.md) (yes/no checklist) and
[CONTENT_STATUS.md](CONTENT_STATUS.md) (what's live vs. draft).

Supersedes [STAGING.md](STAGING.md) for the inquiry-endpoint and
secrets sections — those are out of date as of Phase 12.3.

## 1. Cloudflare account context

- **Account**: `contact.4labs@gmail.com`
- **Account ID**: `27fde171888b7ff4b383498977ecdf64` (in `wrangler.toml`; not secret per Cloudflare's identifier model)
- **Worker name**: `rabagas-suites`
- **Staging URL**: https://rabagas-suites.contact-4labs.workers.dev (same Worker hosts production after DNS swing)
- **Production custom domain**: `rabagas-suites.com` (DNS swing scheduled per launch decision)

## 2. Required Cloudflare Worker secrets

Set via the Cloudflare dashboard (Workers → `rabagas-suites` → Settings →
Variables and Secrets), or via `wrangler secret put` after a build:

| Name | Type | Purpose | Required? |
|---|---|---|---|
| `RESEND_API_KEY` | Secret | Resend.com API key used by `/api/inquiry` to send form emails | **Required for production** — site fails closed without it |
| `EMAIL_TO` | Variable | Destination address for form notifications (default if unset: `info@rabagas-suites.gr`) | Optional |
| `ALLOW_INQUIRY_FALLBACK` | Variable | `"true"` permits stdout logging of inquiries when `RESEND_API_KEY` is unset | **NEVER set in production** (local dev only via `.dev.vars`) |

CLI alternative:

```bash
echo "re_REAL_KEY_HERE" | \
  npx wrangler secret put RESEND_API_KEY --config dist/server/wrangler.json

echo "info@rabagas-suites.gr" | \
  npx wrangler secret put EMAIL_TO --config dist/server/wrangler.json

# verify (names only; values are not retrievable)
npx wrangler secret list --config dist/server/wrangler.json
```

Setting `RESEND_API_KEY` via the dashboard is preferable — secrets via
`wrangler secret put` from a workstation are equivalent but require
the same OAuth login.

## 3. Required build-time env vars

Build-time vars are inlined into client bundles by Vite at build time.
Set in your CI environment or Cloudflare build config — NOT as Worker
secrets.

| Name | Purpose | Set when |
|---|---|---|
| `PUBLIC_OFFER_CODE` | When set (e.g. `RABAGAS2026`), the BookingOffer ribbon renders on home + contact above the inquiry form. When unset, ribbon is not rendered at all. | Set only after owner confirms the code is current. Otherwise leave unset (current default). |

There are no other build-time secrets. Resend / GTM keys never enter
the client bundle.

## 4. Exact deploy command

From a clean checkout:

```bash
# 1. install (only on fresh machine)
npm install --no-audit --no-fund

# 2. clean build
npm run build
# emits:
#   dist/client/  — static HTML + _astro/* + _headers + _redirects + fonts
#   dist/server/  — worker entry + wrangler.json (auto-generated)

# 3. dry-run (verify bundling before touching Cloudflare)
npx wrangler deploy --config dist/server/wrangler.json \
  --dry-run --outdir .wrangler/dry-run

# 4. real deploy (uploads only changed assets — typically 5–50 KB after edits)
npx wrangler deploy --config dist/server/wrangler.json
```

## 5. How to verify `/api/inquiry` after deploy

```bash
curl -i -X POST https://rabagas-suites.contact-4labs.workers.dev/api/inquiry \
  -F "form=contact" \
  -F "name=Deploy Verification" \
  -F "email=deploy-test@example.com" \
  -F "message=Production smoke test for /api/inquiry."
```

**Expected outcomes:**

- `RESEND_API_KEY` configured correctly →
  - HTTP `200`
  - Body: `{"ok":true}`
  - Email arrives at `EMAIL_TO` (default `info@rabagas-suites.gr`)
  - Resend dashboard → Emails shows the send
- `RESEND_API_KEY` missing →
  - HTTP `500`
  - Body: `{"ok":false,"errors":["service_unconfigured"]}`
  - Worker logs (`wrangler tail`) show:
    `Inquiry endpoint: RESEND_API_KEY is not configured. ...`
- Resend rejects the request (invalid key, exhausted quota, etc.) →
  - HTTP `502`
  - Body: `{"ok":false,"errors":["delivery_failed"]}`
  - Worker logs show Resend's error response

## 6. How to test Resend delivery before launch

1. Get a test API key from Resend (sandbox or live).
2. Set it via `wrangler secret put RESEND_API_KEY` (or dashboard).
3. Make sure the sending domain `rabagas-suites.com` is verified in
   Resend (SPF + DKIM records on the DNS). The current code sends
   `from: 'Rabagas Website <noreply@rabagas-suites.com>'` — that
   domain must be verified or Resend will reject the send.
4. Submit a real inquiry from `/contact/` in a browser.
5. Verify the email reaches `EMAIL_TO`.
6. Verify the Reply-To header on the received email is the visitor's
   submitted email address — that's how George & Didi will reply
   straight back.

If the verified domain isn't ready and you want to test delivery
sooner, change the `from:` address temporarily to a Resend sandbox
domain (e.g. `Rabagas Website <onboarding@resend.dev>`), commit-skip,
and revert before launch.

## 7. What happens if `RESEND_API_KEY` is missing

Implemented in [src/pages/api/inquiry.ts](src/pages/api/inquiry.ts) as
fail-closed behavior:

- The endpoint returns HTTP `500` with `{"ok":false,"errors":["service_unconfigured"]}`.
- The browser-side handler in [src/pages/contact.astro](src/pages/contact.astro)
  and [src/components/ui/BookingInquiry.astro](src/components/ui/BookingInquiry.astro)
  shows the localized "Κάτι πήγε στραβά. Δοκιμάστε ξανά." / "Something went
  wrong. Please try again." / "Une erreur est survenue." block and keeps
  the form usable for a retry.
- Visitors do **not** see a fake success state. They see the error and can
  fall back to the phone (`+30 211 715 9002`) or direct email
  (`info@rabagas-suites.gr`) shown elsewhere on the page.

This is the intended behavior. **Do not** revert to a silent log
fallback in production.

## 8. Where to set `PUBLIC_OFFER_CODE`

The owner-confirmed direct-booking promo code (e.g. `RABAGAS2026`)
goes here. The value is exposed in the rendered HTML, so it's not a
secret — but only set it once the offer is real and current.

**Cloudflare build settings:**
Pages / Workers Builds → Settings → Variables and Secrets → "Add variable":

- Type: Plain text (not Secret)
- Key: `PUBLIC_OFFER_CODE`
- Value: `RABAGAS2026` (or current code)

Then trigger a rebuild for the variable to be inlined.

**Local CI alternative:**

```bash
PUBLIC_OFFER_CODE=RABAGAS2026 npm run build
```

## 9. How to keep the offer ribbon disabled safely

Do nothing. The component reads
`import.meta.env.PUBLIC_OFFER_CODE`; when undefined, the entire
ribbon returns null and renders nothing. There is no fallback string,
no placeholder, no dormant UI to worry about.

To suppress it after it has been enabled, unset the variable and
rebuild. Removing the variable via the dashboard requires a rebuild
to actually re-inline as undefined.

## 10. Domain / DNS assumptions

- Canonical hostname: `https://rabagas-suites.com`
- `https://www.rabagas-suites.com` → should 301 to apex (configure
  in Cloudflare Page Rules or in the apex's DNS / Worker route).
- Hreflang + sitemap + Open Graph all hard-coded to `https://rabagas-suites.com`.
  If a different production domain is ever used, search-replace in:
  - [astro.config.mjs](astro.config.mjs) (`site:` + sitemap serializer)
  - [src/lib/schema.ts](src/lib/schema.ts) (`SITE` constant)
- Workers Static Assets serves the build out of `dist/client/`; the
  Worker handles only `/api/inquiry`.
- HSTS is set via `public/_headers`. **Make sure** you do not need to
  switch back to HTTP during the cutover — HSTS persistence at the
  browser level can complicate rollbacks.

## 11. Redirects already in place

[public/_redirects](public/_redirects) ships with the build. Coverage:

- 6 suite-detail 301s: `/hotel-room/<slug> → /en/suites/<slug>/` + catch-all `/hotel-room/*`
- 4 migrated-guide 301s: `/blog/<old-slug> → /en/journal/<new-slug>/`
- 9 press-feature 301s (3 locales × Condé Nast & Athinorama)
- `/our-news` + `/our-news/` → `/en/journal/`
- `/suites-in-sifnos` + trailing slash → `/en/suites/`
- WP backend leakage: `/wp-login.php`, `/wp-admin`, `/login`, `/register`, `/lost-password`, `/my-account` → `/`
- Catch-all `/blog/*` → `/en/journal/` for the 14 un-migrated guide articles

Verify after deploy:

```bash
curl -I -o /dev/null -s -w "%{http_code} %{redirect_url}\n" \
  https://rabagas-suites.contact-4labs.workers.dev/hotel-room/euphoria-suite
# expect: 301 https://rabagas-suites.contact-4labs.workers.dev/en/suites/euphoria-suite/

curl -I -o /dev/null -s -w "%{http_code} %{redirect_url}\n" \
  https://rabagas-suites.contact-4labs.workers.dev/blog/sifnos-holidays-complete-guide
# expect: 301 https://rabagas-suites.contact-4labs.workers.dev/en/journal/sifnos-holidays-complete-guide/
```

## 12. Rollback path

If a deploy goes badly:

```bash
# list recent versions
npx wrangler deployments list --config dist/server/wrangler.json

# roll back to a known good version ID
npx wrangler rollback --version-id <ID> --config dist/server/wrangler.json
```

The `dist/` is reproducible from the committed source — `git checkout
<commit> && npm run build && wrangler deploy` always reconstructs the
exact same Worker.

## 13. Pre-cutover checklist (the small one)

In order:

1. `RESEND_API_KEY` configured in Cloudflare → verify with the curl
   command in §5 (expect 200 ok + email lands).
2. Resend sending domain (`rabagas-suites.com`) is verified in Resend.
3. `PUBLIC_OFFER_CODE` decision committed (set or stay empty).
4. `git push origin main` is up to date with the latest commit.
5. `npm run build` is clean (0 warnings).
6. `npx wrangler deploy --config dist/server/wrangler.json` succeeds.
7. Smoke-test the four redirects in §11.
8. Smoke-test the inquiry endpoint in §5.
9. DNS swing on `rabagas-suites.com` (only after 1–8 are green).
