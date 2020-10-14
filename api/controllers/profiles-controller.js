import profiles from '../models/profiles'

const getAll = function (req, res) {
	profiles.find({}, (err, profiles) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting profiles records.'
			})
		}

		return res.json(profiles)
	})
}

export {getAll}
