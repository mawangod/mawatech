<template>
	<nuxt-link
		:to="{name: 'profiles-id', params: {id}}"
		class="col-xl-4 col-lg-4 col-md-6"
	>
		<div class="single-team mb-30">
			<div class="team-img">
				<img :src="require(`@/assets/img/profiles/${img}.png`)" alt="" />
			</div>
			<div class="team-caption">
				<h3>
					<a>
						{{ name | capitalize }}
					</a>
				</h3>
				<span>{{ job | capitalize }}</span>
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
			type: String,
			required: true
		},
		img: {
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
