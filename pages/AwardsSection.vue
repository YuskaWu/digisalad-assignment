<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import AwardImageUrl from '@/assets/image/app-award.webp?url'
</script>

<template>
  <section class="relative top-1 m-auto ">
    <div class="ml-auto grid w-full max-w-[84.125rem] grid-cols-1 grid-rows-1 gap-8 rounded-l-[2.5rem] rounded-br-[2.5rem] bg-white px-6 py-16  lg:grid-cols-[35%_65%] lg:px-16">
      <div class="flex flex-col items-center lg:items-start">
        <SectionTitle class="mb-8">
          AWARDS
        </SectionTitle>
        <p class="text-center leading-7 tracking-[0.0625em] lg:text-left">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.
          Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.
        </p>
      </div>
      <div class=" grid grid-cols-2 grid-rows-2 items-center gap-x-10 gap-y-2">
        <img
          class="w-[17.75rem]"
          :src="AwardImageUrl"
          loading="lazy"
        >
        <img
          class="w-[17.75rem]"
          :src="AwardImageUrl"
          loading="lazy"
        >
        <img
          class="w-[17.75rem]"
          :src="AwardImageUrl"
          loading="lazy"
        >
        <img
          class="w-[17.75rem]"
          :src="AwardImageUrl"
          loading="lazy"
        >
      </div>
    </div>

    <div class="absolute bottom-0 left-0 z-[-1] h-1/2 w-full rounded-t-[2.5em] bg-primary" />
  </section>
</template>
