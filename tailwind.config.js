// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}", // por si usas "pages/" además de "app/"
    "./node_modules/@heroui/react/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "var(--bg)",
          text: "var(--fg)",
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          blush: "var(--blush)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
