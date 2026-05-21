<template>
  <section class="block" id="local">
    <div class="wrap">
      <div class="block-head reveal" ref="headRef">
        <div class="eyebrow">Onde celebraremos</div>
        <h2 class="section-title">O <em>encontro</em>.</h2>
      </div>

      <div class="venue reveal" ref="venueRef">
        <div class="venue-image">
          <div class="caption">Casa Florença, Jardim Europa</div>
        </div>
        <div class="venue-info">
          <h3 class="v-name">Casa <em>Florença</em></h3>
          <div class="v-table">
            <div class="row">
              <div class="k">Endereço</div>
              <div class="v">
                Rua Cônego Eugênio Leite, 920
                <small>Pinheiros · São Paulo, SP · 05414-001</small>
              </div>
            </div>
            <div class="row">
              <div class="k">Cerimônia</div>
              <div class="v">
                16h00
                <small>Pedimos chegada com 30 minutos de antecedência.</small>
              </div>
            </div>
            <div class="row">
              <div class="k">Recepção</div>
              <div class="v">
                A seguir, no mesmo local
                <small>Coquetel no jardim · jantar e festa no salão.</small>
              </div>
            </div>
            <div class="row">
              <div class="k">Estacionamento</div>
              <div class="v">
                Valet exclusivo
                <small>Operando das 14h às 03h. Sem custo adicional.</small>
              </div>
            </div>
            <div class="row">
              <div class="k">Aeroporto</div>
              <div class="v">
                GRU · 35 min de carro
                <small>CGH · 25 min. Indicamos chegar na véspera.</small>
              </div>
            </div>
          </div>
          <a class="venue-cta" href="https://maps.google.com" target="_blank" rel="noreferrer">
            Abrir no mapa <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal.js'

const headRef = useReveal()
const venueRef = useReveal()
</script>
