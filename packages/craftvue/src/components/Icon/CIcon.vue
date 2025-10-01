<template>
  <i class="c-icon" v-bind="$attrs" :style="style">
    <slot>
      <component :is="iconComponent" />
    </slot>
  </i>
</template>

<script setup lang="ts">
import { CSSProperties, computed } from 'vue'
import type { IconProps, IconsMap, IconName } from './CIcon.types'
import { addUnit } from '@/utils'
import * as icons from '@craftvue/icons'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<IconProps>()

// карта иконок вида {close: CloseIcon} для простого указания названия иконки
const iconsMap: IconsMap = Object.keys(icons).reduce((acc, key) => {
  const iconName = key.replace('Icon', '').toLowerCase() as IconName
  acc[iconName] = icons[key as keyof typeof icons]
  return acc
}, {} as IconsMap)

const iconComponent = computed(() => {
  if (props.name) {
    return iconsMap[props.name] || null
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
