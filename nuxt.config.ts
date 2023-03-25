// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt Filter Demo',
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@nuxt/devtools',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          // automatically imports `defineStore` as `definePiniaStore`
          // import { defineStore as definePiniaStore } from 'pinia'
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    'nuxt-icon',
    '@nuxtjs/color-mode',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@vueuse/core'],
    },
  },
  nitro: {
    preset: 'vercel',
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },
  devServer: {
    host: 'localhost',
    port: 1337,
  },
  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'endtech-color-mode',
  },
})
