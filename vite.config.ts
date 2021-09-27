import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from "vite-plugin-style-import"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //  配置element-plus
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            name = name.slice(3);
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: name => {
            return `element-plus/lib/${name}`;
          }
        }
      ]
    })
  ],
  base: './', // 打包路径
  resolve: {
    // 重命名路径
    alias: {
      '@':'/src/',
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";`
      }
    }
  },
  server: {
    port: 3000, // 端口
    open: true, // 自动打开浏览器
    host: '0.0.0.0'
  }
})
