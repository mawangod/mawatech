import mongoose from 'mongoose'

const Counter = new mongoose.Schema(
	{
		value: {type: Number, required: true},
		title: {type: String, required: true},
		active: {type: +Boolean, required: false}
	},
	{autoCreate: true}
)

export default mongoose.model('Counter', Counter)
