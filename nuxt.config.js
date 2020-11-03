// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	telemetry: false,
	ssr: false,
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: 'server',
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{rel: 'icon', type: 'image/x-icon', href: '/icon.png'}]
	},
	/*
	 ** Global CSS
	 */
	css: ['@/assets/sass/style.scss'],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [
		'@/plugins/vue-smooth-scroll.js',
		'@/plugins/vee-validate.js',
		{
			src: '@/plugins/vue-layers.js',
			ssr: false
		}
	],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/stylelint-module
		'@nuxtjs/stylelint-module',
		'@nuxtjs/fontawesome'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'bootstrap-vue/nuxt',
		'nuxt-i18n',
		'@nuxt/content'
	],
	bootstrapVue: {
		bootstrapCSS: false,
		bootstrapVueCSS: false
	},
	fontawesome: {
		icons: {
			brands: ['faFacebookF', 'faTwitter', 'faLinkedinIn', 'faInstagram'],
			regular: ['faClock', 'faAddressCard', 'faEnvelope', 'faTrashAlt'],
			solid: [
				'faLevelUpAlt',
				'faUser',
				'faComments',
				'faUsersCog',
				'faFileCode',
				'faPoll',
				'faMobileAlt',
				'faSearch',
				'faHeart',
				'faQuoteRight',
				'faArrowRight',
				'faArrowLeft',
				'faHandsHelping',
				'faMedal',
				'faCrosshairs'
			]
		}
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {
		transpile: ['vee-validate/dist/rules']
	},
	i18n: {
		locales: [
			{
				code: 'en-EN',
				file: 'english.js'
			},
			{
				code: 'fr-FR',
				file: 'french.js'
			}
		],
		defaultLocale: 'en-EN',
		strategy: 'no_prefix',
		lazy: true,
		langDir: 'i18n/',
		vueI18n: {
			fallbackLocale: 'en-EN'
		}
	},
	serverMiddleware: ['~/api/index.js']
}
