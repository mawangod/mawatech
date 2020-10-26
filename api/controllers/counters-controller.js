import Counter from '../models/Counter'

const getAll = function (req, res) {
	Counter.find({}, (err, counters) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting counters records.'
			})
		}

		return res.status(200).json(counters)
	})
}

export {getAll}
