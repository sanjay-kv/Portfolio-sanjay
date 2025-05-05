// Utility: Throttle function
export const throttle = (fn: () => void, wait: number) => {
  let timeout: NodeJS.Timeout | null = null
  return () => {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn()
        timeout = null
      }, wait)
    }
  }
}
