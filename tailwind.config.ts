import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        // rohantaneja.tech color scheme
        jet: "#2a2a2a",
        onyx: "#1f1f1f",
        "eerie-black-1": "#181818",
        "eerie-black-2": "#151515",
        "smoky-black": "#121212",
        "white-1": "#e6f1ff",
        "white-2": "#ccd6f6",
        "orange-yellow-crayola": "#00B0FF",
        "vegas-gold": "#40C4FF",
        "light-gray": "#a8b2d1",
        "light-gray-70": "rgba(168, 178, 209, 0.7)",
        "bittersweet-shimmer": "#ff6b6b",
        // Additional colors from theme
        accent: "#00B0FF",
        "accent-light": "#40C4FF",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
      },
    },
  },
  plugins: [],
} satisfies Config;
