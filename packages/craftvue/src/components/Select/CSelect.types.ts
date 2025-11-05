/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, StyleValue, VNode } from 'vue'

export type SelectOption =
  | string
  | {
      label: string
      value: any
      disabled?: boolean
      [key: string]: unknown
    }

export interface SelectProps {
  modelValue?: any
  options?: SelectOption[]
  placeholder?: string
  disabled?: boolean
  multiple?: boolean
  clearable?: boolean
  searchable?: boolean
  size?: 'sm' | 'lg'
  variant?: 'outlined' | 'filled'
  invalid?: boolean
  loading?: boolean
  checkmark?: boolean
  full?: boolean
  optionLabel?: string
  optionValue?: string
  optionDisabled?: string
  filterPlaceholder?: string
  noOptionsText?: string
  loadingText?: string
  overlayStyle?: StyleValue
  overlayClass?: string | string[]
  clearIcon?: Component
  dropdownIcon?: Component
  loadingIcon?: Component
  checkmarkIcon?: Component
}

export type SelectClasses = (string | Record<string, boolean>)[]

export interface SelectSlots {
  option(scope: { option: SelectOption; index: number }): VNode[]
  noOptions(): VNode[]
  loading(): VNode[]
  clear(): VNode[]
  dropdown(): VNode[]
  value(scope: {
    placeholder?: string
    option: SelectOption | null
    values: SelectOption[]
  }): VNode[]
  footer(): VNode[]
  header(): VNode[]
}

export interface SelectEmits {
  'update:modelValue': [value: any]
  change: [value: any]
  search: [query: string]
  select: [option: SelectOption]
  remove: [option: SelectOption]
  clear: []
}
