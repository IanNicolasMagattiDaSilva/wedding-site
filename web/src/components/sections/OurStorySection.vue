<template>
  <section class="block" id="historia">
    <div class="wrap">
      <div class="block-head reveal" ref="headRef">
        <div class="eyebrow">Capítulo Primeiro</div>
        <h2 class="section-title">Nossa <em>história</em>, em poucas palavras.</h2>
      </div>

      <div class="story reveal" ref="storyRef">
        <div class="story-img">
          <div class="frame-num">FIG. 01 — 2022</div>
        </div>
        <div class="story-text">
          <div class="eyebrow">Como começou</div>
          <h3>Um <em>encontro</em> que durou anos.</h3>
          <p>
            A gente se conheceu no inverno de 2022, numa daquelas noites em que São Paulo parece interior — calma demais, frio demais para um sábado. O Ian apareceu de jaqueta emprestada. A Victoria, com um livro debaixo do braço que ele fingiu já ter lido.
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

const headRef = useReveal()
const storyRef = useReveal()
</script>
