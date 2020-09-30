<template>
	<nuxt-link
		:to="{name: 'profiles-id', params: {id: profile.id}}"
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
					{{ profile.slogan }}
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
			profile: this.$store.state.profiles.find(
				profile => profile.name === this.author
			),
			options: {year: 'numeric', month: 'long', day: 'numeric'}
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		},
		formattedDate() {
			return new Date(this.date).toLocaleDateString(this.locale, this.options)
		}
	}
}
</script>

<style scoped>
.date {
	text-decoration: underline;
}
</style>
