<template>
	<div class="body-bg body" style="overflow: visible;">
		<Header />
		<Nuxt />
		<Footer />
		<div id="back-top">
			<a title="Go to Top" href="#">
				<FontAwesomeIcon class="fas" :icon="['fas', 'level-up-alt']">
				</FontAwesomeIcon>
			</a>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
.body {
	font-family: 'Poppins', sans-serif;
	font-weight: normal;
	font-style: normal;
}
</style>
