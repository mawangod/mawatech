module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	overrides: [
		{
			files: ['cypress/**/*.js'],
			plugins: ['cypress'],
			extends: ['plugin:cypress/recommended'],
			env: {
				'cypress/globals': true
			}
		}
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended'
	],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {}
}
