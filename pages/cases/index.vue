<template>
	<main>
		<ImageTitle :title="$t('cases.title')" :url="sliderBackGround"></ImageTitle>
		<div class="services-area section-padding3">
			<div class="container">
				<div class="row">
					<div class="cl-xl-7 col-lg-8 col-md-10">
						<div class="section-tittle mb-70">
							<span>{{ $t('cases.highlight') }}</span>
							<h2>{{ $t('cases.featuredCase') }}</h2>
						</div>
					</div>
				</div>
				<div v-if="cases && cases.length" class="row">
					<Case v-for="cas in cases" :id="cas._id" :key="cas._id" v-bind="cas">
					</Case>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/our_cases.jpg'

export default {
	data() {
		return {
			sliderBackGround
		}
	},
	computed: {
		cases() {
			return this.$store.getters.cases
		}
	},
	mounted() {
		if (!this.$store.getters.cases.length) {
			this.$store.dispatch('loadCases')
		}
	}
}
</script>
