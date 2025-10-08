import { isNumber, isString, isStringNumber } from '@/types/guards'

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
