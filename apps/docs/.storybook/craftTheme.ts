import { create } from 'storybook/theming'

export default create({
  base: 'dark',
  brandTitle: 'CraftVue',
  brandUrl: '/',
  brandImage: './logo.svg',
  brandTarget: '_self',

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',

  // Цвета
  colorPrimary: '#41b883',
  colorSecondary: '#a1a1aa',

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#000000',

  // UI
  appBg: '#1d2924',
  // appContentBg: '#171717',
  appBorderColor: '#404040',
  appBorderRadius: 6,

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#41b883',
  barBg: '#27272a',

  // Form colors
  inputBg: '#2a2a2a',
  inputBorder: '#333333',
  inputTextColor: '#ffffff',
  inputBorderRadius: 4,
})
