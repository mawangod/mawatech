import comments from '../models/comments'

const getAll = function (req, res) {
	comments.find({}, (err, comments) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting comments records.'
			})
		}

		return res.json(comments)
	})
}

export {getAll}
