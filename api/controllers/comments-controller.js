import Comment from '../models/Comment'

const getAll = (req, res) => {
	Comment.find({}, (err, comments) => {
		if (err) {
			return res.status(500).json({
				message: 'Error getting comments records.'
			})
		}

		return res.status(200).json(comments)
	})
}

const create = (req, res) => {
	const comment = new Comment({...req.body})
	comment.save((error, comment) => {
		if (error) {
			return res.status(500).json({
				message: 'Error saving comment',
				error
			})
		}
		return res.status(200).json({...comment._doc})
	})
}

const remove = (req, res) => {
	const id = req.params.id
	Comment.findByIdAndDelete(id, (error, comment) => {
		if (error) {
			return res.status(500).json({
				message: 'Error remove comment'
			})
		}
		return res.status(200).json({id})
	})
}

export {getAll, create, remove}
