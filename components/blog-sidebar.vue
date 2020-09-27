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

			<aside class="single_sidebar_widget post_category_widget">
				<h4 class="widget_title">{{ $t('blog.category') }}</h4>
				<ul class="list cat-list">
					<li v-for="(category, index) in categories" :key="index">
						<a href="#" class="d-flex">
							<p>{{ $t(`blog.${category.name}`) }}</p>
							<p>{{ `(${category.amount})` }}</p>
						</a>
					</li>
				</ul>
			</aside>

			<aside class="single_sidebar_widget popular_post_widget">
				<h3 class="widget_title">{{ $t('blog.recent') }}</h3>
				<div
					v-for="(post, index) in posts"
					:key="index"
					class="media post_item"
				>
					<img
						:src="require(`@/assets/img/post/${post.photo}.png`)"
						alt="post"
					/>
					<div class="media-body">
						<nuxt-link to="/blog/post">
							<h3>{{ post.title }}</h3>
						</nuxt-link>
						<p>{{ post.date }}</p>
					</div>
				</div>
			</aside>
			<aside class="single_sidebar_widget tag_cloud_widget">
				<h4 class="widget_title">{{ $t('blog.popularTags') }}</h4>
				<ul class="list">
					<li v-for="(tag, index) in tags" :key="index">
						<a href="#">{{ $t(`blog.${tag}`) }}</a>
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
				{name: 'restaurant', amount: 37},
				{name: 'travel', amount: 8},
				{name: 'technology', amount: 7},
				{name: 'product', amount: 4},
				{name: 'inspiration', amount: 21},
				{name: 'healt', amount: 13},
				{name: 'yolo', amount: 12}
			],
			posts: [
				{
					title: 'From life was you fish...',
					date: 'January 12, 2019',
					photo: 'post_1'
				},
				{title: 'The Amazing Hubble', date: '2 Hours ago', photo: 'post_2'},
				{title: 'Astronomy Or Astrology', date: '3 Hours ago', photo: 'post_3'},
				{title: 'Asteroids telescope', date: '1 Hours ago', photo: 'post_4'}
			],
			tags: [
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
