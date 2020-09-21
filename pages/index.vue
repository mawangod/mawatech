<template>
	<main>
		<div
			class="slider-area"
			:style="{backgroundImage: `url(${sliderBackGround})`}"
		>
			<VueSlickCarousel v-bind="settingSlider" class="slider-active">
				<div class="single-slider slider-height d-flex align-items-center">
					<div class="container">
						<div class="row">
							<div class="col-xl-8 col-lg-7 col-md-8">
								<div class="hero__caption">
									<span>
										Committed to success
									</span>

									<h1>
										We help to grow your business
									</h1>
									<p>
										Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
										indd re voluptate<br />
										velit esscillumlore eu quife nrulla parihatur.
									</p>
									<div class="hero__btn">
										<nuxt-link to="/services" class="btn hero-btn">
											Our Services
										</nuxt-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="single-slider slider-height d-flex align-items-center">
					<div class="container">
						<div class="row">
							<div class="col-xl-8 col-lg-7 col-md-8">
								<div class="hero__caption">
									<span>
										Committed to success
									</span>
									<h1>
										We help to grow your business
									</h1>
									<p>
										Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
										indd re voluptate<br />
										velit esscillumlore eu quife nrulla parihatur.
									</p>
									<div class="hero__btn">
										<nuxt-link to="/services" class="btn hero-btn">
											Our Services
										</nuxt-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</VueSlickCarousel>
		</div>
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
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="single-cat text-center mb-50">
							<div class="cat-icon">
								<FontAwesomeIcon :icon="['fas', 'users-cog']"></FontAwesomeIcon>
							</div>
							<div class="cat-cap">
								<h5>
									<nuxt-link to="/services">
										Strategy Planning
									</nuxt-link>
								</h5>
								<p>
									There are many variations of passages of lorem Ipsum available
									but the new majority have suffered.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="single-cat text-center mb-50">
							<div class="cat-icon">
								<FontAwesomeIcon :icon="['fas', 'file-code']"></FontAwesomeIcon>
							</div>
							<div class="cat-cap">
								<h5>
									<nuxt-link to="/services">
										Insurance Service
									</nuxt-link>
								</h5>
								<p>
									There are many variations of passages of lorem Ipsum available
									but the new majority have suffered.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="single-cat text-center mb-50">
							<div class="cat-icon">
								<FontAwesomeIcon :icon="['fas', 'poll']"></FontAwesomeIcon>
							</div>
							<div class="cat-cap">
								<h5>
									<nuxt-link to="/services">
										Audit & Evaluation
									</nuxt-link>
								</h5>
								<p>
									There are many variations of passages of lorem Ipsum available
									but the new majority have suffered.
								</p>
							</div>
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
					<div class="col-lg-6 col-md-6 col-sm-10">
						<div class="single-services mb-100">
							<div class="services-img">
								<img src="@/assets/img/gallery/services1.png" alt="" />
							</div>
							<div class="services-caption">
								<span>Strategy planing</span>
								<p>
									<a href="#">
										Within the construction industry as their overdraft
									</a>
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-10">
						<div class="single-services mb-100">
							<div class="services-img">
								<img src="@/assets/img/gallery/services2.png" alt="" />
							</div>
							<div class="services-caption">
								<span>Strategy planing</span>
								<p>
									<a href="#">
										Within the construction industry as their overdraft
									</a>
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-10">
						<div class="single-services mb-100">
							<div class="services-img">
								<img src="@/assets/img/gallery/services3.png" alt="" />
							</div>
							<div class="services-caption">
								<span>Strategy planing</span>
								<p>
									<a href="#">
										Within the construction industry as their overdraft
									</a>
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-10">
						<div class="single-services mb-100">
							<div class="services-img">
								<img src="@/assets/img/gallery/services4.png" alt="" />
							</div>
							<div class="services-caption">
								<span>Strategy planing</span>
								<p>
									<a href="#">
										Within the construction industry as their overdraft
									</a>
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
		<div class="team-area section-padding30">
			<div class="container">
				<div class="row">
					<div class="cl-xl-7 col-lg-8 col-md-10">
						<div class="section-tittle mb-70">
							<span>Our Professional members </span>
							<h2>Our Team Mambers</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
						<div class="single-team mb-30">
							<div class="team-img">
								<img src="@/assets/img/gallery/team2.png" alt="" />
							</div>
							<div class="team-caption">
								<h3><a href="#">Ethan Welch</a></h3>
								<span>UX Designer</span>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
						<div class="single-team mb-30">
							<div class="team-img">
								<img src="@/assets/img/gallery/team3.png" alt="" />
							</div>
							<div class="team-caption">
								<h3><a href="#">Ethan Welch</a></h3>
								<span>UX Designer</span>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
						<div class="single-team mb-30">
							<div class="team-img">
								<img src="@/assets/img/gallery/team1.png" alt="" />
							</div>
							<div class="team-caption">
								<h3><a href="#">Ethan Welch</a></h3>
								<span>UX Designer</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section
			class="wantToWork-area w-padding2 section-bg"
			:style="{backgroundImage: `url(${workBackGround})`}"
		>
			<div class="container">
				<div class="row align-items-center justify-content-between">
					<div class="col-xl-7 col-lg-9 col-md-8">
						<div class="wantToWork-caption wantToWork-caption2">
							<h2>
								Are you Searching<br />
								For a First-Class Consultant?
							</h2>
						</div>
					</div>
					<div class="col-xl-3 col-lg-3 col-md-4">
						<a href="#" class="btn btn-black f-right">More About Us</a>
					</div>
				</div>
			</div>
		</section>
		<div class="home-blog-area section-padding30">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-tittle mb-100">
							<span>Recent News of us</span>
							<h2>Our Recent Blog</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-6 col-lg-6 col-md-6">
						<div class="home-blog-single mb-30">
							<div class="blog-img-cap">
								<div class="blog-img">
									<img src="@/assets/img/gallery/home_blog1.png" alt="" />
									<ul>
										<li>By Admin - October 27, 2020</li>
									</ul>
								</div>
								<div class="blog-cap">
									<h3>
										<nuxt-link to="/blog/blog-details">
											16 Easy Ideas to Use in Everyday
										</nuxt-link>
									</h3>
									<p>
										Amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magnua Quis ipsum suspendisse
										ultrices gra.
									</p>
									<nuxt-link to="/blog/blog-details" class="more-btn">
										Read more
									</nuxt-link>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-lg-6 col-md-6">
						<div class="home-blog-single mb-30">
							<div class="blog-img-cap">
								<div class="blog-img">
									<img src="@/assets/img/gallery/home_blog2.png" alt="" />
									<ul>
										<li>By Admin - October 27, 2020</li>
									</ul>
								</div>
								<div class="blog-cap">
									<h3>
										<nuxt-link to="/blog/blog-details">
											16 Easy Ideas to Use in Everyday
										</nuxt-link>
									</h3>
									<p>
										Amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magnua Quis ipsum suspendisse
										ultrices gra.
									</p>
									<nuxt-link to="/blog/blog-details" class="more-btn">
										Read more
									</nuxt-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import supportBackgroundUrl from '@/assets/img/gallery/section_bg02.jpg'
import sliderBackGround from '@/assets/img/hero/h1_hero.jpg'
import testimonialBackGround from '@/assets/img/gallery/section_bg04.jpg'
import workBackGround from '@/assets/img/gallery/section_bg03.jpg'
import VueSlickCarousel from 'vue-slick-carousel'
import Counter from '@/components/counter.vue'

export default {
	components: {VueSlickCarousel, Counter},
	data() {
		return {
			workBackGround,
			testimonialBackGround,
			sliderBackGround,
			supportBackgroundUrl,
			settingSlider: {
				lazyLoad: 'ondemand',
				arrows: true,
				dots: true
			}
		}
	}
}
</script>

<style scoped>
.slider-area {
	margin-top: -1px;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
}

.single-cat {
	cursor: pointer;
}
</style>
