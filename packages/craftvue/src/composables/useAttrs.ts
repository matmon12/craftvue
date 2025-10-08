import { debugWarn } from '@/utils'
import { fromPairs } from 'lodash'
import { computed, ComputedRef, getCurrentInstance } from 'vue'

interface Params {
  excludeListeners?: boolean
  excludeKeys?: ComputedRef<string[]>
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTENER_PREFIX = /^on[A-Za-z]/

export function useAttrs<T = Record<string, unknown>>(
  params: Params = {},
): ComputedRef<Partial<T>> {
  const { excludeListeners = false, excludeKeys } = params
  const allExcludeKeys = computed<string[]>(() => {
    return (excludeKeys?.value || []).concat(DEFAULT_EXCLUDE_KEYS)
  })

  const instance = getCurrentInstance()
  if (!instance) {
    debugWarn('use-attrs', 'useAttrs must be called in setup')
    return computed(() => ({}) as Partial<T>)
  }

  return computed(() => {
    const attrs = instance.proxy?.$attrs
    if (!attrs) return {} as Partial<T>

    return fromPairs(
      Object.entries(attrs).filter(
        ([key]) =>
          !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key)),
      ),
    ) as Partial<T>
  })
}
