const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mydb', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
})
let db = null

try {
	db = mongoose.connection
	db.once('open', function callback() {
		console.log('MongoDB Connected...')
	})
} catch (error) {
	console.error.bind(console, 'connection error:')
}

module.exports = db
