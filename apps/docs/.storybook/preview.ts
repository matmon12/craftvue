import type { Preview } from '@storybook/vue3-vite'
import { themes } from 'storybook/internal/theming'

import '../src/index.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#171717' },
        ligt: {
          name: 'Light',
          value: '#ffeabfff',
        },
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: ['Configuration', 'Design System', 'Components', '*'],
      },
      initialActive: 'Configuration',
      panelPosition: 'right',
    },
  },
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
}

export default preview
