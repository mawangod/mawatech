<template>
	<div class="body-bg body-t">
		<Header id="header-t" :sticky="stickyHeader" />
		<Nuxt />
		<Footer />
		<transition name="fade">
			<div v-show="stickyHeader" id="back-top" @click="scrollToTheTop">
				<FontAwesomeIcon class="fas" :icon="['fas', 'level-up-alt']">
				</FontAwesomeIcon>
			</div>
		</transition>
		<client-only>
			<CookieAlert />
		</client-only>
	</div>
</template>

<script>
export default {
	data() {
		return {
			stickyHeader: false
		}
	},
	head() {
		return {
			htmlAttrs: {
				lang: this.$i18n.locale || this.$i18n.defaultLocale
			}
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
	overflow: visible;
}

.__nuxt-error-page {
	position: relative;
}
</style>
