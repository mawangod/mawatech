<template>
	<main>
		<ImageTitle title="Blog" :url="sliderBackGround"></ImageTitle>
		<section class="home-blog-area section-padding">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mb-5 mb-lg-0">
						<div class="blog_left_sidebar">
							<Post v-for="post in posts" :key="post.slug" v-bind="post"></Post>
							<BlogNavbar />
						</div>
					</div>
					<BlogSidebar />
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/blog.jpg'

export default {
	async asyncData({app, $content}) {
		const posts = await $content('posts', app.i18n.locale)
			.only([
				'title',
				'description',
				'img',
				'slug',
				'author',
				'comments',
				'tags',
				'date'
			])
			.sortBy('date', 'desc')
			.fetch()

		return {
			posts
		}
	},
	data() {
		return {
			sliderBackGround
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
				this.posts = await this.$content('posts', newValue)
					.only([
						'title',
						'description',
						'img',
						'slug',
						'author',
						'comments',
						'tags',
						'date'
					])
					.sortBy('date', 'desc')
					.fetch()
			}
		}
	}
}
</script>
