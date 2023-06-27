/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,ts,js}"],
  theme: {
    extend: {
      colors: { primary: "#4096ff" },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
