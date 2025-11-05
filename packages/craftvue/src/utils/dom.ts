/* eslint-disable @typescript-eslint/no-explicit-any */

import { isElement } from '@/types/guards'

export const findSingle = (element: Element | null, selector: string): Element | null => {
  return isElement(element)
    ? element.matches(selector)
      ? element
      : element.querySelector(selector)
    : null
}

export const getAttribute = (element: Element, name: string): unknown => {
  if (isElement(element)) {
    const value = element.getAttribute(name)

    if (!isNaN(value as any)) return +(value as string)

    if (value === 'true' || value === 'false') return value === 'true'

    return value
  }

  return undefined
}

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
