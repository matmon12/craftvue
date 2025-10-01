import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
// import checker from 'vite-plugin-checker'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        dts: './auto-imports.d.ts',
        vueTemplate: true,
      }),
      // checker({
      //   vueTsc: true
      // }),
    ],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        'craftvue-dev': fileURLToPath(new URL('../../packages/craftvue/src', import.meta.url)),
        'icons-dev': fileURLToPath(new URL('../../packages/icons/src', import.meta.url)),
        '@': fileURLToPath(new URL('../../packages/craftvue/src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/mixins.scss" as *;`,
        },
      },
    },
  }
})
