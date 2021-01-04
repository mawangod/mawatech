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

const auth = {
	type: 'OAuth2',
	clientId: process.env.CLIENTID,
	clientSecret: process.env.CLIENTSECRET,
	user: mail,
	refreshToken: process.env.REFRESHTOKEN,
	accessToken: process.env.ACCESSTOKEN,
	expires: 1484314697598
}

const transporter = nodeMailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	service: 'gmail',
	secure: true,
	auth
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
				message: `${email} : ${text}`
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
