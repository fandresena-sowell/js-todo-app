import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    tailwindcss(),
    eslint({
      include: ["src//*.js"],
      exclude: ["node_modules/", "dist/**"],
      overrideConfig: {}, // You can add any additional config here
      overrideConfigFile: "eslint.config.js", // Point to your flat config file
    }),
  ],
})
