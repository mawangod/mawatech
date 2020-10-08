function filterPost(post, tags) {
	if (!post) {
		return false
	}

	return post.tags.some(tag => tags.length === 0 || tags.includes(tag))
}

export default filterPost
