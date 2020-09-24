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
						{{ title }}
					</a>
				</h5>
				<p>
					{{ subtitle }}
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
			type: Number,
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
