export default {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	mode: 'spa',
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
		link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
	},
	/*
	 ** Global CSS
	 */
	css: ['@/assets/sass/style.scss'],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: ['@/plugins/vue-smooth-scroll'],
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
		'bootstrap-vue/nuxt'
	],
	bootstrapVue: {
		bootstrapCSS: false,
		bootstrapVueCSS: false
	},
	fontawesome: {
		icons: {
			brands: ['faFacebookF', 'faTwitter', 'faLinkedinIn', 'faInstagram'],
			regular: ['faClock', 'faAddressCard', 'faEnvelope'],
			solid: [
				'faLevelUpAlt',
				'faUser',
				'faComments',
				'faUsersCog',
				'faFileCode',
				'faPoll',
				'faMobileAlt',
				'faSearch',
				'faHeart'
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
	build: {}
}
