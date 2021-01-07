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

			<div class="about-details-cap">
				<div class="container">
					<div class="row">
						<div class="offset-xl-1 col-lg-8">
							<div class="about-details-cap">
								<h4>{{ $t('about.values') }}</h4>
							</div>
						</div>
						<div class="col-md-4">
							<FontAwesomeIcon
								class="icon"
								:icon="['fas', 'hands-helping']"
							></FontAwesomeIcon>
							<h3 class="value-title mb-20">{{ $t('about.respect') }}</h3>

							<div class="single-defination">
								<p>
									{{ $t('about.respectDescription') }}
								</p>
							</div>
						</div>
						<div class="col-md-4">
							<FontAwesomeIcon
								class="icon"
								:icon="['fas', 'medal']"
							></FontAwesomeIcon>
							<h3 class="value-title mb-20">{{ $t('about.excellency') }}</h3>

							<div class="single-defination">
								<p>
									{{ $t('about.excellencyDescription') }}
								</p>
							</div>
						</div>
						<div class="col-md-4">
							<FontAwesomeIcon
								class="icon"
								:icon="['fas', 'crosshairs']"
							></FontAwesomeIcon>
							<h3 class="value-title mb-20">{{ $t('about.efficiency') }}</h3>

							<div class="single-defination">
								<p>
									{{ $t('about.efficiencyDescription') }}
								</p>
							</div>
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
							v-if="profiles && profiles.length"
							v-bind="settingSlider"
							class="h1-testimonial-active"
						>
							<div
								v-for="profile in profiles"
								:key="profile._id"
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
						v-for="counter in counters"
						:key="counter._id"
						:value="counter.value"
						:title="$t(`about.${counter.title}`)"
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
			}
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		},
		counters() {
			return this.$store.getters.counters
		},
		profiles() {
			return this.$store.getters.profiles
		}
	},
	mounted() {
		if (!this.$store.getters.profiles.length) {
			this.$store.dispatch('loadProfiles')
		}
		if (!this.$store.getters.counters.length) {
			this.$store.dispatch('loadCounters')
		}
	}
}
</script>

<style scoped>
.icon {
	font-size: 65px;
	color: #eb566c;
	margin: auto;
	display: block;
	margin-bottom: 20px;
}

.value-title {
	text-align: center;
}
</style>
