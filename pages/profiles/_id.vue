<template>
	<main>
		<ImageTitle
			title="Team Member Profile"
			:url="sliderBackGround"
		></ImageTitle>
		<div class="whole-wrap section-padding30">
			<div class="container box_1170">
				<div class="section-top-border">
					<h3 class="mb-30">{{ profile.name }} - {{ profile.job }}</h3>
					<div class="row">
						<div class="col-md-3">
							<img
								:src="require(`@/assets/img/gallery/${profile.photo}.png`)"
								alt=""
								class="img-fluid"
							/>
						</div>
						<div class="col-md-9 mt-sm-20">
							<p>
								{{ profile.bio }}
							</p>
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
	validate({params}) {
		// Doit être un nombre et doit exister
		return /^\d+$/.test(params.id)
	},
	data() {
		return {
			sliderBackGround
		}
	},
	computed: {
		id() {
			return this.$route.params.id
		},
		profile() {
			return this.$store.state.profiles.find(
				profile => Number(profile.id) === Number(this.id)
			)
		}
	}
}
</script>
