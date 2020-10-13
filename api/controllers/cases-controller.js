import cases from '../models/cases'

const getAll = function (req, res) {
	cases.find({}, (err, cases) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting records.'
			})
		}

		return res.json(cases)
	})
}

export {getAll}
