import type { Config } from "tailwindcss";

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
        primary: {
          DEFAULT: "var(--color-primary)",
          active: "var(--color-primary-active)",
          foreground: "var(--color-on-primary)",
        },
        ink: "var(--color-ink)",
        body: "var(--color-body)",
        "body-strong": "var(--color-ink)",
        muted: {
          DEFAULT: "var(--color-muted)",
          soft: "var(--color-muted-soft)",
          foreground: "var(--color-muted)",
        },
        hairline: "var(--color-hairline)",
        "hairline-soft": "var(--color-hairline-soft)",
        "hairline-strong": "var(--color-hairline-strong)",
        canvas: {
          DEFAULT: "var(--color-canvas)",
          soft: "var(--color-canvas-soft)",
        },
        surface: {
          card: "var(--color-surface-card)",
          strong: "var(--color-surface-strong)",
          hover: "var(--color-surface-hover)",
        },
        // shadcn overrides
        background: "var(--color-canvas)",
        foreground: "var(--color-ink)",
        border: "var(--color-hairline)",
        input: "var(--color-surface-card)",
        ring: "var(--color-primary)",
        secondary: {
          DEFAULT: "var(--color-canvas-soft)",
          foreground: "var(--color-ink)",
        },
        destructive: {
          DEFAULT: "var(--color-error)",
          foreground: "var(--color-on-primary)",
        },
        accent: {
          DEFAULT: "var(--color-canvas-soft)",
          foreground: "var(--color-ink)",
        },
        popover: {
          DEFAULT: "var(--color-surface-card)",
          foreground: "var(--color-ink)",
        },
        card: {
          DEFAULT: "var(--color-surface-card)",
          foreground: "var(--color-ink)",
        },
        semantic: {
          success: "var(--color-success)",
          error: "var(--color-error)",
        },
      },
      fontFamily: {
        sans: ["'CursorGothic'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["'CursorGothic'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'berkeleyMono'", "'JetBrains Mono'", "ui-monospace", "monospace"],
        serif: ["'EB Garamond'", "Georgia", "serif"],
      },
      fontSize: {
        "display-mega": ["26px", { lineHeight: "28.6px", letterSpacing: "-0.11px", fontWeight: "400" }],
        "display-lg": ["22px", { lineHeight: "24.2px", letterSpacing: "-0.05px", fontWeight: "400" }],
        "display-md": ["18px", { lineHeight: "20px", fontWeight: "400" }],
        "display-sm": ["16px", { lineHeight: "18px", fontWeight: "400" }],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        md: "3px",
        base: "4px",
        lg: "8px",
        xl: "10px",
        "2xl": "12px",
        pill: "9999px",
        full: "9999px",
      },
      spacing: {
        "spacing-1": "2px",
        "spacing-2": "3px",
        "spacing-3": "4px",
        "spacing-4": "4.7px",
        "spacing-5": "5.6px",
        "spacing-6": "6px",
        "spacing-7": "7.5px",
        "spacing-8": "8px",
        "spacing-9": "10px",
        "spacing-10": "10.5px",
        "spacing-11": "12px",
        "spacing-12": "12.8px",
        "spacing-13": "15px",
        "spacing-14": "16px",
        "spacing-15": "17.5px",
        "spacing-16": "20px",
        "spacing-17": "28px",
        "spacing-18": "67.2px",
        xxs: "4px",
        xs: "5.6px",
        sm: "8px",
        base: "12px",
        md: "12px",
        lg: "17.5px",
        xl: "28px",
        xxl: "48px",
        section: "80px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(2.2)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        "accordion-up": "accordion-up 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-up": "fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-dot": "pulse-dot 2.2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
