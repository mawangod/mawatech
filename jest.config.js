module.exports = {
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^~/(.*)$': '<rootDir>/$1',
		'^vue$': 'vue/dist/vue.common.js'
	},
	modulePathIgnorePatterns: ['<rootDir>/cypress/'],
	moduleFileExtensions: ['js', 'vue', 'json'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'.*\\.(vue)$': 'vue-jest'
	},
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/utilities/**/*.js'],
	coveragePathIgnorePatterns: ['<rootDir>/utilities/usefull-data.js']
}
