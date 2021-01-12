
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'DNA検査とITでお客様に「最高の縦パスを通す」| 株式会社tatepass',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '私たちは企業や個人が抱える様々な悩みや課題に向き合い、DNA検査とITソリューションを軸にそれらの解決をサポート致します。 刻一刻と変化する現代社会の中で「変化を恐れず」お客様に最高の「タテパス」を通すことが私たちの使命です。' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' },
      { src: 'https://tatepass.com/tatepass_js/delighters.js' },
      { src: 'https://tatepass.com/tatepass_js/scroll-down.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP' }
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
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap : {
    hostname: 'https://tatepass.com'
    , gzip: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
