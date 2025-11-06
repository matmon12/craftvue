import { VNode } from 'vue'
import type {InjectionKey, Ref} from "vue"

export type TabValue = string | number
export type TabsClasses = (string | { [key: string]: boolean })[]

export interface TabsProps {
  value: TabValue
  orientation?: 'horizontal' | 'vertical'
  showNavigators?: boolean
  tabindex?: number
  selectOnFocus?: boolean
  lazy?: boolean
}

export type TabsEmits = {
  'update:value': [value: TabValue]
}

export type TabsContext = {
  activeValue: Ref<TabValue>
  isVertical: () => boolean
  updateValue: (value: TabValue) => void
  $slots: TabsSlots
  $props: TabsProps
  $id: string
}

export const TabsInjectionKey = Symbol() as InjectionKey<TabsContext>

export interface TabsSlots {
  default(): VNode[]
  previcon(): VNode[]
  nexticon(): VNode[]
}




