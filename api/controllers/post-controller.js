import sharp from 'sharp'

const write = (req, res) => {
	sharp(req.file.path)
		.resize({width: 60})
		.toFile(`./assets/img/blog/preview/${req.file.filename}`)
		.catch(error => new Error(error))

	return res.status(200).json({
		msg: 'post created'
	})
}

export {write}
