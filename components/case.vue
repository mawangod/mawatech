<template>
	<nuxt-link
		:to="{name: 'cases-id', params: {id}}"
		class="col-lg-6 col-md-6 col-sm-10"
	>
		<div class="single-services mb-100">
			<div class="services-caption">
				<h3>
					{{ title[locale] | capitalize }}
				</h3>
				<span>{{ subtitle[locale] }}</span>
			</div>
			<div class="services-img">
				<ImageLoader
					:url="`cases/${photo1}`"
					:alt="title[locale]"
					height="400"
					width="550"
				>
				</ImageLoader>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
import capitalizeName from '../utilities/capitalize-name'
import ImageLoader from './image-loader'

export default {
	components: {
		ImageLoader
	},
	filters: {
		capitalize(name) {
			return capitalizeName(name)
		}
	},
	props: {
		id: {
			type: String,
			required: true
		},
		photo1: {
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
