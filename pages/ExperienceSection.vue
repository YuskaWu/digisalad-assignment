<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import CustomersImageUrl from '@/assets/image/customers.webp?url'
</script>

<template>
  <section class="m-auto -mt-1 flex flex-col items-center justify-center gap-12 bg-white px-6 pt-28">
    <SectionTitle
      :wave-size="3"
      :wave-overlap="2"
    >
      OUR BRAND EXPERIENCE
    </SectionTitle>
    <p class="max-w-5xl text-center leading-6 tracking-[0.0625em]">
      Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.
      Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
      Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit
      ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis.
      Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras
      lobortis molestie faucibus.
    </p>

    <img
      :src="CustomersImageUrl"
      alt="customers"
    >
  </section>
</template>
