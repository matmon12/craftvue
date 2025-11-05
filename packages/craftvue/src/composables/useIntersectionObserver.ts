import { tryOnScopeDispose } from '@/utils'
import { ref, Ref, toValue, watch } from 'vue'

export interface IntersectionObserverReturn {
  isActive: Ref<boolean>
  stop: () => void
  pause: () => void
  resume: () => void
}

export function useIntersectionObserver(
  target: HTMLElement | Ref<HTMLElement | null> | (() => HTMLElement | null) | null,
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit & { immediate?: boolean } = {},
): IntersectionObserverReturn {
  const { root = null, rootMargin = '10px', threshold = 0, immediate = true } = options

  const isActive = ref<boolean>(immediate)
  let observer: IntersectionObserver | null = null

  const stop = () => {
    cleanup()
    stopWatch()
    isActive.value = false
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  const stopWatch = watch(
    () => [toValue(target), root, isActive.value] as const,
    ([targetElement, rootElement, active]) => {
      cleanup()

      if (!active || !targetElement) return

      observer = new IntersectionObserver(callback, {
        root: rootElement,
        rootMargin,
        threshold: Array.isArray(threshold) ? threshold : [threshold],
      })

      observer.observe(targetElement)
    },
    {
      immediate,
      flush: 'post', // выполняется после обновления DOM (после рендера компонента)
    },
  )

  tryOnScopeDispose(stop)

  return {
    isActive,
    pause() {
      cleanup()
      isActive.value = false
    },
    resume() {
      isActive.value = true
    },
    stop,
  }
}
