import { Component, VNode } from 'vue'
import { TabValue, TabsClasses } from '@/components/Tabs'

export interface TabProps {
  as?: string | Component
  asChild?: boolean
  disabled?: boolean
  value: TabValue
}

export interface TabSlots {
  default(scope: {
    tabClasses?: TabsClasses
    active?: boolean
    a11yAttrs?: Record<string, unknown>
    onClick?: () => void
  }): VNode[]
}
