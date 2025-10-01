<template>
  <div class="c-form-item">
    <component
      :is="props.for ? 'label' : 'div'"
      v-if="hasLabel"
      :for="props.for"
      :class="labelClasses"
    >
      <slot name="label" :label="props.label">{{ props.label }}</slot>
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
import {useSlots, computed} from "vue"
import { FormItemProps, FormItemsClasses } from './CFormItem.types'

const slots = useSlots()

const props = defineProps<FormItemProps>()

const hasLabel = computed<boolean>(() => {
  return !!(props.label || slots.label)
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
