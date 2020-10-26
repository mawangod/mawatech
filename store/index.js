import sortByDate from '../utilities/sort-by-date'

export const state = () => ({
	profiles: [],
	services: [],
	cases: [],
	counters: [],
	comments: [],
	tags: [],
	mailSended: false
})

export const getters = {
	cases: state => state.cases,
	services: state => state.services,
	profiles: state => state.profiles,
	counters: state => state.counters,
	comments: state => state.comments,
	tags: state => state.tags,
	getPostComments: state => post =>
		state.comments.filter(comment => comment.post === post).sort(sortByDate)
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
	},
	set_tags(state, tags) {
		state.tags = tags
	},
	add_comment(state, comment) {
		state.comments = [...state.comments, comment]
	},
	remove_comment(state, comment) {
		const idToRemove = comment.id
		state.comments = state.comments.filter(
			comment => comment._id !== idToRemove
		)
	},
	set_mailSended(state) {
		state.mailSended = true
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
	},
	async loadTags(context) {
		await this.$axios
			.get('/api/tags')
			.then(response => response.data)
			.then(tags => context.commit('set_tags', tags))
	},

	async createComment(context, comment) {
		await this.$axios
			.post('/api/comments', comment)
			.then(response => response.data)
			.then(comment => context.commit('add_comment', comment))
			.catch()
	},

	async deleteComment(context, comment) {
		await this.$axios
			.delete(`/api/comments/${comment._id}`)
			.then(response => response.data)
			.then(comment => context.commit('remove_comment', comment))
			.catch()
	},

	async sendMail(context, mail) {
		await this.$axios
			.post('/api/mail', mail)
			.then(response => response.data)
			.then(() => context.commit('set_mailSended'))
			.catch()
	},

	async createPost(context, post) {
		return await this.$axios
			.post('/api/post', post)
			.then(response => response.data)
			.catch()
	}
}
