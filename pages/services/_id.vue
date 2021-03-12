<template>
	<main>
		<ImageTitle
			:title="service.title[locale]"
			:url="sliderBackGround"
		></ImageTitle>
		<div class="whole-wrap section-padding30">
			<div class="container box_1170">
				<div class="section-top-border">
					<div class="row">
						<div class="col-md-4">
							<ImageLoader
								:url="`services/${service.photo1}`"
								:alt="service.title[locale]"
								img-class="img-fluid"
							>
							</ImageLoader>
						</div>
						<div class="col-md-8 mt-sm-20">
							<h5 class="mb-20">{{ service.subtitle[locale] }}</h5>
							<p>
								{{ service.bio1[locale] }}
							</p>
						</div>
					</div>
				</div>
				<div class="section-top-border text-right">
					<div class="row">
						<div class="col-md-8">
							<p class="text-right">{{ service.bio2[locale] }}</p>
						</div>
						<div class="col-md-4">
							<ImageLoader
								:url="`services/${service.photo2}`"
								:alt="service.title[locale]"
								img-class="img-fluid"
							>
							</ImageLoader>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/our_services.jpg'

export default {
	async validate({params, store}) {
		if (!store.getters.services.length) {
			await store.dispatch('loadServices')
		}
		return store.getters.services.some(service => service._id === params.id)
	},
	data() {
		return {
			sliderBackGround,
			id: this.$route.params.id
		}
	},
	computed: {
		service() {
			return this.$store.getters.services.find(
				service => service._id === this.id
			)
		},
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		}
	}
}
</script>
