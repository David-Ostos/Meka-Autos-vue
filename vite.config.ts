import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  css: {
    preprocessorOptions:{
      scss: {
        additionalData: `
          @import "./src/style/_variables";
        `
      }
    },
    devSourcemap: true,
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      'views': fileURLToPath(new URL('./src/views', import.meta.url)),
      'components': fileURLToPath(new URL('./src/views/components', import.meta.url)),
      'img': fileURLToPath(new URL('./src/img', import.meta.url)),
    }
  }
})
