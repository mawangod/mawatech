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
					<ImageWorkcase v-for="work in works" :key="work.id" v-bind="work">
					</ImageWorkcase>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/our_services.jpg'
import ImageTitle from '@/components/image-title.vue'
import supportBackgroundUrl from '@/assets/img/gallery/section_bg02.jpg'

export default {
	components: {ImageTitle},
	data() {
		return {
			sliderBackGround,
			supportBackgroundUrl
		}
	},
	computed: {
		services() {
			return this.$store.state.services
		},
		works() {
			return this.$store.state.works
		}
	}
}
</script>
