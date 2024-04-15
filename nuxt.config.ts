// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    // '@pinia/plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase'

  ],
  runtimeConfig: {
    public: {
      stripeKey: process.env.STRIPE_KEY
    }
  },
  app: {
    head: {
      title: 'Nuxt 3 Minimal Starter',
      meta: [
        { name: 'description', content: 'Nuxt 3 Minimal Starter' }
      ],
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true }
      ]
    }
  }
})
