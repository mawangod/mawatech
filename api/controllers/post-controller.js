import fs from 'fs'
import sharp from 'sharp'
import Post from '../models/Post'

const write = (req, res) => {
	const image = req.file.filename

	// create image preview
	sharp(req.file.path)
		.resize({width: 60})
		.toFile(`./assets/img/blog/preview/${image}`)
		.catch(error =>
			res.status(500).json({
				error
			})
		)

	// create the posts file (fr and en)
	const fileName = `post-${Date.now()}`
	const imageName = image.split('.')[0]
	fs.writeFile(
		`./content/posts/fr-FR/${fileName}.md`,
		Post(req.body, 'Fr', imageName),
		error => {
			if (error) res.status(500).json({error})
		}
	)

	fs.writeFile(
		`./content/posts/en-EN/${fileName}.md`,
		Post(req.body, 'En', imageName),
		error => {
			if (error) res.status(500).json({error})
		}
	)

	return res.status(200).json({
		fileName
	})
}

export {write}
