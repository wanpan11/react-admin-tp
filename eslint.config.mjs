import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const baseConfig = {
  ignores: ["dist/**"],
  plugins: {
    react: reactPlugin,
    "react-hooks": reactHooksPlugin,
    prettier: prettierPlugin,
  },
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
    globals: {
      React: "readonly",
      document: "readonly",
      window: "readonly",
    },
  },
  settings: { react: { version: "detect" } },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    ...reactHooksPlugin.configs.recommended.rules,
    "prettier/prettier": "error",
  },
};

/** @type {import('@eslint/js').FlatConfig[]} */
export default [
  { ...baseConfig, files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    ...baseConfig,
    files: ["**/*.{ts,tsx}"],
    plugins: { ...baseConfig.plugins, "@typescript-eslint": tseslint },
    languageOptions: {
      ...baseConfig.languageOptions,
      parser: tsParser,
      parserOptions: {
        ...baseConfig.languageOptions.parserOptions,
        project: "./tsconfig.json",
      },
    },
    rules: {
      ...baseConfig.rules,
      ...tseslint.configs["recommended"].rules,
      "no-redeclare": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unused-expressions": 0,
    },
  },
];
