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
			class="support-company-area pt-100 pb-100 section-bg fix"
			:style="{backgroundImage: `url(${supportBackgroundUrl})`}"
		>
			<div class="container">
				<div class="row align-items-center">
					<div class="col-xl-6 col-lg-6">
						<div class="support-location-img">
							<img src="@/assets/img/gallery/about.png" alt="" />
						</div>
					</div>
					<div class="col-xl-6 col-lg-6">
						<div class="right-caption">
							<div class="section-tittle section-tittle2 mb-50">
								<span>Our Top Services</span>
								<h2>Our Best Services</h2>
							</div>
							<div class="support-caption">
								<p class="pera-top">
									Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess
									cillum dolore egru lofrre dsu quality mollit anim laborumuis
									au dolor in voluptate velit cillu.
								</p>
								<p class="mb-65">
									Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd
									re voluptate velit esscillumlore eu quife nrulla parihatur.
									Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
									dhjinulpadeserunt moll.
								</p>
								<nuxt-link to="/about" class="btn post-btn">
									More About Us
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="team-area section-padding30">
			<div class="container">
				<div class="row">
					<div class="cl-xl-7 col-lg-8 col-md-10">
						<div class="section-tittle mb-70">
							<span>Our Professional members </span>
							<h2>Our Team Members</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<ImageProfile
						photo="team2"
						name="Isaï Coulomb"
						job="Software Engineer"
					>
					</ImageProfile>
					<ImageProfile photo="team3" name="Ethan Welch" job="UX Designer">
					</ImageProfile>
					<ImageProfile photo="team1" name="Francis Lejeune" job="Manager">
					</ImageProfile>
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
import ImageTitle from '@/components/image-title.vue'
import sliderBackGround from '@/assets/img/hero/hero2.jpg'
import supportBackgroundUrl from '@/assets/img/gallery/section_bg02.jpg'
import testimonialBackGround from '@/assets/img/gallery/section_bg04.jpg'

export default {
	components: {VueSlickCarousel, ImageTitle},
	data() {
		return {
			sliderBackGround,
			supportBackgroundUrl,
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
