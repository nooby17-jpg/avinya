import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bg: "#ffffff",
      text: "#050B18",
      subtext: "#212121",
      highlight: "#E1062C",
      accent: "#001B50",

      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      heading: ["var(--font-heading)"],
      body: ["var(--font-body)"],
    },
  },
  plugins: [],
};

export default config;
