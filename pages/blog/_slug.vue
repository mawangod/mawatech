<template>
	<main>
		<ImageTitle title="Post" :url="backgroundUrl"></ImageTitle>
		<section class="blog_area single-post-area section-padding">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 posts-list">
						<div class="single-post">
							<div class="feature-img">
								<img
									class="img-fluid"
									:src="require(`@/assets/img/blog/${post.img}.png`)"
									alt=""
								/>
							</div>
							<div class="blog_details">
								<h2>
									{{ post.title }}
								</h2>
								<PostInfo
									:comments="post.comments"
									class="mt-3 mb-4"
									:tags="post.tags"
								/>
								<nuxt-content :document="post" />
							</div>
						</div>
						<PostNavbar />
						<PostAuthor :author="post.author" />
						<PostComments :comments="post.comments" />
						<PostReply />
					</div>
					<BlogSidebar />
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import backgroundUrl from '@/assets/img/cover/blog.jpg'

export default {
	async asyncData({$content, params}) {
		const post = await $content('posts', params.slug).fetch()

		return {post}
	},
	data() {
		return {
			backgroundUrl
		}
	}
}
</script>

<style scoped>
.img-fluid {
	width: 100%;
}
</style>
