<template>
	<main>
		<ImageTitle :title="service.title" :url="sliderBackGround"></ImageTitle>
		<div class="whole-wrap section-padding30">
			<div class="container box_1170">
				<div class="section-top-border">
					<div class="row">
						<div class="col-md-3">
							<img
								:src="require(`@/assets/img/service/${service.photo1}.png`)"
								alt=""
								class="img-fluid"
							/>
						</div>
						<div class="col-md-9 mt-sm-20">
							<p>{{ service.subtitle }}</p>
							<p>
								{{ service.bio1 }}
							</p>
						</div>
					</div>
				</div>
				<div class="section-top-border text-right">
					<div class="row">
						<div class="col-md-9">
							<p class="text-right">{{ service.bio2 }}</p>
						</div>
						<div class="col-md-3">
							<img
								:src="require(`@/assets/img/service/${service.photo2}.png`)"
								alt=""
								class="img-fluid"
							/>
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
			store.state.services.some(
				service => Number(service.id) === Number(params.id)
			)
		)
	},
	data() {
		return {
			sliderBackGround,
			id: this.$route.params.id
		}
	},
	computed: {
		service() {
			return this.$store.state.services.find(
				service => Number(service.id) === Number(this.id)
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
