<template>
	<main>
		<ImageTitle :title="profile.name" :url="sliderBackGround"></ImageTitle>
		<div class="whole-wrap section-padding30">
			<div class="container box_1170">
				<div class="section-top-border">
					<h3 class="mb-30">{{ profile.job }}</h3>
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
	validate({params, store}) {
		return (
			/^\d+$/.test(params.id) &&
			store.state.profiles.some(
				profile => Number(profile.id) === Number(params.id)
			)
		)
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

<style scoped>
.section-top-border {
	padding: 50px 0;
	border-top: 1px dotted #eee;
}

.mb-30 {
	margin-bottom: 30px;
}
</style>
