import {Router} from 'express'
import multer from 'multer'
import {write} from '../controllers/post-controller'

const fileFilter = (req, file, cb) => {
	const allowedTypes = [
		'image/jpeg',
		'image/jpg',
		'image/png',
		'image/svg',
		'image/bmp',
		'image/gif',
		'image/webp'
	]

	if (!allowedTypes.includes(file.mimetype)) {
		const error = new Error('Incorrect file')
		error.code = 'INCORRECT_FILETYPE'
		return cb(error, false)
	}

	cb(null, true)
}

const upload = multer({
	dest: './assets/img/blog',
	fileFilter,
	limits: {
		fileSize: 500000
	}
})
const router = Router()

router.post('/post', upload.single('file'), write)

export default router
