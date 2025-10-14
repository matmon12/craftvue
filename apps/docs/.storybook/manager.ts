import { addons, type State } from 'storybook/manager-api'
import craftTheme from './craftTheme'
import { renderLabel } from './render-label'

addons.setConfig({
  theme: craftTheme,
  
  sidebar: {
    renderLabel,
  },

  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: false },
  },

  layoutCustomisations: {
    showToolbar(state: State, defaultValue: boolean) {
      if(state.viewMode === 'docs') {
        return false
      }

      return defaultValue
    }
  }
})
