import path from "path";
import { defineConfig, UserConfig } from "vite";

export default defineConfig(async ({ command, mode }) => {
  const { default: entryConfig } = await import(`./${mode}.config.js`);

  const config: UserConfig = {
    root: path.resolve(__dirname, "../src/"),
    base: entryConfig.publicPath,
    build: {
      outDir: path.resolve(__dirname, `../${entryConfig.outDir}`),
      emptyOutDir: true,
    },
    envDir: path.resolve(__dirname, "../env/"),
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "../src/"),
      },
    },
    define: {
      "import.meta.env.HTML_TITLE": JSON.stringify(entryConfig.title),
    },
  };

  if (command === "serve") {
    config.server = entryConfig.devServer;
    return config;
  } else {
    return config;
  }
});
