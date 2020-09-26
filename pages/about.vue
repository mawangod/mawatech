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
								v-for="(founder, index) in founders"
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
											{{ founder.message }}
										</p>
									</div>
									<div
										class="testimonial-founder d-flex align-items-center justify-content-center"
									>
										<div class="founder-img">
											<img
												:src="
													require(`@/assets/img/gallery/${founder.photo}.png`)
												"
												alt=""
											/>
										</div>
										<div class="founder-text">
											<span>{{ founder.name }}</span>
											<p>{{ founder.job }}</p>
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
			counters: [
				{value: 8705, title: 'projects'},
				{value: 480, title: 'activeClients', active: true},
				{value: 626, title: 'coffes'},
				{value: 9774, title: 'happyClients'}
			],
			founders: [
				{
					name: 'David Maw',
					job: 'CEO',
					message:
						'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis por incididunt ut labore et dolore mas.',
					photo: 'ceo'
				},
				{
					name: 'Arthur Londers',
					job: 'Chif Photographer',
					message:
						'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis por incididunt ut labore et dolore mas.',
					photo: 'Homepage_testi'
				}
			]
		}
	}
}
</script>

<style scoped>
.quote {
	font-size: 3rem;
	color: #f04e3c;
}
</style>
