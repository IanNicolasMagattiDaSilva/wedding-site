import { ref, onMounted } from 'vue'

export function useReveal(threshold = 0.12) {
  const el = ref(null)

  onMounted(() => {
    if (!el.value) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.value.classList.add('is-in')
            io.unobserve(el.value)
          }
        })
      },
      { threshold }
    )
    io.observe(el.value)
  })

  return el
}
