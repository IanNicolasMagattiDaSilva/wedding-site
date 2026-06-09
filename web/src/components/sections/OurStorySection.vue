<template>
  <section class="block" id="historia">
    <div class="wrap">
      <div class="block-head reveal" ref="headRef">
        <div class="eyebrow">Capítulo Primeiro</div>
        <h2 class="section-title">Nossa <em>história</em>, em poucas palavras.</h2>
      </div>

      <div class="story reveal" ref="storyRef">
        <div class="story-img">
          <img
            :src="imagemCasal"
            alt="Foto de Ian e Victoria sorrindo, abraçados, em um parque. Ela tem cabelo curto e veste uma blusa listrada. Ele tem cabelo curto e veste uma camisa azul."
          />
          <div class="frame-num">FIG. 01 — 2020</div>
        </div>
        <div class="story-text">
          <div class="eyebrow">Como começou</div>
          <h3>Um <em>encontro</em> que durou anos.</h3>
          <p>
            Nos conhecemos no inverno de 2020, trocando mensagens durante pandemia, entre conversas e risos, nossa conexão cresceu a cada dia, mesmo à distância. 
          </p>
          <p>
            Vieram as conversas longas, as viagens curtas, os planos sussurrados em cozinhas alheias. Cinco anos depois, decidimos que era hora — e queremos que vocês estejam por perto quando a gente disser sim.
          </p>
          <div class="story-sig">&amp;</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal.js'
import imagemCasal from '../../assets/Timeline/parque de curtibia.jpeg'

const headRef = useReveal()
const storyRef = useReveal()
</script>
