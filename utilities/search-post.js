import getRawText from './get-raw-text'

function searchPost(post, searchTerm) {
	if (!post) {
		return false
	}

	const term = getRawText(searchTerm)
	const author = post.author ? getRawText(post.author) : ''
	const title = post.title ? getRawText(post.title) : ''
	const description = post.description ? getRawText(post.description) : ''

	return (
		author.includes(term) || title.includes(term) || description.includes(term)
	)
}

export default searchPost
