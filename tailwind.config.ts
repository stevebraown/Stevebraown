import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-2": "rgb(var(--color-surface-2) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-2": "rgb(var(--color-primary-2) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        glass: "rgb(var(--color-glass) / <alpha-value>)"
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(255, 107, 53, 0.25)",
        soft: "0 20px 60px rgba(7, 12, 26, 0.55)"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(to right, rgba(255, 140, 66, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 140, 66, 0.08) 1px, transparent 1px)",
        "soft-radial": "radial-gradient(circle at top, rgba(255, 107, 53, 0.25), transparent 60%)"
      },
      maxWidth: {
        "screen-xl": "1200px"
      }
    }
  },
  plugins: []
} satisfies Config;
