export default {
  postcss: {
    // Add plugin names as key and arguments as value
    // Install them before as dependencies with npm or yarn
    plugins: {},
    preset: {
      // Change the postcss-preset-env settings
      autoprefixer: {
        grid: true
      }
    }
  },
  /*
   ** You can extend webpack config here
   */
  extend(config, ctx) {}
}
