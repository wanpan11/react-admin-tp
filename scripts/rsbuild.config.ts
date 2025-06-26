import { defineConfig } from "@rsbuild/core";

import getBaseConfig from "./rsbuild.config.base";

export default defineConfig(async () => {
  const baseConfig = await getBaseConfig();

  return baseConfig;
});
