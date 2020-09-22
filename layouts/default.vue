<template>
	<div class="body-bg body-t" style="overflow: visible;">
		<Header id="header-t" />
		<Nuxt />
		<Footer />
		<div id="back-top" @click="scrollToTheTop">
			<a title="Go to Top" href="#">
				<FontAwesomeIcon class="fas" :icon="['fas', 'level-up-alt']">
				</FontAwesomeIcon>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		scrollToTheTop() {
			const element = document.getElementById('header-t')
			this.$smoothScroll({
				scrollTo: element
			})
		}
	}
}
</script>

<style>
.body-t {
	font-family: 'Poppins', sans-serif;
	font-weight: normal;
	font-style: normal;
}
</style>
