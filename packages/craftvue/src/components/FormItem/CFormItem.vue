<template>
  <div class="c-form-item">
    <component
      :is="props.for ? 'label' : 'div'"
      v-if="hasLabel"
      :for="props.for"
      :class="labelClasses"
    >
      <slot name="labelSlot" :label="props.label">{{ props.label }}</slot>
    </component>

    <div class="c-form-item__content">
      <slot />

      <transition name="zoom-in-top">
        <slot v-if="showError" name="error" :error="errorMessage">
          <small class="c-form-item__error">{{ errorMessage }}</small>
        </slot>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FormItemProps, FormItemsClasses, FormItemSlots } from './CFormItem.types'

const slots = defineSlots<FormItemSlots>()

const props = defineProps<FormItemProps>()

const hasLabel = computed<boolean>(() => {
  return !!(props.label || slots.labelSlot)
})

const showError = computed<boolean>(() => {
  return !!(props.errorMessage || slots.error)
})

const labelClasses = computed<FormItemsClasses>(() => [
  'c-form-item__label',
  {
    'c-form-item--required': props.required,
  },
])
</script>
