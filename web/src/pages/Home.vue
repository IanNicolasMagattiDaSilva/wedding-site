<template>
  <div class="flex flex-col gap-2">
    <NavSection />
    <HeroSection />
    <CountdownSection />
    <OurStorySection />
    <FullbleedQuoteSection
      quote="
        Eu sei que vou te amar.
        Por toda a minha vida eu vou te amar.
        Em cada despedida eu vou te amar.
        Desesperadamente eu sei que vou te amar.
        "
      attr="Eu sei que vou te amar — Tom Jobim"
    />
    <TimelineSection />
    <GallerySection />
    <LocationSection />
    <FullbleedQuoteSection
      quote="Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém o separe."
      attr="Matheus 19:6"
    />
    <DressCodeSection />
    <GiftsSection />
    <RsvpSection />

    <footer class="foot">
      <div class="wrap">
        <h2 class="foot-names">
          Ian <span class="amp">&amp;</span> Victoria
        </h2>
        <div class="foot-meta">
          07.11.2027 <span class="dot">·</span> São Paulo, SP
        </div>
      </div>
      <div class="foot-bottom">
        <span>Com carinho — N° 001</span>
        <span>ianevictoria@email.com</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import NavSection from '@/components/NavSection.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import CountdownSection from '@/components/sections/CountdownSection.vue'
import OurStorySection from '../components/sections/OurStorySection.vue'
import FullbleedQuoteSection from '@/components/sections/FullbleedQuoteSection.vue'
import TimelineSection from '@/components/sections/TimelineSection.vue'
import GallerySection from '../components/sections/GallerySection.vue'
import LocationSection from '@/components/sections/LocationSection.vue'
import DressCodeSection from '@/components/sections/DressCodeSection.vue'
import GiftsSection from '@/components/sections/GiftsSection.vue'
import RsvpSection from '@/components/sections/RsvpSection.vue'
</script>
