export type BadgeSeverity = 'primary' | 'secondary' | 'contrast'
export interface BadgeProps {
  value?: string | number
  size?: 'sm' | 'lg'
  severity?: BadgeSeverity
  location?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  bordered?: boolean
  max?: number
}

export type badgeClasses = (string | { [key: string]: boolean })[]
