# Linear.app — Design Reference

> Exhaustive visual and interaction reference derived from [linear.app](https://linear.app) and product screenshots. Use this document when building or reviewing Refract marketing UI.

---

## 1. Design philosophy

Linear feels **crisp, focused, and product-led**: a dark interface tuned for serious builders. The tone is professional and calm rather than decorative. Hierarchy comes from typography, spacing, and tonal contrast — not ornament, gradients, or heavy shadows.

**Core principles:**
- Dark, quiet, high-contrast canvas
- Inter Variable with tight headline tracking
- Subtle borders and tonal layering instead of shadows
- Indigo accent used sparingly
- Generous negative space around the hero
- Product mockups as the primary visual anchor

---

## 2. Color system

### 2.1 Canvas stack (depth without shadows)

| Token | Hex | Role |
|-------|-----|------|
| `neutral` | `#08090a` | Page background — cinematic near-black |
| `surface` | `#0f1011` | Cards, navbar (scrolled), mock containers |
| `overlay` | `#141516` | Inputs, elevated inline surfaces, hover fills |
| `panel` | `#111214` | Sidebars, mock chrome headers |
| `chip` | `#1b1c1d` | Tags, pills, inactive controls |

Depth is achieved by stepping through these tones. Do not use drop shadows on marketing surfaces.

### 2.2 Text

| Token | Hex | Role |
|-------|-----|------|
| `on-surface` / `secondary` | `#f7f8f8` | Headlines, primary UI text |
| `tertiary` | `#a0a4ad` | Body copy, descriptions |
| `muted` | `#858b95` | Nav links, timestamps, metadata |

### 2.3 Borders

| Token | Value | Role |
|-------|-------|------|
| `border` | `#ffffff0d` (~5% white) | Default dividers, card edges |
| `border-strong` | `#ffffff1a` (~10% white) | Hover borders, dense UI separation |

Never use solid grey borders like `#23252a` on marketing pages.

### 2.4 Accent & semantic

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#7170ff` | Active nav, links, focus rings, selected states — **sparingly** |
| `success` | `#2ecc71` | Status dots, "On track", diff additions |
| `warning` | `#f5c400` | Medium priority, "At risk" |
| `error` | `#ff5d5d` | High priority, diff removals, destructive |

### 2.5 Marketing accent blocks (testimonials only)

Linear uses bold colored cards for social proof — not for product UI:
- Lavender: `#c8c4f0` / `#d8d4f8`
- Lime: `#d4e8a0` / `#d4f5a8`
- Text on these cards: near-black `#0a0a0a`

---

## 3. Typography (Inter Variable)

Load: `Inter:opsz,wght@14..32,400..510`

### 3.1 Scale

| Style | Size | Weight | Line-height | Letter-spacing |
|-------|------|--------|-------------|----------------|
| `headline-display` | 56px | 510 | 61.6px | -1.232px |
| `headline-lg` | 40px | 510 | 44px | -0.88px |
| `headline-md` | 20px | 510 | 26.6px | -0.24px |
| `headline-sm` | 16px | 510 | 24px | 0 |
| `body-lg` | 16px | 400 | 24px | -0.16px |
| `body-md` | 15px | 400 | 24px | -0.165px |
| `body-sm` | 13px | 400 | 20px | -0.08px |
| `label-md` | 14px | 500 | 20px | 0 |
| `label-sm` | 12px | 500 | 16px | 0.02em |
| `caption` | 12px | 400 | 16px | 0 |

### 3.2 Rules

- Headlines: weight 510, negative tracking — engineered, not editorial
- Body: weight 400 only — never bold body paragraphs
- Labels/nav: 500–510 at small sizes for legibility
- Mono labels (FIG, dates): JetBrains Mono 12px, muted
- No dominant uppercase pattern; emphasis via weight and contrast

### 3.3 Manifesto pattern

Long single-thought headline, ~40px, on-surface, often spanning two visual lines:

> "A new species of product tool. Purpose-built for modern teams with AI workflows at its core…"

---

## 4. Layout grid

| Container | Max-width | Padding |
|-----------|-----------|---------|
| Page | 1200px | 24px (mobile), 32px (desktop) |
| Content band | 1100px | 16px horizontal |
| Prose / legal | 720px | 24px |
| Hero text | 900px | centered |
| Hero mock | 1100px | centered |

### 4.1 Vertical rhythm

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 6px | Tight internal gaps |
| `sm` | 16px | Card padding, nav gaps |
| `md` | 24px | Grid gaps |
| `lg` | 32px | Section internal spacing |
| `xl` | 64px | Between major bands |
| Hero top | 128px | Below fixed navbar |
| Pre-mock gap | 96–128px | Hero text → mock |

---

## 5. Border radius

| Token | Value | Use |
|-------|-------|-----|
| `sm` | 4px | Cards, mocks, inputs |
| `md` | 8px | Large mock outer frame |
| `lg` | 12px | Hero mock container |
| `full` | 9999px | Primary/secondary buttons only |

---

## 6. Navbar — Marketing

### 6.1 Structure

```
[Logo icon]  [Product ▾]  [Resources ▾]  [Customers]  [Pricing]  [Now]  [Contact]  [Docs]     [Open app]  [Log in]  [Sign up]
```

Product and Resources expand into mega-menus on desktop (multi-column dropdowns) and accordions on mobile.

### 6.2 Positioning

```css
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 50;
height: 52px; /* content area */
```

### 6.3 Scroll states

**At top (scrollY ≤ 20):**
- `background: transparent`
- `border-bottom: none`

**Scrolled:**
- `background: #0f1011`
- `border-bottom: 1px solid #ffffff0d`
- Transition: `background 0.3s ease, border-color 0.3s ease`

### 6.4 Links

- Font: `label-sm` (12px / 500)
- Color: `#858b95` → hover `#f7f8f8`
- Gap between links: 24px
- No underline on hover

### 6.5 Actions (right)

- **Open app**: tertiary — transparent, muted text, no pill
- **Log in**: tertiary — transparent, muted text, no pill
- **Sign up**: primary pill — `#f7f8f8` bg, `#08090a` text, 44px height, `rounded-full`

### 6.6 Mobile

- Hamburger right; drawer expands below header
- Solid `surface` background — no backdrop blur / glassmorphism
- Same link set + Log in + Sign up stacked

---

## 7. Navbar — Docs

- Always opaque `surface` from first paint
- Left: Logo + breadcrumb "Documentation"
- Center links: Guides, MCP, Changelog (docs context only)
- Right: Sign up pill only
- No Product / Pricing links

---

## 8. Navbar — Minimal

- Logo left + "← Back to home" or centered logo
- No secondary navigation
- Used on: Privacy, Terms, About

---

## 9. Hero anatomy

### 9.1 Content stack (centered)

1. **Headline** — `headline-display`, max-width 900px, text-balance
2. **Subheadline** — `body-lg`, tertiary, max-width 560px
3. **Announcement** (optional) — muted link inline or right-aligned: `New Cursor MCP →`
4. **No CTA buttons in hero** — conversion at page bottom

### 9.2 Product mock stage

```
┌─────────────────────────────────────────┐
│     radial spotlight (behind mock)      │
│  ┌───────────────────────────────────┐  │
│  │  perspective rotateX(2deg) wrapper  │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │ MockChrome + HeroMock       │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

**Spotlight:**
```css
background: radial-gradient(
  ellipse 80% 50% at 50% 0%,
  rgba(255, 255, 255, 0.06),
  transparent 70%
);
```

**Mock frame:**
- Border: `1px solid #ffffff0d`
- Radius: 8–12px
- No heavy box-shadow; optional soft glow via spotlight only

### 9.3 Logo cloud (immediately after hero)

- Monochrome company names or logos
- Opacity: 0.4–0.5
- Single line or wrapped row, centered
- Optional one-liner above: "Powers X teams…"

---

## 10. Section patterns

### 10.1 FIG tabs (3 interactive panels)

Horizontal tab pills above a swapping demo panel:

| Tab | FIG | Demo |
|-----|-----|------|
| Built for purpose | 0.2 | IntakeMock |
| Powered by AI agents | 0.3 | BuildMock |
| Designed for speed | 0.4 | HealthScoreMock |

Preceded by manifesto headline section.

### 10.2 Numbered product section

**Header — 2-column grid on lg+:**

| Left column | Right column |
|-------------|--------------|
| Large section title (`headline-lg`) | Description paragraph + link `{number} {label} →` |

**Mock:** full-width below header, wrapped in MockChrome

**Sub-features:** horizontal row below mock:
```
1.1 GitHub OAuth +    1.2 Webhooks +    1.3 Push triggers +
```
Mono, muted, inline — not stacked pills.

### 10.3 Changelog timeline (dedicated page)

- Horizontal line across top
- Dots on line per entry
- Cards below in 4-column grid (desktop)
- Date: mono uppercase, muted
- "View all →" link bottom-left

### 10.4 Testimonials

- 2–3 cards side by side
- Solid pastel backgrounds (lavender, lime)
- Dark text on light card
- Company logo + name + role at bottom

### 10.5 Final CTA band

- Centered `headline-lg`: "Built for the future. Available today."
- Buttons: Get started (primary pill) + Contact sales + Open app + Download (secondary outline pills)

---

## 11. Buttons

| Variant | Background | Text | Radius | Height |
|---------|------------|------|--------|--------|
| Primary | `#f7f8f8` | `#08090a` | full | 44px |
| Primary hover | `#ddddde` | `#08090a` | full | 44px |
| Secondary | transparent | on-surface | full | 44px |
| Secondary border | `border-strong` on hover | | | |
| Tertiary | transparent | muted | none | auto |
| Link | transparent | `#7170ff` | none | auto |

**Don't:** scale transform on hover, gradient fills, glass effects.

---

## 12. Animation specification

### 12.1 Easing

Primary easing (all marketing motion):
```
cubic-bezier(0.22, 1, 0.36, 1)
```

### 12.2 Timings

| Trigger | Properties | Duration | Delay |
|---------|------------|----------|-------|
| Hero text mount | opacity, translateY(20→0) | 600ms | 0 |
| Hero mock mount | opacity, translateY(40→0) | 800ms | 150ms |
| Section in view | opacity, translateY(16→0) | 500ms | stagger 80ms |
| Navbar scroll | background, border | 300ms | — |
| Mobile menu | height, opacity | 200ms | — |
| Accordion | height, chevron rotate | 250ms | — |

### 12.3 Viewport

```js
viewport: { once: true, margin: "-50px" }
```

### 12.4 Prohibited

- Button scale bounce (`transform: scale(0.97)`)
- Aggressive parallax
- Glassmorphism / backdrop-filter on nav
- Decorative looping animations on marketing copy
- Flashy gradient backgrounds

---

## 13. Mock UI fidelity checklist

### HeroMock
- [ ] 3-pane layout: sidebar nav + issue detail + activity
- [ ] Issue title, description, status pills
- [ ] Activity stream with avatars
- [ ] Agent panel or status bar
- [ ] Density matches real product UI

### IntakeMock
- [ ] 4-column kanban (Backlog, Todo, In Progress, Done)
- [ ] Card count badges per column
- [ ] Floating Slack thread overlay on right
- [ ] Avatars in thread

### PlanMock
- [ ] Month headers (FEB–SEP)
- [ ] Gantt bars with indigo tint `rgba(113,112,255,0.25)`
- [ ] Initiative legend below

### BuildMock
- [ ] Terminal-style agent output
- [ ] Floating "Assign to..." dropdown overlay
- [ ] Agent list with icons

### DiffMock
- [ ] Split before/after panes
- [ ] File path in chrome header
- [ ] Syntax token colors (keyword, string, comment)
- [ ] Line numbers muted

### DriftMock
- [ ] Sparkline chart 30-day
- [ ] Category deltas (+4, -2, 0)
- [ ] Project cards with At risk / On track

### MockChrome (shared)
- [ ] Top bar: optional traffic dots OR file path left
- [ ] Small logo/icon right
- [ ] `panel` background, `border-bottom` hairline

---

## 14. Information architecture (Refract)

| Route | Layout | Content |
|-------|--------|---------|
| `/` | Marketing | Hero, logos, manifesto, FIG tabs, full 1.0–5.0 sections, changelog, testimonials, CTA |
| `/product` | Marketing | MCP deep-dive + CTA (full tour on landing) |
| `/pricing` | Marketing | Plans + FAQ + CTA |
| `/changelog` | Marketing | Timeline |
| `/docs`, `/help` | Docs | Documentation |
| `/privacy`, `/terms`, `/about` | Minimal | Legal / company |
| `/roadmap`, `/status`, `/contact`, `/integrations` | Marketing | Existing pages |

**Landing includes:** full product tour (1.0–5.0), changelog preview, pricing table and FAQ remain on dedicated pages.

---

## 15. Do / Don't

### Do
- Keep interface dark, quiet, high-contrast
- Use Inter Variable with tight headline tracking
- Rely on subtle borders and tonal layering
- Use indigo sparingly for emphasis
- Split content across dedicated pages
- Make mocks look like real product screenshots
- Use 2-column section headers on product pages

### Don't
- Put pricing table or FAQ on the landing page
- Use 4+ buttons in the marketing navbar action cluster
- Add gradients, glassmorphism, or colorful page backgrounds
- Use heavy drop shadows on cards
- Stack section title above description (Linear uses side-by-side)
- Use uppercase labels as primary emphasis
- Show FIG cards without wireframe illustrations

---

## 16. CSS variable map (Refract implementation)

```css
--ld-primary:         #7170ff;
--ld-secondary:       #f7f8f8;
--ld-tertiary:        #a0a4ad;
--ld-neutral:         #08090a;
--ld-surface:         #0f1011;
--ld-overlay:         #141516;
--ld-panel:           #111214;
--ld-chip:            #1b1c1d;
--ld-muted:           #858b95;
--ld-border:          #ffffff0d;
--ld-border-strong:   #ffffff1a;
--ld-success:         #2ecc71;
--ld-warning:         #f5c400;
--ld-error:           #ff5d5d;
```

---

*Last updated: June 2026 — derived from linear.app live site and product marketing screenshots.*
