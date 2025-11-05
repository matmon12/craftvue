import { VNode } from 'vue'

export interface DropdownProps {
  show?: boolean
  rootEl: HTMLElement | null
  placement?: 'bottom' | 'top'
  align?: 'start' | 'center' | 'end'
  sameWidth?: boolean
  offset?: number
  boundaryPadding?: number
  zIndex?: number
  maxHeight?: number | string
  maxWidth?: number | string
  teleportTo?: string | HTMLElement | false
  restoreFocus?: boolean
  animation?: 'zoom' | 'opacity'
  arrow?: boolean
}

export interface DropdownSlots {
  header(): VNode[]
  footer(): VNode[]
  default(): VNode[]
}

export interface DropdownEmits {
  hide: []
  show: []
}
