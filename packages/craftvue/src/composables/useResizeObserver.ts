import { Ref, ref, toValue, watch } from 'vue'

export interface ResizeObserverReturn {
  stop: () => void
}

export function useResizeObserver(
  target: HTMLElement | Ref<HTMLElement | null> | (() => HTMLElement | null) | null,
  callback: ResizeObserverCallback,
): ResizeObserverReturn {
  const observer = ref<ResizeObserver | null>(null)

  const cleanup = () => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
    }
  }

  const stopWatch = watch(
    () => toValue(target),
    (el) => {
      cleanup()
      if (el) {
        observer.value = new ResizeObserver(callback)
        observer.value.observe(el)
      }
    },
    {
      immediate: true,
    },
  )

  const stop = () => {
    cleanup()
    stopWatch()
  }

  return {
    stop,
  }
}
