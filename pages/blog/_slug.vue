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
									:src="require(`@/assets/img/blog/${article.img}.png`)"
									alt=""
								/>
							</div>
							<div class="blog_details">
								<h2>
									{{ article.title }}
								</h2>
								<PostInfo
									:comments="article.comments"
									class="mt-3 mb-4"
									:tags="article.tags"
								/>
								<nuxt-content :document="article" />
							</div>
						</div>
						<PostNavbar />
						<PostAuthor :author="article.author" />
						<PostComments :comments="article.comments" />
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
		const article = await $content('articles', params.slug).fetch()

		return {article}
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
