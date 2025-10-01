import { Component, ShallowRef, VNode } from 'vue'
import type {InjectionKey, Ref} from "vue"

export interface TabsProps {
  value: TabValue
  orientation?: 'horizontal' | 'vertical'
  showNavigators?: boolean
  tabindex?: number
  selectOnFocus?: boolean
  lazy?: boolean
}

export interface TabProps {
  as?: string | Component
  asChild?: boolean
  disabled?: boolean
  value: TabValue
}

export interface TabPanelProps {
  as?: string | Component
  asChild?: boolean
  value: TabValue
}

export type TabValue = string | number

export type TabsEmits = {
  'update:value': [value: TabValue]
}

export type TabsClasses = (string | { [key: string]: boolean })[]

export type TabsContext = {
  activeValue: Ref<TabValue>
  isVertical: () => boolean
  updateValue: (value: TabValue) => void
  $slots: TabsSlots
  $props: TabsProps
  $id: string
}

export type TabListContext = {
  tabs: ShallowRef<HTMLElement | undefined>
}

export const TabsInjectionKey = Symbol() as InjectionKey<TabsContext>
export const TabListInjectionKey = Symbol() as InjectionKey<TabListContext>

export interface TabsSlots {
  default(): VNode[]
  previcon(): VNode[]
  nexticon(): VNode[]
}

export interface TabsListSlots {
  default(): VNode[]
}

export interface TabSlots {
  default(scope: {
    tabClasses?: TabsClasses
    active?: boolean
    a11yAttrs?: Record<string, unknown>
    onClick?: () => void
  }): VNode[]
}

export interface TabPanelsSlots {
  default(): VNode[]
}

export interface TabPanelSlots {
  default(scope: {
    tabpanelClasses?: TabsClasses
    active?: boolean
    a11yAttrs?: Record<string, unknown>
  }): VNode[]
}
