import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: false,
  react: true,
  ignores: ["README.md"],
  typescript: {
    tsconfigPath: "tsconfig.json",
  },
  globals: {
    process: true,
  },
  stylistic: {
    quotes: "double", // or 'double'
    semi: true,
  },
  rules: {
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
});
