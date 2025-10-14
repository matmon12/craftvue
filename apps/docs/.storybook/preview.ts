import type { Preview } from '@storybook/vue3-vite'
import craftTheme from './craftTheme'
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
      theme: craftTheme,
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#0e0e0e' },
        ligt: {
          name: 'Light',
          value: '#ffeabfff',
        },
      },
      defaultValue: 'dark'
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
      navSize: 240,
    },
  },
}

export default preview
