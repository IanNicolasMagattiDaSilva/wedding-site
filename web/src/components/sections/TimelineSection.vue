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
          <div class="tl-image"></div>
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

const headRef = useReveal()
const itemRefs = ref([])

const items = [
  { side: 'right', when: 'Julho · 2022', title: 'O primeiro <em>encontro</em>', text: 'Vila Madalena, num bar que já fechou. Foi o suficiente.' },
  { side: 'left', when: 'Dezembro · 2023', title: 'A primeira <em>viagem</em>', text: 'Lençóis Maranhenses, sem plano, com mochila e sorte.' },
  { side: 'right', when: 'Março · 2025', title: '<em>Mudamos</em> juntos', text: 'Um apartamento pequeno, livros demais, plantas que sobreviveram.' },
  { side: 'left', when: 'Agosto · 2026', title: 'O <em>pedido</em>', text: 'Numa varanda, ao fim da tarde, sem plateia. O sim mais fácil.' },
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
