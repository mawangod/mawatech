import express from 'express'
import db from './db'
import cases from './routes/cases'
// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Require & Import API routes

// const articles = require('./routes/articles')

// Use API Routes
app.use(cases)
// app.use(articles)

// Export the server middleware
export default {
	path: '/api',
	handler: app,
	db
}
