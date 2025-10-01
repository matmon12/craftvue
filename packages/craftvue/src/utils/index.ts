import { isNumber, isString, isStringNumber, isFunction, isElement } from '@/types/guards'

export const getImageUrl = (module: string, path: string): string => {
  return new URL(`/src/${module}/assets/images/${path}`, import.meta.url).href
}

export const isEmpty = (value: unknown): boolean => {
  return (
    value === undefined ||
    value === null ||
    value === '' ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0 && !(value instanceof Date))
  )
}

export const isNotEmpty = (value: unknown): boolean => !isEmpty(value)

export const addUnit = (value?: string | number, unit: string = 'px'): string => {
  if (value !== undefined && value !== null && value !== '') {
    if (isNumber(value) || isStringNumber(value)) {
      return `${value}${unit}`
    } else if (isString(value)) {
      return value
    }
  }
  return ''
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const resolveFieldData = (data: any, field: any): unknown => {
  if (!data || !field) return null

  const value = data[field as string]
  if (isNotEmpty(value)) return value

  if (Object.keys(data).length) {
    if (isFunction(field)) {
      return field(data)
    } else if (String(field).indexOf('.') === -1) {
      return data[field]
    } else {
      const fields = field.split('.')
      let _value = data
      for (let i = 0; i < fields.length; ++i) {
        if (_value == null) {
          return null
        }
        _value = _value[fields[i]]
      }
      return _value
    }
  }

  return null
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
export const deepEquals = (a: any, b: any): boolean => {
  if (a === b) return true

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    let i, length, key

    // array
    const arrA = Array.isArray(a)
    const arrB = Array.isArray(b)
    if (arrA && arrB) {
      length = a.length
      if (length !== b.length) return false
      for (i = length; i-- !== 0; ) if (!deepEquals(a[i], b[i])) return false
      return true
    }
    if (arrA !== arrB) return false

    // date
    const dateA = a instanceof Date
    const dateB = b instanceof Date
    if (dateA !== dateB) return false
    if (dateA && dateB) return a.getTime() === b.getTime()

    // regexp
    const regexpA = a instanceof RegExp
    const regexpB = b instanceof RegExp
    if (regexpA !== regexpB) return false
    if (regexpA && regexpB) return a.toString() === b.toString()

    // object
    const keys = Object.keys(a)
    length = keys.length
    if (length !== Object.keys(b).length) return false
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false
    for (i = length; i-- !== 0; ) {
      key = keys[i]
      if (!deepEquals(a[key], b[key])) return false
    }

    return true
  }

  // NaN and false
  return a !== a && b !== b
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
export const equals = (obj1: any, obj2: any, field?: string): boolean => {
  if (field) return resolveFieldData(obj1, field) === resolveFieldData(obj2, field)
  else return deepEquals(obj1, obj2)
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export const findSingle = (element: Element, selector: string): Element | null => {
  return isElement(element)
    ? element.matches(selector)
      ? element
      : element.querySelector(selector)
    : null
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAttribute = (element: Element, name: string): unknown => {
  if (isElement(element)) {
    const value = element.getAttribute(name)

    if (!isNaN(value as any)) return +(value as string)

    if (value === 'true' || value === 'false') return value === 'true'

    return value
  }

  return undefined
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export const focus = (element: HTMLElement, options?: FocusOptions): void => {
  if (element && document.activeElement !== element) element.focus(options)
}

export const getWidth = (el?: HTMLElement): number => {
  if (!el) return 0

  let width = el.offsetWidth
  const style = getComputedStyle(el)
  width -=
    parseFloat(style.paddingLeft) +
    parseFloat(style.paddingRight) +
    parseFloat(style.borderLeftWidth) +
    parseFloat(style.borderRightWidth)
  return width
}

export const getHeight = (el?: HTMLElement): number => {
  if (!el) return 0

  let height = el.offsetHeight
  const style = getComputedStyle(el)
  height -=
    parseFloat(style.paddingTop) +
    parseFloat(style.paddingBottom) +
    parseFloat(style.borderTopWidth) +
    parseFloat(style.borderBottomWidth)
  return height
}

export const getOuterWidth = (el: HTMLElement | Element | null, margin?: boolean): number => {
  if (!el || !(el instanceof HTMLElement)) return 0

  let width = el.offsetWidth
  if (margin) {
    const style = getComputedStyle(el)
    width += parseFloat(style.marginLeft) + parseFloat(style.marginRight)
  }

  return width
}

export const getOuterHeight = (el: HTMLElement | Element | null, margin?: boolean): number => {
  if (!el || !(el instanceof HTMLElement)) return 0

  let height = el.offsetHeight
  if (margin) {
    const style = getComputedStyle(el)
    height += parseFloat(style.marginTop) + parseFloat(style.marginBottom)
  }

  return height
}

export const getOffset = (el?: Element | null): { top: string | number; left: string | number } => {
  if (el) {
    const rect = el.getBoundingClientRect()

    return {
      top:
        rect.top +
        (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left:
        rect.left +
        (window.pageXOffset ||
          getScrollLeft(document.documentElement) ||
          getScrollLeft(document.body) ||
          0),
    }
  }

  return {
    top: 'auto',
    left: 'auto',
  }
}

export const getScrollLeft = (element?: HTMLElement): number =>
  element ? Math.abs(element.scrollLeft) : 0
