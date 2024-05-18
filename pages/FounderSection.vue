<script setup lang="ts">
import BackgroundImageUrl from '@/assets/image/city-bg.webp?url'
import FounderImageUrl from '@/assets/image/founder.webp?url'
import QuoteLeftSvgUrl from '@/assets/image/quote-left.svg?url'
</script>

<template>
  <section class="relative -top-1 m-auto ">
    <div
      class=" mr-auto grid w-full max-w-[81rem] grid-cols-1 grid-rows-1 items-center gap-16 rounded-r-[2.5rem] rounded-bl-[2.5rem] bg-white bg-cover bg-fixed bg-center px-6 py-24 lg:grid-cols-[26%_1fr] lg:px-24"
      :style="`background-image: url('${BackgroundImageUrl}')`"
    >
      <div class="flex flex-col items-center text-white">
        <img
          :src="FounderImageUrl"
          alt="Tony NG"
          class="mb-9 rounded-full"
        >
        <h4 class="mb-2 text-[1.25rem] font-bold leading-6 tracking-widest">
          TONY NG
        </h4>
        <p class="italic leading-4 tracking-[0.125em]">
          Founder & Creative Director
        </p>
      </div>

      <div class="flex flex-col items-center gap-6 text-white">
        <img
          :src="QuoteLeftSvgUrl"
          alt="quote"
        >
        <p class="text-center text-[1.375rem]/[3rem] tracking-widest lg:text-left">
          A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the <span class="font-bold text-[#FFBC58]">right experience to the right person at the right time</span>. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.
        </p>
      </div>
    </div>

    <div class="absolute left-0 top-0 z-[-2] size-full bg-white" />
    <div class="absolute left-0 top-0 z-[-1] h-1/2 w-full rounded-b-[2.5rem] bg-primary" />
  </section>
</template>
