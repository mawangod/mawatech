<template>
	<main>
		<ImageTitle title="Our Previous Cases" :url="sliderBackGround"></ImageTitle>
		<div class="services-area section-padding3">
			<div class="container">
				<div class="row">
					<div class="cl-xl-7 col-lg-8 col-md-10">
						<div class="section-tittle mb-70">
							<span>Our Portfolios of cases</span>
							<h2>Featured Case Study</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<ImageCase v-for="cas in cases" :key="cas.id" v-bind="cas">
					</ImageCase>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/our_services.jpg'

export default {
	data() {
		return {
			sliderBackGround
		}
	},
	computed: {
		cases() {
			return this.$store.state.cases
		}
	}
}
</script>
