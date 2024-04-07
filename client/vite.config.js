import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2022', // Or any later version supporting BigInt
    },
  },
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
});
