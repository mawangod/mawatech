import counters from '../models/counters'

const getAll = function (req, res) {
	counters.find({}, (err, counters) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting counters records.'
			})
		}

		return res.json(counters)
	})
}

export {getAll}
