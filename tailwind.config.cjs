/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,ts,js}"],
  theme: {
    extend: {
      colors: { primary: "#4096ff" },
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
