<template>
	<main>
		<ImageTitle title="Blog" :url="sliderBackGround"></ImageTitle>

		<section class="home-blog-area section-padding">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mb-5 mb-lg-0">
						<div class="blog_left_sidebar">
							<Post v-for="post in posts" :key="post.id" v-bind="post"></Post>
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
	data() {
		return {
			sliderBackGround,
			posts: this.$store.state.posts
		}
	}
}
</script>
