<template>
  <button :class="buttonClasses" v-bind="attrs" :disabled="disabled" @click="handleClick">
    <slot>
      <CIcon v-if="loading" name="spinner" :class="['c-button__loading', ...buttonIconClasses]" />
      <slot v-else name="iconSlot">
        <CIcon v-if="icon" :class="buttonIconClasses">
          <component :is="icon" />
        </CIcon>
      </slot>
      <span v-if="label" class="c-button__label">{{ label }}</span>

      <CBadge
        v-if="badge"
        :value="badge"
        :severity="badgeSeverity"
        size="sm"
        class="c-button__badge"
      />
    </slot>
  </button>
</template>

<script setup lang="ts">
import { CBadge, CIcon } from '@/components'
import { ButtonHTMLAttributes, useAttrs, computed } from 'vue'
import {
  ButtonProps,
  BaseButtonProps,
  ButtonEmits,
  ButtonClasses,
  ButtonSlots,
} from './CButton.types'

defineOptions({
  inheritAttrs: false,
})

const slots = defineSlots<ButtonSlots>()
// only keep HTML attributes
const attrs = useAttrs() as ButtonHTMLAttributes

const emits = defineEmits<ButtonEmits>()
const _props = withDefaults(defineProps<ButtonProps>(), {
  severity: 'primary',
  variant: 'filled',
  iconPos: 'left',
  raised: false,
  rounded: false,
  loading: false,
  disabled: false,
  badge: '',
  badgeSeverity: 'primary',
})
// only keep non-HTML attributes
const props = _props as Pick<typeof _props, keyof BaseButtonProps>

const buttonClasses = computed<ButtonClasses>(() => [
  'c-button',
  `c-button--${props.severity}`,
  `c-button--${props.variant}`,
  {
    'is--loading': props.loading,
    'c-button--rounded': props.rounded,
    'c-button--raised': props.raised,
    'c-button--icon-only': iconOnly.value,
    'c-button--sm': props.size === 'sm',
    'c-button--lg': props.size === 'lg',
    'c-button--vertical': props.iconPos === 'bottom' || props.iconPos === 'top',
  },
])

const buttonIconClasses = computed(() => ['c-button__icon', `c-button__icon--${props.iconPos}`])

const disabled = computed<boolean>(() => props.disabled || props.loading)

const hasIcon = computed<boolean>(() => !!(props.icon || slots['iconSlot']))

const iconOnly = computed<boolean>(() => hasIcon.value && !props.label)

const handleClick = (event: MouseEvent) => {
  if (!disabled.value) {
    emits('click', event)
  }
}
</script>
