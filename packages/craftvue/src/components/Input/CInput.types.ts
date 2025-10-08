import { Nullable } from '@/types'
import { Component, InputHTMLAttributes, VNode } from 'vue'

export interface BaseInputProps {
  modelValue?: Nullable<string>
  variant?: 'outlined' | 'filled'
  size?: 'sm' | 'lg'
  invalid?: boolean
  disabled?: boolean
  clearable?: boolean
  formatter?: (value: string | number) => string
  parser?: (value: string) => string
  showPassword?: boolean
  showWordLimit?: boolean
  prefixIcon?: Component
  suffixIcon?: Component
  clearIcon?: Component
}

export interface InputProps
  extends /* @vue-ignore */ Omit<InputHTMLAttributes, 'disabled' | 'size'>,
    BaseInputProps {}

export type InputEmits = {
  'update:modelValue': [value: string]
  input: [value: string]
  change: [value: string]
  clear: []
  mouseenter: [event: MouseEvent]
  mouseleave: [event: MouseEvent]
}

export type InputClasses = (string | { [key: string]: boolean })[]

export interface InputSlots {
  'prepend'(): VNode[],
  'prefix'(): VNode[],
  'suffix'(): VNode[],
  'append'(): VNode[],
}
