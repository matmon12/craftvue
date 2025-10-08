import { VNode } from "vue"

export interface BadgeProps {
  value?: string | number
  size?: 'sm' | 'lg'
  severity?: 'primary' | 'secondary' | 'contrast'
  location?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  bordered?: boolean
  max?: number
}

export type BadgeClasses = (string | { [key: string]: boolean })[]

export interface BadgeSlots {
  default(): VNode[]
  content(): VNode[]
}
