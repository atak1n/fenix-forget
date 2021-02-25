import colors from 'vuetify/es5/util/colors'
// import getRoutes from "./utils/getRoutes";


export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: 'spa',
  ssr: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/ymapPlugin.js', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  // components: true,
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/base/',
        prefix: 'Base'
      }
    ],
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // "@nuxt/content",
    '@nuxtjs/vuetify',
    // "@nuxtjs/sitemap",
  ],
  /*
  ** Nuxt.js modules
  */

  modules: [
    // ['vue-yandex-maps/nuxt',
    //   {
    //     // apiKey: store.contacts.map.apiKey,
    //     apiKey: '5d8955cd-bd38-47e1-b600-49f9bc950a36',
    //     lang: 'ru_RU',
    //     coordorder: 'latlong',
    //     version: '2.1',
    //   }
    // ]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#F4511E',
          secondary: '#050b1f',
          accent: '#204165',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
  // sitemap: {
  //   hostname: 'http://kovka-mo.ru/',
  //   routes() {
  //     return getRoutes();
  //   },
  // },


}
