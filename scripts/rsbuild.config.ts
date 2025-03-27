import { defineConfig } from "@rsbuild/core";

import getBaseConfig from "./rsbuild.config.base";

export default defineConfig(async env => {
  const baseConfig = await getBaseConfig();

  if (env.envMode === "development") {
    baseConfig.output!.filename!.css = "[name].css";
  }

  return baseConfig;
});
