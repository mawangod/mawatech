export const state = () => ({
	profiles: [],
	services: [],
	cases: [],
	counters: [],
	comments: []
})

export const getters = {
	cases: state => state.cases,
	services: state => state.services,
	profiles: state => state.profiles,
	counters: state => state.counters,
	comments: state => state.comments,
	getPostComments: state => post =>
		state.comments.filter(comment => comment.post === post)
}

export const mutations = {
	set_cases(state, cases) {
		state.cases = cases
	},
	set_comments(state, comments) {
		state.comments = comments
	},
	set_counters(state, counters) {
		state.counters = counters
	},
	set_services(state, services) {
		state.services = services
	},
	set_profiles(state, profiles) {
		state.profiles = profiles
	}
}

export const actions = {
	async loadCases(context) {
		await this.$axios
			.get('/api/cases')
			.then(response => response.data)
			.then(cases => context.commit('set_cases', cases))
	},
	async loadComments(context) {
		await this.$axios
			.get('/api/comments')
			.then(response => response.data)
			.then(comments => context.commit('set_comments', comments))
	},
	async loadCounters(context) {
		await this.$axios
			.get('/api/counters')
			.then(response => response.data)
			.then(counters => context.commit('set_counters', counters))
	},
	async loadServices(context) {
		await this.$axios
			.get('/api/services')
			.then(response => response.data)
			.then(services => context.commit('set_services', services))
	},
	async loadProfiles(context) {
		await this.$axios
			.get('/api/profiles')
			.then(response => response.data)
			.then(profiles => context.commit('set_profiles', profiles))
	}
}
