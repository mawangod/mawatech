import nodeMailer from 'nodemailer'
import handlebars from 'nodemailer-express-handlebars'
import {mail} from '../../utilities/usefull-data.js'

const handlebarOptions = {
	viewEngine: {
		extName: '.handlebars',
		partialsDir: 'api/mail-view/partial',
		layoutsDir: 'api/mail-view/layout',
		defaultLayout: ''
	},
	viewPath: 'api/mail-view/template',
	extName: '.handlebars'
}

const transporter = nodeMailer.createTransport({
	service: 'gmail',
	secure: false,
	auth: {
		user: mail,
		pass: process.env.GMAIL_PASSWORD
	},
	tls: {
		rejectUnauthorized: false
	}
})

transporter.use('compile', handlebars(handlebarOptions))

const send = async (req, res) => {
	const {email, name, subject, text} = req.body
	try {
		await transporter.sendMail({
			from: `${name} ${email}`,
			to: mail,
			subject,
			template: 'basic',
			context: {
				message: text
			}
		})
		res.status(200).json({
			msg: 'Mail sended'
		})
	} catch (error) {
		res.status(500).json({
			error
		})
	}
}

export {send}
