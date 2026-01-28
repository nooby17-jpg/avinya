/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050B18",
        bglight: "#f9faff",
        text: "#010101",
        subtext: "#050B18",
        highlight: "#E1062C",
        accent: "#001B50",
      },
      fontFamily: {
        primary: ["var(--font-heading)"],
      },
    },
  },
  plugins: [],
};
