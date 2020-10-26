import Case from '../models/Case'

const getAll = function (req, res) {
	Case.find({}, (err, cases) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting cases records.'
			})
		}

		return res.status(200).json(cases)
	})
}

export {getAll}
