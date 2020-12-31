module.exports = {
	apps: [
		{
			name: 'Mawatech',
			exec_mode: 'cluster',
			instances: 'max',
			script: './node_modules/nuxt/bin/nuxt.js',
			args: 'start'
		}
	]
}
