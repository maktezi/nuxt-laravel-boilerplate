// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/apollo'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      API_URL: import.meta.env.APP_URL
    }
  },

  dir: {
    public: 'public/client'
  },

  srcDir: 'client/',

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    clients: {
      default: { httpEndpoint: import.meta.env.APP_URL + '/graphql' }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
