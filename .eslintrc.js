module.exports = {
  // 以此文件为准 不往上查找 eslint 配置文件
  root: true,
  parser: "@typescript-eslint/parser",
  // 环境
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  globals: {
    process: "writable",
    __dirname: "readonly",
  },
  // 继承插件特性
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  // 解析选项
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  // 共享配置
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      flowVersion: "0.53", // Flow version
    },
  },
  // 插件
  plugins: ["prettier", "react", "@typescript-eslint"],
  // 检查规则
  rules: {
    "prettier/prettier": [
      "error",
      { arrowParens: "avoid", singleQuote: false },
    ],
    "react/prop-types": 0,
  },
  // 过滤文件
  ignorePatterns: ["dist", "node_modules", "pnpm-lock", "env"],
};
