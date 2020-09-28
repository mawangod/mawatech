import {parseISO, isBefore} from 'date-fns'

function sortByDate(a, b) {
	if (isBefore(parseISO(a.date), parseISO(b.date))) {
		return 1
	}

	if (isBefore(parseISO(b.date), parseISO(a.date))) {
		return -1
	}
}

export default sortByDate
