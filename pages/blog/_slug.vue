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
									:src="require(`@/assets/img/blog/${post.img}`)"
									alt=""
								/>
							</div>
							<div class="blog_details">
								<h2>
									{{ post.title }}
								</h2>
								<PostInfo
									:comments="getPostComments(post.slug)"
									class="mt-3 mb-4"
									:tags="post.tags"
								/>
								<nuxt-content :document="post" />
							</div>
						</div>
						<PostNavbar :prev="prev" :next="next" />
						<PostAuthor :author="post.author" :date="post.date" />
						<PostComments :post="post.slug" />
						<PostReply :post="post.slug" />
					</div>
					<PostSidebar :related-posts="relatedPosts" />
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import backgroundUrl from '@/assets/img/cover/blog.jpg'

export default {
	async asyncData({app, $content, params}) {
		const {slug} = params

		const post = await $content('posts', app.i18n.locale, slug).fetch()

		const relatedPosts = await $content('posts', app.i18n.locale)
			.where({tags: {$containsAny: post.tags}, title: {$ne: post.title}})
			.fetch()

		const [prev, next] = await $content('posts', app.i18n.locale)
			.only(['title', 'slug', 'img'])
			.surround(slug)
			.sortBy('date', 'desc')
			.fetch()

		return {post, prev, next, relatedPosts}
	},
	data() {
		return {
			backgroundUrl
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		}
	},
	watch: {
		async locale(newValue, oldValue) {
			if (newValue !== oldValue) {
				const {slug} = this.$route.params
				this.post = await this.$content('posts', newValue, slug).fetch()
				const [prev, next] = await this.$content('posts', newValue)
					.only(['title', 'slug', 'img'])
					.surround(slug)
					.sortBy('date', 'desc')
					.fetch()
				this.relatedPosts = await this.$content('posts', newValue)
					.where({
						tags: {$containsAny: this.post.tags},
						title: {$ne: this.post.title}
					})
					.fetch()

				this.next = next
				this.prev = prev
			}
		}
	},
	mounted() {
		if (!this.$store.getters.comments.length) {
			this.$store.dispatch('loadComments')
		}
	},
	methods: {
		getPostComments(post) {
			return this.$store.getters.getPostComments(post)
		}
	}
}
</script>

<style scoped>
.img-fluid {
	width: 100%;
}
</style>
