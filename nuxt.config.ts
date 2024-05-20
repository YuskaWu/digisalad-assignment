import fs from 'fs'
import type { NuxtPage } from '@nuxt/schema'

const isGithubPage = process.env.GITHUB_PAGE === 'true'

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
    },
    'nitro:build:public-assets'() {
      // add .nojekyll file inside dist folder so that github page won't ignore the files which name is starting with "_"
      // see https://clairechang.tw/2023/10/03/nuxt3/nuxt-v3-static-site-generation
      if (!isGithubPage) {
        return
      }
      fs.closeSync(fs.openSync('dist/.nojekyll', 'w'))
    }
  },

  nitro: {
    output: {
      publicDir: isGithubPage ? 'dist' : '.output/public'
    }
  },

  app: {
    baseURL: '/digisalad-assignment/dist/',
    // By default asset folder will be "/_nuxt/", it will be ignored by Github Page, so here we rename it
    buildAssetsDir: '/static/',
    head: {
      htmlAttrs: {
        lang: 'zh-TW'
      },
      title: 'DigiSalad',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/wel8ibk.css'
        }
      ],
      meta: [
        { name: 'description', content: 'interview assignment' }
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
