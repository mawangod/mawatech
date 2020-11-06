<template>
	<nuxt-link
		:to="{name: 'services-id', params: {id}}"
		class="col-lg-4 col-md-6 col-sm-6"
	>
		<div class="single-cat text-center mb-50">
			<div class="cat-icon">
				<FontAwesomeIcon :icon="icon"></FontAwesomeIcon>
			</div>
			<div class="cat-cap">
				<h5>
					<a>
						{{ title[locale] }}
					</a>
				</h5>
				<p>
					{{ subtitle[locale] }}
				</p>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		icon: {
			type: Array,
			required: true
		},
		id: {
			type: String,
			required: true
		},
		title: {
			type: Object,
			required: true
		},
		subtitle: {
			type: Object,
			required: true
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		}
	}
}
</script>

<style scoped>
.cat-cap {
	height: 250px;
}
</style>
