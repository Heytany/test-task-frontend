import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    'shadcn-nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      BRAND_NAME: process.env.BRAND_NAME,
      PRODUCT_FETCH_LIMIT: process.env.PRODUCT_FETCH_LIMIT,
      AUTHOR: process.env.AUTHOR,
      GIT_URL: process.env.GIT_URL,
    },
  },
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    display: 'swap',
    families: {
      'Inter': [400, 500, 600, 700],
      'Golos Text': [400, 500, 600, 700],
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})
