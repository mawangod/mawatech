import Profile from '../models/Profile'

const getAll = function (req, res) {
	Profile.find({}, (err, profiles) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting profiles records.'
			})
		}

		return res.json(profiles)
	})
}

export {getAll}
