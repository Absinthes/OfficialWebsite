import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerVariantGroup,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  rules: [
    [
      /^truncate-(\d+)$/,
      ([, d]) => ({
        display: "-webkit-box",
        "text-overflow": "ellipsis",
        overflow: "hidden",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": d,
      }),
    ],
  ],
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerDirectives()],
});
