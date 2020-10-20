<template>
	<main>
		<ImageTitle
			:title="$t('contact.title')"
			:url="sliderBackGround"
		></ImageTitle>
		<section class="contact-section">
			<div class="container">
				<div class="d-none d-sm-block mb-5 pb-4">
					<vl-map
						class="map"
						:load-tiles-while-animating="true"
						:load-tiles-while-interacting="true"
						data-projection="EPSG:4326"
					>
						<vl-view
							:max-zoom="20"
							:min-zoom="7"
							:zoom.sync="zoom"
							:center.sync="center"
							:rotation.sync="rotation"
						></vl-view>

						<vl-layer-tile>
							<vl-source-osm></vl-source-osm>
						</vl-layer-tile>

						<vl-layer-vector>
							<vl-source-vector :features="features"></vl-source-vector>

							<vl-style-box>
								<vl-style-fill color="white"></vl-style-fill>
								<vl-style-stroke color="red"></vl-style-stroke>
								<vl-style-icon
									:src="markerPng"
									:anchor="[0.5, 1]"
									:scale="0.1"
								></vl-style-icon>
							</vl-style-box>
						</vl-layer-vector>
					</vl-map>
				</div>

				<div class="row">
					<div class="col-12">
						<h2 class="contact-title">{{ $t('contact.formTitle') }}</h2>
					</div>
					<div v-if="mailAlreadySended" class="col-lg-8">
						<p>
							Merci de nous avoir contacter, nous vous recontacterons bientot
						</p>
					</div>
					<div v-else class="col-lg-8">
						<ValidationObserver v-slot="{invalid, reset}">
							<form
								class="form-contact contact_form"
								@submit.prevent="sendMail(reset)"
							>
								<div class="row">
									<div class="col-12">
										<ValidationProvider
											v-slot="{errors}"
											name="message"
											rules="required|min:3|max:300"
										>
											<div class="form-group">
												<textarea
													v-model="messageSender"
													class="form-control w-100"
													name="message"
													cols="30"
													rows="9"
													:placeholder="$t('contact.placeholderMessage')"
												></textarea>
												<span v-if="errors[0]" class="input-invalid-message">
													{{ $t(`validation.${errors[0]}`) }}
												</span>
											</div>
										</ValidationProvider>
									</div>
									<div class="col-sm-6">
										<ValidationProvider
											v-slot="{errors}"
											name="name"
											rules="required|alpha_spaces|min:3|max:30"
										>
											<div class="form-group">
												<input
													v-model="nameSender"
													class="form-control valid"
													name="name"
													type="text"
													:placeholder="$t('contact.placeholderName')"
												/>
												<span v-if="errors[0]" class="input-invalid-message">
													{{ $t(`validation.${errors[0]}`) }}
												</span>
											</div>
										</ValidationProvider>
									</div>
									<div class="col-sm-6">
										<ValidationProvider
											v-slot="{errors}"
											name="email"
											rules="required|email|min:3|max:30"
										>
											<div class="form-group">
												<input
													v-model="emailSender"
													class="form-control valid"
													name="email"
													type="email"
													:placeholder="$t('contact.placeholderMail')"
												/>
												<span v-if="errors[0]" class="input-invalid-message">
													{{ $t(`validation.${errors[0]}`) }}
												</span>
											</div>
										</ValidationProvider>
									</div>
									<div class="col-12">
										<ValidationProvider
											v-slot="{errors}"
											name="name"
											rules="required|alpha_spaces|min:3|max:30"
										>
											<div class="form-group">
												<input
													v-model="subjectSender"
													class="form-control"
													name="subject"
													type="text"
													:placeholder="$t('contact.placeholderSubject')"
												/>
												<span v-if="errors[0]" class="input-invalid-message">
													{{ $t(`validation.${errors[0]}`) }}
												</span>
											</div>
										</ValidationProvider>
									</div>
								</div>
								<div class="form-group mt-3">
									<b-btn
										type="submit"
										:class="{
											'hero-btn': !invalid
										}"
										:disabled="invalid"
									>
										{{ $t('button.submitButton') }}
									</b-btn>
								</div>
							</form>
						</ValidationObserver>
					</div>
					<div class="col-lg-3 offset-lg-1">
						<div class="media contact-info">
							<span class="contact-info__icon">
								<FontAwesomeIcon
									:icon="['far', 'address-card']"
								></FontAwesomeIcon>
							</span>
							<div class="media-body">
								<h3>{{ street }}</h3>
								<p>{{ town }}</p>
							</div>
						</div>
						<div class="media contact-info">
							<span class="contact-info__icon">
								<FontAwesomeIcon
									:icon="['fas', 'mobile-alt']"
								></FontAwesomeIcon>
							</span>
							<div class="media-body">
								<h3>
									<span>{{ gsm.prefixe }}</span>
									{{ gsm.num }}
								</h3>
								<p>{{ $t('header.worktime') }}</p>
							</div>
						</div>
						<div class="media contact-info">
							<span class="contact-info__icon">
								<FontAwesomeIcon :icon="['far', 'envelope']"></FontAwesomeIcon>
							</span>
							<div class="media-body">
								<h3>{{ mail }}</h3>
								<p>{{ $t('contact.sendUsMessage') }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/contact_us.jpg'
import ImageTitle from '@/components/image-title.vue'
import markerPng from '@/assets/img/media/marker.png'
import {ValidationObserver, ValidationProvider} from 'vee-validate'
import {gsm, mail, street, town} from '../utilities/usefull-data'

export default {
	components: {ImageTitle, ValidationObserver, ValidationProvider},
	data() {
		const x = 3.990595028455405
		const y = 50.43797498955024
		return {
			subjectSender: '',
			emailSender: '',
			nameSender: '',
			messageSender: '',
			mail,
			gsm,
			markerPng,
			sliderBackGround,
			street,
			town,
			zoom: 14,
			center: [x, y],
			rotation: 0,
			features: [
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [x, y]
					},
					properties: {}
				}
			]
		}
	},
	computed: {
		mailAlreadySended() {
			return this.$store.state.mailSended
		}
	},
	methods: {
		async sendMail(reset) {
			await this.$store.dispatch('sendMail', {
				author: this.nameSender,
				content: this.messageSender,
				mail: this.emailSender,
				subject: this.subjectSender
			})
			this.nameSender = ''
			this.messageSender = ''
			this.subjectSender = ''
			this.emailSender = ''
			reset()
		}
	}
}
</script>

<style scoped>
.map {
	height: 400px;
}

.hero-btn:hover {
	background-color: #ff2143;
}
</style>
