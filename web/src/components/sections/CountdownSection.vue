<template>
  <section class="py-24 bg-gold-light">
    <div class="max-w-2xl mx-auto px-6 text-center">
      <p class="uppercase tracking-[0.35em] text-xs text-stone mb-16">Faltam</p>

      <div class="grid grid-cols-4 gap-6">
        <div v-for="unit in units" :key="unit.label" class="flex flex-col items-center">
          <span class="font-serif font-light text-charcoal" style="font-size: clamp(2.5rem, 8vw, 4.5rem); line-height: 1;">
            {{ String(unit.value).padStart(2, '0') }}
          </span>
          <span class="uppercase tracking-[0.2em] text-[10px] text-stone mt-4">
            {{ unit.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { wedding } from '@/config/wedding.js'
import { useCountdown } from '@/composables/useCountdown.js'

const { days, hours, minutes, seconds } = useCountdown(wedding.date)

const units = computed(() => [
  { value: days.value, label: 'Dias' },
  { value: hours.value, label: 'Horas' },
  { value: minutes.value, label: 'Min' },
  { value: seconds.value, label: 'Seg' },
])
</script>
