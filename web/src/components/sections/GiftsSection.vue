<template>
  <section class="block" id="presentes">
    <div class="wrap-narrow">
      <div class="block-head reveal" ref="headRef">
        <div class="eyebrow">Se quiserem nos presentear</div>
        <h2 class="section-title">Uma lista <em>pensada</em>.</h2>
        <p class="lede">A presença de vocês já é o que importa. Mas, se fizer sentido, aqui está uma lista do que sonhamos para o que vem depois.</p>
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
        Para contribuir, escreva para <a href="mailto:ianevictoria@email.com">ianevictoria@email.com</a> — enviamos os dados do Pix e a confirmação da cota.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal.js'

const headRef = useReveal()
const giftsRef = useReveal()

const gifts = [
  { num: '01', name: 'Lua de mel · Lisboa', desc: 'Sete noites em Alfama, com vista para o Tejo', price: 'R$ 1.480', note: 'Cota livre' },
  { num: '02', name: 'Jantar em Sintra', desc: 'Uma noite e jantar de degustação a dois', price: 'R$ 720', note: '1 disponível' },
  { num: '03', name: 'Jogo de panelas', desc: 'Para os nossos próximos anos de cozinha juntos', price: 'R$ 980', note: '1 disponível' },
  { num: '04', name: 'Estante de marcenaria', desc: 'Para receber os livros que ainda vamos comprar', price: 'R$ 2.400', note: '1 disponível' },
  { num: '05', name: 'Aula de cerâmica', desc: 'Curso de fim de semana, porque sempre quisemos', price: 'R$ 420', note: 'Cota livre' },
  { num: '06', name: 'Pix · contribuição livre', desc: 'Qualquer valor, com carinho', price: 'Qualquer valor', note: 'Aberto' },
]
</script>
