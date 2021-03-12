<template>
	<nuxt-link :to="{name: 'blog-slug', params: {slug}}">
		<div class="home-blog-single mb-30">
			<div class="blog-img-cap">
				<div class="blog-img">
					<img
						class="image-height"
						:src="require(`@/assets/img/blog/${img}.jpg`)"
						alt=""
					/>
					<ul>
						<li>{{ $t('blog.by') }} {{ author }} - {{ formattedDate }}</li>
					</ul>
				</div>

				<div class="blog-cap">
					<h3>
						{{ title }}
					</h3>
					<p>
						{{ description }}
					</p>
					<PostInfo :comments="comments" :tags="tags"></PostInfo>
				</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
import capitalizeName from '../utilities/capitalize-name'
import PostInfo from './post-info'

export default {
	components: {PostInfo},
	filters: {
		capitalize(name) {
			return capitalizeName(name)
		}
	},
	props: {
		slug: {
			type: String,
			required: true
		},
		img: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		},
		tags: {
			type: Array,
			required: true
		},
		author: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			options: {year: 'numeric', month: 'long', day: 'numeric'}
		}
	},
	computed: {
		selectedLocale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		},
		formattedDate() {
			return new Date(this.date).toLocaleDateString(
				this.selectedLocale,
				this.options
			)
		},
		comments() {
			return this.$store.getters.getPostComments(this.slug)
		}
	},
	mounted() {
		if (!this.$store.getters.comments.length) {
			this.$store.dispatch('loadComments')
		}
	}
}
</script>

<style scoped>
h3 {
	text-decoration: none;
	background-color: transparent;
}
</style>
