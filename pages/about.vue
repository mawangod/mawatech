<template>
	<main>
		<ImageTitle :title="$t('about.title')" :url="sliderBackGround"></ImageTitle>
		<div class="about-details section-padding30">
			<div class="container">
				<div class="row">
					<div class="offset-xl-1 col-lg-8">
						<div class="about-details-cap mb-50">
							<h4>{{ $t('about.mission') }}</h4>
							<p>
								{{ $t('about.missionPart1') }}
							</p>
							<p>
								{{ $t('about.missionPart2') }}
							</p>
						</div>

						<div class="about-details-cap mb-50">
							<h4>{{ $t('about.vision') }}</h4>
							<p>
								{{ $t('about.visionPart1') }}
							</p>
							<p>
								{{ $t('about.visionPart2') }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="testimonial-area testimonial-padding"
			:style="{backgroundImage: `url(${testimonialBackGround})`}"
		>
			<div class="container">
				<div class="row d-flex justify-content-center">
					<div class="col-xl-10 col-lg-10 col-md-9">
						<VueSlickCarousel
							v-bind="settingSlider"
							class="h1-testimonial-active"
						>
							<div
								v-for="(profile, index) in profiles"
								:key="index"
								class="single-testimonial text-center"
							>
								<div class="testimonial-caption">
									<div class="testimonial-top-cap">
										<FontAwesomeIcon
											class="quote"
											:icon="['fas', 'quote-right']"
										>
										</FontAwesomeIcon>
										<p>
											{{ profile.slogan }}
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
							</div>
						</VueSlickCarousel>
					</div>
				</div>
			</div>
		</div>
		<div class="count-down-area pb-120">
			<div class="container">
				<div class="row justify-content-between">
					<Counter
						v-for="(counter, index) in counters"
						:key="index"
						:value="counter.value"
						:title="$t(`about.${counter.title}`)"
						:is-active="counter.active"
					></Counter>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import sliderBackGround from '@/assets/img/cover/about_us.jpg'
import testimonialBackGround from '@/assets/img/gallery/section_bg04.jpg'

export default {
	components: {VueSlickCarousel},
	data() {
		return {
			sliderBackGround,
			testimonialBackGround,
			settingSlider: {
				lazyLoad: 'ondemand',
				arrows: true,
				dots: true
			},
			counters: this.$store.state.counters,
			profiles: this.$store.state.profiles
		}
	}
}
</script>
