# Anti-Patterns

## Trust
- Fabricated ratings or review scores
- Stock photos presented as team members
- Invented client logos or partner badges
- Unverifiable "as seen in" press mentions
- Fake user/customer counts
- Invented case study metrics
- "AI-powered" with no AI
- "Bank-level security" without audit
- Sustainability claims without certification
- Specific numbers without source ("10,247 happy customers")

## UX
- Hover-only interactions with no tap equivalent
- Fake scarcity without real inventory data
- Dark patterns (hidden costs, manipulative urgency, trick questions)
- Autoplaying video or audio
- Infinite scroll without pagination fallback
- Forms that clear all fields on validation error
- Required account creation for basic information
- Price hidden until late in funnel

## Technical
- Content images in `public/` presented as "optimized"
- `mailto:` as primary form submission
- Placeholder strings (`FORM_ID`, `TODO`) shipped to production
- Fake success states when no backend exists
- Heavy JS libraries for CSS-achievable effects
- Client-side rendering of content that should be static
- Missing `prerender = false` on server endpoints
- Tailwind base layer link styles losing to browser defaults (without explicit reset)

## Content
- "Lorem ipsum" or "coming soon" on live pages
- Identical copy across different product/service pages
- Generic stock photography as hero images
- Wall-of-text bios with no editing
- Buzzword copy with no specific claims ("We craft digital experiences that transcend boundaries")
- Missing emotional differentiators (every entity identical except data)

## Motion
- Every section using identical fade-up reveal
- Parallax scrolling
- Bouncing/elastic effects
- Auto-playing carousels or sliders
- Animation that delays content access by more than 1s
- Scale transforms above 1.08
- Mouse-tracking effects
- Blur transitions on content text
- Motion without reduced-motion media query

## Business / Deceptive
- "Limited time offer" that never expires
- Fake countdown timers
- Testimonials from people who don't exist
- Before/after with manipulated conditions
- Claims of exclusivity with no basis
- "Free" with hidden required purchase
- Aggressive cookie/popup patterns that obscure content
