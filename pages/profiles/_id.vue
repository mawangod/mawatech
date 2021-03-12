<template>
	<main>
		<ImageTitle :title="profile.name" :url="sliderBackGround"></ImageTitle>
		<div class="whole-wrap section-padding30">
			<div class="container box_1170">
				<div class="section-top-border">
					<h3 class="mb-30">{{ profile.job }}</h3>
					<div class="row">
						<div class="col-md-3">
							<ImageLoader
								:url="`profiles/${profile.img}`"
								:alt="profile.name"
								img-class="img-fluid"
							>
							</ImageLoader>
						</div>
						<div class="col-md-9 mt-sm-20">
							<h4>{{ profile.slogan[locale] }}</h4>
							<p>
								{{ profile.bio[locale] }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/our_team.jpg'

export default {
	async validate({params, store}) {
		if (!store.getters.profiles.length) {
			await store.dispatch('loadProfiles')
		}
		return store.getters.profiles.some(profile => profile._id === params.id)
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
			return this.$store.getters.profiles.find(
				profile => profile._id === this.id
			)
		},
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		}
	}
}
</script>

<style scoped>
.mb-30 {
	margin-bottom: 30px;
}
</style>
