import searchPost from '@/utilities/search-post'

describe('searchPost', () => {
	test('searchPost with empty post', () => {
		expect(searchPost()).toEqual(false)
	})

	test('searchPost with empty post', () => {
		expect(searchPost(null, 'test')).toEqual(false)
	})

	test('searchPost with empty searchTerm', () => {
		const post = {
			author: 'david',
			title: 'Anglais',
			description: 'Un petit test en anglais'
		}
		expect(searchPost(post, '')).toEqual(true)
	})

	test('searchPost with a good searchTerm = author', () => {
		const post = {
			author: 'david',
			title: 'Anglais'
		}
		expect(searchPost(post, 'david')).toEqual(true)
	})

	test('searchPost with a good searchTerm = title', () => {
		const post = {
			author: 'david',
			title: 'Anglais',
			description: 'Un petit test en anglais'
		}
		expect(searchPost(post, 'Angl')).toEqual(true)
	})

	test('searchPost with a good searchTerm = description', () => {
		const post = {
			author: 'david',
			title: 'Anglais',
			description: 'Un petit test en anglais'
		}
		expect(searchPost(post, 'test')).toEqual(true)
	})

	test('searchPost with a good searchTerm = description', () => {
		const post = {
			description: 'Un petit test en anglais'
		}
		expect(searchPost(post, 'test')).toEqual(true)
	})

	test('searchPost with a bad searchTerm', () => {
		const post = {
			author: 'david',
			title: 'Anglais',
			description: 'Un petit test en anglais'
		}
		expect(searchPost(post, 'faux')).toEqual(false)
	})
})
