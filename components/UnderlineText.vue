<script setup lang="ts">
import { computed } from '#imports'

const props = withDefaults(defineProps<{
  tag?: string
  color?: string
  // percentage
  height?: number
  // percentage
  cropBottom?: number
  dot?: boolean
}>(), {
  tag: 'span',
  color: 'yellow',
  height: 45,
  cropBottom: 0,
  dot: false
})

const transparentHeightPercent = computed(() => 100 - props.height)
const cropBottomPercent = computed(() => 100 - props.cropBottom)
</script>

<template>
  <component
    :is="tag"
    class="relative"
    :style="`background: linear-gradient(transparent ${transparentHeightPercent}%, ${color} 0, ${color} ${cropBottomPercent}%, transparent ${cropBottomPercent}%)`"
  >
    <slot />
    <span
      v-if="dot"
      class="absolute bottom-0 right-0 size-2.5 translate-x-6 translate-y-[-0.3em] rounded-full bg-accent"
    />
  </component>
</template>
