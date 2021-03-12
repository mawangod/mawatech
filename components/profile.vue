<template>
	<nuxt-link
		:to="{name: 'profiles-id', params: {id}}"
		class="col-xl-4 col-lg-4 col-md-6"
	>
		<div class="single-team mb-30">
			<div class="team-img">
				<ImageLoader
					:url="`profiles/${img}`"
					:alt="name"
					img-class="profile"
				></ImageLoader>
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
import ImageLoader from './image-loader'

export default {
	components: {ImageLoader},
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
