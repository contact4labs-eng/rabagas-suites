# Launch checklist — owner confirmation

Short, practical list. Each item is either ✅ done by engineering, or
🟡 needs an owner decision before the site goes public.

## 1. 🟡 `RESEND_API_KEY` configured in Cloudflare?

The inquiry form fails closed (HTTP 500) until this is set.

- Cloudflare → Workers → `rabagas-suites` → Settings → Variables and Secrets → "Add variable" → Secret.
- Key: `RESEND_API_KEY`. Value: the Resend API key from your account.
- Verify: submit a test inquiry on the live site, confirm an email arrives.

## 2. 🟡 Final `EMAIL_TO` inbox?

Defaults to `info@rabagas-suites.gr` if unset. If you want a different
inbox to receive form notifications, set it as a Worker variable
(non-secret is fine):

- Key: `EMAIL_TO`. Value: the destination address.

Owner decision: keep default, or switch.

## 3. 🟡 Direct-booking offer code: active or off for launch?

The BookingOffer ribbon is currently dormant (no env var set).

- To **enable**: set `PUBLIC_OFFER_CODE=RABAGAS2026` (or whatever the
  2026 code is) before running `astro build`. This is a build-time env,
  not a Worker secret. Set in your CI environment / Cloudflare build
  config, not in Worker variables.
- To **keep off**: do nothing. The ribbon will not render.

Owner decision: confirm the code is current and we should publish it,
or keep the ribbon dormant.

## 4. 🟡 Concierge partner URLs verified?

Eight partner URLs in [src/data/concierge.ts](src/data/concierge.ts).
Quick eyeball:

| Partner | URL |
|---|---|
| Sifnos Elite Rides | https://sifnoseliterides.com |
| Apollo Rental Kamares | https://apollorental.gr |
| Auto Moto Rent — Apollonia | https://automotorent.gr |
| Vento Cruises | https://ventocruises.gr |
| Valema Yachting | https://valemayachting.com |
| Bluestar Ferries | https://www.bluestarferries.com |
| Seajets | https://www.seajets.gr |
| Flyhopper | https://flyhopper.com |

Owner action: visit each URL, confirm the partner still trades under
this domain. To remove a partner without deleting the entry, flip
`verified: false` in `src/data/concierge.ts`; the section auto-hides
unverified entries.

## 5. 🟡 TripAdvisor / TikTok handles — confirm or formally skip

The old site listed both. We removed them pending confirmation. If you
have public handles you want shown in the footer + Concierge:

- TripAdvisor: paste the URL → engineering adds to footer + Hotel schema `sameAs`.
- TikTok: same.

Or formally decide to skip — we'll mark the decision in `PRODUCT.md`
and move on.

## 6. 🟡 Journal guide content: publish or hold?

**EN priority guides (4)** — already migrated from old WP article
bodies, voice-edited, shipping at:

- `/en/journal/sifnos-holidays-complete-guide`
- `/en/journal/how-to-get-to-sifnos`
- `/en/journal/things-to-do-in-sifnos`
- `/en/journal/where-to-stay-in-sifnos`

**EL + FR variants of the same 4 guides** — held as `draft: true`.
The current bodies are AI-translated from earlier starter content;
they need re-translation against the migrated EN bodies plus a
native-speaker review pass.

Owner decision:

- **Option A**: ship with EN guides only (current state). Document
  that EL/FR guide migration is a fast-follow content task.
- **Option B**: commission a translator to take the migrated EN bodies
  to EL + FR. Engineering will flip `draft: false` once approved
  translations land.

The 14 remaining old WP guide articles are documented in
[CONTENT_MIGRATION_PLAN.md](CONTENT_MIGRATION_PLAN.md) as fast-follow
content work, not launch blockers. They redirect to the journal
index via `_redirects`.

## 7. ✅ Cookie consent / privacy wording

Already in place — see `consent.*` keys in `src/data/translations.ts`.
Localized EL / EN / FR.

Owner action (optional): a final read of the three short strings to
confirm the legal tone matches house style. Wording is intentionally
calm, not legalese.

## 8. ✅ GitHub push status

All Phase-12 commits on `origin/main`. Verify any time with:

```sh
git log --oneline origin/main -5
```

Expected top line: a Phase-13 commit landing the migrated guides +
redirects + this checklist (push from this turn).

## 9. ✅ Production-safety surfaces (Phase 12.3)

- Inquiry endpoint fails closed when `RESEND_API_KEY` missing
- GTM noscript iframe removed — no consent bypass for JS-off visitors
- Cookie consent: ARIA dialog, 44px targets, focus management, locales
- Journal drafts excluded from routes + sitemap
- `isBasedOn` schema present only on real press posts
- `_redirects` covers legacy WP slug structure + WP backend leakage

---

The site is launch-ready from the engineering side once items 1, 4,
and (decision on) 6 are closed. Items 2, 3, 5, 7 are nice-to-have
confirmations that don't block opening the doors.
