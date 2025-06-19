export default {
  printWidth: 170,
  singleQuote: false,
  arrowParens: "avoid",
  importOrder: ["^(react|react-dom)$", "^([a-z]|@[a-z])", "", "^&src", ".*"],
  plugins: ["prettier-plugin-tailwindcss", "@ianvs/prettier-plugin-sort-imports"],
};
