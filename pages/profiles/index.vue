<template>
	<main>
		<ImageTitle :title="$t('team.title')" :url="sliderBackGround"></ImageTitle>
		<div class="about-details section-padding30">
			<div class="container">
				<div class="row">
					<div class="offset-xl-1 col-lg-8">
						<div class="about-details-cap mb-50">
							<h4>{{ $t('team.title') }}</h4>
							<p>
								{{ $t('team.teamPart1') }}
							</p>
							<p>
								{{ $t('team.teamPart2') }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<WantToWork></WantToWork>

		<div class="team-area section-padding30">
			<div class="container">
				<div class="row">
					<div class="cl-xl-7 col-lg-8 col-md-10">
						<div class="section-tittle mb-70">
							<span>{{ $t('team.highlight') }}</span>
							<h2>{{ $t('team.bestTeam') | capitalize }}</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<Profile
						v-for="profile in profiles"
						:id="profile._id"
						:key="profile._id"
						:img="profile.img"
						:name="profile.name"
						:job="profile.job"
					>
					</Profile>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/our_team.jpg'
import workBackGround from '@/assets/img/gallery/section_bg03.jpg'
import capitalizeName from '@/utilities/capitalize-name'

export default {
	filters: {
		capitalize(name) {
			return capitalizeName(name)
		}
	},
	data() {
		return {
			sliderBackGround,
			workBackGround
		}
	},
	computed: {
		profiles() {
			return this.$store.getters.profiles
		}
	},
	mounted() {
		if (!this.$store.getters.profiles.length) {
			this.$store.dispatch('loadProfiles')
		}
	}
}
</script>
