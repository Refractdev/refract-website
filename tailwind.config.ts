import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ── Linear Dark canonical ──
        ld: {
          primary:        "var(--ld-primary)",
          secondary:      "var(--ld-secondary)",
          tertiary:       "var(--ld-tertiary)",
          neutral:        "var(--ld-neutral)",
          surface:        "var(--ld-surface)",
          "on-surface":   "var(--ld-on-surface)",
          muted:          "var(--ld-muted)",
          border:         "var(--ld-border)",
          "border-strong":"var(--ld-border-strong)",
          overlay:        "var(--ld-overlay)",
          panel:          "var(--ld-panel)",
          chip:           "var(--ld-chip)",
          success:        "var(--ld-success)",
          warning:        "var(--ld-warning)",
          error:          "var(--ld-error)",
        },
        // ── Primary (shadcn) ──
        primary: {
          DEFAULT:    "var(--ld-primary)",
          on:         "var(--ld-neutral)",
          light:      "var(--ld-button-hover)",
          foreground: "var(--ld-neutral)",
        },
        // ── Text (compat) ──
        ink:      "var(--color-ink)",
        body:     "var(--color-body)",
        charcoal: "var(--color-charcoal)",
        mute:     "var(--color-mute)",
        ash:      "var(--color-ash)",
        stone:    "var(--color-stone)",
        // ── Canvas & Surface ──
        canvas: {
          DEFAULT: "var(--color-canvas)",
        },
        surface: {
          DEFAULT:  "var(--ld-surface)",
          card:     "var(--color-surface-card)",
          elevated: "var(--color-surface-elevated)",
          deep:     "var(--color-surface-deep)",
        },
        // ── Borders ──
        hairline: {
          DEFAULT: "var(--color-hairline)",
          strong:  "var(--color-hairline-strong)",
          soft:    "var(--color-divider-soft)",
        },
        // ── Accents ──
        accent: {
          DEFAULT: "var(--color-accent)",
          hover:   "var(--color-accent-hover)",
          indigo:  "var(--color-accent)",
          orange:  "var(--color-accent-orange)",
          yellow:  "var(--color-accent-yellow)",
          blue:    "var(--color-accent-blue)",
          green:   "var(--color-accent-green)",
          red:     "var(--color-accent-red)",
        },
        // ── shadcn overrides ──
        background: "var(--ld-neutral)",
        foreground: "var(--ld-secondary)",
        border:     "var(--ld-border)",
        input:      "var(--ld-overlay)",
        ring:       "var(--ld-primary)",
        secondary: {
          DEFAULT:    "var(--ld-secondary)",
          foreground: "var(--ld-neutral)",
        },
        destructive: {
          DEFAULT:    "var(--ld-error)",
          foreground: "var(--ld-secondary)",
        },
        muted: {
          DEFAULT:    "var(--ld-overlay)",
          foreground: "var(--ld-muted)",
        },
        popover: {
          DEFAULT:    "var(--ld-surface)",
          foreground: "var(--ld-secondary)",
        },
        card: {
          DEFAULT:    "var(--ld-surface)",
          foreground: "var(--ld-secondary)",
        },
      },
      fontFamily: {
        sans:    ["'Inter'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body:    ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Inter'", "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "ui-monospace", "monospace"],
        serif:   ["'Inter'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "headline-display": ["56px",  { lineHeight: "61.6px", letterSpacing: "-1.232px", fontWeight: "510" }],
        "headline-lg":      ["40px",  { lineHeight: "44px",   letterSpacing: "-0.88px",  fontWeight: "510" }],
        "headline-md":      ["20px",  { lineHeight: "26.6px", letterSpacing: "-0.24px",  fontWeight: "510" }],
        "headline-sm":      ["16px",  { lineHeight: "24px",   letterSpacing: "0",        fontWeight: "510" }],
        "body-lg":          ["16px",  { lineHeight: "24px",   letterSpacing: "-0.16px",   fontWeight: "400" }],
        "body-md":          ["15px",  { lineHeight: "24px",   letterSpacing: "-0.165px",  fontWeight: "400" }],
        "body-sm":          ["13px",  { lineHeight: "20px",   letterSpacing: "-0.08px",   fontWeight: "400" }],
        "label-lg":         ["16px",  { lineHeight: "24px",   letterSpacing: "0",         fontWeight: "510" }],
        "label-md":         ["14px",  { lineHeight: "20px",   letterSpacing: "0",         fontWeight: "500" }],
        "label-sm":         ["12px",  { lineHeight: "16px",   letterSpacing: "0.02em",    fontWeight: "500" }],
        "caption":          ["12px",  { lineHeight: "16px",   letterSpacing: "0",         fontWeight: "400" }],
        // legacy aliases
        "display-xxl": ["64px",  { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "510" }],
        "display-xl":  ["56px",  { lineHeight: "61.6px", letterSpacing: "-1.232px", fontWeight: "510" }],
        "display-lg":  ["40px",  { lineHeight: "44px", letterSpacing: "-0.88px", fontWeight: "510" }],
        "display-sm":  ["28px",  { lineHeight: "1.2",  letterSpacing: "-0.02em", fontWeight: "510" }],
        "heading-md":  ["20px",  { lineHeight: "26.6px", letterSpacing: "-0.24px", fontWeight: "510" }],
        "heading-sm":  ["16px",  { lineHeight: "24px", letterSpacing: "0", fontWeight: "510" }],
        "subtitle":    ["20px",  { lineHeight: "26.6px", letterSpacing: "-0.24px", fontWeight: "400" }],
        "button-md":   ["14px",  { lineHeight: "20px", letterSpacing: "0", fontWeight: "500" }],
        "button-sm":   ["12px",  { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
        "code-md":     ["13px",  { lineHeight: "20px", letterSpacing: "-0.08px", fontWeight: "400" }],
      },
      borderRadius: {
        none: "0px",
        sm:   "4px",
        md:   "8px",
        lg:   "12px",
        xl:   "16px",
        full: "9999px",
        // legacy aliases
        xs:   "4px",
        base: "4px",
        pill: "9999px",
        "2xl": "16px",
      },
      spacing: {
        // Linear Dark rhythm
        xs:      "6px",
        sm:      "16px",
        md:      "24px",
        lg:      "32px",
        xl:      "64px",
        // legacy / component aliases
        xxs:     "2px",
        xxl:     "32px",
        xxxl:    "48px",
        section: "64px",
        band:    "64px",
        "spacing-1":  "2px",
        "spacing-2":  "3px",
        "spacing-3":  "4px",
        "spacing-4":  "4.7px",
        "spacing-5":  "5.6px",
        "spacing-6":  "6px",
        "spacing-7":  "7.5px",
        "spacing-8":  "8px",
        "spacing-9":  "10px",
        "spacing-10": "10.5px",
        "spacing-11": "12px",
        "spacing-12": "12.8px",
        "spacing-13": "15px",
        "spacing-14": "16px",
        "spacing-15": "17.5px",
        "spacing-16": "20px",
        "spacing-17": "28px",
        "spacing-18": "67.2px",
        base:    "12px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%":      { transform: "scale(2.2)", opacity: "0" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        "accordion-up":   "accordion-up 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-up":        "fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-dot":      "pulse-dot 2.2s ease-in-out infinite",
        marquee:          "marquee 30s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
