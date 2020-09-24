<template>
	<a :href="url" target="_blank" rel="noopener noreferrer">
		<FontAwesomeIcon :class="iconClass" :icon="icon"> </FontAwesomeIcon>
	</a>
</template>

<script>
export default {
	name: 'LinkedIcon',
	props: {
		url: {
			type: String,
			required: true
		},
		iconClass: {
			type: String,
			default: ''
		},
		icon: {
			type: Array,
			required: true
		}
	}
}
</script>
