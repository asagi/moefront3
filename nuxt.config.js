const path = require('path')
const pkg = require('./package')
require('dotenv').config({ path: path.join(__dirname, '/app/.env') })

const serverConf =
  process.env.NODE_ENV !== 'production'
    ? { port: 3000, host: '0.0.0.0' }
    : { port: 8080, host: '0.0.0.0' }

export default {
  server: serverConf,
  mode: 'spa',
  srcDir: 'app',
  env: {
    baseURL: process.env.BASE_URL,
    frontURL: process.env.FRONT_URL
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: titleChunk => {
      return titleChunk ? titleChunk + ' | Diplomacy MOE' : 'Diplomacy MOE'
    },
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
  plugins: [
    { src: '@/plugins/persistedstate.js', mode: 'client' },
    { src: '@/plugins/vee-validate', mode: 'client' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-purgecss',
    '@nuxtjs/dotenv',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      '@nuxtjs/google-adsense',
      {
        id: process.env.GA_ADSENSE_ID,
        pageLevelAds: false,
        analyticsUacct: process.env.GA_TRACKING_ID, // アナリティクスと連携する場合のみ必要
        analyticsDomainName: process.env.DOMAIN // アナリティクスと連携する場合のみ必要
      }
    ]
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', { id: process.env.GA_TRACKING_ID }]
  ],

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
        tailwindcss: {
          prefix: '',
          important: false,
          separator: ':',
          theme: {
            container: {
              center: true
            }
          },
          variants: {},
          plugins: []
        },
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
    },
    transpile: ['vee-validate/dist/rules']
  }
}
