import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target: HTMLElement, event: string, callback: () => void) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
