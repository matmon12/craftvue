import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        'components/Button/index': fileURLToPath(
          new URL('./src/components/Button/index.ts', import.meta.url),
        ),
        'components/Badge/index': fileURLToPath(
          new URL('./src/components/Badge/index.ts', import.meta.url),
        ),
        'components/Icon/index': fileURLToPath(
          new URL('./src/components/Icon/index.ts', import.meta.url),
        ),
        'components/Input/index': fileURLToPath(
          new URL('./src/components/Input/index.ts', import.meta.url),
        ),
        'components/FormItem/index': fileURLToPath(
          new URL('./src/components/FormItem/index.ts', import.meta.url),
        ),
        'components/Tabs/index': fileURLToPath(
          new URL('./src/components/Tabs/index.ts', import.meta.url),
        ),
      },
      name: 'CraftVue',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'mjs' : 'cjs'
        return entryName === 'index' ? `index.${ext}` : `${entryName}.${ext}`
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.names && assetInfo.names[0] === 'craftvue.css') {
            return 'craftvue.css'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/mixins.scss" as *;`,
      },
    },
  },
})
