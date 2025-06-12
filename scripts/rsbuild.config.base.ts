import path from "path";
import { loadEnv, RsbuildConfig } from "@rsbuild/core";
import { pluginLess } from "@rsbuild/plugin-less";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

import pak from "../package.json";

const rootDir = path.resolve(__dirname, "../");
const sourceDir = path.resolve(rootDir, "./src");
const envDir = path.resolve(rootDir, "./env");

const getBaseConfig = async () => {
  const { entry, title, publicPath, outDir, devServer } = await import(`./${process.env.NODE_ENV}.config.ts`);

  const config: RsbuildConfig = {
    plugins: [pluginLess(), pluginReact()],
    source: {
      entry: { index: path.resolve(sourceDir, entry) },
      define: loadEnv({ cwd: envDir }).publicVars,
    },
    html: {
      title,
      template: path.resolve(rootDir, "./template/index.html"),
      favicon: path.resolve(rootDir, "./template/favicon.svg"),
      meta: { version: pak.version },
      tags:
        process.env.NODE_ENV === "development"
          ? [
              {
                tag: "script",
                append: false,
                attrs: { src: "https://cdn.jsdelivr.net/npm/react-scan/dist/auto.global.js" },
              },
            ]
          : undefined,
    },
    output: {
      assetPrefix: publicPath,
      cleanDistPath: true,
      distPath: { root: path.resolve(rootDir, outDir) },
      filename: { css: process.env.NODE_ENV === "production" ? "[name].[contenthash:8].css" : "[name].css" },
    },
    server: {
      port: devServer?.port,
      proxy: devServer?.proxy,
      host: devServer?.host,
      open: devServer?.open || true,
      compress: true,
      historyApiFallback: true,
    },
    tools: {
      rspack(config, { appendPlugins }) {
        if (process.env.RSDOCTOR === "true") {
          appendPlugins(new RsdoctorRspackPlugin({}));
        }
        appendPlugins(new CompressionPlugin({}));
      },
    },
    resolve: {
      alias: { "&src": sourceDir },
    },
  };

  return config;
};

export default getBaseConfig;
