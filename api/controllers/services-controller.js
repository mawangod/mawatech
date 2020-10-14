import services from '../models/services'

const getAll = function (req, res) {
	services.find({}, (err, services) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting services records.'
			})
		}

		return res.json(services)
	})
}

export {getAll}
