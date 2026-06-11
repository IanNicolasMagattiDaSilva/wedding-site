<template>
  <section class="block" id="local">
    <div class="wrap">
      <div class="block-head reveal" ref="headRef">
        <div class="eyebrow">Onde celebraremos</div>
        <h2 class="section-title">O <em>encontro</em>.</h2>
      </div>

      <div class="venue reveal" ref="venueRef">
        <div class="venue-image">
          <img :src="locationImage" alt="Espaço Porto São Jorge" />
          <div class="caption">Espaço Porto São Jorge, São Bernardo do Campo</div>
        </div>
        <div class="venue-info">
          <h3 class="v-name">Porto <em>São Jorge</em></h3>
          <div class="v-table">
            <div class="row">
              <div class="k">Endereço</div>
              <div class="v">
                Estrada dos Camponeses, 800
                <small>Finco · São Bernardo do Campo, SP · 09831-690</small>
              </div>
            </div>
            <div class="row">
              <div class="k">Cerimônia</div>
              <div class="v">
                16h00
                <small>Ao ar livre, de frente para a represa. Pedimos chegada com 30 minutos de antecedência.</small>
              </div>
            </div>
            <div class="row">
              <div class="k">Recepção</div>
              <div class="v">
                A seguir, no mesmo local
                <small>Espaço coberto com varanda para a represa · jantar e festa.</small>
              </div>
            </div>
            <div class="row">
              <div class="k">Estacionamento</div>
              <div class="v">
                Amplo estacionamento interno
                <small>Dentro da propriedade. Sem custo adicional.</small>
              </div>
            </div>
            <div class="row">
              <div class="k">Como chegar</div>
              <div class="v">
                35 min de São Paulo capital
                <small>Acesso fácil por duas grandes estradas.</small>
              </div>
            </div>
          </div>
          <a class="venue-cta" href="https://www.google.com/maps/place/Estr.+dos+Camponeses,+800+-+Finco,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09831-690/@-23.7828062,-46.5440257,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce3f89e0c6c119:0xb8b3b802f02b53d7!8m2!3d-23.7828111!4d-46.5414508!16s%2Fg%2F11h16019fg?entry=ttu&g_ep=EgoyMDI2MDYwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
            Abrir no mapa <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal.js'
import locationImage from '@/assets/Location/espaco-porto-foto-023.jpg'

const headRef = useReveal()
const venueRef = useReveal()
</script>
