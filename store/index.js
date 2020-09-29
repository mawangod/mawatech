import sortByDate from '@/utilities/sort-by-date'
import profiles from '@/static/profiles.json'
import services from '@/static/services.json'
import cases from '@/static/cases.json'
import counters from '@/static/counters.json'
import posts from '@/static/posts.json'

export const state = () => ({
	profiles,
	services,
	cases,
	counters,
	posts: posts.sort(sortByDate)
})

export const mutations = {}
