import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImages: {},

      colors: {
        primary: {
          50: "#0A2640",
          100: "#65E4A3",
          200: "#0DBBFC",
        },
        secondary: {
          50: "#8FB6D5",
          100: "#777777",
          200: "#1C3D5B",
          300: "#95ABBC",
        },
      },

      fontFamily: {
        primary: ["var(--font-manrope)", "san-serif"],
      },

      borderRadius: {
        hero: "0% 100% 0% 100% / 46% 0% 100% 54%",
      },
    },
  },
  plugins: [],
};
export default config;
