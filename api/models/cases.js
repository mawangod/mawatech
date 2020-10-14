import mongoose from 'mongoose'

const cases = new mongoose.Schema(
	{
		title: {
			'fr-FR': {type: String, required: true},
			'en-EN': {type: String, required: true}
		},
		photo1: {type: String, required: true},
		photo2: {type: String, required: true},
		photo3: {type: String, required: true},
		subtitle: {
			'fr-FR': {type: String, required: true},
			'en-EN': {type: String, required: true}
		},
		bio1: {
			'fr-FR': {type: String, required: true},
			'en-EN': {type: String, required: true}
		},
		bio2: {
			'fr-FR': {type: String, required: true},
			'en-EN': {type: String, required: true}
		},
		bio3: {
			'fr-FR': {type: String, required: true},
			'en-EN': {type: String, required: true}
		}
	},
	{autoCreate: true}
)

export default mongoose.model('cases', cases)
