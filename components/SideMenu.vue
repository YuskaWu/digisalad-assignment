<script setup lang="ts">
import CloseSvg from '@/assets/icon/close.svg'
import LogoSvg from '@/assets/image/logo.svg'
import BgImage1Url from '@/assets/image/menu-item-bg-1.webp?url'
import BgImage2Url from '@/assets/image/menu-item-bg-2.webp?url'
import BgImage3Url from '@/assets/image/menu-item-bg-3.webp?url'
import BgImage4Url from '@/assets/image/menu-item-bg-4.webp?url'
import BgImage5Url from '@/assets/image/menu-item-bg-5.webp?url'

import CheeseSvgUrl from '@/assets/image/ingredient-cheese.svg?url'
import GherkinSvgUrl from '@/assets/image/ingredient-gherkin.svg?url'
import LettuceSvgUrl from '@/assets/image/ingredient-lettuce.svg?url'
import TomatoSvgUrl from '@/assets/image/ingredient-tomato.svg?url'
import WatermelonSvgUrl from '@/assets/image/ingredient-watermelon.svg?url'

import { ref, watch } from '#imports'

defineEmits<{ 'update:visible': [visible: boolean] }>()
const visible = defineModel<boolean>('visible')

const root = ref<HTMLDivElement>()

watch(visible, () => {
  if (!root.value) {
    return
  }

  if (visible.value) {
    root.value.style.zIndex = '20'
    root.value.style.opacity = '100'
  }
  else {
    root.value.style.opacity = '0'
    setTimeout(() => {
      root.value!.style.zIndex = '-1'
    }, 300)
  }
})
</script>

<template>
  <div
    ref="root"
    class="menu-bg fixed left-0 top-0 z-[-1] flex size-full items-center justify-center opacity-0 transition-opacity duration-300"
  >
    <div class="absolute left-0 top-0 w-full">
      <div class="m-auto flex h-20 max-w-[90rem] items-center px-8 lg:px-20">
        <LogoSvg class="max-w-[7.5rem] text-white" />
        <button
          class="ml-auto w-[1.875rem] text-white"
          aria-label="close menu"
          @click="$emit('update:visible', false)"
        >
          <CloseSvg class="w-[1.875rem]" />
        </button>
      </div>
    </div>

    <!-- menu -->
    <div class="grid h-[80dvh] w-[80dvw] max-w-5xl grid-cols-1 items-center gap-6 text-white lg:grid-cols-[36%_28%_36%]">
      <!-- column 1 -->
      <div class="flex h-full justify-center gap-6 lg:flex-col ">
        <div
          class="flex w-full items-center rounded-3xl bg-cover bg-center p-8 lg:h-1/3"
          :style="`background-image: url('${BgImage1Url}')`"
        >
          <div class="flex flex-wrap gap-6">
            <img
              :src="LettuceSvgUrl"
              alt="lettuce"
            >
            <div class=" flex flex-col gap-2">
              <span class="leading-5 tracking-[0.1125em]">EMPOWERING BRANDS</span>
              <span class=" text-[2rem]/[2.5rem] font-bold tracking-[0.115em]">
                ABOUT US
              </span>
            </div>
          </div>
        </div>
        <div
          class="flex w-full items-end rounded-3xl bg-cover bg-center p-8 lg:h-[45%] "
          :style="`background-image: url('${BgImage4Url}')`"
        >
          <div class="flex flex-wrap gap-6">
            <img
              :src="TomatoSvgUrl"
              alt="tomato"
            >
            <div class=" flex flex-col gap-2">
              <span class="leading-5 tracking-[0.1125em]">CASE STUDIES</span>
              <span class=" text-[2rem]/[2.5rem] font-bold tracking-[0.115em]">
                WORKS
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- column 2 -->
      <div class="flex h-full justify-center gap-6 lg:flex-col">
        <div
          class="flex w-full items-end rounded-3xl bg-cover bg-center p-8 lg:h-3/5"
          :style="`background-image: url('${BgImage2Url}')`"
        >
          <div class="flex flex-wrap gap-6">
            <img
              :src="CheeseSvgUrl"
              alt="cheese"
            >
            <div class=" flex flex-col gap-2">
              <span class="leading-5 tracking-[0.1125em]">BE COOL WITH US</span>
              <span class=" text-[2rem]/[2.5rem] font-bold tracking-[0.115em]">
                CAREERS
              </span>
            </div>
          </div>
        </div>

        <div
          class="flex w-full items-end rounded-3xl bg-cover bg-center p-8 lg:h-2/5"
          :style="`background-image: url('${BgImage5Url}')`"
        >
          <div class="flex flex-wrap gap-6">
            <img
              :src="GherkinSvgUrl"
              alt="gherkin"
            >
            <div class=" flex flex-col gap-2">
              <span class="leading-5 tracking-[0.1125em]">OUR STRATEGIES</span>
              <span class=" text-[2rem]/[2.5rem] font-bold tracking-[0.115em]">
                INSIGHTS
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- column 3 -->
      <div class="flex h-full justify-center gap-6 lg:flex-col">
        <div
          class="flex w-full items-end rounded-3xl bg-cover bg-center p-8 lg:h-[45%]"
          :style="`background-image: url('${BgImage3Url}')`"
        >
          <div class="flex flex-wrap gap-6">
            <img
              :src="WatermelonSvgUrl"
              alt="watermelon"
            >
            <div class=" flex flex-col gap-2">
              <span class="leading-5 tracking-[0.1125em]">AREAS OF EXPERTISE</span>
              <span class=" text-[2rem]/[2.5rem] font-bold tracking-[0.115em]">
                SERVICES
              </span>
            </div>
          </div>
        </div>

        <div
          class="flex w-full flex-col justify-center gap-2 rounded-3xl bg-white  p-8 text-primary lg:h-1/3"
        >
          <span class="leading-5 tracking-[0.1125em] text-black">START YOUR JOURNEY WITH US</span>
          <span class=" text-[2rem]/[2.5rem] font-bold tracking-[0.115em]">
            CONTACT
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-bg {
  background-image: linear-gradient(to top, rgb(38 198 208 / 90%), rgb(35 1 38 / 90%));
}
</style>
