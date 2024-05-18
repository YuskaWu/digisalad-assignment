import type { NuxtPage } from '@nuxt/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-svgo'],

  components: false,
  imports: {
    autoImport: false
  },
  experimental: {
    typedPages: true
  },

  hooks: {
    'pages:extend'(pages) {
      const indexPageRegExp = /.*\/index\.vue$/

      // Recursively delete page routes whose file name is not "index.vue" unless it has children(nested route),
      // so that we can put page-scoped components inside it's own directory.
      function removePages(pages: NuxtPage[] = []) {
        const pagesToRemove = []

        for (const page of pages) {
          if (!page.file) {
            removePages(page.children)
            continue
          }

          // Preserve pages with nested routes
          // see https://nuxt.com/docs/guide/directory-structure/pages#nested-routes
          if (page.children?.length) {
            removePages(page.children)
            continue
          }

          // preserve pages whose filename ends with '/index.vue'
          if (indexPageRegExp.test(page.file)) {
            removePages(page.children)
            continue
          }

          pagesToRemove.push(page)
        }

        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }

      removePages(pages)
    }
  },

  app: {
    head: {
      title: 'DigiSalad',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/wel8ibk.css'
        }
      ]
    }
  },

  svgo: {
    autoImportPath: false,
    defaultImport: 'component'
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  }
})
