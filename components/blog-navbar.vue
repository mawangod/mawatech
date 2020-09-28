<template>
	<nav class="blog-pagination justify-content-center d-flex">
		<ul class="pagination">
			<li class="page-item">
				<a class="page-link" aria-label="Previous" @click="previousPage">
					<FontAwesomeIcon class="fas" :icon="['fas', 'angle-left']">
					</FontAwesomeIcon>
				</a>
			</li>
			<li v-for="page in pages" :key="page" class="page-item">
				<a class="page-link">{{ page }}</a>
			</li>
			<li class="page-item">
				<a class="page-link" aria-label="Next" @click="nextPage">
					<FontAwesomeIcon class="fas" :icon="['fas', 'angle-right']">
					</FontAwesomeIcon>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			pages: [1, 2]
		}
	},
	methods: {
		previousPage() {},
		nextPage() {}
	}
}
</script>
