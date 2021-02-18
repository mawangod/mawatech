import getRawText from '@/utilities/get-raw-text'

describe('getRawText', () => {
	test('getRawText of null', () => {
		expect(getRawText(null)).toEqual(null)
	})

	test('getRawText of undefined', () => {
		expect(getRawText(undefined)).toEqual(undefined)
	})

	test('getRawText of BaBar', () => {
		expect(getRawText('BaBar')).toEqual('babar')
	})

	test('getRawText of BàBâr', () => {
		expect(getRawText('BàBâr')).toEqual('babar')
	})

	test('getRawText of BàBâr-fra', () => {
		expect(getRawText('BàBâr-fra')).toEqual('babar-fra')
	})
})
