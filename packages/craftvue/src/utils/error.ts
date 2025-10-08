import { isString } from '@/types/guards'

class CraftVueError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CraftVueError'
  }
}

export const throwError = (scope: string, message: string): never => {
  throw new CraftVueError(`[${scope}] ${message}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope) ? new CraftVueError(`[${scope}] ${message}`) : scope
    console.warn(error)
  }
}
