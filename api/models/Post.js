const Post = (post, lang, img) => {
	return `---
author: ${post.author}
title: ${post[`title${lang}`]}
description: ${post[`description${lang}`]}
img: ${img}
date: ${post.date}
tags: [${post.tags}]
---

Hello World!
`
}

export default Post
