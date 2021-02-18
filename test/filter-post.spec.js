import filterPost from '@/utilities/filter-post'

describe('filterPost', () => {
	test('filterPost with post = null', () => {
		const post = null
		const tags = []
		expect(filterPost(post, tags)).toEqual(false)
	})

	test('filterPost with tags = null', () => {
		const post = {tags: []}
		const tags = null
		expect(filterPost(post, tags)).toEqual(false)
	})

	test('filterPost empty post.tags and tags', () => {
		const post = {tags: []}
		const tags = []
		expect(filterPost(post, tags)).toEqual(false)
	})

	test('filterPost empty tags', () => {
		const post = {tags: ['babar']}
		const tags = []
		expect(filterPost(post, tags)).toEqual(true)
	})

	test('filterPost [1] = [1]', () => {
		const post = {tags: ['babar']}
		const tags = ['babar']
		expect(filterPost(post, tags)).toEqual(true)
	})

	test('filterPost [1] != [1]', () => {
		const post = {tags: ['babar']}
		const tags = ['babare']
		expect(filterPost(post, tags)).toEqual(false)
	})

	test('filterPost [1] = [1, 2]', () => {
		const post = {tags: ['babar']}
		const tags = ['super', 'babar']
		expect(filterPost(post, tags)).toEqual(true)
	})

	test('filterPost [1, 2] = [1]', () => {
		const post = {tags: ['super', 'babar']}
		const tags = ['babar']
		expect(filterPost(post, tags)).toEqual(true)
	})

	test('filterPost [1] != [1, 2]', () => {
		const post = {tags: ['babar']}
		const tags = ['super', 'babare']
		expect(filterPost(post, tags)).toEqual(false)
	})

	test('filterPost [1, 2] != [1]', () => {
		const post = {tags: ['super', 'babar']}
		const tags = ['babare']
		expect(filterPost(post, tags)).toEqual(false)
	})
})
