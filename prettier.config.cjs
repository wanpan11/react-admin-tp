module.exports = {
  importOrder: ["^(react|react-dom)$", "^([a-z]|@[a-z])", "", "^&src", ".*"],
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@ianvs/prettier-plugin-sort-imports"),
  ],
};
