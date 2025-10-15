import { addons, type State, type LeafEntry } from 'storybook/manager-api'
import craftTheme from './craftTheme'
import { renderLabel } from './render-label'
import {
  STORY_RENDERED,
  STORY_CHANGED,
  STORY_PREPARED,
  SELECT_STORY,
  SET_CURRENT_STORY,
} from '@storybook/core-events'

addons.register('TitleAddon', (api) => {
  const TITLE_PAGE = 'CraftVue'
  const CATEGORIES_ROOT = ['Components/', 'Design System/']
  const setTitle = () => {
    let title: string
    let name: string
    let storyData: LeafEntry | null = null

    try {
      storyData = api.getCurrentStoryData()
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
  }

  setTitle()
  api.on(STORY_CHANGED, () => {
    setTitle()
  })
  api.on(STORY_PREPARED, () => {
    setTitle()
  })
  api.on(SELECT_STORY, () => {
    setTitle()
  })
  api.on(SET_CURRENT_STORY, () => {
    setTitle()
  })
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
