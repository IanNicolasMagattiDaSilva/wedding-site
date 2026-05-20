<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center bg-ivory text-charcoal overflow-hidden">
    <p class="uppercase tracking-[0.35em] text-xs text-stone mb-10">
      Convidamos para celebrar
    </p>

    <h1 class="font-serif font-light text-center leading-none select-none" style="font-size: clamp(4rem, 12vw, 9rem);">
      {{ wedding.names.person1 }}<br />
      <span class="italic text-gold">&</span><br />
      {{ wedding.names.person2 }}
    </h1>

    <div class="w-12 h-px bg-gold my-10" />

    <p class="uppercase tracking-[0.25em] text-sm text-stone">
      {{ wedding.dateDisplay }}
    </p>
    <p class="text-stone text-sm mt-1 tracking-wider">
      {{ wedding.location }}
    </p>

    <div class="absolute bottom-10 flex flex-col items-center gap-1 text-stone/50">
      <span class="uppercase tracking-widest text-[10px]">scroll</span>
      <div class="w-px h-10 bg-gold/30" />
    </div>
  </section>
</template>

<script setup>
import { wedding } from '@/config/wedding.js'
</script>
