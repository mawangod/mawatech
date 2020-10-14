import mongoose from 'mongoose'

const comments = new mongoose.Schema(
	{
		author: {type: String, required: true},
		content: {type: String, required: true},
		date: {type: Date, required: true},
		mail: {type: String, required: true},
		post: {type: String, required: true}
	},
	{autoCreate: true}
)

export default mongoose.model('comments', comments)
