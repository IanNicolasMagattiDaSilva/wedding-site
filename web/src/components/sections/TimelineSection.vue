<template>
  <section class="block" style="padding-top: 0">
    <div class="wrap-narrow">
      <div class="block-head reveal" ref="headRef">
        <div class="eyebrow">Quatro instantes</div>
        <h2 class="section-title">Uma <em>linha do tempo</em>.</h2>
      </div>
      <div class="timeline">
        <div
          v-for="(item, i) in items"
          :key="i"
          :ref="(el) => setItemRef(el, i)"
          :class="['tl-item reveal', item.side]"
        >
          <div class="tl-image">
            <img :src="item.image" :alt="item.alt" />
          </div>
          <div class="tl-dot"></div>
          <div class="tl-content">
            <div class="when">{{ item.when }}</div>
            <h4 v-html="item.title"></h4>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useReveal } from '@/composables/useReveal.js'
import primeiraViagem from '@/assets/Timeline/parque de curtibia.jpeg'
import primeiroEncontro from '@/assets/Timeline/WhatsApp Image 2026-05-23 at 19.27.27.jpeg'
import mudamosJuntos from '@/assets/Timeline/WhatsApp Image 2026-05-23 at 19.27.27 (1).jpeg'
import pedido from '@/assets/Timeline/WhatsApp Image 2026-05-23 at 19.27.27 (2).jpeg'

const headRef = useReveal()
const itemRefs = ref([])

const items = [
  {
    side: 'right',
    when: 'Julho · 2020',
    title: 'O primeiro <em>encontro</em>',
    text: 'Depois de meses conversando, tivemos nosso primeiro encontro.',
    image: primeiroEncontro,
    alt: 'Foto do primeiro encontro',
  },
  {
    side: 'left',
    when: 'Dezembro · 2023',
    title: 'A primeira <em>viagem</em>',
    text: 'Em 2023, fomos para Curitiba, a cidade em que a Victoria morou por um tempo. Foi a primeira viagem que fizemos juntos.',
    image: primeiraViagem,
    alt: 'Foto da primeira viagem',
  },
  {
    side: 'right',
    when: 'Março · 2025',
    title: '<em>Mudamos</em> juntos',
    text: '',
    image: mudamosJuntos,
    alt: 'Foto de quando mudaram juntos',
  },
  {
    side: 'left',
    when: 'Agosto · 2026',
    title: 'O <em>pedido</em>',
    text: 'Numa varanda, ao fim da tarde, sem plateia. O sim mais fácil.',
    image: pedido,
    alt: 'Foto do pedido',
  },
]

function setItemRef(el, i) {
  if (el) itemRefs.value[i] = el
}

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  itemRefs.value.forEach((el) => { if (el) io.observe(el) })
})
</script>
