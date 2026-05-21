<template>
  <section class="fullbleed reveal" ref="el">
    <div class="fb-quote">
      <div class="quote">
        "{{ quote }}"
        <span class="attr">{{ attr }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal.js'

defineProps({
  quote: { type: String, required: true },
  attr: { type: String, required: true },
})

const el = useReveal()
</script>
