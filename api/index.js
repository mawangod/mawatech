import express from 'express'
import db from './db'
import cases from './routes/cases'
import counters from './routes/counters'
import comments from './routes/comments'
import services from './routes/services'
import profiles from './routes/profiles'
import mail from './routes/mail'

// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Use API Routes
app.use(cases)
app.use(counters)
app.use(services)
app.use(profiles)
app.use(comments)
app.use(mail)

// Export the server middleware
export default {
	path: '/api',
	handler: app,
	db
}
