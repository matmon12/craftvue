# CraftVue

A modern Vue.js component library with beautiful, accessible components.

## Installation

```bash
npm install craftvue
# or
yarn add craftvue
# or
pnpm add craftvue
```

## Usage

### Import all components

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import CraftVue from 'craftvue'
import 'craftvue/style'

const app = createApp(App)

app.use(CraftVue).mount('#app')
```

### Import specific components

```typescript
import { CButton, CIcon } from 'craftvue'
// or
import { CButton } from 'craftvue/button'
import { CIcon } from 'craftvue/icon'
```

### Import styles

```typescript
import 'craftvue/style'
```

## Components

- **CButton** - Button component with multiple variants
- **CIcon** - Icon component
- **CBadge** - Badge component
- **CInput** - Input component
- **CFormItem** - Form item wrapper
- **CTabs** - Tabs component

## Requirements

- Vue 3.4+
- Node.js 20.19+ or 22.12+

## License

MIT
