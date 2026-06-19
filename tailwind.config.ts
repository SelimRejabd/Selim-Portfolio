import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "classic-cream": "#FDFBF7",
        "ink-black": "#1A1A1A",
        terracotta: "#C85A47",
        "sage-green": "#7C8A7E",
        "gold-leaf": "#C5A55E",
        charcoal: "#333333",
        "soft-white": "#FAFAF6",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "artistic-gradient":
          "linear-gradient(135deg, #FDFBF7 0%, #F0EBE3 100%)",
        "dark-gradient": "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
        "gold-texture":
          "linear-gradient(135deg, #C5A55E 0%, #A68A3E 50%, #C5A55E 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
