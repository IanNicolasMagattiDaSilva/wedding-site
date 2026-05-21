<template>
  <section
    class="block"
    id="rsvp"
    style="background: var(--paper); border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule);"
  >
    <div class="wrap">
      <div class="rsvp reveal" ref="el">
        <template v-if="!sent">
          <div class="eyebrow">Confirme presença</div>
          <h2>Esperamos por <em>você</em>.</h2>
          <p class="intro">Por favor, confirme até 30 de setembro de 2027 — precisamos contar com vocês para o jantar.</p>

          <form class="rsvp-form" @submit.prevent="submit">
            <div class="field">
              <label for="rsvp-name">Como devemos te chamar?</label>
              <input id="rsvp-name" type="text" placeholder="Seu nome completo" v-model="name" required />
            </div>

            <div class="field">
              <label>Você poderá ir?</label>
              <div class="choice-row">
                <button
                  type="button"
                  :class="['choice', attending === true ? 'is-active' : '']"
                  @click="attending = true"
                >
                  Sim, <em>com alegria</em>
                </button>
                <button
                  type="button"
                  :class="['choice', attending === false ? 'is-active' : '']"
                  @click="attending = false"
                >
                  Infelizmente, <em>não</em>
                </button>
              </div>
            </div>

            <div v-if="attending === true" class="field">
              <label>Vai levar acompanhante?</label>
              <div class="choice-row">
                <button
                  type="button"
                  :class="['choice', plusOne === true ? 'is-active' : '']"
                  @click="plusOne = true"
                >
                  Sim, <em>+1</em>
                </button>
                <button
                  type="button"
                  :class="['choice', plusOne === false ? 'is-active' : '']"
                  @click="plusOne = false"
                >
                  Vou <em>sozinho(a)</em>
                </button>
              </div>
            </div>

            <button class="submit" type="submit">
              Enviar confirmação <span class="arrow">→</span>
            </button>
          </form>
        </template>

        <div v-else class="rsvp-success">
          <div class="eyebrow">Recebemos sua resposta</div>
          <h3 style="margin-top: 24px">Obrigado, <em>{{ firstName }}</em>.</h3>
          <p>
            {{
              attending
                ? 'Que alegria saber que você estará lá. Em breve enviamos os detalhes do dia por e-mail.'
                : 'Vamos sentir sua falta — mas obrigado por avisar. Contaremos tudo depois, com fotos.'
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useReveal } from '@/composables/useReveal.js'

const el = useReveal()
const name = ref('')
const attending = ref(null)
const plusOne = ref(null)
const sent = ref(false)

const firstName = computed(() => name.value.split(' ')[0])

function submit() {
  if (!name.value.trim() || attending.value === null) return
  if (attending.value && plusOne.value === null) return
  sent.value = true
}
</script>
