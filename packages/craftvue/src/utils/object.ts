/* eslint-disable @typescript-eslint/no-explicit-any */

import { isFunction } from '@/types/guards'
import { getCurrentScope, onScopeDispose } from 'vue'

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

export const equals = (obj1: any, obj2: any, field?: string): boolean => {
  if (field) return resolveFieldData(obj1, field) === resolveFieldData(obj2, field)
  else return deepEquals(obj1, obj2)
}

export const tryOnScopeDispose = (fn: () => void): boolean => {
  if (getCurrentScope()) {
    onScopeDispose(fn)
    return true
  }
  return false
}

export const tryGetFieldData = (data: any, field: any): any => {
  if (!field || typeof data !== 'object' || !Object.keys(data).length) {
    return null
  }

  if (data.hasOwnProperty(field)) {
    return data[field]
  }

  if (typeof field === 'string' && field.includes('.')) {
    const fields = field.split('.')
    const value = fields.reduce((acc, key) => {
      return acc !== null && typeof acc === 'object' && acc.hasOwnProperty(key) ? acc[key] : null
    }, data)
    return value
  }

  return null
}
