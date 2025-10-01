export const isString = (val: unknown): val is string => typeof val === 'string'
export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isStringNumber = (val: string): boolean => isString(val) && !Number.isNaN(Number(val))
export const isElement = (element: unknown): element is Element => element instanceof Element
export const isFunction = (val: unknown): val is (...args: unknown[]) => unknown =>
  typeof val === 'function'
