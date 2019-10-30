import config from './config'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: config.head,
  /*
   ** Customize the progress-bar color
   */
  loading: config.loading,
  /*
   ** Global CSS
   */
  css: config.css,
  /*
   ** Plugins to load before mounting the App
   */
  plugins: config.plugins,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: config.buildModules,
  /*
   ** Nuxt.js modules
   */
  modules: config.modules,
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: config.axios,
  /*
   ** Build configuration
   */
  build: config.build,

  /**
   * Nobody likes extra @import statements!
   * https://github.com/nuxt-community/style-resources-module/
   */
  styleResources: config.styleResources,
  /*
   ** host configs to external host
   */
  server: {
    host: '0.0.0.0' // default: localhost
  }
}
