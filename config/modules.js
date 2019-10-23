export default [
  '@nuxtjs/axios',
  '@nuxtjs/pwa',
  '@nuxtjs/style-resources',
  [
    'nuxt-mq',
    {
      // Default breakpoint for SSR
      defaultBreakpoint: 'md',
      breakpoints: {
        sm: 450,
        md: 1040,
        lg: Infinity
      }
    }
  ]
]
