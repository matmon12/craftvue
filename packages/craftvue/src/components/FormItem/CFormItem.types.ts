export interface FormItemProps {
  for?: string
  label?: string
  errorMessage?: string
  required?: boolean
}

export type FormItemsClasses = (string | { [key: string]: boolean })[]
