import Service from '../models/Service'

const getAll = function (req, res) {
	Service.find({}, (err, services) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting services records.'
			})
		}

		return res.json(services)
	})
}

export {getAll}
