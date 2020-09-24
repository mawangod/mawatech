<template>
	<div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
		<div class="single-team mb-30">
			<div class="team-img">
				<img :src="`/_nuxt/assets/img/gallery/${photo}.png`" alt="" />
			</div>
			<div class="team-caption">
				<h3>
					<a href="#">{{ name | capitalize }}</a>
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
