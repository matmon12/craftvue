import type { ButtonHTMLAttributes, VNode } from 'vue'
import type { Component } from 'vue'

export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  severity?: 'primary' | 'secondary' | 'contrast'
  variant?: 'filled' | 'outlined' | 'text'
  label?: string
  icon?: Component
  iconPos?: 'left' | 'right' | 'top' | 'bottom'
  loading?: boolean
  raised?: boolean
  rounded?: boolean
  badge?: string
  size?: 'sm' | 'lg'
  badgeSeverity?: 'primary' | 'secondary' | 'contrast'
}

export type CustomProps = Omit<ButtonProps, keyof ButtonHTMLAttributes> & { disabled?: boolean }

export interface ButtonEmits {
  click: [event: MouseEvent]
}

export type ButtonClasses = (string | { [key: string]: boolean })[]

export interface ButtonSlots {
  default(): VNode[]
  'iconSlot'(): VNode[]
}
