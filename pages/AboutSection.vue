<script setup lang="ts">
import NavLink from './NavLink.vue'
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <section class="-mb-2 px-6 pb-16 pt-32">
    <div class="container m-auto flex max-w-5xl flex-col items-center justify-center">
      <SectionTitle
        class="mb-16"
        :wave-size="2"
      >
        ABOUT DIGISALAD
      </SectionTitle>

      <iframe
        class="mb-8 aspect-[560/315] w-full"
        src="https://www.youtube.com/embed/IeIRJ9jZ5Ro?si=BI3VrD4Gwgvpl657"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />

      <p class="text-center leading-7 tracking-[0.0625em]">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>

      <NavLink class="mt-10">
        VIEW MORE
      </NavLink>
    </div>
  </section>
</template>
