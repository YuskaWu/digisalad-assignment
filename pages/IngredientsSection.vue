<script setup lang="ts">
import NavLink from './NavLink.vue'
import SectionTitle from './SectionTitle.vue'
import UnderlineText from '@/components/UnderlineText.vue'

import AppleSvgUrl from '@/assets/image/ingredient-apple.svg?url'
import CheeseSvgUrl from '@/assets/image/ingredient-cheese.svg?url'
import CornSvgUrl from '@/assets/image/ingredient-corn.svg?url'
import GherkinSvgUrl from '@/assets/image/ingredient-gherkin.svg?url'
import KiwiSvgUrl from '@/assets/image/ingredient-kiwi.svg?url'
import LettuceSvgUrl from '@/assets/image/ingredient-lettuce.svg?url'
import OrangeSvgUrl from '@/assets/image/ingredient-orange.svg?url'
import TomatoSvgUrl from '@/assets/image/ingredient-tomato.svg?url'
import WatermelonSvgUrl from '@/assets/image/ingredient-watermelon.svg?url'

const ingredients = [
  { title: 'UX DESIGN', svg: LettuceSvgUrl },
  { title: 'UI DESIGN', svg: TomatoSvgUrl },
  { title: 'WEBSITE DEVELOPMENT', svg: CheeseSvgUrl },
  { title: 'MOBILE APP DEVELOPMENT', svg: GherkinSvgUrl },
  { title: 'ECOMMERCE', svg: OrangeSvgUrl },
  { title: 'CUSTOMER LOYALTY', svg: KiwiSvgUrl },
  { title: 'DIGITAL TRANSFORMATION', svg: WatermelonSvgUrl },
  { title: 'DIGITAL MARKETING', svg: CornSvgUrl },
  { title: 'BRANDING', svg: AppleSvgUrl }
]
</script>

<template>
  <section class=" m-auto flex flex-col items-center justify-center gap-12 bg-primary px-6 py-32 pt-28">
    <SectionTitle
      variant="secondary"
      :wave-size="2"
    >
      OUR INGREDIENTS
    </SectionTitle>

    <p class="max-w-5xl text-center font-normal leading-7 tracking-[0.0625em] text-white">
      Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.
      Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
      Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante,
      eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis.
      Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus.
      Cras lobortis molestie faucibus.
    </p>

    <NavLink variant="secondary">
      OUR SERVICE
    </NavLink>

    <div class="mt-8 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="ingred in ingredients"
        :key="ingred.title"
        class="flex flex-col items-center"
      >
        <div class="mb-6 flex size-[6.75rem] items-center justify-center rounded-full bg-white p-2">
          <img
            :src="ingred.svg"
            loading="lazy"
          >
        </div>

        <h4 class="h-14 w-52 text-center text-xl font-bold leading-6 tracking-widest text-white">
          {{ ingred.title }}
        </h4>

        <p class="mb-8 text-center font-normal tracking-[0.0625em] text-white">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.
          Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
        </p>

        <a
          class="
            cursor-pointer rounded-full border-2 border-solid border-white px-8 py-4 text-[0.875rem] font-bold tracking-[0.16em] text-white
            transition-colors hover:border-secondary hover:bg-secondary"
        >
          VIEW MORE
        </a>
      </div>
    </div>

    <UnderlineText
      tag="p"
      color="#FFBC58"
      :height="45"
      class="mt-12 px-2 text-[1.125rem] font-bold leading-5 tracking-[0.06em] text-white"
    >
      VIEW MORE DIGISALAD'S INGRADIENTS
    </UnderlineText>
  </section>
</template>
