import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        morocco: {
          dark: "#1A1613",
          surface: "#241F1B",
          saffron: "#D48C46",
          sand: "#F9F6F0",
          canvas: "#FFFFFF",
          mint: "#2E4A3E"
        }
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        serif: ["var(--font-cormorant)"]
      },
      letterSpacing: {
        museum: "0.32em"
      },
      boxShadow: {
        gold: "0 24px 70px -24px rgba(212, 140, 70, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
