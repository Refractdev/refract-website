# Tradespad — design.md

Full design audit of [tradespad.com](https://tradespad.com). Use this as a reference for replication, redesign, or competitive analysis.

---

## 1. Brand identity

**Product:** Tradespad — trade journaling, analytics, and backtesting tool for active traders (forex, futures, crypto, CFDs).  
**Tagline:** *"Your trades have something to say, Tradespad will reveal it."*  
**Voice:** Clean, confident, trader-first. No fluff. Reads like a product built by traders.  
**Tone:** Professional but approachable. Short punchy headlines, minimal adjectives. Some copy leans slightly warm ("the journal we wish we had, so we built it for you").  
**Social proof anchor:** "+4000 traders worldwide" — used repeatedly as credibility stamp.

---

## 2. Color system

| Name | Hex | Usage |
|---|---|---|
| Background (page) | `#000000` | Full site background — hard black |
| Surface / Card | `~#0D0D0D` / `#111111` | Elevated card/section backgrounds |
| Border | `~#1A1A1A` / `#222222` | Subtle dividers, card outlines |
| Text Primary | `#FFFFFF` | Headlines, body |
| Text Secondary | `~#888888` / `#999999` | Subheadings, labels, metadata |
| Text Muted | `~#555555` | Footer text, disclaimers, tertiary labels |
| Accent Green | `~#22C55E` | Positive P&L, checkmarks in feature lists, "coming soon" success badges |
| Accent Red | `~#EF4444` | Negative P&L indicators, sell markers on charts |
| Accent White/Off-White | `#FFFFFF` | Primary CTAs ("Get Started"), logo |
| Badge highlight | `~#1A1A2E` or translucent white | "EARLY ACCESS OFFER" badge on pricing card |

**Design philosophy:** Pure black background with no gradients, no tinted overlays. Content contrast comes entirely from white text and the product screenshots themselves, which are the only real color on the page (green/red trading charts, UI previews). Signature move: zero decorative color — all color is functional or from the product.

**`meta-theme-color`** is `#000000` — the browser tab/status bar matches the site.

---

## 3. Typography

No custom font stack is explicitly declared in the scraped markup; the site uses a **system sans-serif stack** — likely:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

or a utility font like **Inter** (common in Next.js / Tailwind setups of this type).

### Type scale (inferred)

| Role | Size (approx) | Weight | Notes |
|---|---|---|---|
| Hero H1 | `52–64px` | 700–800 | Two-line headline, medium-wide tracking |
| Section H2 | `36–44px` | 700 | Section openers, often two-line, centered |
| Feature subtitle | `16–18px` | 400 | Gray, short descriptor below H2 |
| Body / card text | `14–16px` | 400 | Reviews, FAQ answers, feature body |
| Label / eyebrow | `11–13px` | 500–600 | Uppercase or small-cap tags (e.g. "Accounts Center", "Calendar", "Soon") |
| CTA button text | `14–15px` | 500–600 | Sentence case |
| Pricing number | `28–36px` | 700 | Large, center-aligned |
| Nav links | `14px` | 400–500 | No underline, hover state implied |

### Headline pattern
Headlines break across two lines deliberately. The second line is visually shorter, creating a left-anchored cascade effect:

```
## All your trading accounts,
   organised in a single place
```

This is a consistent structural choice across every section of the homepage.

---

## 4. Layout & spacing

**Container width:** Max ~`1200–1280px`, centered. Content sections use generous horizontal padding (`80–120px` desktop).

**Grid:** Largely single-column centered layout with full-width sections. No complex multi-column grids on the homepage — content is stacked vertically.

**Spacing rhythm:**
- Section-to-section gap: `~120–160px`
- Headline to body: `~16–24px`
- Body to CTA: `~32–40px`
- Card internal padding: `~24–32px`

**Section structure pattern (repeated throughout the page):**

```
[Eyebrow label — small caps, muted]
[H2 headline — two lines, white, large]
[Subtext — 1-2 lines, gray]
[Screenshot / UI preview — full-bleed or contained]
```

Every content section follows this exact pattern. No variation — it's a strict modular system.

---

## 5. Navigation

### Desktop nav

```
[Logo]   Home   Features▾   Integrations   Pricing   Help Center   |   Sign in   [Get Started →]
```

- Fixed/sticky (likely), dark background, no visible border-bottom
- "Features" is a mega-dropdown with four items (Journaling, Analytics, Backtesting, Communities)
- Each dropdown item has an icon + name + short descriptor
- "Backtesting" and "Communities" items have a "Soon" badge
- Right side: "Sign in" (ghost/text) + "Get Started" (filled white button)

### Mobile nav

Hamburger that expands to full-screen or slide-down menu. Same links, same CTAs.

### Dropdown (Features) structure

```
┌──────────────────────────────────────────────────┐
│  [icon] Journaling        Track your trades...   │
│  [icon] Analytics         Understand your edge   │
│  [icon] Backtesting       Bar replay in TradView  [Soon] │
│  [icon] Communities       Share your journal...  [Soon] │
└──────────────────────────────────────────────────┘
```

Icons are custom small PNGs (`feature-icon-*.png`).

---

## 6. Hero section

**Structure:**

```
[Full-viewport section]
  [Centered text block]
    H1: "Your trades have something
         to say, Tradespad will reveal it"
    Subtext: "Journal, analytics and backtesting in a single place.
              The journal we wish we had, so we built it for you."
    [Sign in] [Get Started →]   ← two CTA buttons, inline

  [Background image: abstract dark texture / bg-hero-opt-1920.WEBP]
  [App screenshot: app-opt-1920.WEBP — large, centered, below the fold slightly]
```

**CTA buttons:**
- "Sign in" → outlined/ghost, white border, white text
- "Get Started" → solid white background, black text (primary)
- Both are medium-rounded (`border-radius: ~6–8px`)

**Hero background image:** A dark textured/abstract image (`hero-bg-opt-1920.WEBP`) sits behind the text — creates depth without color. The product screenshot (`app-opt-1920.WEBP`) is the real visual anchor, showing the full app UI.

---

## 7. Integrations ticker (below hero)

A horizontal scrolling marquee of broker/platform logos immediately below the hero:

```
cTrader | MT5 | TradeLocker | Tradovate | NinjaTrader | Kinetick
```

The ticker loops continuously (CSS animation or JS). Logos are white/light PNGs on the black background. Two rows of the same logos appear for seamless looping.

**Label above:** "Integrated platforms" — small, muted.

---

## 8. Feature sections (homepage scroll)

Six feature blocks, stacked vertically. Each follows the same pattern but has a unique screenshot/UI preview.

### 8.1 Accounts Center

```
Eyebrow: "Accounts Center"
H2: "All your trading accounts,
     organised in a single place"
Body: "You can connect your trading accounts, import your trades via
       CSV file, or create them manually."
Visual: 3 stacked/tabbed screenshots (accountscenter-opt-1920.WEBP ×3)
```

### 8.2 Calendar

```
Eyebrow: "Calendar"
H2: "Seamless calendar to
     check your results"
Body: "With Tradespad calendar you can check your
       results and high-impact news for the month."
Two tabs: [P&L Calendar] [Economic Calendar]
Visuals: pnlcalendar-opt-1920.WEBP + economiccalendar-opt-1920.WEBP
```

Tab switcher is minimal — text tabs, likely underline indicator on active.

### 8.3 Journaling

```
Eyebrow: "Journaling"
H2: "A new way to journal your
     trades, simple and clean."
Body: "Press any trade to journal it, with screenshots, notes, TradingView
       entry points, strategy confluences, and more."
Visual: tradejournal-opt-1920.WEBP
```

### 8.4 Analytics

```
Eyebrow: "Analytics"
H2: "Analytics to understand the
     data behind your trades"
Body: "Automatically generated analytics, filtered by category, to surface
       the data you need to improve your edge."
Visual: analytics-opt-1920.WEBP
```

### 8.5 Backtesting (Soon)

```
Eyebrow: "Backtesting" + [Soon] badge
H2: "Go back in time with our
     TradingView bar replay"
Body: "Create strategies and backtest them with our TradingView
       bar replay, included in the free plan."
Visual: backtesting-opt-1920.WEBP
```

### 8.6 Communities (Soon)

```
Eyebrow: "Communities" + [Soon] badge
H2: "Share your journal with
     friends, mentors or students"
Body: "Create communities, invite friends, mentors, or students, and follow their progress in one place."
Visual: communities-opt-1920.WEBP
```

**"Soon" badge:** Small pill/tag next to section eyebrow and in the nav dropdown. Color: likely muted gray or translucent white on dark. Text: `"Soon"` in small caps or `11px` semibold.

---

## 9. Reviews / testimonials

```
H2: "What other traders say
     about Tradespad"

[Try for free →]  ← single CTA above cards

[Horizontally scrolling or multi-row card grid of testimonials]
```

**Card structure per review:**

```
┌─────────────────────────────────────────────┐
│ "Quote text..."                             │
│                                             │
│  [B]  Bastien                               │
│       Tradespad BETA user                   │
└─────────────────────────────────────────────┘
```

- No star ratings
- No photos — only a colored initial avatar (single letter, colored circle)
- 6 unique reviews, displayed in a looping marquee (two rows, scrolling horizontally like the integrations ticker)
- Card background: dark surface (`~#111111`), subtle border

**Reviews used:**
1. Bastien — "I truly believe that every trader should use a journal like this..."
2. Juan D. — "I used to use Notion to journal my trades..."
3. Nico R. — "My favourite thing about Tradespad is the design..."
4. Jonah — "I love that I can keep all my trading accounts together..."
5. Aarav S. — "This BETA is literally better than other fully launched apps..."
6. Aisha — "Keeping my accounts, strategies, trades, payouts and everything..."

Social proof line: **"Used by +4000 traders worldwide"** — appears inline or just below cards.

---

## 10. Pricing section

```
H2: "Simple and fair pricing for
     every need"
Subtext: "Cheapest prices in the space"

[Monthly] [Yearly]  ← toggle
```

### Cards (3 tiers)

| | Free | Early Access | Basic |
|---|---|---|---|
| Price | $0/mo | ~~$29~~ $19/mo | $19/mo |
| Billing note | free forever | 10% off yearly | 10% off yearly |
| CTA | "Get Free" | "Join early access" | "Get Basic" |
| Badge | — | "EARLY ACCESS OFFER" | — |

**Card layout:**
- 3 cards in a row (desktop), likely stack on mobile
- Early Access card is visually highlighted — may have a border, glow, or distinct background vs the other two
- Strikethrough on $29 → $19 for early access
- Feature lists use checkmark icons (likely green `✓`)
- "Soon" labels next to features not yet live

**Below cards:** A paragraph note: *"Unlock the full Tradespad experience with our Early access plan... at a discounted $19/mo price for life. See full comparison →"*

**Full comparison table** (on `/pricing` page):

Three columns (Free, Basic, Early Access), rows grouped by category:

- **Journaling:** Trading Accounts, Photo Uploading, Strategies, Manual Import, Auto-Sync Trades, Automatic Analytics
- **Backtesting (Soon):** Backtesting Sessions, Backtesting Analytics, Backtesting Journal, Trade Replay
- **Other Features:** Communities, Economic Calendar, Mobile App (Soon)

---

## 11. FAQ section

```
H2: "Frequently Asked
     Questions"

[Accordion list]
```

6 questions, accordion-style (expand/collapse). Questions:

1. How do I contact customer service if I have a question or issue?
2. What if it doesn't meet my expectations?
3. Can I safely use Tradespad with my prop firm accounts?
4. What if my broker does not sync the commissions to my trades in Tradespad?
5. Is my data safe? Can Tradespad see my trading credentials?
6. How do I request a feature or broker integration?

**Accordion visual:** Likely a `+` / `×` icon on the right, minimal border-bottom between items, no card wrapper.

---

## 12. Footer CTA (above actual footer)

A full-width dark section with a background image (`tradespadfooter-opt-1920.WEBP`):

```
"Ready to become a profitable trader? Start journaling with Tradespad today,
 the all-in-one journaling software used by +4000 traders worldwide"

[Compare plans]   [Join early access]
```

---

## 13. Footer

Multi-column layout, dark background. Five link columns:

| Integrations | Pages | Resources | Social | Tutorials |
|---|---|---|---|---|
| Metatrader 5 | Home | Help center | Instagram | Walkthrough |
| cTrader | Integrations | Privacy Policy | Discord | Create Accounts |
| Tradelocker | Pricing | Terms of service | | Create Trades |
| Tradovate | Reviews | Risk Disclosure | | Create Strategies |
| Ninjatrader | Affiliate | | | Sync Trades |
| See all | | | | Automatic Fees |

**Bottom bar:**
- Logo (left)
- Social icons: Instagram, Discord, Email — icon buttons
- Copyright: "© 2026 Tradespad. All rights reserved."
- "Charts by [TradingView logo]" — attribution link
- "All systems normal." — status indicator (bottom right or inline)

**Legal disclaimers block:** Three paragraphs in very small muted text:
- Risk Disclosure
- Hypothetical Performance Disclosure
- Testimonials Disclosure

---

## 14. Buttons & interactive elements

### Button variants

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| Primary | `#FFFFFF` | `#000000` | none | "Get Started", main CTAs |
| Ghost / Outline | transparent | `#FFFFFF` | `1px solid #FFFFFF` | "Sign in", secondary CTAs |
| Muted / Subtle | `~#111111` | `#FFFFFF` | `1px solid #222222` | "Get Free", less emphasis |
| Badge "Soon" | `~#1C1C1C` | `~#888888` | `1px solid #333` | Nav, section labels |

**Border radius:** Likely `6–8px` — rounded but not pill-shaped. Consistent across all variants.

**Padding:** Approx `10–12px` vertical, `20–24px` horizontal.

**Hover states:** Subtle opacity or background shift — no dramatic transforms. Consistent with a "calm product" aesthetic.

---

## 15. UI screenshots / visuals

All product screenshots are:
- `WEBP` format, optimized (`-opt-1920.WEBP` suffix from `next-image-export-optimizer`)
- Served from `/features/nextImageExportOptimizer/` or `/nextImageExportOptimizer/`
- High-resolution (`1920` wide), responsive
- Dark-themed app UI (matches site background — seamless bleed)
- No drop shadows or card frames around them — they appear to float on the black background

**Key screenshots in use:**

| File | Section |
|---|---|
| `hero-bg-opt-1920.WEBP` | Hero background texture |
| `app-opt-1920.WEBP` | Hero — full app overview |
| `accountscenter-opt-1920.WEBP` (×3) | Accounts center feature |
| `pnlcalendar-opt-1920.WEBP` | Calendar — P&L tab |
| `economiccalendar-opt-1920.WEBP` | Calendar — Economic tab |
| `tradejournal-opt-1920.WEBP` | Journaling section |
| `tradingview-entry-exit-hq.png` | Journaling — TradingView overlay |
| `feature4journaling-opt-1920.WEBP` | Journaling — notes/screenshots |
| `analytics-opt-1920.WEBP` | Analytics section |
| `backtesting-opt-1920.WEBP` | Backtesting section |
| `communities-opt-1920.WEBP` | Communities section |
| `tradespadfooter-opt-1920.WEBP` | Footer CTA bg |

---

## 16. Animations & motion

- **Logo marquee (integrations):** Continuous horizontal scroll, CSS `animation: scroll linear infinite`
- **Reviews marquee:** Same pattern — two rows scrolling at slightly different speeds or same direction
- **Journaling section overlay:** The TradingView entry/exit feature has animated overlays — sell/close markers (`flecharojafeature3`, `flechaverdefeature3`, `selectorhand`) that appear to animate in sequence, simulating a trade being placed
- **Scroll reveals:** Likely `opacity: 0 → 1` + `translateY` on section entry (standard Next.js pattern with Framer Motion or CSS transitions)
- **No parallax**, no heavy GSAP — motion is restrained, utility-first

---

## 17. Integrations page

URL: `/integrations`

**Hero:**
```
H1: "Can you auto-import your
     trades to Tradespad?"
Body: "Connect your trading account to Tradespad and sync/import your trades automatically"
```

**Filter tabs (category pills):**
```
[All]  [Futures]  [Crypto]  [CFDs]  [Options]  [Stocks]
```

**Integration cards:**

Grid of cards, each:
```
┌──────────────────────┐
│  [Category tag]      │
│  [Platform logo]     │
│  Platform Name       │
│  [Auto Sync / File   │
│   Import / Coming    │
│   Soon]              │
└──────────────────────┘
```

**Live integrations (5):**
- cTrader — CFDs — Auto Sync
- Metatrader 5 — CFDs — Auto Sync
- Tradovate — Futures — File Import
- Tradelocker — CFDs — Auto Sync
- Ninjatrader — Futures — File Import

**Coming Soon (14+):**
Project X, TopStepX, TradingView, Matchtrader, DXtrade, Bybit, Interactive Brokers, Tastytrade, Robinhood, Charles Schwab, Thinkorswim, Tradestation (across Futures, Options, Crypto, CFDs, Stocks categories)

**"Can't find your platform? Request it"** — appears twice (top and bottom of grid), links to a request form.

---

## 18. Journaling feature page

URL: `/features/journaling`

**Hero:**
```
Eyebrow: "Features / Journaling"
H1: "Journaling shouldn't be boring"
Body: "Manually create your trades or automatically sync them.
       Add screenshots, notes, fill your confluences and more."
```

Six sub-features showcased in vertical scroll:

1. **P&L Calendar** — calendar view of trade performance
2. **Trade Journal** — risk/reward, rating, date/time/price/entry/exit
3. **TradingView Entry/Exit** — animated overlay showing exact entry/exit points on chart, auto-generated per trade
4. **Screenshots & Notes** — photo upload, free-text notes
5. **Strategy Confluences** — attach strategy, check off confluence conditions (EMAs, SMT, Liquidity, Order Block, FVG, Tendencia — example shows 3/6 = 50%)
6. **Broker Connections** — row of integration logos (cTrader, Schwab, NinjaTrader, TradeLocker, MT5, Tradovate)

**Page CTA:**
```
[Start journaling →]

"Ready to become a profitable trader? Start journaling with Tradespad today..."
[Compare plans]   [Join early access]
```

---

## 19. Page-level metadata

| Page | `<title>` | `meta-description` |
|---|---|---|
| Home | `Tradespad: Journaling & Backtesting tool` | `Trading analytics platform` |
| Pricing | `Pricing - Tradespad` | `Choose the plan that fits your trading needs. Simple, transparent pricing for every trader.` |
| Journaling | `Trading Journal - Tradespad` | `Journal your trades manually or sync them automatically. Add screenshots, notes, and track every metric.` |
| Integrations | `Integrations - Tradespad` | `Connect your trading account to Tradespad and sync/import your trades automatically.` |

`theme-color: #000000` on all pages.

---

## 20. Tech stack (inferred)

| Layer | Technology |
|---|---|
| Framework | **Next.js** (static export — `/nextImageExportOptimizer/` paths are the giveaway) |
| Image optimization | `next-image-export-optimizer` |
| Hosting | Likely **Vercel** |
| Styling | **Tailwind CSS** (utility-first, consistent spacing rhythm) |
| App subdomain | `app.tradespad.com` — separate frontend |
| Support/docs | `help.tradespad.com` — separate (likely Mintlify or similar) |
| CDN/Security | Cloudflare (`cdn-cgi/l/email-protection` obfuscation on email links) |
| Status | "All systems normal" inline in footer — likely a status page embed |
| Charts | TradingView (attributed in footer: "Charts by TradingView") |

---

## 21. Design decisions worth noting

**What they do well:**
- The product screenshot approach is extremely effective — the dark UI bleeds into the dark page background, making screenshots look native rather than "placed"
- The marquee pattern for integrations and reviews scales content without requiring more layout space
- Consistent 2-line headline format creates a strong rhythm — readers know where to look on every new section
- "Soon" badges handle roadmap features without hiding them — creates anticipation without overpromising
- No decorative illustrations or gradients — the product is the only visual, which focuses attention

**Where they could push further:**
- The type scale feels conservative — no distinct display face, relies entirely on weight contrast
- The "EARLY ACCESS OFFER" badge and pricing highlight could be more visually striking
- No dark/light mode toggle (site is locked to dark)
- Testimonial avatars are just colored initials — photos would increase trust signal significantly
- The hero subtext ("the journal we wish we had, so we built it for you") is warm but buried — could be an eyebrow or separate callout above the H1

---

*Last audited: June 2026. Based on live scrape of tradespad.com, /pricing, /features/journaling, and /integrations.*