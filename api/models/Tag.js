import mongoose from 'mongoose'

const Tag = new mongoose.Schema(
	{
		title: {
			'fr-FR': {type: String, required: true},
			'en-EN': {type: String, required: true}
		}
	},
	{autoCreate: true}
)

export default mongoose.model('Tag', Tag)
