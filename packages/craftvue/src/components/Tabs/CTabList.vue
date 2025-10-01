<template>
  <div ref="list" :class="rootClasses">
    <button
      v-if="showNavigators && isPrevButtonEnabled"
      ref="prevButton"
      class="c-tablist__navigator c-tablist__navigator-prev"
      type="button"
      :aria-label="getAriaLabel('previous')"
      :tabindex="$pcTabs.$props.tabindex"
      @click="onPrevButtonClick"
    >
      <CIcon aria-hidden="true" name="prevarrow">
        <component :is="templates.previcon"/>
      </CIcon>
    </button>

    <div ref="content" class="c-tablist__content" @scroll.prevent="onScroll">
      <div
        ref="tabs"
        class="c-tablist__tabs"
        role="tablist"
        :aria-orientation="$pcTabs.$props.orientation"
      >
        <slot></slot>
        <span
          ref="inkbar"
          role="presentation"
          class="c-tablist__active-bar"
          data-pc-name="activebar"
          aria-hidden="true"
        ></span>
      </div>
    </div>

    <button
      v-if="showNavigators && isNextButtonEnabled"
      ref="nextButton"
      class="c-tablist__navigator c-tablist__navigator-next"
      type="button"
      :aria-label="getAriaLabel('next')"
      :tabindex="$pcTabs.$props.tabindex"
      @click="onNextButtonClick"
    >
      <CIcon aria-hidden="true" name="nextarrow">
        <component :is="templates.nexticon"/>
      </CIcon>
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  inject,
  shallowRef,
  ref,
  computed,
  watch,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  provide,
} from 'vue'
import {
  TabListInjectionKey,
  TabsClasses,
  TabsContext,
  TabsInjectionKey,
  TabsListSlots,
} from './CTabs.types'
import {
  getWidth,
  getHeight,
  findSingle,
  getOuterWidth,
  getOuterHeight,
  addUnit,
  getOffset,
} from '@/utils'
import { CIcon } from '@/components'
import { getAriaLabel } from '@/constants/aria-labels'

const $pcTabs = inject(TabsInjectionKey) as TabsContext

defineSlots<TabsListSlots>()

const tabs = shallowRef<HTMLElement>()
const list = shallowRef<HTMLElement>()
const content = shallowRef<HTMLElement>()
const prevButton = shallowRef<HTMLElement>()
const nextButton = shallowRef<HTMLElement>()
const inkbar = shallowRef<HTMLElement>()
const isPrevButtonEnabled = ref(false)
const isNextButtonEnabled = ref(true)
const resizeObserver = ref<ResizeObserver>()

const rootClasses = computed<TabsClasses>(() => [
  'c-tablist',
  {
    'c-tablist--vertical': $pcTabs.isVertical(),
  },
])

const showNavigators = computed(() => $pcTabs.$props.showNavigators)
const templates = computed(() => $pcTabs.$slots)
const activeValue = computed(() => $pcTabs.activeValue.value)

const updateInkBar = () => {
  if (!inkbar.value) return

  const activeTab = findSingle(content.value!, '[data-pc-name="tab"][data-active="true"]')

  if ($pcTabs.isVertical()) {
    inkbar.value.style.height = addUnit(getOuterHeight(activeTab))
    inkbar.value.style.top = addUnit(
      Number(getOffset(activeTab).top) - Number(getOffset(tabs.value).top),
    )
  } else {
    inkbar.value.style.width = addUnit(getOuterWidth(activeTab))
    inkbar.value.style.left = addUnit(
      Number(getOffset(activeTab).left) - Number(getOffset(tabs.value).left),
    )
  }
}

const onPrevButtonClick = () => {
  if (!content.value) return

  if ($pcTabs.isVertical()) {
    const buttonHeights = getVisibleButtonSizes().height
    const height = getHeight(content.value) - buttonHeights
    const currentScrollTop = content.value.scrollTop
    const scrollStep = height * 0.8
    const targetScrollTop = currentScrollTop - scrollStep
    const scrollTop = Math.max(targetScrollTop, 0)

    content.value.scrollTop = scrollTop
  } else {
    const buttonWidths = getVisibleButtonSizes().width
    const width = getWidth(content.value) - buttonWidths
    const currentScrollLeft = Math.abs(content.value.scrollLeft)
    const scrollStep = width * 0.8
    const targetScrollLeft = currentScrollLeft - scrollStep
    const scrollLeft = Math.max(targetScrollLeft, 0)

    content.value.scrollLeft = scrollLeft
  }
}

const onNextButtonClick = () => {
  if (!content.value) return

  if ($pcTabs.isVertical()) {
    const buttonHeights = getVisibleButtonSizes().height
    const height = getHeight(content.value) - buttonHeights
    const currentScrollTop = content.value.scrollTop
    const scrollStep = height * 0.8
    const targetScrollTop = currentScrollTop + scrollStep
    const maxScrollTop = content.value.scrollHeight - height
    const scrollTop = Math.min(targetScrollTop, maxScrollTop)

    content.value.scrollTop = scrollTop
  } else {
    const buttonWidths = getVisibleButtonSizes().width
    const width = getWidth(content.value) - buttonWidths
    const currentScrollLeft = Math.abs(content.value?.scrollLeft)
    const scrollStep = width * 0.8
    const targetScrollLeft = currentScrollLeft + scrollStep
    const maxScrollLeft = content.value.scrollWidth - width
    const scrollLeft = Math.min(targetScrollLeft, maxScrollLeft)

    content.value.scrollLeft = scrollLeft
  }
}

const getVisibleButtonSizes = (): { width: number; height: number } => {
  let width = 0
  let height = 0

  if (showNavigators.value) {
    width = prevButton.value?.offsetWidth || nextButton.value?.offsetWidth || 0
    height = prevButton.value?.offsetHeight || nextButton.value?.offsetHeight || 0
  }
  return {
    width: width * 2,
    height: height * 2,
  }
}

const updateButtonState = () => {
  if (!content.value) return

  const { scrollTop, scrollWidth, scrollHeight } = content.value
  const scrollLeft = Math.abs(content.value.scrollLeft)
  const [width, height] = [getWidth(content.value), getHeight(content.value)]

  if ($pcTabs.isVertical()) {
    isPrevButtonEnabled.value = scrollTop !== 0
    isNextButtonEnabled.value = Math.ceil(scrollTop) < scrollHeight - height
  } else {
    isPrevButtonEnabled.value = scrollLeft !== 0
    isNextButtonEnabled.value = Math.ceil(scrollLeft) < scrollWidth - width
  }
}

const onScroll = () => {
  if (showNavigators.value) updateButtonState()
}

const bindResizeObserver = () => {
  resizeObserver.value = new ResizeObserver(() => updateButtonState())
  resizeObserver.value.observe(list.value!)
}

const unbindResizeObserver = () => {
  resizeObserver.value?.unobserve(list.value!)
  resizeObserver.value = undefined
}

watch(
  () => showNavigators.value,
  (newValue) => {
    if (newValue) {
      bindResizeObserver()
    } else {
      unbindResizeObserver()
    }
  },
)

watch(
  () => activeValue.value,
  () => {
    updateInkBar()
  },
  {
    flush: 'post',
  },
)

onMounted(() => {
  if (showNavigators.value) {
    updateButtonState()
    bindResizeObserver()
  }
  setTimeout(() => updateInkBar(), 150)
})

onBeforeUnmount(() => {
  unbindResizeObserver()
})

onUpdated(() => {
  if (showNavigators.value) updateButtonState()
})

provide(TabListInjectionKey, {
  tabs: tabs,
})
</script>
