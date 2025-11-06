<template>
  <slot v-if="!$pcTabs"></slot>
  <template v-else>
    <template v-if="!asChild">
      <component
        :is="as"
        v-if="$pcTabs.$props.lazy ? active : true"
        v-show="$pcTabs.$props.lazy ? true : active"
        :class="tabPanelClasses"
        v-bind="attrs"
      >
        <slot></slot>
      </component>
    </template>

    <slot
      v-else
      :tabpanel-classes="tabPanelClasses"
      :active="active"
      :a11y-attrs="a11yAttrs"
    ></slot>
  </template>
</template>

<script setup lang="ts">
import { equals } from '@/utils'
import { TabPanelProps, TabPanelSlots } from './CTabPanel.types'
import { TabsClasses, TabsContext, TabsInjectionKey } from '@/components/Tabs'
import { mergeProps, useAttrs, inject, computed } from 'vue'

const inheritAttrs = useAttrs()
const $pcTabs = inject(TabsInjectionKey) as TabsContext

defineOptions({
  inheritAttrs: false,
})

defineSlots<TabPanelSlots>()

const props = withDefaults(defineProps<TabPanelProps>(), {
  as: 'div',
})

const active = computed<boolean>(() => equals($pcTabs.activeValue.value, props.value))

const tabPanelClasses = computed<TabsClasses>(() => ['c-tabpanel'])

const attrs = computed(() => {
  return mergeProps(inheritAttrs, a11yAttrs.value)
})

const a11yAttrs = computed(() => {
  return {
    id: id.value,
    tabindex: $pcTabs.$props.tabindex,
    role: 'tabpanel',
    'aria-labelledby': ariaLabelledby.value,
    'data-pc-name': 'tabpanel',
  }
})

const id = computed(() => `${$pcTabs.$id}_tabpanel_${props.value}`)

const ariaLabelledby = computed(() => `${$pcTabs.$id}_tab_${props.value}`)
</script>
