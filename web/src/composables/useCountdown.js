import { ref, onMounted, onUnmounted } from 'vue'

export function useCountdown(targetDate) {
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  let timer = null

  function tick() {
    const now = Date.now()
    const diff = new Date(targetDate).getTime() - now

    if (diff <= 0) {
      days.value = hours.value = minutes.value = seconds.value = 0
      clearInterval(timer)
      return
    }

    days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
  }

  onMounted(() => {
    tick()
    timer = setInterval(tick, 1000)
  })

  onUnmounted(() => clearInterval(timer))

  return { days, hours, minutes, seconds }
}
