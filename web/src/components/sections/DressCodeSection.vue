<template>
  <section class="block" id="dress">
    <div class="wrap">
      <div class="block-head reveal" ref="headRef">
        <div class="eyebrow">O que vestir</div>
        <h2 class="section-title"><em>Black tie</em> opcional.</h2>
      </div>

      <div class="dress reveal" ref="dressRef">
        <div class="dress-visual">
          <div class="moodboard">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
          </div>
        </div>

        <div class="dress-info">
          <div class="eyebrow">Inspiração</div>
          <h3>Elegante, <em>sem rigidez</em>.</h3>
          <p>
            Pense em vestido longo, midi, terno escuro ou smoking. A casa é sóbria, a noite começa cedo e termina tarde — então conforto importa tanto quanto a foto.
          </p>

          <div class="palette-block">
            <div class="label">Paleta sugerida</div>
            <div class="palette-swatches">
              <div class="sw" style="background: #1a1814"><span class="name">Tinta</span></div>
              <div class="sw" style="background: #4a3e30"><span class="name">Cacau</span></div>
              <div class="sw" style="background: #7a5a3a"><span class="name">Avelã</span></div>
              <div class="sw" style="background: #b9985c"><span class="name">Champanhe</span></div>
              <div class="sw light" style="background: #d8cdb0"><span class="name">Areia</span></div>
            </div>
          </div>

          <div class="dress-rules">
            <div class="r">
              <span class="h">Sim</span>
              <p>Longo, midi, terno escuro, paleta sugerida, sapato confortável.</p>
            </div>
            <div class="r">
              <span class="h">Evite</span>
              <p>Branco, off-white e nude — reservados para a noiva.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal.js'

const headRef = useReveal()
const dressRef = useReveal()
</script>
