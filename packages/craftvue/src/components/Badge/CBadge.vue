<template>
  <div class="c-badge__wrapper">
    <span :class="badgeClasses" :style="styleOverlay">
      <slot name="content">{{ content }}</slot>
    </span>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, defineSlots, computed } from 'vue'
import { BadgeClasses, BadgeProps, BadgeSlots } from './CBadge.types'
import { isEmpty, addUnit } from '@/utils'

const slots = defineSlots<BadgeSlots>()

const props = withDefaults(defineProps<BadgeProps>(), {
  severity: 'primary',
})

const badgeClasses = computed<BadgeClasses>(() => [
  'c-badge',
  `c-badge--${props.severity}`,
  {
    'c-badge--sm': props.size === 'sm',
    'c-badge--lg': props.size === 'lg',
    'c-badge--circle': isCircle.value,
    'c-badge--dot': isDot.value,
    'c-badge--overlay': !!slots.default,
    'c-badge--bordered': props.bordered,
  },
])

const styleOverlay = computed<CSSProperties>(() => {
  if (!slots.default) return {}

  let offset = 0
  if (isDot.value) {
    offset = 0.4
  } else {
    if (props.size === 'lg') {
      offset = 0.9
    } else if (props.size === 'sm') {
      offset = 0.7
    } else {
      offset = 0.8
    }
  }
  const calc = `calc(100% - ${addUnit(offset, 'rem')})`

  const positionStyles: Record<Required<BadgeProps>['location'], CSSProperties> = {
    'bottom-right': { top: calc, left: calc },
    'bottom-left': { top: calc, right: calc },
    'top-left': { bottom: calc, right: calc },
    'top-right': { bottom: calc, left: calc },
  }

  return props.location ? positionStyles[props.location] : positionStyles['top-right']
})

const isDot = computed<boolean>(() => isEmpty(props.value) && !slots.content)

const isCircle = computed<boolean>(
  () => !isEmpty(props.value) && props.value?.toString().length === 1 && !slots.content,
)

const content = computed<string>(() => {
  if (isDot.value) return ''

  const numberValue = Number(props.value)
  const numberMax = Number(props.max)
  if (!isNaN(numberValue) && !isNaN(numberMax)) {
    return numberMax < numberValue ? `${numberMax}+` : `${numberValue}`
  }
  return `${props.value}`
})
</script>
