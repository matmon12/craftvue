<div align="center" fill="#ffffff">
  <img src="./public/Logo.svg" alt="CraftVue Logo" width="300" heiht="auto" />

  &nbsp;

  **Современная библиотека Vue.js компонентов для создания красивых интерфейсов**

  [![npm version](https://img.shields.io/npm/v/craftvue?color=42d392)](https://www.npmjs.com/package/craftvue)
  [![npm downloads](https://img.shields.io/npm/dm/craftvue?color=4cc71e)](https://www.npmjs.com/package/craftvue)
  [![GitHub license](https://img.shields.io/github/license/matmon12/craftvue?color=56BEB8)](https://github.com/matmon12/craftvue/blob/main/LICENSE)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?color=3178c6)](https://www.typescriptlang.org/)
  [![Vue 3](https://img.shields.io/badge/Vue-3.x-green?color=4fc08d)](https://vuejs.org/)

  [📚 Документация](https://matmon12.github.io/craftvue/) • [🎨 Storybook](https://matmon12.github.io/craftvue/) • [💾 npm](https://www.npmjs.com/package/craftvue)
</div>


## ✨ Особенности

- 🎨 **Современный дизайн** - красивые и функциональные компоненты
- 🛠 **TypeScript** - полная поддержка типов из коробки
- 🎯 **Tree Shaking** - импортируйте только нужные компоненты
- 📱 **Responsive** - адаптивность для всех устройств
- 🌗 **Темы** - поддержка светлой и темной темы
- ⚡ **Vue 3 Composition API** - современный подход к разработке
- 📦 **Легкий вес** - оптимизированная сборка
- 🔧 **Настраиваемый** - CSS переменные для кастомизации

## 📦 Установка

### NPM

```bash
npm install craftvue
```

### PNPM

```bash
pnpm add craftvue
```

### Yarn

```bash
yarn add craftvue
```

## 🚀Быстрый старт

### 1. Импортируйте стили

```typescript
// main.ts
import 'craftvue/style'
```

### 2. Используйте компоненты

#### Глобальная регистрация

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import CraftVue from 'craftvue'

const app = createApp(App)
app.use(CraftVue)
app.mount('#app')
```

#### Селективный импорт (рекомендуется)

```vue
<template>
  <CButton variant="primary" @click="handleClick">
    <HomeIcon />
    Главная
  </CButton>
</template>

<script setup lang="ts">
import { CButton } from 'craftvue'
import { HomeIcon } from '@craftvue/icons'

const handleClick = () => {
  console.log('Кнопка нажата')
}
</script>
```

## 🎯 Примеры использования

### Кнопки

```vue
<template>
  <div class="buttons">
    <!-- Базовые варианты -->
    <CButton variant="primary">Основная</CButton>
    <CButton variant="secondary">Второстепенная</CButton>
    <CButton variant="outline">Контурная</CButton>

    <!-- С иконками -->
    <CButton variant="primary">
      <template #iconSlot>
        <AddIcon />
      </template>
      Добавить
    </CButton>

    <!-- Размеры -->
    <CButton size="sm">Маленькая</CButton>
    <CButton>Средняя</CButton>
    <CButton size="lg">Большая</CButton>
  </div>
</template>

<script setup lang="ts">
import { CButton } from 'craftvue'
import { AddIcon } from '@craftvue/icons'
</script>
```

### Формы

```vue
<template>
  <form @submit="onSubmit">
    <CFormItem for="email" label="Email" required>
      <CInput v-model="form.email" id="email" type="email" placeholder="your@email.com" required />
    </CFormItem>

    <CFormItem for="password" label="Пароль" required>
      <CInput v-model="form.password" id="password" type="password" required />
    </CFormItem>

    <CButton type="submit" variant="primary">Войти</CButton>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { CInput, CButton, CFormItem } from 'craftvue'

const form = reactive({
  email: '',
  password: '',
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  console.log('Форма отправлена', form)
}
</script>
```

## 📁 Структура монорепозитория

```
craftvue/
├── apps/
│   ├── docs/          # 📚 Storybook документация
│   └── playground/    # 🎮 Площадка для тестирования
├── packages/
│   ├── craftvue/      # 🎨 Основная библиотека компонентов
│   └── icons/         # 🎭 Библиотека иконок
├── scripts/
└── README.md
```

## 🎨 Доступные компоненты

| Компонент   | Описание                    | Статус |
| ----------- | --------------------------- | ------ |
| `CButton`   | Кнопки различных стилей     | ✅     |
| `CInput`    | Поля ввода                  | ✅     |
| `CBadge`    | Значки и метки              | ✅     |
| `CIcon`     | Иконки                      | ✅     |
| `CTabs`     | Вкладки                     | ✅     |
| `CTabList`  | Список вкладок              | ✅     |
| `CTab`      | Отдельная вкладка           | ✅     |
| `CFormItem` | Обертка для элементов формы | ✅     |

### 🎭 Иконки (@craftvue/icons)

Библиотека включает набор оптимизированных SVG иконок:

```vue
<script setup lang="ts">
import { HomeIcon, AddIcon, CloseIcon, SearchIcon } from '@craftvue/icons'
</script>

<template>
  <HomeIcon />
  <AddIcon />
  <CloseIcon />
  <SearchIcon />
</template>
```

## 🎨 Кастомизация

### CSS переменные

```css
:root {
  /* Основные цвета */
  --main-color: #ffffff;
  --prime-color: #bea87b;
  --secondary-back: #262626;
  --invalid-color: #f87171;

  /* Цвета комопнентов */
  --button-primary-filled-color: #ffffff;
  --button-primary-filled-back: var(--prime-color);
  --button-primary-filled-back-hover: color-mix(in srgb, var(--prime-color) 100%, #fff 10%);
}
```

### Темы

CraftVue поддерживает переключение между светлой и темной темами через CSS переменные:

```css
/* Темная тема (по умолчанию) */
:root[data-theme='dark'] {
  --main-color: #ffffff;
  --prime-color: #bea87b;
  --secondary-back: #262626;
  --invalid-color: #f87171;
}

/* Светлая тема */
:root {
  --main-color: #000000;
  --prime-color: #bea87b;
  --secondary-back: #374151;
  --invalid-color: #f87171;
}
```

## 🔧 Разработка

### Требования

- Node.js 18+
- pnpm 8+

### Установка зависимостей

```bash
pnpm install
```

### Запуск в режиме зарработки

```bash
# Запуск всех приложений
pnpm run dev:all

# Только библиотека компонентов
pnpm run dev:lib

# Только иконки
pnpm run dev:icons

# Storybook
pnpm run dev:docs
```

### Сборка

```bash
# Сборка всех пакетов
pnpm run build:all

# Только библиотека
pnpm run build:lib

# Только иконки
pnpm run build:icons
```

### Линтинг и проверка типов

```bash
# Проверка ESLint
pnpm run lint

# Проверка типов TypeScript
pnpm run type-check
```

## 📚 Документация

- **[Storybook](https://matmon12.github.io/craftvue/)** - интерактивная документация и примеры
- **[API Reference]** - подробное описание всех компонентов и их свойств

## 🤝 Участие в разработке

Мы приветствуем вклад в развитие CraftVue!

1. 🍴 Сделайте форк репозитория
2. 🌿 Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. 💾 Зафиксируйте изменения (`git commit -m 'feat: Add amazing feature'`)
4. 📤 Отправьте изменения (`git push origin feature/amazing-feature`)
5. 🔄 Создайте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. Подробнее в файле [LICENSE](LICENSE).

## 🙏 Благодарности

- [Vue.js](https://vuejs.org/) - прогрессивный JavaScript фреймворк
- [Vite](https://vitejs.dev/) - быстрый инструмент сборки
- [TypeScript](https://www.typescriptlang.org/) - типизированный JavaScript
- [Storybook](https://storybook.js.org/) - инструмент для разработки UI компонентов

---

<div align="center">

**Сделано с ❤️ для Vue.js сообщества**

[⭐ Поставьте звезду](https://github.com/matmon12/craftvue) • [🐛 Сообщить об ошибке](https://github.com/matmon12/craftvue/issues) • [💡 Предложить идею](https://github.com/matmon12/craftvue/discussions)

</div>
