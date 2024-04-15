// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: false },
  target: 'server',

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
      title: 'Alhister',
      meta: [
        { name: 'description', content: 'Lunetterie en ligne' }
      ],
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true }
      ]
    }
  }
})
