<template>
	<main>
		<div
			class="slider-area2"
			:style="{backgroundImage: `url(${sliderBackGround})`}"
		>
			<div class="slider-height2 hero-overly2 d-flex align-items-center">
				<div class="container">
					<div class="row">
						<div class="col-xl-12">
							<div class="hero-cap hero-cap2 text-center">
								<h2>Our Services</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
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
								<h5><nuxt-link to="/services">Strategy Planning</nuxt-link></h5>
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
								<h5><nuxt-link to="/services">Insurance Service</nuxt-link></h5>
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
									<nuxt-link to="/services">Audit & Evaluation</nuxt-link>
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
								<h5><nuxt-link to="/services">Insurance Service</nuxt-link></h5>
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
									<nuxt-link to="/services">Audit & Evaluation</nuxt-link>
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
								<FontAwesomeIcon :icon="['fas', 'users-cog']"></FontAwesomeIcon>
							</div>
							<div class="cat-cap">
								<h5><nuxt-link to="/services">Strategy Planning</nuxt-link></h5>
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
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/hero/hero2.jpg'

export default {
	data() {
		return {
			sliderBackGround
		}
	}
}
</script>
