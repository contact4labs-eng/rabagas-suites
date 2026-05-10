# Quickstart

## Skill package file tree

```
elite-web-build/
  SKILL.md              ← Start here. Operational core.
  QUICKSTART.md         ← You are here. Fast start guide.
  DECISION_TREES.md     ← Architecture, CMS, commerce, interaction decisions
  RECIPES.md            ← Step-by-step recipes for common project types
  WOW_SYSTEM.md         ← Signature moments, section recipes, visual authorship
  21ST_DEV_SYSTEM.md    ← Creative exploration process, queries, adaptation
  CHECKLISTS.md         ← Trust, forms, images, a11y, performance, launch QA
  ANTI_PATTERNS.md      ← What never to do
  PROMPT_TEMPLATES.md   ← Reusable prompts for build scenarios
  ORIGINS.md            ← Where these rules came from
```

## Start a new project in 5 steps

### 1. Classify the project
- What industry? → Pick archetype from `RECIPES.md`
- How many pages? → Pick scale (small/medium/large)
- Who edits content? → Pick content source from `DECISION_TREES.md`
- What's the conversion goal? → Bookings, leads, signups, sales, demos
- How much creative investment? → Pick wow level (restrained/premium/flagship)

### 2. Pick your fast start mode

| Mode | Use when | Time |
|---|---|---|
| **Fast Premium** | Tight budget, small scope, proven archetype | 1-2 days |
| **Standard** | Most projects | 2-4 days |
| **Flagship** | Brand-defining, high-budget, luxury | 4-7 days |
| **Content-Heavy** | Blog/editorial emphasis | 3-5 days |
| **Conversion-Heavy** | Lead gen, every page funnels to form | 2-4 days |

### 3. Initialize
```bash
npm create astro@latest . -- --template minimal --typescript strict
npx astro add tailwind sitemap
# If forms needed:
npx astro add node  # or vercel/netlify/cloudflare
```

Create folder structure:
```
src/assets/images/, src/components/{layout,sections,ui},
src/data/, src/layouts/, src/lib/, src/pages/api/, src/styles/
```

### 4. Build in order
Design system → BaseLayout → Header/Footer → Homepage sections → Detail pages → Forms → Locales → SEO → QA

### 5. Launch
Set env vars → Test forms → Verify sitemap → Check analytics → Run `CHECKLISTS.md > Launch QA`

## Common mistakes at project start
- Choosing CMS when TypeScript data files would suffice
- Over-engineering a 5-page site with Content Collections
- Starting with desktop layout instead of 390px mobile
- Adding motion before content and layout are right
- Using 21st.dev for one surface with one variant (token usage)
