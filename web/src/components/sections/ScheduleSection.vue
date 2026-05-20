<template>
  <section class="py-28 bg-ivory-dark">
    <div class="max-w-md mx-auto px-6">
      <div class="text-center mb-20">
        <p class="uppercase tracking-[0.35em] text-xs text-stone mb-4">Programação</p>
        <div class="w-8 h-px bg-gold mx-auto" />
      </div>

      <ul class="space-y-0">
        <li
          v-for="(item, index) in wedding.schedule"
          :key="index"
          class="flex items-center gap-8 py-6 border-b border-gold/15 last:border-b-0"
        >
          <span class="font-serif italic text-gold text-lg w-14 shrink-0 text-right">
            {{ item.time }}
          </span>
          <div class="w-px h-6 bg-gold/30 shrink-0" />
          <span class="font-light text-charcoal tracking-wide">{{ item.event }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { wedding } from '@/config/wedding.js'
</script>
