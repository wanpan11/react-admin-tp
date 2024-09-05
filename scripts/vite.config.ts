import path from "path";
import { defineConfig, UserConfig } from "vite";
import pak from "../package.json";

export default defineConfig(async ({ command, mode }) => {
  const { default: entryConfig } = await import(`./${mode}.config.js`);

  const config: UserConfig = {
    base: entryConfig.publicPath,
    root: path.resolve(__dirname, "../src/"),
    publicDir: path.resolve(__dirname, "../public/"),
    build: {
      outDir: path.resolve(__dirname, `../${entryConfig.outDir}`),
      emptyOutDir: true,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        /**
         * Ignore "use client" waning since we are not using SSR
         * @see {@link https://github.com/TanStack/query/pull/5161#issuecomment-1477389761 Preserve 'use client' directives TanStack/query#5161}
         */
        onwarn(warning, warn) {
          if (warning.code === "MODULE_LEVEL_DIRECTIVE" && warning.message.includes(`"use client"`)) {
            return;
          }
          warn(warning);
        },
      },
    },
    envDir: path.resolve(__dirname, "../env/"),
    resolve: {
      alias: {
        "~src": path.resolve(__dirname, "../src/"),
      },
    },
    define: {
      "import.meta.env.HTML_TITLE": JSON.stringify(entryConfig.title),
      "import.meta.env.BUILD_VERSION": JSON.stringify(`${pak.version}_${new Date().getTime()}`),
    },
  };

  if (command === "serve") {
    config.server = entryConfig.devServer;
    return config;
  } else {
    return config;
  }
});
