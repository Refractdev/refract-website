import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ld: {
          primary: "var(--ld-primary)",
          secondary: "var(--ld-secondary)",
          tertiary: "var(--ld-tertiary)",
          neutral: "var(--ld-neutral)",
          canvas: "var(--ld-canvas)",
          surface: "var(--ld-surface)",
          panel: "var(--ld-panel)",
          chip: "var(--ld-chip)",
          "on-surface": "var(--ld-on-surface)",
          muted: "var(--ld-muted)",
          meta: "var(--ld-meta)",
          border: "var(--ld-border)",
          "border-strong": "var(--ld-border-strong)",
          overlay: "var(--ld-overlay)",
          success: "var(--ld-success)",
          warning: "var(--ld-warning)",
          error: "var(--ld-error)",
          critical: "var(--ld-critical)",
          high: "var(--ld-high)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1200px",
      },
      borderRadius: {
        md: "8px",
        lg: "8px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
        out: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
