<template>
  <component :is="as" v-if="!asChild" :class="tabClasses" v-bind="attrs" @click="onClick">
    <slot></slot>
  </component>
  <slot
    v-else
    :tab-classes="tabClasses"
    :active="active"
    :a11y-attrs="a11yAttrs"
    :on-click="onClick"
  ></slot>
</template>

<script setup lang="ts">
import {useAttrs, inject, computed} from "vue"
import { ButtonHTMLAttributes, mergeProps, VNodeProps } from 'vue'
import {
  TabListContext,
  TabListInjectionKey,
  TabProps,
  TabsClasses,
  TabsContext,
  TabsInjectionKey,
  TabSlots,
} from './CTabs.types'
import { equals, findSingle, focus, getAttribute } from '@/utils'

const attrsRoot = useAttrs()
const $pcTabs = inject(TabsInjectionKey) as TabsContext
const $pcTabList = inject(TabListInjectionKey) as TabListContext

defineSlots<TabSlots>()

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TabProps>(), {
  as: 'button',
})

const tabClasses = computed<TabsClasses>(() => [
  'c-tab',
  {
    'c-tab--vertical': $pcTabs.isVertical(),
    'is--active': active.value,
    'is--disabled': props.disabled,
  },
])

const attrs = computed(() => {
  return mergeProps(attrsRoot, asAttrs.value as VNodeProps, a11yAttrs.value)
})

const asAttrs = computed<ButtonHTMLAttributes | undefined>(() => {
  return props.as === 'button' ? { type: 'button', disabled: props.disabled } : undefined
})

const a11yAttrs = computed(() => {
  return {
    id: id.value,
    tabindex: active.value ? $pcTabs.$props.tabindex : -1,
    role: 'tab',
    'aria-selected': active.value,
    'aria-controls': ariaControls.value,
    'data-pc-name': 'tab',
    'data-disabled': props.disabled,
    'data-active': active.value,
    onFocus: onFocus,
    onKeydown: onKeydown,
  }
})

const id = computed(() => `${$pcTabs.$id}_tab_${props.value}`)

const active = computed<boolean>(
  () => equals($pcTabs.activeValue.value, props.value) && !props.disabled,
)

const ariaControls = computed(() => `${$pcTabs.$id}_tabpanel_${props.value}`)

const changeActiveValue = () => {
  $pcTabs.updateValue(props.value)
}

const onFocus = () => $pcTabs.$props.selectOnFocus && changeActiveValue()

const onClick = () => changeActiveValue()

const onKeydown = (event: KeyboardEvent) => {
  switch (event.code) {
    case $pcTabs.isVertical() ? 'ArrowDown' : 'ArrowRight':
      onArrowRightKey(event)
      break
    case $pcTabs.isVertical() ? 'ArrowUp' : 'ArrowLeft':
      onArrowLeftKey(event)
      break
    case 'Home':
      onHomeKey(event)
      break
    case 'End':
      onEndKey(event)
      break
    case 'PageDown':
      onPageDownKey(event)
      break
    case 'PageUp':
      onPageUpKey(event)
      break
    case 'Enter':
    case 'NumpadEnter':
    case 'Space':
      onEnterKey(event)
      break
    default:
      break
  }
}

const onArrowRightKey = (event: KeyboardEvent) => {
  const nextTab = findNextTab(event.currentTarget as Element)

  nextTab ? changeFocusedTab(nextTab) : onHomeKey(event)
  event.preventDefault()
}

const onArrowLeftKey = (event: KeyboardEvent) => {
  const prevTab = findPrevTab(event.currentTarget as Element)

  prevTab ? changeFocusedTab(prevTab) : onEndKey(event)
  event.preventDefault()
}

const onHomeKey = (event: KeyboardEvent) => {
  const firstTab = findFirstTab()

  firstTab && changeFocusedTab(firstTab)
  event.preventDefault()
}

const onEndKey = (event: KeyboardEvent) => {
  const lastTab = findLastTab()

  lastTab && changeFocusedTab(lastTab)
  event.preventDefault()
}

const onPageDownKey = (event: KeyboardEvent) => {
  const lastTab = findLastTab()

  lastTab && scrollInView(lastTab)
  event.preventDefault()
}

const onPageUpKey = (event: KeyboardEvent) => {
  const firstTab = findFirstTab()

  firstTab && scrollInView(firstTab)
  event.preventDefault()
}

const onEnterKey = (event: KeyboardEvent) => {
  changeActiveValue()
  event.preventDefault()
}

const findNextTab = (tabElement: Element, selfCheck: boolean = false): Element | null => {
  const element = selfCheck ? tabElement : tabElement.nextElementSibling

  return element
    ? getAttribute(element, 'data-disabled') ||
      getAttribute(element, 'data-pc-name') === 'activebar'
      ? findNextTab(element)
      : findSingle(element, '[data-pc-name="tab"]')
    : null
}

const findPrevTab = (tabElement: Element, selfCheck: boolean = false): Element | null => {
  const element = selfCheck ? tabElement : tabElement.previousElementSibling

  return element
    ? getAttribute(element, 'data-disabled') ||
      getAttribute(element, 'data-pc-name') === 'activebar'
      ? findPrevTab(element)
      : findSingle(element, '[data-pc-name="tab"]')
    : null
}

const findFirstTab = () => findNextTab($pcTabList.tabs.value?.firstElementChild as Element, true)
const findLastTab = () => findPrevTab($pcTabList.tabs.value?.lastElementChild as Element, true)
const scrollInView = (element: Element) => element.scrollIntoView({ block: 'nearest' })
const changeFocusedTab = (element: Element) => {
  if (element instanceof HTMLElement) focus(element)
  scrollInView(element)
}
</script>
