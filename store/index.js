import profiles from '@/static/profiles.json'
import services from '@/static/services.json'
import counters from '@/static/counters.json'
import comments from '@/static/comments.json'

export const state = () => ({
	profiles,
	services,
	cases: [],
	counters,
	comments
})

export const getters = {
	cases: state => state.cases
}

export const mutations = {
	set_cases(state, cases) {
		state.cases = cases
	}
}

export const actions = {
	async loadCases(context) {
		await this.$axios
			.get('/api/cases')
			.then(response => response.data)
			.then(cases => context.commit('set_cases', cases))
	}
}
