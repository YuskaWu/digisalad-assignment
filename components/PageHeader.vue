<script setup lang="ts">
import SideMenu from './SideMenu.vue'
import { onMounted, onUnmounted, ref } from '#imports'
import CloseSvg from '@/assets/icon/close.svg'
import MenuSvg from '@/assets/icon/menu.svg'
import LogoSvg from '@/assets/image/logo.svg'
import { cn } from '@/utils/tailwind'

const hasScrolled = ref(false)

function onScroll() {
  hasScrolled.value = !!document.documentElement.scrollTop
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.addEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    :class="cn('fixed left-0 top-0 z-10 h-20 w-full bg-transparent transition-colors', hasScrolled && 'bg-white shadow-md')"
  >
    <nav class="m-auto flex size-full max-w-[90rem] items-center px-8 lg:px-20">
      <LogoSvg
        :class="cn('max-w-[7.5rem] text-primary opacity-0 transition-opacity', hasScrolled && 'opacity-100')"
      />

      <button class="ml-auto rounded-full bg-gradient-to-r from-[#4ee5ea] to-[#26d0a8] px-4 py-3 text-[0.875rem]/[1.0625rem] tracking-[0.08em] text-white">
        START YOUR PROJECT
      </button>

      <button class="ml-8 lg:ml-12">
        <CloseSvg class="hidden w-[1.875rem] text-white" />
        <MenuSvg :class="cn('w-[1.875rem] text-white', hasScrolled && 'text-secondary')" />
      </button>
    </nav>

    <SideMenu />
  </header>
</template>
