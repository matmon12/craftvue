export interface BadgeProps {
  value?: string | number
  size?: 'sm' | 'lg'
  severity?: 'primary' | 'secondary' | 'contrast'
  location?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  bordered?: boolean
  max?: number
}

export type badgeClasses = (string | { [key: string]: boolean })[]
