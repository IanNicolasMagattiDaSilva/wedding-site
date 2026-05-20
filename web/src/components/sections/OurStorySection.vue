<template>
  <section class="py-28 bg-ivory">
    <div class="max-w-2xl mx-auto px-6">
      <div class="text-center mb-20">
        <p class="uppercase tracking-[0.35em] text-xs text-stone mb-4">Nossa história</p>
        <div class="w-8 h-px bg-gold mx-auto" />
      </div>

      <div class="relative">
        <div class="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gold/25" />

        <div
          v-for="(item, index) in wedding.story"
          :key="item.year"
          class="relative flex gap-10 mb-16 last:mb-0"
          :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
        >
          <div class="w-1/2" :class="index % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'">
            <p class="font-serif italic text-gold text-xl mb-2">{{ item.year }}</p>
            <h3 class="font-serif font-light text-charcoal text-xl mb-3">{{ item.title }}</h3>
            <p class="text-stone text-sm leading-relaxed">{{ item.text }}</p>
          </div>

          <div class="absolute left-1/2 -translate-x-1/2 top-1 w-2.5 h-2.5 rounded-full border border-gold bg-ivory" />

          <div class="w-1/2" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { wedding } from '@/config/wedding.js'
</script>
