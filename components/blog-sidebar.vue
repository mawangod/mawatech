<template>
	<div class="col-lg-4">
		<div class="blog_right_sidebar">
			<aside class="single_sidebar_widget search_widget">
				<form action="#">
					<div class="form-group">
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control"
								placeholder="Search Keyword"
								onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Search Keyword'"
							/>
							<div class="input-group-append">
								<button class="btns" type="button">
									<FontAwesomeIcon :icon="['fas', 'search']"> </FontAwesomeIcon>
								</button>
							</div>
						</div>
					</div>
					<button
						class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
						type="submit"
					>
						{{ $t('button.search') }}
					</button>
				</form>
			</aside>

			<aside class="single_sidebar_widget tag_cloud_widget">
				<h4 class="widget_title">{{ $t('blog.popularTags') }}</h4>
				<ul class="list">
					<li v-for="(category, index) in categories" :key="index">
						<a href="#">{{ $t(`blog.${category}`) }}</a>
					</li>
				</ul>
			</aside>

			<aside class="single_sidebar_widget instagram_feeds">
				<h4 class="widget_title">{{ $t('blog.instagramFeeds') }}</h4>
				<ul class="instagram_row flex-wrap">
					<li v-for="(instagram, index) in instagrams" :key="index">
						<a href="#">
							<img
								class="img-fluid"
								:src="require(`@/assets/img/post/${instagram}.png`)"
								alt=""
							/>
						</a>
					</li>
				</ul>
			</aside>

			<aside class="single_sidebar_widget newsletter_widget">
				<h4 class="widget_title">{{ $t('blog.newsletter') }}</h4>

				<form action="#">
					<div class="form-group">
						<input
							type="email"
							class="form-control"
							:placeholder="$t('blog.enterMail')"
							required
						/>
					</div>
					<button
						class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
						type="submit"
					>
						{{ $t('button.subscribe') }}
					</button>
				</form>
			</aside>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categories: [
				'project',
				'love',
				'technology',
				'travel',
				'restaurant',
				'lifeStyle',
				'design'
			],
			instagrams: ['post_5', 'post_6', 'post_7', 'post_8', 'post_9', 'post_10']
		}
	}
}
</script>
