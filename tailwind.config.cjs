/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{tsx,jsx,ts,js}"],
  theme: {
    extend: {
      colors: { primary: "#4096ff", dark_bg: "#141414", dark_border: "#303030" },
      boxShadow: {
        ch: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
};
