// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [`assets/scss/main.scss`],
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    "@pinia-plugin-persistedstate/nuxt",
    // "@nuxtjs/supabase"
  ],
  image: {
    format: ['webp'],
    quality: 60,
  },
  runtimeConfig: {
    public: {
      stripePK: process.env.STRIPE_PK_KEY,
      LOCALE: 'en',
      FALLBACK_LOCALE: 'en',
    }
  },
  app: {
    head: {
      script: [
        { src: 'https://js.stripe.com/v3', defer: true }
      ]
    }
  },
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  devtools: { enabled: true }
})
