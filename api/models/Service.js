import mongoose from 'mongoose'

const Service = new mongoose.Schema(
	{
		icon: {type: Array, required: true},
		photo1: {type: String, required: true},
		photo2: {type: String, required: true},
		title: {
			'fr-FR': {type: String, required: true},
			'en-EN': {type: String, required: true}
		},
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
		}
	},
	{autoCreate: true}
)

export default mongoose.model('Service', Service)
