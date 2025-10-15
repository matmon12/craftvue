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
      <CButton label="Кнопка" />
    </template>
    <script setup>
      import { CButton } from "craftvue";
    </script>
  `,
  selectiveImport: `
    <template>
      <CButton label="Кнопка">
        <CBadge value="1" />
      </CButton>
    </template>
    <script setup>
      import { CButton } from "craftvue/button";
      import { CBadge } from "craftvue/badge";
    </script>
  `,
  autoImport: `
    // vite.config.ts
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import AutoImport from 'unplugin-auto-import/vite'
    import Components from 'unplugin-vue-components/vite'
    import { CraftVueResolver } from 'craftvue'

    export default defineConfig({
      plugins: [
        vue(),
        AutoImport({
          resolvers: [CraftVueResolver()],
        }),
        Components({
          resolvers: [CraftVueResolver()],
        }),
      ],
    })
  `,
  autoImportUsage: `
    <template>
      <!-- Компоненты доступны без импорта -->
      <CButton label="Кнопка" />
      <CInput placeholder="Введите текст" />
      <CBadge value="5" />
    </template>
    <script setup>
      // Импорты не нужны!
      // Компоненты автоматически импортируются
    </script>
  `,
}
export default configCodeTexts

// import { Meta, Title, Subtitle } from '@storybook/addon-docs/blocks'
// import { CustomSource } from 'docs/components/CustomSource/CustomSource'
// import configCodeTexts from './codes'

// <Meta title="Getting Started" />

// <Title>Установка CraftVue</Title>

// <Subtitle>Настройка</Subtitle>

// &nbsp;

// ## Скачивание

// <p>Библиотеку можно скачать через любой пакетный менеджер</p>

// <CustomSource code={configCodeTexts.download} actions={['copy']} language="bash" />

// ### Дополнительные зависимости для автоимпорта

// <p>Для использования автоимпорта установите дополнительные плагины:</p>

// ```bash
// # Для автоимпорта
// npm install -D unplugin-auto-import unplugin-vue-components

// # Или с yarn
// yarn add -D unplugin-auto-import unplugin-vue-components

// # Или с pnpm
// pnpm add -D unplugin-auto-import unplugin-vue-components
// ```

// &nbsp;

// ## Подключение

// ### Базовое использование

// <p>
//   Для использования компонентов в проекте необходимо их импортировать из подключенной библиотеки
//   `craftvue`
// </p>

// <CustomSource code={configCodeTexts.basicUsage} actions={['copy']} />

// ### Подкючение по-отдельности

// <p>
//   Также компоненты можно импортировать отдельно по мере необходимости, для контроля размера
//   подключаемых пакетов.
// </p>

// <CustomSource code={configCodeTexts.selectiveImport} actions={['copy']} />

// ### Глобальная регистрация

// <p>
//   Компоненты можно также регистрировать глобально в `main.ts(js)` и использовать в проекте без
//   дополнительного импорта.
// </p>

// <CustomSource
//   code={configCodeTexts.globalReg}
//   actions={['copy']}
//   parser="babel"
//   language="typescript"
// />

// ### Автоимпорт (рекомендуется)

// <p>
//   Для максимального удобства разработки рекомендуется настроить автоимпорт компонентов. Это позволит
//   использовать компоненты без явного импорта в каждом файле.
// </p>

// #### Настройка автоимпорта

// <p>Установите необходимые плагины и настройте Vite:</p>

// <CustomSource
//   code={configCodeTexts.autoImport}
//   actions={['copy']}
//   parser="babel"
//   language="typescript"
// />

// #### Использование с автоимпортом

// <p>После настройки автоимпорта компоненты становятся доступными глобально:</p>

// <CustomSource
//   code={configCodeTexts.autoImportUsage}
//   actions={['copy']}
//   parser="babel"
//   language="vue"
// />

// #### Преимущества автоимпорта

// - **Удобство разработки** - не нужно импортировать каждый компонент
// - **Автодополнение** - IDE автоматически подсказывает доступные компоненты
// - **Tree-shaking** - неиспользуемые компоненты не попадают в сборку
// - **Типизация** - полная поддержка TypeScript

// <style>
//   {`

//   `}
// </style>
