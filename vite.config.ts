import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import Unocss from "unocss/vite";
import { join, resolve } from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      configFile: resolve(__dirname, "uno.config.ts"),
    }),
    createSvgIconsPlugin({
      iconDirs: [join(__dirname, "./src/assets/svg")],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~/": resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
    host: "0.0.0.0",
  },
});
