<template>
  <div
    ref="selectRef"
    :class="selectClasses"
    :style="attrs.style"
    tabindex="0"
    role="combobox"
    :aria-expanded="isOpen"
    :aria-haspopup="true"
    :aria-disabled="disabled"
    @keydown="handleKeydown"
  >
    <!-- VALUE -->
    <div :class="['c-select__value', { 'c-select__value--placeholder': !hasValue }]">
      <slot
        name="value"
        :placeholder="placeholder"
        :option="selectedOption"
        :values="selectedValues"
      >
        <!-- Tags (multiple) -->
        <template v-if="multiple && selectedValues.length > 0">
          <div class="c-select__tags">
            <div
              v-for="option in selectedValues"
              :key="getOptionValueOrLabel(option)"
              class="c-select__tag"
            >
              {{ getOptionLabel(option) }}
              <CIcon
                v-if="!disabled"
                name="close"
                class="c-select__tag__remove"
                @click.stop="removeOption(option)"
              />
            </div>
          </div>
        </template>
        <template v-else-if="!multiple && selectedOption">
          {{ getOptionLabel(selectedOption) }}
        </template>
        <template v-else>
          {{ loading ? loadingText : placeholder }}
        </template>
      </slot>
    </div>

    <!-- ACTIONS -->
    <div class="c-select__actions">
      <!-- Clear -->
      <div
        v-if="clearable && hasValue && !disabled"
        class="c-select__icon c-select__icon--clear"
        @click.stop="clear"
      >
        <slot name="clear">
          <CIcon>
            <component :is="clearIcon" />
          </CIcon>
        </slot>
      </div>

      <!-- Loading -->
      <span v-if="loading" class="c-select__icon">
        <slot name="loading">
          <CIcon>
            <component :is="loadingIcon" />
          </CIcon>
        </slot>
      </span>

      <!-- Arrow -->
      <span v-else class="c-select__icon">
        <slot name="dropdown">
          <CIcon class="c-select__icon--dropdown">
            <component :is="dropdownIcon" />
          </CIcon>
        </slot>
      </span>
    </div>
  </div>

  <!-- DROPDOWN -->
  <CDropdown
    :show="isOpen"
    :root-el="selectRef"
    same-width
    animation="zoom"
    :style="props.overlayStyle"
    :class="props.overlayClass"
    @hide="closeDropdown"
    @show="openDropdown"
  >
    <template #header>
      <slot name="header">
        <!-- Search input -->
        <div v-if="searchable" class="c-select__search">
          <CInput
            ref="searchInputRef"
            v-model="searchQuery"
            class="c-select__search-input"
            :placeholder="filterPlaceholder"
            type="text"
            role="searchbox"
            autocomplete="off"
            :suffix-icon="SearchIcon"
            :tabindex="isOpen && searchable ? 0 : -1"
            @input="handleSearch"
            @keydown="handleSearchKeydown"
          />
        </div>
      </slot>
    </template>
    <!-- Options -->
    <div ref="optionsRef" class="c-select__container">
      <template v-if="filteredOptions.length > 0">
        <div class="c-select__options" @mousemove="updateFocusedIndex">
          <div
            v-for="(option, index) in filteredOptions"
            :key="getOptionValue(option)"
            :class="[
              'c-select__option',
              {
                'is--selected': isOptionSelected(option),
                'is--disabled': getOptionDisabled(option),
                'is--focused': isOptionFocused(option, index),
                'c-select__option--checkmark': checkmark,
              },
            ]"
            v-bind="a11yAttrsOption(option, index)"
            @click="selectOption(option)"
          >
            <slot name="option" :option="option" :index="index">
              {{ getOptionLabel(option) }}
            </slot>
            <CIcon v-if="isOptionSelected(option) && checkmark" class="c-select__option__checkmark">
              <component :is="checkmarkIcon" />
            </CIcon>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="c-select__no-options">
          <slot name="noOptions">
            {{ noOptionsText }}
          </slot>
        </div>
      </template>
    </div>
    <template #footer>
      <slot name="footer" />
    </template>
  </CDropdown>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, useTemplateRef, useAttrs, HTMLAttributes } from 'vue'
import { SelectProps, SelectClasses, SelectSlots, SelectEmits, SelectOption } from './CSelect.types'
import { CloseIcon, DownArrowIcon, SpinnerIcon, SearchIcon, CheckIcon } from '@craftvue/icons'
import { CDropdown, CInput, CIcon } from '@/components'
import { equals, findSingle, getAttribute, tryGetFieldData } from '@/utils'
import { debounce } from 'lodash'

defineOptions({
  inheritAttrs: false,
})

defineSlots<SelectSlots>()

const attrs = useAttrs() as HTMLAttributes
const emits = defineEmits<SelectEmits>()

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  placeholder: 'Select option',
  disabled: false,
  multiple: false,
  clearable: false,
  searchable: false,
  variant: 'outlined',
  invalid: false,
  loading: false,
  checkmark: false,
  full: false,
  filterPlaceholder: 'Search...',
  noOptionsText: 'No available options',
  loadingText: 'Loading...',
  clearIcon: () => CloseIcon,
  dropdownIcon: () => DownArrowIcon,
  loadingIcon: () => SpinnerIcon,
  checkmarkIcon: () => CheckIcon,
})

const selectRef = useTemplateRef('selectRef')
const searchInputRef = useTemplateRef('searchInputRef')
const optionsRef = useTemplateRef('optionsRef')

const isOpen = ref<boolean>(false)
const searchQuery = ref<string>('')
const focusedIndex = ref<number>(-1)

const selectClasses = computed<SelectClasses>(() => [
  'c-select',
  {
    'c-select--sm': props.size === 'sm',
    'c-select--lg': props.size === 'lg',
    'c-select--filled': props.variant === 'filled',
    'c-select--multiple': props.multiple,
    'c-select--full': props.full,
    // 'c-select--searchable': props.searchable,
    // 'c-select--clearable': props.clearable,
    'is--disabled': props.disabled,
    'is--invalid': props.invalid,
    'is--loading': props.loading,
    'is--open': isOpen.value,
  },
  attrs.class,
])

const hasValue = computed<boolean>(() => {
  if (props.multiple) {
    return selectedValues.value.length > 0
  }

  return selectedOption.value !== null
})

const filteredOptions = computed<SelectOption[]>(() => {
  if (!searchQuery.value) return props.options || []

  const query = searchQuery.value.toLowerCase()
  return (props.options || []).filter((option) =>
    `${getOptionLabel(option)}`.toLowerCase().includes(query),
  )
})

const selectedValues = computed<SelectOption[]>(() => {
  if (!props.multiple) return []
  const values = Array.isArray(props.modelValue) ? props.modelValue : []
  return props.options.filter((option) => {
    const value = getOptionValueOrLabel(option)

    return values.findIndex((v) => equals(v, value)) > -1
  })
})

const selectedOption = computed<SelectOption | null>(() => {
  if (props.multiple) return null
  return props.options?.find((option) => getOptionValueOrLabel(option) === props.modelValue) || null
})

const a11yAttrsOption = (option: SelectOption, index: number): Record<string, unknown> => {
  return {
    role: 'option',
    'aria-label': getOptionLabel(option),
    'aria-selected': isOptionSelected(option),
    'data-disabled': getOptionDisabled(option),
    'data-selected': isOptionSelected(option),
    'data-index': index,
  }
}

const getOptionValueOrLabel = (option: SelectOption) => {
  const value = getOptionValue(option)
  return value !== '' ? value : getOptionLabel(option)
}

const getOptionLabel = (option: SelectOption): SelectOption | null => {
  return props.optionLabel ? tryGetFieldData(option, props.optionLabel) : option
}

const getOptionValue = (option: SelectOption) => {
  return props.optionValue ? tryGetFieldData(option, props.optionValue) : option
}

const getOptionDisabled = (option: SelectOption): boolean => {
  return props.optionDisabled ? (tryGetFieldData(option, props.optionDisabled) ?? false) : false
}

const isOptionSelected = (option: SelectOption): boolean => {
  const value = getOptionValueOrLabel(option)

  if (props.multiple) {
    const values = Array.isArray(props.modelValue) ? props.modelValue : []
    return values.findIndex((v) => equals(v, value)) > -1
  }

  return equals(props.modelValue, value)
}

const isOptionFocused = (option: SelectOption, index: number): boolean => {
  return focusedIndex.value === index && !getOptionDisabled(option)
}

const closeDropdown = () => {
  isOpen.value = false
  searchQuery.value = ''
  resetFocusedIndex()

  // для режима searchable, чтобы вернуть фокус в начальный поток
  if (props.searchable) {
    selectRef.value?.focus()
  }
}

const openDropdown = async () => {
  if (props.disabled || props.loading) return

  isOpen.value = true
  await nextTick()

  setDefaultFocusedIndex()

  if (props.searchable && searchInputRef.value) {
    searchInputRef.value.focus()
  }
}

const handleSearch = () => {
  emits('search', searchQuery.value)
}

const selectOption = (option: SelectOption) => {
  if (getOptionDisabled(option)) return

  const value = getOptionValueOrLabel(option)

  if (props.multiple) {
    const currentValues = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = currentValues.indexOf(value)

    if (index > -1) {
      currentValues.splice(index, 1)
    } else {
      currentValues.push(value)
    }

    emits('update:modelValue', currentValues)
    emits('change', currentValues)
  } else {
    emits('update:modelValue', value)
    emits('change', value)
    closeDropdown()
  }

  emits('select', option)
}

const removeOption = (option: SelectOption) => {
  if (props.multiple) {
    const value = getOptionValueOrLabel(option)
    const currentValues = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = currentValues.indexOf(value)

    if (index > -1) {
      currentValues.splice(index, 1)
      emits('update:modelValue', currentValues)
      emits('change', currentValues)
      emits('remove', option)
    }
  }
}

const clear = () => {
  if (props.multiple) {
    emits('update:modelValue', [])
    emits('change', [])
  } else {
    emits('update:modelValue', null)
    emits('change', null)
  }
  emits('clear')
}

const handleSearchKeydown = async (event: KeyboardEvent) => {
  if (props.disabled) return

  switch (event.code) {
    case 'Enter':
      onEnterKey(event)
      break
    case 'Escape':
      onEscapeKey()
      break
    case 'Tab':
      onTabKeySearch(event)
      break
    case 'ArrowDown':
      onArrowDownKey(event)
      break
    case 'ArrowUp':
      onArrowUpKey(event)
      break
    case 'Home':
      onHomeKey(event)
      break
    case 'End':
      onEndKey(event)
      break
    default:
      break
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (props.disabled) return

  switch (event.code) {
    case 'Enter':
    case 'Space':
      onEnterKey(event)
      break
    case 'Tab':
    case 'Escape':
      onEscapeKey()
      break
    case 'ArrowDown':
      onArrowDownKey(event)
      break
    case 'ArrowUp':
      onArrowUpKey(event)
      break
    case 'Home':
      onHomeKey(event)
      break
    case 'End':
      onEndKey(event)
      break
    default:
      break
  }
}

const onEnterKey = (event: KeyboardEvent) => {
  event.preventDefault()
  if (!isOpen.value) {
    openDropdown()
  } else {
    const focusedOption = filteredOptions.value[focusedIndex.value]
    if (focusedOption) {
      selectOption(focusedOption)
    }
  }
}

const onEscapeKey = () => {
  if (isOpen.value) {
    closeDropdown()
  }
}

const onArrowDownKey = (event: KeyboardEvent) => {
  event.preventDefault()
  if (!isOpen.value) {
    openDropdown()
  } else {
    const nextOption = findNextOption()
    nextOption ? scrollToFocusedOption(nextOption) : onHomeKey(event)
  }
}

const onArrowUpKey = (event: KeyboardEvent) => {
  event.preventDefault()
  if (isOpen.value) {
    const prevOption = findPrevOption()
    prevOption ? scrollToFocusedOption(prevOption) : onEndKey(event)
  }
}

const onHomeKey = (event: KeyboardEvent) => {
  event.preventDefault()
  if (isOpen.value) {
    resetFocusedIndex()
    const nextOption = findNextOption()
    nextOption && scrollToFocusedOption(nextOption)
  }
}

const onEndKey = (event: KeyboardEvent) => {
  event.preventDefault()
  if (isOpen.value) {
    focusedIndex.value = filteredOptions.value.length
    const prevOption = findPrevOption()
    prevOption && scrollToFocusedOption(prevOption)
  }
}

const onTabKeySearch = (event: KeyboardEvent) => {
  event.preventDefault()
  selectRef.value?.focus()
}

const updateFocusedIndex = debounce((event: MouseEvent) => {
  const index = Number((event.target as HTMLElement).dataset.index)

  if (focusedIndex.value !== index) {
    focusedIndex.value = index
  }
}, 16)

const resetFocusedIndex = () => (focusedIndex.value = -1)

const setDefaultFocusedIndex = () => {
  if (hasValue.value) {
    const selectedElement = findSingle(optionsRef.value, '[data-selected="true"]')
    focusedIndex.value = selectedElement
      ? (getAttribute(selectedElement, 'data-index') as number)
      : -1
  }
}

const findNextOption = (): Element | null => {
  const maxIndex = filteredOptions.value.length - 1
  if (focusedIndex.value >= maxIndex) return null

  ++focusedIndex.value
  const element = findSingle(optionsRef.value, `[data-index="${focusedIndex.value}"]`)
  return element ? (getAttribute(element, 'data-disabled') ? findNextOption() : element) : null
}

const findPrevOption = (): Element | null => {
  if (focusedIndex.value <= 0) return null

  --focusedIndex.value
  const element = findSingle(optionsRef.value, `[data-index="${focusedIndex.value}"]`)
  return element ? (getAttribute(element, 'data-disabled') ? findPrevOption() : element) : null
}

const scrollToFocusedOption = (element: Element) => element.scrollIntoView({ block: 'nearest' })
</script>
