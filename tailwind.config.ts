import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#8098FF",
          500: "#4F6BFF",
          600: "#3D57E8",
          700: "#3145BC",
          800: "#293A96",
          900: "#243379",
        },
        accent: { DEFAULT: "#6C63FF", soft: "#EEEDFF" },
        surface: { DEFAULT: "#FFFFFF", muted: "#F8FAFF", sunken: "#F1F5FF" },
        ink: { DEFAULT: "#111827", muted: "#6B7280", faint: "#9CA3AF" },
        hairline: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.35rem, 3.6vw, 3.75rem)", { lineHeight: "0.98", letterSpacing: "-0.03em", fontWeight: "900" }],
        "display-lg": ["clamp(2.1rem, 3.6vw, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-md": ["clamp(1.6rem, 2.4vw, 2.1rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.18em", fontWeight: "700" }],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17,24,39,0.04), 0 8px 24px -12px rgba(17,24,39,0.10)",
        card: "0 1px 3px rgba(17,24,39,0.04), 0 14px 40px -20px rgba(31,45,90,0.18)",
        lift: "0 20px 60px -24px rgba(79,107,255,0.35), 0 4px 12px rgba(17,24,39,0.05)",
        float: "0 18px 48px -18px rgba(31,45,90,0.24)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.7), 0 12px 40px -16px rgba(31,45,90,0.22)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #4F6BFF 0%, #6C63FF 55%, #8098FF 100%)",
        "mesh-soft":
          "radial-gradient(60% 60% at 15% 10%, rgba(79,107,255,0.12) 0%, transparent 60%), radial-gradient(50% 50% at 85% 0%, rgba(108,99,255,0.12) 0%, transparent 60%)",
      },
      keyframes: {
        marquee: { from: { transform: "translate3d(0,0,0)" }, to: { transform: "translate3d(-50%,0,0)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        "floaty-slow": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-22px)" } },
        "pulse-ring": { "0%": { transform: "scale(0.9)", opacity: "0.6" }, "70%": { transform: "scale(1.6)", opacity: "0" }, "100%": { opacity: "0" } },
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "floaty-slow": "floaty-slow 9s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "accordion-down": "accordion-down 0.28s cubic-bezier(0.32,0.72,0,1)",
        "accordion-up": "accordion-up 0.28s cubic-bezier(0.32,0.72,0,1)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
