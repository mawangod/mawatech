<template>
	<nuxt-link :to="{name: route, params: {id}}">
		<div class="home-blog-single mb-30">
			<div class="blog-img-cap">
				<div class="blog-img">
					<img :src="require(`@/assets/img/blog/${photo}.png`)" alt="" />
					<ul>
						<li>{{ $t('blog.by') }} {{ author }} - {{ formattedDate }}</li>
					</ul>
				</div>

				<div class="blog-cap">
					<h3>
						{{ title }}
					</h3>
					<p>
						{{ preview }}
					</p>
					<ul class="blog-info-link">
						<li>
							<a href="#">
								<FontAwesomeIcon class="fa" :icon="['fas', 'user']">
								</FontAwesomeIcon>
								<span>{{ $t(`blog.${tags[0]}`) }},</span
								><span>{{ $t(`blog.${tags[1]}`) }}</span>
							</a>
						</li>
						<li>
							<a href="#">
								<FontAwesomeIcon class="fa" :icon="['fas', 'comments']">
								</FontAwesomeIcon>
								{{ comments.length }} {{ $t('blog.comments') }}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nuxt-link>
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
		id: {
			type: Number,
			required: true
		},
		photo: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		preview: {
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
		comments: {
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
			options: {year: 'numeric', month: 'long', day: 'numeric'},
			route: 'blog-post'
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
