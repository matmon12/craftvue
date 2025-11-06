import { ShallowRef, InjectionKey, VNode } from 'vue'

export const TabListInjectionKey = Symbol() as InjectionKey<TabListContext>

export type TabListContext = {
  tabs: ShallowRef<HTMLElement | undefined>
}

export interface TabsListSlots {
  default(): VNode[]
}
