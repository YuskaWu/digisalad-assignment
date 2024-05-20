<script setup lang="ts">
import SideMenu from './SideMenu.vue'
import { onMounted, onUnmounted, ref } from '#imports'
import MenuSvg from '@/assets/icon/menu.svg'
import LogoSvg from '@/assets/image/logo.svg'
import { cn } from '@/utils/tailwind'

const isMenuVisible = ref(false)
const hasScrolled = ref(false)

function onScroll() {
  hasScrolled.value = !!document.documentElement.scrollTop
}

onMounted(() => {
  hasScrolled.value = !!document.documentElement.scrollTop
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.addEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    :class="cn('duration-500 fixed left-0 top-0 z-10 h-20 w-full bg-transparent transition-colors', (hasScrolled && !isMenuVisible) && 'bg-white shadow-md')"
  >
    <nav :class="cn('m-auto flex size-full max-w-[90rem] items-center px-8 transition-colors lg:px-20', isMenuVisible && 'opacity-0')">
      <LogoSvg
        :class="cn('duration-300 max-w-[7.5rem] text-primary opacity-0 transition-opacity', hasScrolled && 'opacity-100')"
      />

      <button class="ml-auto rounded-full bg-gradient-to-r from-[#4ee5ea] to-[#26d0a8] px-4 py-3 text-[0.875rem]/[1.0625rem] tracking-[0.08em] text-white">
        START YOUR PROJECT
      </button>

      <button class="ml-8 lg:ml-12">
        <MenuSvg
          :class="cn('duration-300 w-[1.875rem] transition-colors text-white', hasScrolled && 'text-secondary')"
          @click="isMenuVisible = !isMenuVisible"
        />
      </button>
    </nav>
  </header>
  <SideMenu v-model:visible="isMenuVisible" />
</template>
