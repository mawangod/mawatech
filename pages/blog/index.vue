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
import sortByDate from '@/utilities/sort-by-date'

export default {
	async asyncData({$content, params}) {
		const posts = await $content('posts', params.slug)
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
			.fetch()

		return {
			posts: posts.sort(sortByDate)
		}
	},
	data() {
		return {
			sliderBackGround
		}
	}
}
</script>
