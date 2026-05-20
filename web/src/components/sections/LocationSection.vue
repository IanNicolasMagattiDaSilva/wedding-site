<template>
  <section class="py-28 bg-ivory">
    <div class="max-w-3xl mx-auto px-6">
      <div class="text-center mb-20">
        <p class="uppercase tracking-[0.35em] text-xs text-stone mb-4">Locais</p>
        <div class="w-8 h-px bg-gold mx-auto" />
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="venue in venues"
          :key="venue.label"
          class="border border-gold/20 p-10 text-center"
        >
          <p class="uppercase tracking-[0.3em] text-xs text-gold mb-6">{{ venue.label }}</p>
          <h3 class="font-serif font-light text-charcoal text-xl mb-4 leading-snug">
            {{ venue.name }}
          </h3>
          <div class="w-6 h-px bg-gold/40 mx-auto mb-4" />
          <p class="text-stone text-sm leading-relaxed mb-2">{{ venue.address }}</p>
          <p class="font-serif italic text-gold text-sm mb-6">{{ venue.time }}</p>
          <a
            :href="venue.mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block uppercase tracking-[0.2em] text-[11px] text-charcoal border-b border-charcoal/30 pb-px hover:border-gold hover:text-gold transition-colors"
          >
            Ver no mapa
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { wedding } from '@/config/wedding.js'

const venues = [
  { label: 'Cerimônia', ...wedding.venues.ceremony },
  { label: 'Recepção', ...wedding.venues.reception },
]
</script>
