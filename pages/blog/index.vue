<template>
	<main>
		<ImageTitle title="Blog" :url="sliderBackGround"></ImageTitle>
		<section class="home-blog-area section-padding">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mb-5 mb-lg-0">
						<div class="blog_left_sidebar">
							<b-btn v-if="devMode" class="ma-2 margin-30" @click="addPost">
								add a new Post
							</b-btn>
							<Post
								v-for="post in displayedPosts"
								id="posts"
								:key="post.slug"
								v-bind="post"
							></Post>

							<nav class="blog-pagination justify-content-center d-flex">
								<b-pagination
									v-model="currentPage"
									class="pagination"
									:total-rows="totalPost"
									:per-page="perPage"
								>
								</b-pagination>
							</nav>
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
			currentPage: 1,
			perPage: 4,
			sliderBackGround
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		},
		devMode() {
			return process.env.NODE_ENV === 'development'
		},
		totalPost() {
			return this.posts && this.posts.length
		},
		displayedPosts() {
			const from = this.currentPage * this.perPage - this.perPage
			const to = this.currentPage * this.perPage
			return this.posts.slice(from, to)
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
	},
	methods: {
		addPost() {
			const nums = this.posts.map(post => Number(post.slug.split('-')[1]))
			const maxNum = nums.reduce((p, v) => (p > v ? p : v))
			const newNum = maxNum + 1
			console.log(newNum)
		}
	}
}
</script>

<style scoped>
.margin-30 {
	margin-bottom: 30px;
}
</style>
