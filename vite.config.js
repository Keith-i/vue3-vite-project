import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: './',
  build: {
    assetsDir: './themes/vue',
    outDir: 'dist'
  },
  optimizeDeps: {
    exclude: ["jsuites"],
  },
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/global.scss";',
      },
    },
  },
  server: {
    port: 9590,
    proxy: {
      "/offiac": {
        target: "http://192.168.0.201/mfcard/index.php",
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/offiac/, '')
      },
    },
  },
});
