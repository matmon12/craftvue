<template>
  <div :class="tabsClasses">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useId, ref, watch, computed, provide } from 'vue'
import {
  TabsClasses,
  TabsEmits,
  TabsProps,
  TabValue,
  TabsInjectionKey,
  TabsSlots,
} from './CTabs.types'

const $id = useId()

const props = withDefaults(defineProps<TabsProps>(), {
  orientation: 'horizontal',
  showNavigators: true,
  tabindex: 0,
  lazy: false,
})

const slots = defineSlots<TabsSlots>()
const emit = defineEmits<TabsEmits>()

const activeValue = ref<TabValue>(props.value)

watch(
  () => props.value,
  (newValue) => {
    activeValue.value = newValue
  },
)

const updateValue = (value: TabValue) => {
  if (activeValue.value !== value) {
    activeValue.value = value
    emit('update:value', value)
  }
}

const isVertical = () => props.orientation === 'vertical'

const tabsClasses = computed<TabsClasses>(() => [
  'c-tabs',
  {
    'c-tabs--vertical': isVertical(),
  },
])

provide(TabsInjectionKey, {
  activeValue,
  isVertical,
  updateValue,
  $slots: slots,
  $props: props,
  $id,
})
</script>

