<template>
	<div class="body-bg body-t" style="overflow: visible;">
		<Header id="header-t" :sticky="stickyHeader" />
		<Nuxt />
		<Footer />
		<transition name="fade">
			<div v-show="stickyHeader" id="back-top" @click="scrollToTheTop">
				<a title="Go to Top" href="#">
					<FontAwesomeIcon class="fas" :icon="['fas', 'level-up-alt']">
					</FontAwesomeIcon>
				</a>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			stickyHeader: false
		}
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		scrollToTheTop() {
			const element = document.getElementById('header-t')
			this.$smoothScroll({
				scrollTo: element
			})
		},
		handleScroll(event) {
			this.stickyHeader = window.scrollY > 400
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

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
