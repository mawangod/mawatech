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
			:height="height"
			:width="width"
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
		},
		height: {
			type: String,
			required: true
		},
		width: {
			type: String,
			required: true
		}
	}
}
</script>
