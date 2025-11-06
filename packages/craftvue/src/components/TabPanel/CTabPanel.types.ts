import { Component, VNode } from 'vue'
import {TabValue, TabsClasses} from "@/components/Tabs"

export interface TabPanelProps {
  as?: string | Component
  asChild?: boolean
  value: TabValue
}

export interface TabPanelSlots {
  default(scope: {
    tabpanelClasses?: TabsClasses
    active?: boolean
    a11yAttrs?: Record<string, unknown>
  }): VNode[]
}
