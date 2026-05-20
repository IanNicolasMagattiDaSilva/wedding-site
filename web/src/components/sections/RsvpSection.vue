<template>
  <section class="py-28 bg-gold-light">
    <div class="max-w-md mx-auto px-6">
      <div class="text-center mb-16">
        <p class="uppercase tracking-[0.35em] text-xs text-stone mb-4">Confirmação</p>
        <div class="w-8 h-px bg-gold mx-auto mb-8" />
        <h2 class="font-serif font-light text-charcoal text-3xl">Você vai?</h2>
        <p class="text-stone text-sm mt-4 leading-relaxed">
          Confirme sua presença até <span class="text-charcoal">01 de Outubro de 2026</span>.
        </p>
      </div>

      <form v-if="!submitted" @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block uppercase tracking-[0.2em] text-[11px] text-stone mb-2">Nome completo</label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Seu nome"
            class="w-full bg-ivory border-b border-gold/40 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <div>
          <label class="block uppercase tracking-[0.2em] text-[11px] text-stone mb-2">Acompanhantes</label>
          <input
            v-model="form.guests"
            type="number"
            min="0"
            max="5"
            placeholder="0"
            class="w-full bg-ivory border-b border-gold/40 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <div class="flex gap-4 pt-2">
          <label
            v-for="option in attendanceOptions"
            :key="option.value"
            class="flex items-center gap-2 cursor-pointer text-sm text-stone select-none"
          >
            <input
              v-model="form.attending"
              type="radio"
              :value="option.value"
              class="accent-gold"
            />
            {{ option.label }}
          </label>
        </div>

        <button
          type="submit"
          class="w-full mt-6 py-4 uppercase tracking-[0.25em] text-xs text-ivory bg-charcoal hover:bg-gold transition-colors"
        >
          Confirmar presença
        </button>
      </form>

      <div v-else class="text-center py-8">
        <div class="w-8 h-px bg-gold mx-auto mb-8" />
        <p class="font-serif font-light text-charcoal text-2xl mb-3">
          {{ form.attending ? 'Até lá!' : 'Sentiremos sua falta.' }}
        </p>
        <p class="text-stone text-sm">
          {{ form.attending
            ? 'Obrigado pela confirmação. Mal podemos esperar para celebrar com você!'
            : 'Obrigado por nos avisar.' }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  guests: 0,
  attending: true,
})

const attendanceOptions = [
  { value: true, label: 'Vou comparecer' },
  { value: false, label: 'Não poderei ir' },
]

function handleSubmit() {
  // TODO: enviar dados para o backend
  submitted.value = true
}
</script>
