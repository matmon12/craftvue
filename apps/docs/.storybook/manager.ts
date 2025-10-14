import { addons, type State, type LeafEntry } from 'storybook/manager-api'
import craftTheme from './craftTheme'
import { renderLabel } from './render-label'
import { STORY_RENDERED } from '@storybook/core-events'

addons.register('TitleAddon', (api) => {
  const TITLE_PAGE = 'CraftVue'
  const CATEGORIES_ROOT = ['Components/', 'Design System/']
  let interval: NodeJS.Timeout | undefined = undefined
  const setTitle = () => {
    clearTimeout(interval)

    let title: string
    let name: string
    let storyData: LeafEntry | null = null

    try {
      storyData = api.getCurrentStoryData()
      console.log(storyData.title)
    } catch (e) {
      console.error(e)
    }

    if (!storyData) {
      title = TITLE_PAGE
    } else {
      if (storyData.type === 'docs' && storyData.depth === 1) {
        name = storyData.title
      } else {
        name = storyData.title
        CATEGORIES_ROOT.forEach((category) => {
          name = name.replace(category, '')
        })
        name = name.includes('/') ? name.split('/')[0] : name
      }
      title = `${name} ⋅ ${TITLE_PAGE}`
    }

    if (document.title !== title) {
      document.title = title
    }

    interval = setTimeout(setTitle, 100)
  }

  setTitle()
  api.on(STORY_RENDERED, () => {
    setTitle()
  })
})

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
      if (state.viewMode === 'docs') {
        return false
      }

      return defaultValue
    },
  },
})
