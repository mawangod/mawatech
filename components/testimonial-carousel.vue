<template>
	<div class="container">
		<div class="row d-flex justify-content-center">
			<div class="col-xl-10 col-lg-10 col-md-9">
				<b-carousel
					v-if="profiles && profiles.length"
					id="carouselP"
					controls
					:interval="0"
					class="h1-testimonial-active"
				>
					<b-carousel-slide
						v-for="profile in profiles"
						:key="profile._id"
						class="single-testimonial text-center"
					>
						<div class="testimonial-caption">
							<div class="testimonial-top-cap">
								<FontAwesomeIcon class="quote" :icon="['fas', 'quote-right']">
								</FontAwesomeIcon>
								<p>
									{{ profile.slogan[locale] }}
								</p>
							</div>
							<div
								class="testimonial-founder d-flex align-items-center justify-content-center"
							>
								<div class="founder-img">
									<img
										:src="
											require(`@/assets/img/profiles/preview/${profile.img}.png`)
										"
										alt=""
									/>
								</div>
								<div class="founder-text">
									<span>{{ profile.name }}</span>
									<p>{{ profile.job }}</p>
								</div>
							</div>
						</div>
					</b-carousel-slide>
				</b-carousel>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TestimonialCarousel',
	computed: {
		profiles() {
			return this.$store.getters.profiles.slice(0, 3)
		},
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		}
	},
	mounted() {
		if (!this.$store.getters.profiles.length) {
			this.$store.dispatch('loadProfiles')
		}
	}
}
</script>

<style>
.single-testimonial .carousel-caption {
	position: relative;
	margin: 0 2em;
	z-index: 0;
}
</style>
