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
import ImageTitle from '@/components/image-title.vue'

export default {
	components: {ImageTitle},
	data() {
		return {
			sliderBackGround
		}
	}
}
</script>
