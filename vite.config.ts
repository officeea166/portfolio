import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  vitePluginManusRuntime(),
];

export default defineConfig({
  /* ============================
     🔴 CHANGE #1 (IMPORTANT)
     This MUST match your repo name
     Example repo URL:
     https://username.github.io/portfolio/
  ============================ */
  base: "/portfolio/",

  plugins,

  /* ============================
     🔴 CHANGE #2
     Tell Vite that frontend lives in /client
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
       🔴 CHANGE #3 (CRITICAL)
       outDir MUST be RELATIVE
       Because root = client
       Output becomes: client/dist
    ============================ */
    outDir: "dist",
    emptyOutDir: true,
  },

  // This section is ONLY for local dev
  // GitHub Pages ignores it
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
