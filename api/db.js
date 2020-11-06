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
	.catch(error => {
		const errorConnection = new Error('MongoDB connection')
		errorConnection.code = error
	})

export default db
