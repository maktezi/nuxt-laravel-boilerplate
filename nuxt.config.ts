// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/apollo'
  ],

  apollo: {
    clients: {
      default: { httpEndpoint: import.meta.env.APP_URL + '/graphql' },
    },
  },

  devtools: {
    enabled: true
  },

  srcDir: "client/",

  dir: {
      public: "public/client",
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  runtimeConfig: {
    public: {
      API_URL: import.meta.env.APP_URL,
    },
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
