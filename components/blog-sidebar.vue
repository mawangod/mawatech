<template>
	<div class="col-lg-4">
		<div class="blog_right_sidebar">
			<aside class="single_sidebar_widget search_widget">
				<form>
					<div class="form-group">
						<div class="input-group mb-3">
							<input
								v-model="searchTerm"
								type="search"
								class="form-control"
								:placeholder="$t('blog.search')"
							/>
							<div class="input-group-append">
								<button
									class="btns"
									type="button"
									@click.prevent="$emit('search', searchTerm)"
								>
									<FontAwesomeIcon :icon="['fas', 'search']"> </FontAwesomeIcon>
								</button>
							</div>
						</div>
					</div>
				</form>
			</aside>

			<aside class="single_sidebar_widget tag_cloud_widget">
				<h4 class="widget_title">{{ $t('blog.popularTags') }}</h4>
				<ul class="list">
					<li v-for="(tag, index) in tags" :key="index">
						<a
							:class="{
								active: isActive(tag)
							}"
							@click.prevent="$emit('tags', tag)"
						>
							{{ $t(`blog.${tag}`) }}
						</a>
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

				<form>
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
	props: {
		activeTags: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			searchTerm: '',
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
	},
	methods: {
		isActive(tag) {
			return this.activeTags.includes(tag)
		}
	}
}
</script>
