import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

const uidevRoot = fileURLToPath(new URL('./packages/uidev-component-vue3', import.meta.url))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^uidev-component-vue3\/(.*)$/,
        replacement: `${uidevRoot}/src/$1`,
      },
      {
        find: 'uidev-component-vue3',
        replacement: `${uidevRoot}/src/index.ts`,
      },
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_PROXY_TARGET || 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{spec,test}.ts'],
  },
})
