<template>
  <div :class="containerKls" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <!-- prepend -->
    <div v-if="$slots.prepend" class="c-input-group__prepend">
      <slot name="prepend" />
    </div>

    <div :class="wrapperKls" @mousedown.prevent="focus">
      <!-- prefix -->
      <span v-if="$slots.prefix || prefixIcon" class="c-input__prefix">
        <div class="c-input__prefix-inner">
          <slot name="prefix">
            <CIcon v-if="prefixIcon" class="c-input__icon">
              <component :is="prefixIcon" />
            </CIcon>
          </slot>
        </div>
      </span>

      <input
        ref="inputRef"
        class="c-input__inner"
        v-bind="attrs"
        :disabled="disabled"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : attrs.type"
        @input="onInput"
        @change="onChange"
      />

      <!-- suffix -->
      <span v-if="suffixVisible" class="c-input__suffix">
        <span class="c-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix">
              <CIcon v-if="suffixIcon" class="c-input__icon">
                <component :is="suffixIcon" />
              </CIcon>
            </slot>
          </template>
          <CIcon v-if="showClear" class="c-input__icon c-input__clear" @click="clear">
            <component :is="clearIcon"></component>
          </CIcon>
          <CIcon
            v-if="showPwdVisible"
            class="c-input__icon c-input__password"
            @click="togglePasswordVisible"
          >
            <component :is="passwordIcon"></component>
          </CIcon>
          <span v-if="isWordLimitVisible" class="c-input__count">
            <span class="c-input__count-inner"> {{ textLength }} / {{ attrs.maxlength }} </span>
          </span>
        </span>
      </span>
    </div>

    <!-- append -->
    <div v-if="$slots.append" class="c-input-group__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  InputHTMLAttributes,
  computed,
  nextTick,
  shallowRef,
  useAttrs,
  useSlots,
  ref,
  watch,
  onMounted,
  type Component
} from 'vue'
import { CIcon } from '@/components'
import { InputClasses, InputEmits, InputProps, AllowedInputHTMLAttributes } from './CInput.types'
import { isNil } from 'lodash'
import { useFocus } from '@vueuse/core'
import { CloseIcon, EyeIcon, EyeSlashIcon } from '@craftvue/icons'

const inputRef = shallowRef<HTMLInputElement>()
const passwordVisible = ref(false)
const isHovering = ref(false)

const attrs = useAttrs() as InputHTMLAttributes
const slots = useSlots()
const { focused } = useFocus(inputRef)

defineOptions({ inheritAttrs: false })

const _props = withDefaults(defineProps<InputProps>(), {
  variant: 'outlined',
  clearIcon: () => CloseIcon,
})
const props = _props as Omit<typeof _props, keyof AllowedInputHTMLAttributes>
const emits = defineEmits<InputEmits>()

const nativeInputValue = computed<string>(() =>
  isNil(props.modelValue) ? '' : String(props.modelValue),
)

const textLength = computed<number>(() => nativeInputValue.value.length)
const passwordIcon = computed<Component>(() => (passwordVisible.value ? EyeIcon : EyeSlashIcon))

// visible
const showClear = computed(
  () =>
    props.clearable &&
    !props.disabled &&
    !!nativeInputValue.value &&
    (focused.value || isHovering.value),
)

const showPwdVisible = computed(
  () => props.showPassword && !props.disabled && !!nativeInputValue.value,
)

const isWordLimitVisible = computed<boolean>(
  () =>
    props.showWordLimit &&
    !!attrs.maxlength &&
    !props.disabled &&
    inputRef.value?.type === 'text' &&
    !props.showPassword,
)

const suffixVisible = computed<boolean>(
  () =>
    !!slots.suffix ||
    !!props.suffixIcon ||
    showClear.value ||
    showPwdVisible.value ||
    isWordLimitVisible.value,
)

const inputExceed = computed(
  () => !!isWordLimitVisible.value && textLength.value > Number(attrs.maxlength),
)

// classes
const containerKls = computed<InputClasses>(() => [
  'c-input',
  {
    'is--filled': props.variant === 'filled',
    'c-input--sm': props.size === 'sm',
    'c-input--lg': props.size === 'lg',
    'is--invalid': props.invalid,
    'is--disabled': props.disabled,
    'is--exceed': inputExceed.value,
    'c-input-group': !!slots.prepend || !!slots.append,
    'c-input-group--prepend': !!slots.prepend,
    'c-input-group--append': !!slots.append,
    'c-input--prefix': !!slots.prefix || !!props.prefixIcon,
    'c-input--suffix': suffixVisible.value,
    'c-input-hidden': attrs.type === 'hidden',
  },
])

const wrapperKls = computed<InputClasses>(() => [
  'c-input__wrapper',
  {
    'is--focus': focused.value,
  },
])

// events
const onInput = async (event: Event) => {
  let { value } = event.target as HTMLInputElement

  if (props.formatter && props.parser) {
    value = props.parser(value)
  }

  emits('update:modelValue', value)
  emits('input', value)

  // setup the value for saving formatting if value is empty ('')
  await nextTick()
  setNativeInputValue()
}

const onChange = (event: Event) => {
  let { value } = event.target as HTMLInputElement

  if (props.formatter && props.parser) {
    value = props.parser(value)
  }
  emits('change', value)
}

const onMouseEnter = (e: MouseEvent) => {
  isHovering.value = true
  emits('mouseenter', e)
}

const onMouseLeave = (e: MouseEvent) => {
  isHovering.value = false
  emits('mouseleave', e)
}

const clear = () => {
  emits('update:modelValue', '')
  emits('change', '')
  emits('clear')
  emits('input', '')
}

const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}

const focus = () => (focused.value = true)
const blur = () => (focused.value = false)

/**
 * Устанавливает значение элемента input.
 * Если указан форматтер, то используется отформатированное значение.
 */
const setNativeInputValue = () => {
  const formattedValue = props.formatter?.(nativeInputValue.value) ?? nativeInputValue.value
  if (!inputRef.value || inputRef.value.value === formattedValue) return
  inputRef.value.value = formattedValue
}

watch(
  () => nativeInputValue.value,
  () => setNativeInputValue(),
)

onMounted(() => {
  setNativeInputValue()
})

defineExpose({ focus, blur, focused })
</script>
