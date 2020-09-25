<template>
	<main>
		<ImageTitle title="Our Services" :url="sliderBackGround"></ImageTitle>
		<div class="categories-area section-padding30">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-tittle mb-70">
							<span>Our Top Services</span>
							<h2>Our Best Services</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<Service
						v-for="service in services"
						:key="service.id"
						v-bind="service"
					></Service>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/our_services.jpg'
import ImageTitle from '@/components/image-title.vue'

export default {
	components: {ImageTitle},
	data() {
		return {
			sliderBackGround
		}
	},
	computed: {
		services() {
			return this.$store.state.services
		}
	}
}
</script>
