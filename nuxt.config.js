export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: 'index.html'
  },

  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'klpod221 - Fullstack Web Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'klpod221' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'klpod221' },
      {
        name: 'keywords',
        content: 'klpod221, klpod221 portfolio, klpod221.com'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'google', content: 'notranslate' },
      {
        name: 'google-site-verification',
        content: 'gB3ANfjfhh226RGrb1Sa9ypEFmhubEQPgTWEnZN7gvU'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/variables.scss',
    '~/assets/sass/styles.scss',
    '~/assets/sass/animations.scss',
    '~/assets/sass/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue-toast.js',
      mode: 'client'
    },
    {
      src: '~/plugins/common.js',
      mode: 'client'
    },
    '~/plugins/inject.js',
    '~/plugins/axios.js',
    '~/plugins/api.js',
    '~/plugins/nuxt-server-init.js',
    '~/plugins/vee-validate.js',
    '~/plugins/filters.js',
    '~/plugins/sweetaler.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/fontawesome',
      {
        suffix: true,
        icons: {
          solid: true,
          brands: true,
          regular: true
        }
      }
    ],
    [
      '@nuxtjs/moment',
      {
        defaultLocale: 'vi',
        locales: ['vi']
      }
    ]
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      'cookie-universal-nuxt',
      {
        alias: 'cookiz'
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    progress: false,
    retry: {
      retries: 3
    }
  },

  // Robots module configuration: https://go.nuxtjs.dev/config-robots
  robots: {
    UserAgent: '*',
    Disallow: '/admin?*'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
    extractCSS: true,
    optimizeCSS: true,
    html: {
      minify: {
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeEmptyAttributes: true,
        removeEmptyElements: true,
        removeRedundantAttributes: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeOptionalTags: true,
        removeTagWhitespace: true,
        processConditionalComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    loaders: {
      vue: {
        compiler: require('vue-template-babel-compiler')
      }
    }
  },

  publicRuntimeConfig: {
    apiEndpoint: process.env.API_ENDPOINT
  }
};
