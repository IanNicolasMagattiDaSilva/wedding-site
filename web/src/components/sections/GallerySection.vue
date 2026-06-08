<template>
  <section class="block" id="galeria">
    <div class="wrap">
      <div class="block-head reveal" ref="headRef">
        <div class="eyebrow">Em imagens</div>
        <h2 class="section-title">Uma seleção <em>nossa</em>.</h2>
        <p class="lede">Pré-wedding na Mantiqueira, um fim de semana em janeiro, e a vida do dia a dia que pediu para entrar no recorte.</p>
      </div>

      <div class="gallery reveal" ref="galleryRef">
        <div
          v-for="(slot, i) in slots"
          :key="slot.id"
          :class="['g', slot.cls]"
          @click="open = i"
        >
          <img :src="slot.src" :alt="slot.alt" loading="lazy" />
          <span class="g-num">{{ slot.label }}</span>
        </div>
      </div>
    </div>

    <div :class="['lightbox', open >= 0 ? 'is-open' : '']" @click="open = -1">
      <div class="lightbox-stage" @click.stop>
        <button class="lightbox-close" @click="open = -1" aria-label="Fechar">✕</button>
        <button class="lightbox-nav prev" @click="prev" aria-label="Anterior">←</button>
        <img
          v-if="open >= 0"
          class="lightbox-img"
          :src="slots[open].src"
          :alt="slots[open].alt"
        />
        <button class="lightbox-nav next" @click="next" aria-label="Próxima">→</button>
        <div v-if="open >= 0" class="lightbox-count">
          {{ String(open + 1).padStart(2, '0') }} / {{ String(slots.length).padStart(2, '0') }} · {{ slots[open].label }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useReveal } from '../../composables/useReveal'

const headRef = useReveal()
const galleryRef = useReveal()

const galleryImages = Object.entries(
  import.meta.glob('@/assets/Galeria/*.{jpeg,jpg,png,webp}', {
    eager: true,
    import: 'default',
  }),
).sort(([a], [b]) => a.localeCompare(b))

const slots = galleryImages.map(([path, src], index) => {
  const number = String(index + 1).padStart(2, '0')

  return {
    id: `g-${index + 1}`,
    cls: `g${(index % 7) + 1}`,
    label: number,
    src,
    alt: `Foto ${number} da galeria de Ian e Victoria`,
  }
})

const open = ref(-1)

function prev() { open.value = (open.value - 1 + slots.length) % slots.length }
function next() { open.value = (open.value + 1) % slots.length }

function onKey(e) {
  if (e.key === 'Escape') open.value = -1
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

watch(open, (val) => {
  if (val >= 0) {
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
  } else {
    window.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>
