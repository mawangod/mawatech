import mongoose from 'mongoose'
import {url} from './config'

const db = {}
db.mongoose = mongoose

db.mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
	.then(() => {
		console.log('MongoDB Connected...')
	})
	.catch(() => {
		console.error('connection error:')
	})

export default db
