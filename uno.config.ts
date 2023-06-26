// uno.config.ts
import { defineConfig, presetUno, presetIcons } from "unocss";
import presetAttributify from "@unocss/preset-attributify";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
    }),
  ],
});
