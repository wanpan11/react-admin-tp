const plugins = ["@babel/plugin-transform-runtime", "babel-plugin-react-compiler"];

if (process.env.NODE_ENV === "development") {
  plugins.push("react-refresh/babel");
}

export default {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 5%, not dead",
        useBuiltIns: "usage",
        corejs: "3.30.2",
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
  ],
  plugins,
};
