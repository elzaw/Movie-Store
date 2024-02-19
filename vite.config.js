import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { postcss } from "tailwindcss";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  "files.associations": {
    "*.css": "tailwindcss",
  },
});
