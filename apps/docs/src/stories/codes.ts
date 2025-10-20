const configCodeTexts = {
  download: `
# Using npm
npm install craftvue

# Using yarn
yarn add craftvue

# Using pnpm
pnpm add craftvue
`,
  globalReg: `
    import { CButton } from "craftvue";

    const app = createApp(App);
    app.component("CButton", CButton);
  `,
  basicUsage: `
    <template>
      <CButton label="Кнопка">
        <CBadge value="12" />
      </CButton>
    </template>
    <script setup>
      import { CButton, CBadge } from "craftvue";
      // или импорт по отдельности
      import { CButton } from "craftvue/button";
      import { CBadge } from "craftvue/badge";
    </script>
  `,
  autoImport: `
    // vite.config.ts
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import Components from 'unplugin-vue-components/vite'
    import { CraftVueResolver } from 'craftvue'

    export default defineConfig({
      plugins: [
        vue(),
        Components({
          resolvers: [CraftVueResolver()],
        }),
      ],
    })
  `,
  styles: `
    // main.ts
    import 'craftvue/style'
  `,
  iconsDownload: `
# Using npm
npm install @craftvue/icons

# Using yarn
yarn add @craftvue/icons

# Using pnpm
pnpm add @craftvue/icons
  `,
  iconsImport: `
    <template>
      <SearchIcon/>
      <CloseIcon/>
    </template>
    <script setup>
      import { SearchIcon, CloseIcon } from '@craftvue/icons'
      // импорт по отдельности
      import { SearchIcon } from '@craftvue/icons/search'
      import { CloseIcon } from '@craftvue/icons/close'
    </script>
  `,
  themingFont: `
    <style>
      :root{
        --font-family-base: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
      }
    </style>
  `,
  themingFontSetup: `
    <style>
      @font-face {
        font-family: 'Montserrat';
        src: url('../fonts/Montserrat-VariableFont_wght\ .woff2') format('woff2-variations');
        font-weight: 100 900;
        font-display: swap;
      }
    </style>
  `,
  themingColorBasic: `
    <style>
      :root {
        --main-color: var(--white);
        --ground-back: var(--neutral-900);
        --prime-color: #bea87b;
        --prime-color-light: color-mix(in srgb, var(--prime-color) 100%, #fff 30%);
        --prime-color-dark: color-mix(in srgb, var(--prime-color) 90%, #000 100%);
        --secondary-back: var(--neutral-800);
        --secondary-text-color: var(--zinc-400);
        --invalid-color: var(--red-400);
      }
    </style>
  `,
  themingColorComponent: `
    <style>
      :root {
        --badge-primary-back: var(--prime-color);
        --badge-primary-color: var(--black);
        --badge-secondary-back: var(--secondary-back);
        --badge-secondary-color: var(--white);
        --badge-contrast-back: var(--prime-color-dark);
        --badge-contrast-color: var(--white);
        --badge-outline-color: var(--ground-back);
      }
    </style>
  `,
  themingColorPalette: `
    <style>
      :root {
        --slate-50: #f8fafc;
      }

      // использование
      color: var(--slate-50);
    </style>
  `,
  themingCssProperties: `
    <style>
      :root {
        --border-radius-none: 0;
        --border-radius-xs: 2px;
        --border-radius-sm: 4px;
        --border-radius-md: 6px;
        --border-radius-lg: 8px;
        --border-radius-xl: 12px;
        --border-radius-2xl: 15px;
        --border-radius-full: 9999px;

        --z-index-1000: 1000;
        --z-index-1100: 1100;
      }
    </style>
  `,
}
export default configCodeTexts
