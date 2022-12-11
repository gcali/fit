import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const vuePugPlugin = require('vue-pug-plugin');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      preprocessOptions: {
        plugins: [
          vuePugPlugin
        ]
      }
    }
  })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "./src/styles/_variables.scss";
          `
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
