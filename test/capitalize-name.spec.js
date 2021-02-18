import capitalizeName from '@/utilities/capitalize-name'

describe('capitalizeName', () => {
	test('capitalize brother', () => {
		expect(capitalizeName('brother')).toEqual('Brother')
	})

	test('capitalize Brother', () => {
		expect(capitalizeName('Brother')).toEqual('Brother')
	})

	test('capitalize brother hood', () => {
		expect(capitalizeName('brother hood')).toEqual('Brother Hood')
	})

	test('capitalize brother-hood', () => {
		expect(capitalizeName('brother-hood')).toEqual('Brother-Hood')
	})

	test('capitalize null', () => {
		expect(capitalizeName(null)).toEqual('')
	})
})
