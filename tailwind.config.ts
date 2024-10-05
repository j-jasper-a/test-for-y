import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: { white: "#f1f1f1", gray: "#b3b3b3" },
        background: { 1: "#110606", 2: "#2b2828", 3: "#443e3e" },
        accent: "#ca323d",
      },
      screens: {
        sm: "768px",
        md: "1280px",
        lg: "1440px",
        xl: "1660px",
      },
    },
  },
  plugins: [],
};
export default config;
