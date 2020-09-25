<template>
	<nuxt-link
		:to="{name: 'services-work-id', params: {id}}"
		class="col-lg-6 col-md-6 col-sm-10"
	>
		<div class="single-services mb-100">
			<div class="services-img">
				<img :src="require(`@/assets/img/work/${photo1}.jpg`)" alt="" />
			</div>
			<div class="services-caption">
				<h3>
					<a>
						{{ title | capitalize }}
					</a>
				</h3>
				<span>{{ subtitle | capitalize }}</span>
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
		photo1: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		subtitle: {
			type: String,
			required: true
		}
	}
}
</script>
