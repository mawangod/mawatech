<template>
	<ul class="blog-info-link">
		<li>
			<a href="" @click.prevent="">
				<FontAwesomeIcon class="fa" :icon="['fas', 'user']"> </FontAwesomeIcon>
				<span>{{ getTitle(tags[0]) }},</span>
				<span>{{ getTitle(tags[1]) }}</span>
			</a>
		</li>
		<li>
			<a href="" @click.prevent="">
				<FontAwesomeIcon class="fa" :icon="['fas', 'comments']">
				</FontAwesomeIcon>
				{{ comments && comments.length }} {{ $t('blog.comments') }}
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		tags: {
			type: Array,
			required: true
		},
		comments: {
			type: Array,
			required: true
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		}
	},
	mounted() {
		if (!this.$store.getters.tags.length) {
			this.$store.dispatch('loadTags')
		}
	},
	methods: {
		getTitle(tagId) {
			return (
				this.$store.getters.tags.length &&
				this.$store.getters.tags.find(tag => tag._id === tagId).title[
					this.locale
				]
			)
		}
	}
}
</script>
