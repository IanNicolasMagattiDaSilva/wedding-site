<template>
  <section class="countdown reveal" ref="el">
    <div class="wrap">
      <div class="cd-label eyebrow-sm">Faltam</div>
      <div class="cd-grid">
        <div class="cd-cell"><span class="n">{{ day }}</span><span class="u">Dias</span></div>
        <div class="cd-sep">·</div>
        <div class="cd-cell"><span class="n">{{ hr }}</span><span class="u">Horas</span></div>
        <div class="cd-sep">·</div>
        <div class="cd-cell"><span class="n">{{ min }}</span><span class="u">Min</span></div>
        <div class="cd-sep">·</div>
        <div class="cd-cell"><span class="n">{{ sec }}</span><span class="u">Seg</span></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal.js'
import { useCountdown } from '@/composables/useCountdown.js'

const el = useReveal()
const { day, hr, min, sec } = useCountdown('2027-11-07T16:00:00-03:00')
</script>
