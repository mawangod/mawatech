<template>
	<div class="col-lg-4">
		<div class="blog_right_sidebar">
			<aside class="single_sidebar_widget popular_post_widget">
				<h4 class="widget_title">
					{{ $t('blog.relatedPosts') | capitalize }}
				</h4>
				<div
					v-for="(post, index) in relatedPosts"
					:key="index"
					class="media post_item"
				>
					<img
						class="img-fluid"
						:src="require(`@/assets/img/blog/preview/${post.img}.png`)"
					/>
					<div class="media-body">
						<nuxt-link :to="{name: 'blog-slug', params: {slug: post.slug}}">
							<h3 class="trunc">{{ post.title }}</h3>
							<p>{{ formatDate(post.date) }}</p>
						</nuxt-link>
					</div>
				</div>
			</aside>
		</div>
	</div>
</template>

<script>
import capitalizeName from '../utilities/capitalize-name'

export default {
	filters: {
		capitalize(name) {
			return capitalizeName(name)
		}
	},
	props: {
		relatedPosts: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			options: {year: 'numeric', month: 'long', day: 'numeric'}
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		}
	},
	methods: {
		formatDate(date) {
			return new Date(date).toLocaleDateString(this.locale, this.options)
		}
	}
}
</script>

<style scoped>
.trunc {
	width: 200px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
