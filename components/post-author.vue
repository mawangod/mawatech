<template>
	<nuxt-link
		:to="{name: 'profiles-id', params: {id: profile._id}}"
		class="blog-author"
	>
		<div class="media align-items-center">
			<img
				:src="require(`@/assets/img/profiles/preview/${profile.img}.png`)"
				alt=""
			/>
			<div class="media-body">
				<h4>{{ $t('blog.writtenBy').toUpperCase() }} {{ profile.name }}</h4>
				<p class="date">{{ formattedDate }}</p>
				<p>
					{{ profile.slogan[locale] }}
				</p>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		author: {
			type: String,
			required: true
		},
		date: {
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
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		},
		formattedDate() {
			return new Date(this.date).toLocaleDateString(this.locale, this.options)
		},
		profile() {
			return this.$store.getters.profiles.find(
				profile => profile.name === this.author
			)
		}
	},
	mounted() {
		if (!this.$store.getters.profiles.length) {
			this.$store.dispatch('loadProfiles')
		}
	}
}
</script>

<style scoped>
.date {
	text-decoration: underline;
}
</style>
