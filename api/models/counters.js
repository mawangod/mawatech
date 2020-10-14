import mongoose from 'mongoose'

const counters = new mongoose.Schema(
	{
		value: {type: Number, required: true},
		title: {type: String, required: true},
		active: {type: +Boolean, required: false}
	},
	{autoCreate: true}
)

export default mongoose.model('counters', counters)
