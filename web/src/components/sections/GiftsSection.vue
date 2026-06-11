<template>
  <section class="block" id="presentes">
    <div class="wrap-narrow">
      <div class="block-head reveal" ref="headRef">
        <div class="eyebrow">Se quiserem nos presentear</div>
        <h2 class="section-title">Uma lista <em>pensada</em>.</h2>
        <p class="lede">A presença de vocês é o que importa para nós. Mas, se fizer sentido, aqui está uma lista do que nos ajudara para o que vem depois.</p>
      </div>

      <div class="gifts reveal" ref="giftsRef">
        <div v-for="gift in gifts" :key="gift.num" class="gift">
          <div class="num">{{ gift.num }}</div>
          <div class="name">{{ gift.name }}</div>
          <div class="desc">{{ gift.desc }}</div>
          <div class="price">
            {{ gift.price }}
            <small>{{ gift.note }}</small>
          </div>
        </div>
      </div>

      <p class="gifts-foot">
        Para contribuir, escreva para <a href="mailto:nicolas.magatti@gmail.com">nicolas.magatti@gmail.com</a> — enviamos os dados do Pix e a confirmação da cota.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal.js'

const headRef = useReveal()
const giftsRef = useReveal()

const gifts = [
  { num: '01', name: 'Lua de mel', desc: 'Para nos ajudar a passar mais dias na lua de mel', price: 'R$ 1.480', note: 'Cota livre' },
  { num: '02', name: 'Mesa de jantar', desc: 'Para recebermos toda familia e amigos', price: 'R$ 720', note: '1 disponível' },
  { num: '03', name: 'Jogo de panelas', desc: 'Para os nossos próximos anos de cozinha juntos', price: 'R$ 980', note: '1 disponível' },
  { num: '04', name: 'Estante de marcenaria', desc: 'Para realizar um sonho nosso de ter um estande com vários livros.', price: 'R$ 1.500', note: '1 disponível' },
  { num: '05', name: 'Ajuda no casamento', desc: 'Para nos ajudar com os custos do casamento', price: 'Qualquer valor', note: 'Cota livre' },
  { num: '06', name: 'Pix · contribuição livre', desc: 'Qualquer valor, com carinho', price: 'Qualquer valor', note: 'Aberto' },
]
</script>
