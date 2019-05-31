const path = require('path')
const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'spa',
  srcDir: 'app',

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | ' + pkg.name,
    htmlAttrs: { lang: 'ja' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#2222ff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/persistedstate.js', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-purgecss',
    '@nuxtjs/dotenv',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],

  env: {
    baseURL: process.env.BASE_URL
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://axios.nuxtjs.org/options
    baseURL: process.env.BASE_URL
  },

  /*
   ** PurgeCSS
   ** https://github.com/Developmint/nuxt-purgecss
   */
  purgeCSS: {
    mode: 'postcss'
  },

  /*
   ** This option is given directly to the vue-router Router constructor
   */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** PostCSS setup
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        'postcss-url': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false
        }
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
