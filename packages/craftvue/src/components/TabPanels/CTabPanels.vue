<template>
  <div class="c-tabpanels" v-bind="inheritAttrs" role="presentation">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
import { TabPanelsSlots } from './CTabPanels.types'

const inheritAttrs = useAttrs()

defineSlots<TabPanelsSlots>()

defineOptions({
  inheritAttrs: false,
})
</script>
