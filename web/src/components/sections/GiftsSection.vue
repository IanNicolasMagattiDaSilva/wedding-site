<template>
  <section class="py-28 bg-ivory">
    <div class="max-w-2xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="uppercase tracking-[0.35em] text-xs text-stone mb-4">Presentes</p>
        <div class="w-8 h-px bg-gold mx-auto mb-8" />
        <h2 class="font-serif font-light text-charcoal text-3xl">Lista de presentes</h2>
        <p class="text-stone text-sm mt-4 leading-relaxed max-w-xs mx-auto">
          Sua presença já é o maior presente. Mas se quiser nos presentear, escolha com carinho.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        <a
          v-for="gift in wedding.gifts"
          :key="gift.name"
          :href="gift.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group border border-gold/20 p-8 text-center hover:border-gold/50 hover:bg-gold-light transition-all"
        >
          <p class="font-serif font-light text-charcoal text-lg mb-2 group-hover:text-gold transition-colors">
            {{ gift.name }}
          </p>
          <p class="text-stone text-xs tracking-wide">{{ gift.description }}</p>
          <div class="w-4 h-px bg-gold mx-auto mt-5 group-hover:w-8 transition-all" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { wedding } from '@/config/wedding.js'
</script>
