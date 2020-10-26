import Tag from '../models/Tag'

const getAll = function (req, res) {
	Tag.find({}, (err, tags) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting tags records.'
			})
		}

		return res.status(200).json(tags)
	})
}

export {getAll}
