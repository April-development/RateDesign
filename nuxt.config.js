export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'rate-design',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  server: {
    host: '0.0.0.0' // default: localhost
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  env: {
    API_URL: process.env.API_URL || 'http://localhost:5000'
  },
  plugins: ['@/plugins/vue-messenger'],
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    sass: [
      '@/assets/default.sass',
      '@/assets/_colors.sass',
      '@/assets/global.sass',
      '@/assets/breakpoint.sass',
      '@/assets/auth.sass'
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:5000'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
