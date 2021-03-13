<template>
	<main>
		<ImageTitle
			:title="$t('contact.title')"
			:url="sliderBackGround"
		></ImageTitle>
		<section class="contact-section">
			<div class="container">
				<div class="d-none d-sm-block mb-5 pb-4">
					<iframe
						title="location"
						class="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.1762059011603!2d3.988582715794395!3d50.437818479473584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2457afdd93da7%3A0x2249890cd00af6e6!2sChauss%C3%A9e%20de%20Beaumont%20187%2C%207030%20Mons!5e0!3m2!1sfr!2sbe!4v1613395941685!5m2!1sfr!2sbe"
						width="600"
						height="450"
						frameborder="0"
						style="border: 0"
						allowfullscreen=""
						aria-hidden="false"
						tabindex="0"
					></iframe>
				</div>

				<div class="row">
					<div class="col-12">
						<h2 class="contact-title">{{ $t('contact.formTitle') }}</h2>
					</div>
					<div v-if="mailAlreadySended" class="col-lg-8">
						<p>
							{{ $t('contact.mailSended') }}
						</p>
					</div>
					<div v-else class="col-lg-8">
						<ValidationObserver v-slot="{invalid, reset}" tag="div">
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
											name="subject"
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
									<b-button
										type="submit"
										:class="{
											'hero-btn': !invalid
										}"
										:disabled="invalid"
									>
										{{ $t('button.submitButton') }}
									</b-button>
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
import {ValidationObserver, ValidationProvider} from 'vee-validate'
import {gsm, mail, street, town} from '../utilities/usefull-data'

export default {
	components: {ImageTitle, ValidationObserver, ValidationProvider},
	data() {
		return {
			subjectSender: '',
			emailSender: '',
			nameSender: '',
			messageSender: '',
			mail,
			gsm,
			sliderBackGround,
			street,
			town
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
				name: this.nameSender,
				text: this.messageSender,
				email: this.emailSender,
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
	height: 50vh;
	width: 100%;
}

.hero-btn:hover {
	background-color: #ff2143;
}
</style>
