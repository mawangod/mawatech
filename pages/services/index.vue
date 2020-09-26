<template>
	<main>
		<ImageTitle
			:title="$t('services.title')"
			:url="sliderBackGround"
		></ImageTitle>
		<div class="categories-area section-padding30">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-tittle mb-70">
							<span>{{ $t('services.highlight') }}</span>
							<h2>{{ $t('services.bestService') }}</h2>
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

export default {
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
