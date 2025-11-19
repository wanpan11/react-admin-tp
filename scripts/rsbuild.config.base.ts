import type { RsbuildConfig } from "@rsbuild/core";
import path from "node:path";
import { loadEnv } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginLess } from "@rsbuild/plugin-less";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

import pak from "../package.json";

const rootDir = path.resolve(__dirname, "../");
const sourceDir = path.resolve(rootDir, "./src");
const envDir = path.resolve(rootDir, "./env");
const now = new Date().toLocaleString();

async function getBaseConfig() {
  const { entry, title, publicPath, outDir, devServer } = await import(`./${process.env.NODE_ENV}.config.ts`);

  const config: RsbuildConfig = {
    plugins: [
      pluginBabel({
        babelLoaderOptions: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
      pluginLess(),
      pluginReact(),
    ],
    source: {
      entry: { index: path.resolve(sourceDir, entry) },
      define: loadEnv({ cwd: envDir }).publicVars,
    },
    html: {
      title,
      template: path.resolve(rootDir, "./template/index.html"),
      favicon: path.resolve(rootDir, "./template/favicon.svg"),
      meta: { version: `${pak.version}_${now}` },
      tags:
        process.env.NODE_ENV === "development"
          ? [
              // 国内 网速可能不太好 默认关闭
              // {
              //   tag: "script",
              //   append: false,
              //   attrs: { crossOrigin: "anonymous", src: "https://unpkg.com/react-scan/dist/auto.global.js" },
              // },
            ]
          : undefined,
    },
    output: {
      assetPrefix: publicPath,
      cleanDistPath: true,
      distPath: { root: path.resolve(rootDir, outDir) },
      sourceMap: process.env.NODE_ENV === "development",
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
}

export default getBaseConfig;
