import path from "path";
import { RsbuildConfig } from "@rsbuild/core";
import { pluginLess } from "@rsbuild/plugin-less";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

import pak from "../package.json";

const rootDir = path.resolve(__dirname, "../");
const sourceDir = path.resolve(rootDir, "./src");

const getBaseConfig = async () => {
  const { entry, title, publicPath, outDir, devServer } = await import(`./${process.env.NODE_ENV}.config.ts`);

  const config: RsbuildConfig = {
    plugins: [pluginLess(), pluginReact()],
    source: {
      alias: { "&src": sourceDir },
      entry: { index: path.resolve(sourceDir, entry) },
      define: { "process.env": JSON.stringify({ ...process.env }) },
    },
    html: {
      title,
      template: path.resolve(rootDir, "./template/index.html"),
      favicon: path.resolve(rootDir, "./template/favicon.svg"),
      meta: { version: pak.version },
    },
    output: {
      assetPrefix: publicPath,
      cleanDistPath: true,
      distPath: { root: path.resolve(rootDir, outDir) },
      filename: { css: "[name].[contenthash:8].css" },
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
  };

  return config;
};

export default getBaseConfig;
