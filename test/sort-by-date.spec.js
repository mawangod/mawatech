import sortByDate from '@/utilities/sort-by-date'

describe('sortByDate', () => {
	test('sortByDate 2019-11-02 and 2020-11-02', () => {
		expect(sortByDate({date: '2019-11-02'}, {date: '2020-11-02'})).toEqual(1)
	})

	test('sortByDate 2020-11-02 and 2019-11-02', () => {
		expect(sortByDate({date: '2020-11-02'}, {date: '2019-11-02'})).toEqual(-1)
	})

	test('sortByDate 2020-11-02 and 2020-11-02', () => {
		expect(sortByDate({date: '2020-11-02'}, {date: '2020-11-02'})).toEqual(
			undefined
		)
	})
})
