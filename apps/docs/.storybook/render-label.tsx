import React from 'react'

import { BookmarkIcon } from './components/icons/BookmarkIcon'
import { ComponentsIcon } from './components/icons/ComponentsIcon'
import { EyeIcon } from './components/icons/EyeIcon'
import { FileIcon } from './components/icons/FileIcon'
import { FolderIcon } from './components/icons/FolderIcon'
import { HexagonsIcon } from './components/icons/HexagonsIcon'
import { HomeIcon } from './components/icons/HomeIcon'
import { PaletteIcon } from './components/icons/PaletteIcon'

const ICONS_MAP = {
  'Getting Started': <HomeIcon />,
  Icons: <EyeIcon />,
  Components: <HexagonsIcon />,
  Theming: <PaletteIcon />,
  Changelog: <FileIcon />,
}

const renderIcon = (item) => {
  const { type, name, parent } = item

  switch (type) {
    case 'docs': {
      return ICONS_MAP[name] || <FileIcon />
    }
    case 'component': {
      if (parent && parent.includes('components')) {
        return <FolderIcon />
      }

      return <FolderIcon />
    }
    case 'story': {
      return <BookmarkIcon />
    }
    case 'group': {
      return <ComponentsIcon/>
    }
    default:
      return null
  }
}

export const renderLabel = (item) => (
  <span className="item-label">
    {renderIcon(item)}
    <span>{item.name}</span>
  </span>
)
