import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "#ffae00",
        cyan: "#37a98f",
        "cyan-dark": "#2c6e69",
        gray: "#545454",
        "gray-light": "#c0c0c0",
        black: "#000000",
        white: "#fbf6ed",
      },
      scrollBehavior: ["smooth"],
    },
    fontFamily: {
      body: ["Quicksand"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
