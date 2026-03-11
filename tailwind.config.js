/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#0F172A", // brand-neutral-900
        light: "#F8FAFC", // brand-neutral-50
        primary: "#0EA5E9", // brand-primary
        primaryDark: "#0284C7", // brand-primary-dark
        secondary: "#6366F1", // brand-secondary
        secondaryDark: "#4F46E5", // brand-secondary-dark

        // Brand Palette
        "brand-primary": "#0EA5E9",
        "brand-primary-dark": "#0284C7",
        "brand-primary-light": "#38BDF8",
        "brand-secondary": "#6366F1",
        "brand-secondary-dark": "#4F46E5",
        "brand-secondary-light": "#818CF8",

        // Neutrals
        "brand-neutral-50": "#F8FAFC",
        "brand-neutral-100": "#F1F5F9",
        "brand-neutral-200": "#E2E8F0",
        "brand-neutral-300": "#CBD5E1",
        "brand-neutral-400": "#94A3B8",
        "brand-neutral-500": "#64748B",
        "brand-neutral-600": "#475569",
        "brand-neutral-700": "#334155",
        "brand-neutral-800": "#1E293B",
        "brand-neutral-900": "#0F172A",

        // Semantic
        "brand-success": "#10B981",
        "brand-warning": "#F59E0B",
        "brand-error": "#EF4444",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",

      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
}
