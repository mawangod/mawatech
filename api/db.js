import mongoose from 'mongoose'

const db = {}
db.mongoose = mongoose

db.mongoose
	.connect('mongodb://localhost/mydb', {
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
