<template>
  <main>
    <HeroSection />
    <CountdownSection />
    <OurStorySection />
    <ScheduleSection />
    <LocationSection />
    <RsvpSection />
    <GiftsSection />

    <footer class="py-10 text-center bg-ivory border-t border-gold/15">
      <p class="font-serif italic text-gold text-lg">{{ wedding.names.person1 }} & {{ wedding.names.person2 }}</p>
      <p class="uppercase tracking-[0.2em] text-[10px] text-stone mt-2">{{ wedding.dateDisplay }}</p>
    </footer>
  </main>
</template>

<script setup>
import { wedding } from '@/config/wedding.js'
import HeroSection from '@/components/sections/HeroSection.vue'
import CountdownSection from '@/components/sections/CountdownSection.vue'
import OurStorySection from '@/components/sections/OurStorySection.vue'
import ScheduleSection from '@/components/sections/ScheduleSection.vue'
import LocationSection from '@/components/sections/LocationSection.vue'
import RsvpSection from '@/components/sections/RsvpSection.vue'
import GiftsSection from '@/components/sections/GiftsSection.vue'
</script>
