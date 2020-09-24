<template>
	<div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
		<div class="single-team mb-30">
			<div class="team-img">
				<img :src="require(`@/assets/img/gallery/${photo}.png`)" alt="" />
			</div>
			<div class="team-caption">
				<h3>
					<nuxt-link :to="{name: 'profiles-id', params: {id}}">
						{{ name | capitalize }}
					</nuxt-link>
				</h3>
				<span>{{ job | capitalize }}</span>
			</div>
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
		id: {
			type: Number,
			required: true
		},
		photo: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		job: {
			type: String,
			required: true
		}
	}
}
</script>
