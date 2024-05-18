<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import NavLink from './NavLink.vue'
import { computed, onMounted, ref } from '#imports'
import LeftArrowSvg from '@/assets/icon/arrow-left.svg'
import RightArrowSvg from '@/assets/icon/arrow-right.svg'
import ShowcaseImageUrl from '@/assets/image/mobile-app-showcase.webp?url'
import BackgroundImageUrl from '@/assets/image/showcase-bg.webp?url'
import UnderlineText from '@/components/UnderlineText.vue'

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true })

const currentNumber = ref('01')

const totalNumber = computed(() => {
  const total = emblaApi.value?.slideNodes().length ?? 0
  return total.toString().padStart(2, '0')
})

onMounted(() => {
  emblaApi.value?.on('select', (emblaApi) => {
    const index = emblaApi.selectedScrollSnap() ?? 0
    currentNumber.value = (index + 1).toString().padStart(2, '0')
  })
})
</script>

<template>
  <section
    class=" bg-cover bg-fixed bg-center px-6 py-28 lg:py-36"
    :style="`background-image: url('${BackgroundImageUrl}')`"
  >
    <div class="relative m-auto flex max-w-[71rem] items-center gap-4">
      <button
        class="hidden size-14 shrink-0 items-center justify-center rounded-full bg-primary fill-white transition-colors hover:bg-primary-400 lg:flex"
        @click="emblaApi?.scrollPrev()"
      >
        <LeftArrowSvg class="size-6" />
      </button>

      <div
        ref="emblaRef"
        class="overflow-hidden"
      >
        <div class="flex cursor-grab text-white">
          <div
            v-for="index in 2"
            :key="index"
            class="grid min-w-0 flex-[0_0_100%] grid-cols-1 items-center gap-16 px-4 lg:grid-cols-[auto_45%]"
          >
            <img
              class="order-2 m-auto lg:order-1"
              :src="ShowcaseImageUrl"
              alt="mobile app showcase"
            >
            <div class="order-1 m-auto text-center lg:order-2 lg:text-left">
              <h4 class="mb-6 font-bold leading-5 tracking-[0.125em]">
                HIGHLIGHTED SHOWCASE
              </h4>
              <h2 class="mb-10">
                <UnderlineText
                  dot
                  color="#26C6D0"
                  :height="35"
                  :crop-bottom="20"
                  class="px-2 text-[2rem]/[1.75rem] font-bold tracking-[0.11375em]"
                >
                  LP CLUB MOBILE APP
                </UnderlineText>
              </h2>
              <p class="mb-8 leading-6 tracking-[0.0625em]">
                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.
                Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
                Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante,
                eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis.
                Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus.
                Cras lobortis molestie faucibus.
              </p>
              <NavLink class="m-auto lg:m-0">
                VIEW PROJECT
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <button
        class=" hidden size-14 shrink-0 items-center justify-center rounded-full bg-primary fill-white transition-colors hover:bg-primary-400 lg:flex"
        @click="emblaApi?.scrollNext()"
      >
        <RightArrowSvg class="size-6" />
      </button>

      <div class="absolute right-0 top-0 h-12 w-[3.375rem] translate-y-[-150%] text-white lg:-translate-y-1/2">
        <div>{{ currentNumber }}</div>
        <div class="text-right">
          {{ totalNumber }}
        </div>
        <div class="absolute right-0 top-1/2 h-[0.0625rem] w-full rotate-[135deg] bg-primary" />
      </div>
    </div>
  </section>
</template>
