<template>
	<main>
		<ImageTitle :title="cas.title[locale]" :url="sliderBackGround"></ImageTitle>
		<div class="whole-wrap section-padding30">
			<div class="container box_1170">
				<div class="section-top-border">
					<div class="row">
						<div class="col-md-3">
							<img
								:src="require(`@/assets/img/cases/${cas.photo1}.jpg`)"
								alt=""
								class="img-fluid"
							/>
						</div>
						<div class="col-md-9 mt-sm-20">
							<h4>{{ cas.subtitle[locale] }}</h4>
							<p>
								{{ cas.bio1[locale] }}
							</p>
						</div>
					</div>
				</div>
				<div class="section-top-border text-right">
					<div class="row">
						<div class="col-md-9">
							<p class="text-right">{{ cas.bio2[locale] }}</p>
						</div>
						<div class="col-md-3">
							<img
								:src="require(`@/assets/img/cases/${cas.photo2}.jpg`)"
								alt=""
								class="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div class="section-top-border">
					<div class="row">
						<div class="col-md-3">
							<img
								:src="require(`@/assets/img/cases/${cas.photo3}.jpg`)"
								alt=""
								class="img-fluid"
							/>
						</div>
						<div class="col-md-9 mt-sm-20">
							<p>
								{{ cas.bio3[locale] }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/our_services.jpg'

export default {
	validate({params, store}) {
		return (
			/^\d+$/.test(params.id) &&
			store.state.cases.some(cas => Number(cas.id) === Number(params.id))
		)
	},
	data() {
		return {
			sliderBackGround,
			id: this.$route.params.id
		}
	},
	computed: {
		cas() {
			return this.$store.state.cases.find(
				cas => Number(cas.id) === Number(this.id)
			)
		},
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
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
