# Owner sign-off — Rabagas Suites launch

Ten yes/no questions. Fill in the answer and the date when each one
is resolved. Anything still blank when you want to launch is a blocker.

Engineering items already done are listed at the bottom for completeness;
nothing there needs your input.

---

## 1. Final recipient inbox: `EMAIL_TO`

Form submissions from `/api/inquiry` will be sent to one address.

- **Default if unset**: `info@rabagas-suites.gr`
- **Question**: keep the default, or use a different inbox?
- **Answer**: ⬜ keep default · ⬜ different (write below)
- **If different**: `_________________________________________`
- **Decided on**: `____ / ____ / 2026`

---

## 2. Resend sender / domain status

The site sends form emails as `Rabagas Website <noreply@rabagas-suites.com>`
via Resend. Resend needs the sending domain verified (SPF + DKIM DNS records).

- **Is the Resend account active?** ⬜ yes · ⬜ no
- **Is `rabagas-suites.com` verified in Resend?** ⬜ yes · ⬜ no
- **Has the production `RESEND_API_KEY` been generated?** ⬜ yes · ⬜ no
- **Has it been set in the Cloudflare Worker secrets?** ⬜ yes · ⬜ no
- **Decided on**: `____ / ____ / 2026`

Until all four are yes, the inquiry endpoint correctly returns HTTP 500
and visitors see the premium error UI — no email is sent. The site is
safe but not converting.

---

## 3. Direct-booking offer code

The site has a tasteful "Direct booking benefit" ribbon that appears on
home + contact when the env var is set. With no env var, no ribbon
renders.

- **Is there a current direct-booking code for 2026?** ⬜ yes · ⬜ no
- **If yes, what is it?** `_______________________`
- **Publish it now, or hold?** ⬜ publish · ⬜ hold
- **Decided on**: `____ / ____ / 2026`

If you publish, engineering will set `PUBLIC_OFFER_CODE` in the
Cloudflare build settings and trigger a rebuild. If you hold, do
nothing — the ribbon stays dormant.

---

## 4. Concierge partner links verified

Eight verified partner links in the Concierge section on `/contact/`.

- Sifnos Elite Rides — https://sifnoseliterides.com — ⬜ verified · ⬜ remove
- Apollo Rental Kamares — https://apollorental.gr — ⬜ verified · ⬜ remove
- Auto Moto Rent (Apollonia) — https://automotorent.gr — ⬜ verified · ⬜ remove
- Vento Cruises — https://ventocruises.gr — ⬜ verified · ⬜ remove
- Valema Yachting — https://valemayachting.com — ⬜ verified · ⬜ remove
- Bluestar Ferries — https://www.bluestarferries.com — ⬜ verified · ⬜ remove
- Seajets — https://www.seajets.gr — ⬜ verified · ⬜ remove
- Flyhopper — https://flyhopper.com — ⬜ verified · ⬜ remove

- **Add any new partner?** ⬜ no · ⬜ yes (name + URL below)
- **New partner**: `_________________________________________`
- **Decided on**: `____ / ____ / 2026`

To remove a partner without deleting the data, flip `verified: false`
in `src/data/concierge.ts` — the component already filters those out.

---

## 5. TripAdvisor / TikTok handles

The old site listed both. We removed them pending verification.

- **TripAdvisor URL?** `_________________________________________`  · ⬜ omit
- **TikTok URL?** `_________________________________________`  · ⬜ omit
- **Decided on**: `____ / ____ / 2026`

If you provide either, engineering adds it to the footer + the Hotel
schema `sameAs` array. If you formally skip, we note the decision in
`PRODUCT.md` and move on.

---

## 6. EN guide content approved

Four guides have been migrated from the old WordPress site, voice-edited
into Rabagas brand voice, and currently ship at:

- [/en/journal/sifnos-holidays-complete-guide](https://rabagas-suites.com/en/journal/sifnos-holidays-complete-guide/)
- [/en/journal/how-to-get-to-sifnos](https://rabagas-suites.com/en/journal/how-to-get-to-sifnos/)
- [/en/journal/things-to-do-in-sifnos](https://rabagas-suites.com/en/journal/things-to-do-in-sifnos/)
- [/en/journal/where-to-stay-in-sifnos](https://rabagas-suites.com/en/journal/where-to-stay-in-sifnos/)

Voice notes: I tightened the original SEO-marketer phrasing into
editorial, preserved every fact (ferry times, beach lists, taverna
classics, FAQ structure), and rebuilt internal links to point at the
new Astro routes.

- **Approve all four EN guides for launch?** ⬜ yes, all four · ⬜ approve some, hold others · ⬜ hold all
- **Specific edits requested?** ⬜ no · ⬜ yes (note below)
- **Edits**: `_________________________________________`
- **Decided on**: `____ / ____ / 2026`

---

## 7. EL / FR guide translations

The old site had only EN guides — no EL or FR translations existed.

Current state on the new site: EL + FR variants of the same four
guides are present but marked `draft: true`. They are AI-translations of
earlier starter content, not translations of the migrated EN bodies.
They are hidden from the journal index, sitemap, and routes.

- **Path** (choose one):
  - ⬜ A — Launch with EN guides only. EL/FR translation is a post-launch
    content task (no rush, no committed date).
  - ⬜ B — Commission a translator now. Send them the four migrated EN
    bodies; engineering flips `draft: false` when approved translations
    land.
- **If B, target language(s)**: ⬜ EL only · ⬜ FR only · ⬜ both
- **Decided on**: `____ / ____ / 2026`

---

## 8. Cookie / privacy wording accepted

Three short strings shown in the cookie banner across EL / EN / FR.
Wording is intentionally calm — not legalese — and presents both
options with equal weight (no dark pattern):

- EL: "Μια μικρή σημείωση για τα cookies / Αποδοχή analytics / Μόνο τα απαραίτητα"
- EN: "A small note on cookies / Accept analytics / Essential only"
- FR: "Une petite note sur les cookies / Accepter l'analyse / Essentiels uniquement"

Full strings are in `src/data/translations.ts` under the `consent.*`
keys.

- **Accept the wording for launch?** ⬜ yes · ⬜ revise (note below)
- **Suggested change**: `_________________________________________`
- **Decided on**: `____ / ____ / 2026`

---

## 9. Phone / address / email correct

Currently shown in `/contact/`, the footer, the Hotel schema, and the
mobile booking bar:

- **Address**: Apollonia, Sifnos 84003, Greece
- **Phone**: +30 211 715 9002 (shown as `tel:+302117159002`)
- **Email**: info@rabagas-suites.gr
- **Reply hours shown to visitors**: Daily, 09:00 – 17:00

- **All three lines correct?** ⬜ yes · ⬜ correction needed (note below)
- **Correction**: `_________________________________________`
- **Decided on**: `____ / ____ / 2026`

---

## 10. Final launch date / window

The site is engineering-ready pending items 1–4 above (RESEND, partners).
The DNS swing on `rabagas-suites.com` is the single irreversible step.

- **Preferred launch date**: `____ / ____ / 2026`
- **Preferred launch time window** (local Athens time): `__:__ – __:__`
- **Anyone we should notify in advance?** (PR contacts, partners, social):
  - `_________________________________________`
  - `_________________________________________`

Engineering recommendation: avoid Friday afternoon and weekends.
Pick a Tuesday or Wednesday morning when both engineering and
George/Didi can respond to any inquiry that lands in the first hour.

---

## Engineering items already closed (no input needed)

Listed for completeness so you can see what's not on your plate:

- ✅ GitHub repo: all four Phase-12 + Phase-13 commits on `origin/main`.
- ✅ `/api/inquiry` fails closed when `RESEND_API_KEY` is missing.
- ✅ Cookie consent gates GTM + gtag — no Google request before Accept.
- ✅ Cookie banner is ARIA-correct, focus-managed, 44px tap targets, no
  collision with the MobileBookingBar, three locales.
- ✅ Journal: 4 EN guides migrated; 6 press posts shipping; 8 drafts
  hidden from build / sitemap / routes / hreflang.
- ✅ `public/_redirects` covers legacy WP slugs (suites, blog, news,
  backend leakage).
- ✅ Sitemap + hreflang trio emitted for every content page.
- ✅ Schema.org: Hotel block on every page; per-suite Suite; Article on
  Our Story + every Journal post; `isBasedOn` on every press post.
- ✅ No fabricated trust signals: no fake stars, no fake reviews, no
  mailto-as-primary form action, no fake success states.
- ✅ All content images optimized via Astro's `<Image>` pipeline.
- ✅ Self-hosted font subsets (Latin + Greek) + LCP image preload.

If anything in the engineering list ever stops being true, ping us.
