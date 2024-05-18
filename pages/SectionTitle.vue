<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import WaveLineSvg from '@/assets/image/wave-line.svg'

const waveLineVariant = cva('', {
  variants: {
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary'
    }
  }
})

type WaveLineVarientProps = VariantProps<typeof waveLineVariant>

type Props = {
  variant?: WaveLineVarientProps['variant']
  waveSize?: number
  waveOverlap?: number
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  waveSize: 1,
  waveOverlap: 0
})
</script>

<template>
  <div>
    <h1
      class="relative mb-2 text-center text-[1.75rem]/[2.125rem] font-bold tracking-[0.13em]"
      :class="variant === 'primary' ? '' : ' text-white'"
    >
      <slot />
      <span class="absolute bottom-0 size-2.5 -translate-y-2 translate-x-2 rounded-full bg-accent" />
    </h1>
    <div
      class="wave-overlap relative left-1 flex justify-center"
      :style="`--wave-offset: ${-0.87 * waveOverlap - 0.17}rem`"
    >
      <WaveLineSvg
        v-for="index in waveSize"
        :key="index"
        class="h-3.5"
        :class="waveLineVariant({ variant })"
      />
    </div>
  </div>
</template>

<style scoped>
.wave-overlap {
  --wave-offset: -0.17rem
}

.wave-overlap > *:has(+ *) {
  margin-right: var(--wave-offset);
}

.wave-overlap > * + * {
  margin-left: var(--wave-offset);
}
</style>
