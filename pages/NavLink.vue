<script setup lang="ts">
type Props = {
  variant?: 'primary' | 'secondary'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary'
})
</script>

<template>
  <a
    href="#"
    class=" flex max-w-fit cursor-pointer items-center gap-4 bg-primary px-6 py-8 font-bold tracking-[0.14em] text-white transition-colors"
    :class="variant === 'primary' ? 'bg-primary hover:bg-primary-400' : 'bg-secondary hover:bg-secondary-400'"
  >
    <slot />
    <span class="w-14 border-t-2 border-white" />
  </a>
</template>
