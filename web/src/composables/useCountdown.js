import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useCountdown(targetISO) {
  const now = ref(Date.now())
  let timer

  onMounted(() => {
    timer = setInterval(() => { now.value = Date.now() }, 1000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })

  const pad = (n, w = 2) => String(n).padStart(w, '0')

  const day = computed(() => {
    const target = new Date(targetISO).getTime()
    const diff = Math.max(0, target - now.value)
    return pad(Math.floor(diff / 86400000), 3)
  })

  const hr = computed(() => {
    const target = new Date(targetISO).getTime()
    let diff = Math.max(0, target - now.value)
    diff -= Math.floor(diff / 86400000) * 86400000
    return pad(Math.floor(diff / 3600000))
  })

  const min = computed(() => {
    const target = new Date(targetISO).getTime()
    let diff = Math.max(0, target - now.value)
    diff -= Math.floor(diff / 86400000) * 86400000
    diff -= Math.floor(diff / 3600000) * 3600000
    return pad(Math.floor(diff / 60000))
  })

  const sec = computed(() => {
    const target = new Date(targetISO).getTime()
    let diff = Math.max(0, target - now.value)
    diff -= Math.floor(diff / 86400000) * 86400000
    diff -= Math.floor(diff / 3600000) * 3600000
    diff -= Math.floor(diff / 60000) * 60000
    return pad(Math.floor(diff / 1000))
  })

  return { day, hr, min, sec }
}
