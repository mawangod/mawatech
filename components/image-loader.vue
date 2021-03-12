<template>
	<picture>
		<source
			type="image/webp"
			:srcset="`${require(`~/assets/img/${url}.webp`)}`"
		/>
		<source
			type="image/jpeg"
			:srcset="`${require(`~/assets/img/${url}.jpg`)}`"
		/>
		<img
			:class="imgClass"
			:src="require(`~/assets/img/${url}.jpg`)"
			:alt="alt"
		/>
	</picture>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			default: ''
		},
		imgClass: {
			type: String,
			default: ''
		}
	}
}
</script>
