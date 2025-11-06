<template>
  <i class="c-icon" v-bind="$attrs" :style="style">
    <slot>
      <component :is="iconComponent" />
    </slot>
  </i>
</template>

<script setup lang="ts">
import { CSSProperties, computed, defineAsyncComponent, defineSlots } from 'vue'
import type { Component } from 'vue'
import type { IconProps, IconName, IconSlots } from './CIcon.types'
import { addUnit } from '@/utils'

defineOptions({
  inheritAttrs: false,
})

defineSlots<IconSlots>()
const props = defineProps<IconProps>()

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Dynamic imports for individual icon entry points are only available after @craftvue/icons package is built
// These paths are resolved at runtime and may not be available during type checking in CI/CD
const iconLoaders: Record<IconName, () => Promise<{ default: Component }>> = {
  close: () => import('@craftvue/icons/close'),
  search: () => import('@craftvue/icons/search'),
  spinner: () => import('@craftvue/icons/spinner'),
  eye: () => import('@craftvue/icons/eye'),
  eyeslash: () => import('@craftvue/icons/eyeslash'),
  nextarrow: () => import('@craftvue/icons/nextarrow'),
  prevarrow: () => import('@craftvue/icons/prevarrow'),
  uparrow: () => import('@craftvue/icons/uparrow'),
  downarrow: () => import('@craftvue/icons/downarrow'),
  check: () => import('@craftvue/icons/check'),
  edit: () => import('@craftvue/icons/edit'),
  save: () => import('@craftvue/icons/save'),
  delete: () => import('@craftvue/icons/delete'),
  home: () => import('@craftvue/icons/home'),
  add: () => import('@craftvue/icons/add'),
  envelope: () => import('@craftvue/icons/envelope'),
}

const iconComponent = computed<Component | null>(() => {
  if (props.name && iconLoaders[props.name]) {
    return defineAsyncComponent(iconLoaders[props.name])
  }

  return null
})

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: addUnit(size),
    '--color': color,
  }
})
</script>
