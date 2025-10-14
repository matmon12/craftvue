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
  colorPrimary: '#bea87b',
  colorSecondary: '#bea87b',

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#000000',

  // UI
  appBg: '#171717',
  appContentBg: '#171717',
  appPreviewBg: '#0e0e0e',
  appBorderColor: '#3f3f46',
  appBorderRadius: 6,

  // Toolbar default and active colors
  barTextColor: '#a1a1aa',
  barSelectedColor: '#bea87b',
  barHoverColor: '#bea87b',
  barBg: '#171717',

  // Form colors
  inputBg: '#262626',
  inputBorder: 'transparent',
  inputTextColor: '#ffffff',
  inputBorderRadius: 6,

  buttonBg: '#262626',
  buttonBorder: 'transparent',

  booleanBg: '#262626',
  booleanSelectedBg: '#bea87b',
})
