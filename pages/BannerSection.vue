<script setup lang="ts">
import { onMounted, ref, useHead } from '#imports'
import BackgroundImageUrl from '@/assets/image/banner-bg.webp?url'
import DishesImageUrl from '@/assets/image/dishes.webp?url'
import LogoSvg from '@/assets/image/logo.svg'
import UnderlineText from '@/components/UnderlineText.vue'

useHead({
  script: [
    { src: 'https://www.youtube.com/iframe_api' }
  ]
})

const mountElm = ref()

onMounted((() => {
  if (!YT || !mountElm.value) {
    return
  }

  const player = new YT.Player(mountElm.value, {
    videoId: '8_4JRK4QkqU',
    // https://developers.google.com/youtube/player_parameters?hl=zh-tw
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      loop: 1,
      rel: 0,
      playlist: '8_4JRK4QkqU'
    },
    events: {
      onReady() {
        calculateSize()
      },
      onStateChange: ({ data }) => {
        if (data === YT.PlayerState.PLAYING) {
          player.getIframe().classList.add('opacity-100')
        }
        if (data === YT.PlayerState.PAUSED) {
          player.playVideo()
        }
      }
    }
  })

  const ratio = 560 / 315
  let timeoutId = 0
  function calculateSize() {
    clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      const minWidth = window.innerHeight * ratio
      // The idea of hiding video information is to expand the width so that the information will be outside the viewport.
      // So here we multiply by 3 and then translate it back to the center, so the information will be hidden on the left and right outside the container.
      const totalWidth = minWidth * 3
      const centerOffset = (totalWidth - window.innerWidth) / 2

      // If the viewport is wider than the video width, black blocks will appear on the left and right sides,
      // so we need to calculate the ratio to fullfill the container.
      const scale = window.innerWidth > minWidth ? window.innerWidth / minWidth : 1

      const iframe = player.getIframe()
      iframe.style.width = totalWidth + 'px'
      iframe.style.transform = `translateX(-${centerOffset}px) scale(${scale})`
    }, 20)
  }

  window.addEventListener('resize', calculateSize)

  return () => {
    window.removeEventListener('resize', calculateSize)
    player.destroy()
  }
}))
</script>

<template>
  <section
    class="relative h-screen bg-cover bg-fixed bg-center px-6 py-28 lg:py-36"
    :style="`background-image: url('${BackgroundImageUrl}')`"
  >
    <div class="pointer-events-none absolute left-0 top-0 size-full overflow-hidden">
      <div
        ref="mountElm"
        class="h-full opacity-0 transition-opacity duration-[2000ms]"
      />
    </div>

    <div class="absolute left-0 top-0 flex size-full flex-col items-start text-white">
      <div class="absolute top-1/2  hidden -translate-x-1/3 -rotate-90 items-center gap-10 font-bold leading-5 tracking-[0.14em] md:flex">
        <span class="inline-block h-0.5 w-28 bg-white" />DIGITAL AGENCY
      </div>
      <div class="relative top-[20%] mx-auto lg:left-[17%] lg:mx-0">
        <LogoSvg class="mb-10 w-[12.5rem]" />
        <p class="pr-4 text-[1.75rem]/[4.375rem] font-bold tracking-[0.24em]">
          WE CREATE<br>
          AMAZING<br>
          <UnderlineText
            class="pl-2"
            dot
            color="#26C6D0"
            :height="35"
            :crop-bottom="20"
          >
            DIGITAL EXPERIENCES
          </UnderlineText>
        </p>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-[-5.375rem] m-auto flex flex-col items-center">
      <img
        class="mb-3 size-[4.0625rem]"
        :src="DishesImageUrl"
      >
      <p class="mb-8 text-[0.875rem]/[1.0625rem] tracking-[0.143em] text-white">
        TASTE US NOW!
      </p>
      <div class="h-11 w-[0.0625rem] bg-white" />
      <div class="h-[5.375rem] w-[0.0625rem] bg-[#808080]" />
    </div>
  </section>
</template>
