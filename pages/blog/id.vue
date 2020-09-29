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
									:src="require(`@/assets/img/blog/${post.photo}.png`)"
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
								<p class="excert">
									MCSE boot camps have its supporters and its detractors. Some
									people do not understand why you should have to spend money on
									boot camp when you can get the MCSE study materials yourself
									at a fraction of the camp price. However, who has the
									willpower
								</p>
								<p>
									MCSE boot camps have its supporters and its detractors. Some
									people do not understand why you should have to spend money on
									boot camp when you can get the MCSE study materials yourself
									at a fraction of the camp price. However, who has the
									willpower to actually sit through a self-imposed MCSE
									training. who has the willpower to actually
								</p>
								<div class="quote-wrapper">
									<div class="quotes">
										MCSE boot camps have its supporters and its detractors. Some
										people do not understand why you should have to spend money
										on boot camp when you can get the MCSE study materials
										yourself at a fraction of the camp price. However, who has
										the willpower to actually sit through a self-imposed MCSE
										training.
									</div>
								</div>
								<p>
									MCSE boot camps have its supporters and its detractors. Some
									people do not understand why you should have to spend money on
									boot camp when you can get the MCSE study materials yourself
									at a fraction of the camp price. However, who has the
									willpower
								</p>
								<p>
									MCSE boot camps have its supporters and its detractors. Some
									people do not understand why you should have to spend money on
									boot camp when you can get the MCSE study materials yourself
									at a fraction of the camp price. However, who has the
									willpower to actually sit through a self-imposed MCSE
									training. who has the willpower to actually
								</p>
							</div>
						</div>
						<PostNavbar />
						<div class="blog-author">
							<div class="media align-items-center">
								<img src="@/assets/img/blog/author.png" alt="" />
								<div class="media-body">
									<a href="#">
										<h4>{{ post.author }}</h4>
									</a>
									<p>
										Second divided from form fish beast made. Every of seas all
										gathered use saying you're, he our dominion twon Second
										divided from
									</p>
								</div>
							</div>
						</div>
						<div class="comments-area">
							<h4>{{ post.comments.length }} {{ $t('blog.comments') }}</h4>
							<div class="comment-list">
								<div class="single-comment justify-content-between d-flex">
									<div class="user justify-content-between d-flex">
										<div class="thumb">
											<img src="@/assets/img/comment/comment_1.png" alt="" />
										</div>
										<div class="desc">
											<p class="comment">
												Multiply sea night grass fourth day sea lesser rule open
												subdue female fill which them Blessed, give fill lesser
												bearing multiply sea night grass fourth day sea lesser
											</p>
											<div class="d-flex justify-content-between">
												<div class="d-flex align-items-center">
													<h5>
														<a href="#">Emilly Blunt</a>
													</h5>
													<p class="date">December 4, 2017 at 3:12 pm</p>
												</div>
												<div class="reply-btn">
													<a href="#" class="btn-reply text-uppercase">reply</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="comment-list">
								<div class="single-comment justify-content-between d-flex">
									<div class="user justify-content-between d-flex">
										<div class="thumb">
											<img src="@/assets/img/comment/comment_2.png" alt="" />
										</div>
										<div class="desc">
											<p class="comment">
												Multiply sea night grass fourth day sea lesser rule open
												subdue female fill which them Blessed, give fill lesser
												bearing multiply sea night grass fourth day sea lesser
											</p>
											<div class="d-flex justify-content-between">
												<div class="d-flex align-items-center">
													<h5>
														<a href="#">Emilly Blunt</a>
													</h5>
													<p class="date">December 4, 2017 at 3:12 pm</p>
												</div>
												<div class="reply-btn">
													<a href="#" class="btn-reply text-uppercase">reply</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="comment-list">
								<div class="single-comment justify-content-between d-flex">
									<div class="user justify-content-between d-flex">
										<div class="thumb">
											<img src="@/assets/img/comment/comment_3.png" alt="" />
										</div>
										<div class="desc">
											<p class="comment">
												Multiply sea night grass fourth day sea lesser rule open
												subdue female fill which them Blessed, give fill lesser
												bearing multiply sea night grass fourth day sea lesser
											</p>
											<div class="d-flex justify-content-between">
												<div class="d-flex align-items-center">
													<h5>
														<a href="#">Emilly Blunt</a>
													</h5>
													<p class="date">December 4, 2017 at 3:12 pm</p>
												</div>
												<div class="reply-btn">
													<a href="#" class="btn-reply text-uppercase">reply</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="comment-form">
							<h4>Leave a Reply</h4>
							<form
								id="commentForm"
								class="form-contact comment_form"
								action="#"
							>
								<div class="row">
									<div class="col-12">
										<div class="form-group">
											<textarea
												id="comment"
												class="form-control w-100"
												name="comment"
												cols="30"
												rows="9"
												placeholder="Write Comment"
											></textarea>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group">
											<input
												id="name"
												class="form-control"
												name="name"
												type="text"
												placeholder="Name"
											/>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group">
											<input
												id="email"
												class="form-control"
												name="email"
												type="email"
												placeholder="Email"
											/>
										</div>
									</div>
									<div class="col-12">
										<div class="form-group">
											<input
												id="website"
												class="form-control"
												name="website"
												type="text"
												placeholder="Website"
											/>
										</div>
									</div>
								</div>
								<div class="form-group">
									<button
										type="submit"
										class="button button-contactForm btn_1 boxed-btn"
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
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
	validate({params, store}) {
		return (
			/^\d+$/.test(params.id) &&
			store.state.posts.some(post => Number(post.id) === Number(params.id))
		)
	},
	data() {
		return {
			backgroundUrl,
			id: this.$route.params.id
		}
	},
	computed: {
		post() {
			return this.$store.state.posts.find(
				post => Number(post.id) === Number(this.id)
			)
		}
	}
}
</script>

<style scoped>
.img-fluid {
	width: 100%;
}
</style>
