import nodeMailer from 'nodemailer'
import {mail} from '../../utilities/usefull-data.js'

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

const send = async (req, res) => {
	const {email, name, subject, text} = req.body
	try {
		await transporter.sendMail({
			from: `${name} ${email}`,
			to: mail,
			subject,
			text
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
