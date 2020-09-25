<template>
	<main>
		<ImageTitle title="Our Team" :url="sliderBackGround"></ImageTitle>
		<div class="about-details section-padding30">
			<div class="container">
				<div class="row">
					<div class="offset-xl-1 col-lg-8">
						<div class="about-details-cap mb-50">
							<h4>Our Team</h4>
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
						<nuxt-link to="/about" class="btn btn-black f-right">
							More About Us
						</nuxt-link>
					</div>
				</div>
			</div>
		</section>
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
						v-for="profile in profiles"
						:id="profile.id"
						:key="profile.id"
						:photo="profile.photo"
						:name="profile.name"
						:job="profile.job"
					>
					</ImageProfile>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/our_team.jpg'
import workBackGround from '@/assets/img/gallery/section_bg03.jpg'

export default {
	data() {
		return {
			sliderBackGround,
			workBackGround
		}
	},
	computed: {
		profiles() {
			return this.$store.state.profiles
		}
	}
}
</script>
