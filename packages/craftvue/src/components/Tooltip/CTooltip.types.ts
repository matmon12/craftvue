import { VNode, ComponentPublicInstance } from 'vue'

export interface TooltipProps {
  content?: string
  show?: boolean
  rootEl?: HTMLElement | ComponentPublicInstance | null
  placement?: 'bottom' | 'top' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  trigger?: 'hover' | 'click'
  offset?: number
  boundaryPadding?: number
  zIndex?: number
  maxWidth?: number | string
  teleportTo?: string | HTMLElement | false
  autoHide?: boolean
  showDelay?: number
  hideDelay?: number
  durationEnter?: number
  durationLeave?: number
}

export interface TooltipSlots {
  default(): VNode[]
  content(): VNode[]
  trigger?(scope: { isOpen: boolean; open: () => void; close: () => void }): VNode[]
}

export interface TooltipEmits {
  hide: []
  show: []
}
