<template>
	<main>
		<ImageTitle :title="$t('header.blog')" :url="sliderBackGround"></ImageTitle>
		<section class="home-blog-area section-padding">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mb-5 mb-lg-0">
						<div class="blog_left_sidebar">
							<nuxt-link
								v-if="devMode"
								class="btn hero-btn ma-2 margin-30"
								to="/blog/add-post"
							>
								{{ $t('button.addPost') }}
							</nuxt-link>
							<Post
								v-for="post in displayedPosts"
								id="posts"
								:key="post.slug"
								v-bind="post"
							></Post>

							<nav class="blog-pagination justify-content-center d-flex">
								<b-pagination
									v-show="displayedPosts && displayedPosts.length"
									v-model="currentPage"
									class="pagination"
									:total-rows="totalPost"
									:per-page="perPage"
								>
								</b-pagination>
							</nav>
						</div>
					</div>
					<BlogSidebar
						:active-tags="activeTags"
						:recent-posts="recentPosts"
						@search="searchPost"
						@tags="addOrRemoveTag"
					/>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/blog.jpg'
import searchPost from '@/utilities/search-post.js'
import filterPost from '@/utilities/filter-post.js'

export default {
	name: 'Blog',
	async asyncData({app, $content}) {
		const posts = await $content('posts', app.i18n.locale)
			.only(['title', 'description', 'img', 'slug', 'author', 'tags', 'date'])
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
			sliderBackGround,
			filterTerm: '',
			activeTags: []
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
			return (
				this.posts &&
				this.filteredPosts(this.posts) &&
				this.filteredPosts(this.posts).length
			)
		},
		displayedPosts() {
			const from = this.currentPage * this.perPage - this.perPage
			const to = this.currentPage * this.perPage
			return this.posts && this.filteredPosts(this.posts.slice(from, to))
		},
		recentPosts() {
			return this.posts && this.filteredPosts(this.posts).slice(0, 3)
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
						'tags',
						'date'
					])
					.sortBy('date', 'desc')
					.fetch()
			}
		}
	},
	methods: {
		searchPost(term) {
			this.filterTerm = term
		},
		addOrRemoveTag(tag) {
			this.activeTags = this.activeTags.includes(tag)
				? this.activeTags.filter(aTag => aTag !== tag)
				: [...this.activeTags, tag]
		},
		filteredPosts(posts) {
			return posts
				.filter(post => searchPost(post, this.filterTerm))
				.filter(post => filterPost(post, this.activeTags))
		}
	}
}
</script>

<style scoped>
.margin-30 {
	margin-bottom: 30px;
}
</style>
