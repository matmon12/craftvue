import { VNode, ComponentPublicInstance } from 'vue'

export interface PopupPosition {
  left: number
  top: number
  width: number
  height: number
}

export interface ElementSize {
  width: number
  height: number
}

export interface PopupProps {
  show?: boolean
  rootEl?: HTMLElement | ComponentPublicInstance | null
  placement?: 'bottom' | 'top' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  trigger?: 'hover' | 'click'
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
  autoHide?: boolean
  showDelay?: number
  hideDelay?: number
  durationEnter?: number
  durationLeave?: number
}

export interface PopupSlots {
  default(): VNode[]
  header(): VNode[]
  footer(): VNode[]
  trigger?(scope: { isOpen: boolean; open: () => void; close: () => void }): VNode[]
}

export interface PopupEmits {
  hide: []
  show: []
}

export type PopupClasses = (string | Record<string, boolean>)[]
