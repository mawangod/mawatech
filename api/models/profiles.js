import mongoose from 'mongoose'

const profiles = new mongoose.Schema(
	{
		name: {type: String, required: true},
		img: {type: String, required: true},
		job: {type: String, required: true},
		slogan: {
			'fr-FR': {type: String, required: true},
			'en-EN': {type: String, required: true}
		},
		bio: {
			'fr-FR': {type: String, required: true},
			'en-EN': {type: String, required: true}
		}
	},
	{autoCreate: true}
)

export default mongoose.model('profiles', profiles)
