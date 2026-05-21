<template>
  <nav :class="['nav', stuck ? 'is-stuck' : '']">
    <div class="wrap nav-inner">
      <a href="#top" class="nav-mark">Ian <span class="amp">&amp;</span> Victoria</a>
      <div class="nav-links">
        <a href="#historia">História</a>
        <a href="#galeria">Galeria</a>
        <a href="#local">Local</a>
        <a href="#dress">Dress code</a>
        <a href="#presentes">Presentes</a>
      </div>
      <a class="nav-rsvp" href="#rsvp">Confirmar</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stuck = ref(false)

function onScroll() {
  stuck.value = window.scrollY > 32
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
