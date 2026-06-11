# Tradespad — Design Reference

> Reverse-engineered from tradespad.com · May 2026

---

## Brand Identity

**Tagline:** "Your trades have something to say, Tradespad will reveal it"
**Positioning:** Trading journal + analytics + backtesting in one place. Clean, not overwhelming.
**Tone:** Professional but approachable. Data-first. Built by traders, for traders.

---

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `--background` | `#0a0a0a` (estimated) | Page background |
| `--surface` | `#111111` / `#141414` | Cards, panels |
| `--border` | `rgba(255,255,255,0.08)` | Subtle dividers |
| `--text-primary` | `#ffffff` | Headings, labels |
| `--text-secondary` | `rgba(255,255,255,0.55)` | Descriptions, captions |
| `--accent` | Green (P&L positive) | Profit indicators |
| `--accent-red` | Red (P&L negative) | Loss indicators |
| `--cta-bg` | White or near-white | Primary button fill |
| `--cta-text` | `#000000` | Primary button text |

**Palette strategy:** Full dark-mode product. High contrast white text on near-black background. Color is used sparingly — almost exclusively for data states (green/red P&L) and CTAs.

---

## Typography

**Style:** Clean, modern sans-serif. Editorial weight on headings with ample line-height. Body copy stays readable and minimal.

### Scale (estimated)

| Role | Size | Weight | Notes |
|---|---|---|---|
| Hero heading | `~52–64px` | 700 | Two-line, centered, with line break |
| Section heading | `~36–44px` | 600–700 | Left or centered |
| Feature label | `~12px` | 500 | Uppercase, letter-spaced, muted |
| Body / descriptions | `~16px` | 400 | `opacity: 0.6` on dark bg |
| Nav links | `~14px` | 400–500 | Minimal, spaced |
| Pricing numbers | `~28–36px` | 700 | Bold, prominent |
| Badge / tag | `~11–12px` | 500 | Pill shape, "Soon" labels |

**Heading pattern:** Multi-line breaks are intentional — e.g. `"All your trading accounts,\norganised in a single place"`. This creates rhythm and controls visual width.

---

## Layout

**Max width:** ~`1100–1200px`, centered.
**Grid:** Single-column for most sections. Feature sections alternate text+image (2-col on desktop).
**Section spacing:** Very generous — `80–120px` vertical padding between sections.
**Feature images:** Large, full-bleed screenshots with soft glow/shadow on dark bg. No borders — images float.

### Nav

- Fixed top bar, transparent or dark blur
- Logo left, links center, Sign in + Get Started right
- "Get Started" = filled white pill button
- "Sign in" = ghost/text link

### Hero

- Centered layout
- Headline → subtitle → CTA button → app screenshot
- Integration logos scroll/marquee below the fold

### Feature sections

- Alternating: text left + image right (or stacked on mobile)
- Section label above heading: e.g. `ACCOUNTS CENTER` in small caps, muted
- Short 2-line description under heading
- No bullet lists — prose only

### Pricing

- 3-column card grid (Free / Basic / Pro)
- "Pro" card visually differentiated (border glow, badge)
- Feature lists with checkmarks
- Toggle: Monthly / Yearly

---

## Components

### Buttons

```
Primary CTA:
  background: #ffffff
  color: #000000
  border-radius: 999px (pill)
  padding: 10px 22px
  font-weight: 500
  font-size: 14px

Ghost / secondary:
  background: transparent
  color: rgba(255,255,255,0.7)
  border: 1px solid rgba(255,255,255,0.15)
  border-radius: 999px
```

### Cards (Pricing)

```
background: rgba(255,255,255,0.03)
border: 1px solid rgba(255,255,255,0.08)
border-radius: 16px
padding: 28–32px
```

Pro card:
```
border: 1px solid rgba(255,255,255,0.25)
box-shadow: 0 0 40px rgba(255,255,255,0.05)
```

### "Soon" badge

```
background: rgba(255,255,255,0.08)
color: rgba(255,255,255,0.5)
border-radius: 999px
padding: 2px 10px
font-size: 11px
font-weight: 500
text-transform: uppercase
letter-spacing: 0.05em
```

### Review cards

```
background: rgba(255,255,255,0.04)
border: 1px solid rgba(255,255,255,0.07)
border-radius: 12px
padding: 20px
```

Avatar: colored circle with initial letter, no image.
Auto-scroll marquee in two rows, opposite directions.

### Feature section label

```
font-size: 11–12px
font-weight: 500
text-transform: uppercase
letter-spacing: 0.1em
color: rgba(255,255,255,0.4)
margin-bottom: 8px
```

---

## Spacing System

```
4px base unit
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  40px
2xl: 64px
3xl: 96px
```

---

## Motion & Effects

- **No heavy animations** — product feels calm and precise
- Feature images have subtle `box-shadow` glow on dark background
- Marquee/scroll for integration logos and review cards
- CTA buttons likely have soft `hover: opacity` or scale transition
- Section reveals on scroll (fade-up, subtle)

---

## Integrations Logos

Shown in a marquee row (duplicated for infinite scroll):
- cTrader
- MetaTrader 5
- TradeLocker
- Tradovate
- NinjaTrader

Displayed as monochrome/muted logos on dark bg. Low contrast intentionally — supporting cast, not hero.

---

## Content Strategy

- **Zero fluff.** Every section has: label → heading → 1-2 line description → screenshot. That's it.
- Feature names are product nouns: Accounts Center, Calendar, Journaling, Analytics, Backtesting, Communities
- Social proof: 6 rotating testimonials + "+4000 traders worldwide"
- FAQ: 6 questions, honest and practical tone
- Footer: minimal 4-column link grid + legal disclaimer

---

## What Makes It Work

1. **Dark-first, data-forward** — looks like a terminal/dashboard product, not a SaaS landing page
2. **Screenshots do the selling** — large app previews show rather than tell
3. **Copy restraint** — 2 lines max per section, no bullet points in feature descriptions
4. **Pricing clarity** — Free tier keeps it accessible; "Early Access" on Pro creates urgency
5. **No stock photos, no illustrations** — pure product screenshots + abstract bg texture

---

## Reference Screenshots

| Section | URL |
|---|---|
| App overview | `https://tradespad.com/app.png` |
| P&L Calendar | `https://tradespad.com/features/pnlcalendar.png` |
| Economic Calendar | `https://tradespad.com/features/economiccalendar.png` |
| Trade Journal | `https://tradespad.com/features/tradejournal.png` |
| Analytics | `https://tradespad.com/features/analytics.png` |
| Backtesting | `https://tradespad.com/features/backtesting.png` |
| Communities | `https://tradespad.com/features/communities.png` |
| Accounts Center | `https://tradespad.com/features/accountscenter.png` |
