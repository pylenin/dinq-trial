
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
   // title: process.env.npm_package_name || '',
    meta: [
      { name: "title", content: "dinq.in" },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "keywords", content: "dinqindia,dinq,quiz,quizindia,india" },
      { name: "description", content: "Dinq aims to bring the news of India to the Indians through the medium of a Quiz. No more long blog posts and videos of people shouting on one another" },
      { name: "robots", content: "index, follow" },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '1 days'},
      { 'http-equiv': 'Content-Type', content: "text/html; charset=utf-8" },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
