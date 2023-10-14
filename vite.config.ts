import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    open: true,
    host: true,
    fs: {
      strict: true,
    },
    proxy: {
      "^/api": {
        target: "http://192.168.16.23:31053", // 填写联调地址
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""), // 如果后端真实接口不存在 api 前缀，则打开注释
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
