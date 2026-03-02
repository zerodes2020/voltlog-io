import { defineConfig } from "tsup";

export default defineConfig([
  // Node.js entry — shims enabled so __dirname/__filename work in ESM
  {
    entry: { index: "src/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    outDir: "dist",
    target: "node18",
    shims: true,
  },
  // Browser-safe entry — no Node.js shims, no platform-specific built-ins
  {
    entry: { client: "src/client.ts" },
    format: ["cjs", "esm"],
    dts: true,
    splitting: true,
    sourcemap: false,
    outDir: "dist",
    platform: "browser",
    shims: false,
  },
]);
