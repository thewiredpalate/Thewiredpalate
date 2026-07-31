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
        ink: "#14110F",
        paper: "#F7F3EC",
        palate: {
          food: "#D89B3C",
          lifestyle: "#B98A8F",
          tech: "#3C5A73",
        },
      },
      fontFamily: {
        hero: ["var(--font-hero)"],
        script: ["var(--font-script)"],
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
