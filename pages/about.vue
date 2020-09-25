<template>
	<main>
		<ImageTitle title="About Us" :url="sliderBackGround"></ImageTitle>
		<div class="about-details section-padding30">
			<div class="container">
				<div class="row">
					<div class="offset-xl-1 col-lg-8">
						<div class="about-details-cap mb-50">
							<h4>Our Mission</h4>
							<p>
								Consectetur adipiscing elit, sued do eiusmod tempor ididunt
								udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
								gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas
								accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
								maecenas accumsan lacus.
							</p>
							<p>
								Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
								lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
								accumsan.
							</p>
						</div>

						<div class="about-details-cap mb-50">
							<h4>Our Vision</h4>
							<p>
								Consectetur adipiscing elit, sued do eiusmod tempor ididunt
								udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
								gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas
								accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
								maecenas accumsan lacus.
							</p>
							<p>
								Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
								lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
								accumsan.
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
							<div class="single-testimonial text-center">
								<div class="testimonial-caption">
									<div class="testimonial-top-cap">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											width="67px"
											height="49px"
										>
											<path
												fill-rule="evenodd"
												fill="rgb(240, 78, 60)"
												d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
											/>
										</svg>
										<p>
											Consectetur adipiscing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqua. Quis ipsum
											suspendisse ultrices gravida. Risus commodo viverra
											maecenas accumsan lacus vel facilisis por incididunt ut
											labore et dolore mas.
										</p>
									</div>
									<div
										class="testimonial-founder d-flex align-items-center justify-content-center"
									>
										<div class="founder-img">
											<img
												src="@/assets/img/gallery/Homepage_testi.png"
												alt=""
											/>
										</div>
										<div class="founder-text">
											<span>Jessya Inn</span>
											<p>Chif Photographer</p>
										</div>
									</div>
								</div>
							</div>
							<div class="single-testimonial text-center">
								<div class="testimonial-caption">
									<div class="testimonial-top-cap">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											width="67px"
											height="49px"
										>
											<path
												fill-rule="evenodd"
												fill="rgb(240, 78, 60)"
												d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
											/>
										</svg>
										<p>
											Consectetur adipiscing elit, sed do eiusmod tempor
											incididunt ut labore et dolore magna aliqua. Quis ipsum
											suspendisse ultrices gravida. Risus commodo viverra
											maecenas accumsan lacus vel facilisis por incididunt ut
											labore et dolore mas.
										</p>
									</div>
									<div
										class="testimonial-founder d-flex align-items-center justify-content-center"
									>
										<div class="founder-img">
											<img
												src="@/assets/img/gallery/Homepage_testi.png"
												alt=""
											/>
										</div>
										<div class="founder-text">
											<span>Jessya Inn</span>
											<p>Chif Photographer</p>
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
					<Counter :value="8705" title="Projects Completed"></Counter>
					<Counter is-active :value="480" title="Active Clients"></Counter>
					<Counter :value="626" title="Cups of Coffee"></Counter>
					<Counter :value="9774" title="Happy Clients"></Counter>
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
	}
}
</script>
