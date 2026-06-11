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
            <img v-if="item.image" :src="item.image" :alt="item.alt" />
            <div v-else class="tl-image-placeholder"></div>
          </div>
          <div class="tl-dot"></div>
          <div class="tl-content">
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
import primeiraViagem from '@/assets/Timeline/primeira viagem.jpeg'
import primeiroEncontro from '@/assets/Timeline/primeiro encontro.jpeg'
import pedidoDeNamoro from '@/assets/Timeline/pedido de namoro.jpeg'

const headRef = useReveal()
const itemRefs = ref([])

const items = [
  {
    side: 'right',
    title: 'O primeiro <em>encontro</em>',
    text: 'Depois de meses conversando, tivemos nosso primeiro encontro.',
    image: primeiroEncontro,
    alt: 'Foto do primeiro encontro',
  },
  {
    side: 'left',
    title: '<em>Pedido</em> de namoro',
    text: 'E conhecendo a Victoria, não demorou muito para que eu percebesse que queria estar com ela. Então, em um dia especial, fiz o pedido de namoro.',
    image: pedidoDeNamoro,
    alt: 'Foto do pedido de namoro',
  },
  {
    side: 'right',
    title: 'A primeira <em>viagem</em>',
    text: 'Em 2023, fomos para Curitiba, a cidade em que a Victoria morou por um tempo. Foi a primeira viagem que fizemos juntos.',
    image: primeiraViagem,
    alt: 'Foto da primeira viagem',
  },
  {
    side: 'left',
    title: 'O <em>pedido</em>',
    text: '? ...',
    image: undefined,
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
