import {default as react} from "@vitejs/plugin-react";
import {defineConfig} from "vite";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@mdx-js/react"],
    exclude: ["sb-vite"],
  },
});
