declare module '*.svg' {
  import type { VueConstructor } from '#imports'

  const content: VueConstructor<Vue>
  export default content
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*?raw' {
  const src: string
  export default src
}

declare module '*?url' {
  const src: string
  export default src
}

declare module '*?inline' {
  const src: string
  export default src
}
