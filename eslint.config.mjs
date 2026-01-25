import antfu from "@antfu/eslint-config";
import tailwind from "eslint-plugin-tailwindcss";

export default antfu(
  {
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: "prettier",
    },
    react: true,
    ignores: ["**/*.md"],
    typescript: {
      tsconfigPath: "tsconfig.json",
    },
    globals: {
      process: true,
    },
    stylistic: {
      quotes: "double", // or 'single'
      semi: true,
    },
    rules: {
      "no-console": "warn",
      "ts/no-namespace": 0,
      "ts/no-unsafe-call": 0,
      "ts/no-unsafe-return": 0,
      "ts/no-unsafe-argument": 0,
      "ts/no-misused-promises": 0,
      "ts/no-floating-promises": 0,
      "ts/no-unsafe-assignment": 0,
      "ts/no-unsafe-member-access": 0,
      "ts/strict-boolean-expressions": 0,
      "ts/switch-exhaustiveness-check": 0,
      "react-hooks-extra/no-direct-set-state-in-use-effect": 0,
      "n/prefer-global/process": 0, // Allow process in browser context
    },
  },
  ...tailwind.configs["flat/recommended"],
  {
    rules: {
      "tailwindcss/no-custom-classname": ["off"],
    },
  },
);
