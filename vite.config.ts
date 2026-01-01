import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
];

export default defineConfig({
  /* ============================
     ✅ REQUIRED for GitHub Pages
     Repo URL:
     https://xx.github.io/portfolio/
  ============================ */
  base: "/portfolio/",

  plugins,

  /* ============================
     Frontend root
  ============================ */
  root: path.resolve(import.meta.dirname, "client"),

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  envDir: path.resolve(import.meta.dirname),

  build: {
    /* ============================
       ⚠️ IMPORTANT for GH Pages
       dist must be at repo root
    ============================ */
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
