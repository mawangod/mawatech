import Comment from '../models/Comment'

const getAll = function (req, res) {
	Comment.find({}, (err, comments) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting comments records.'
			})
		}

		return res.json(comments)
	})
}

const create = function (req, res) {
	const comment = new Comment({...req.body})
	comment.save((error, comment) => {
		if (error) {
			return res.status(500).json({
				message: 'Error saving record',
				error
			})
		}
		return res.json({
			message: 'saved',
			_id: comment._id
		})
	})
}

export {getAll, create}
