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
					<div class="col-lg-8">
						<form
							id="contactForm"
							class="form-contact contact_form"
							novalidate="novalidate"
						>
							<div class="row">
								<div class="col-12">
									<div class="form-group">
										<textarea
											class="form-control w-100"
											name="message"
											cols="30"
											rows="9"
											:placeholder="$t('contact.placeholderMessage')"
										></textarea>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<input
											class="form-control valid"
											name="name"
											type="text"
											:placeholder="$t('contact.placeholderName')"
										/>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<input
											class="form-control valid"
											name="email"
											type="email"
											:placeholder="$t('contact.placeholderMail')"
										/>
									</div>
								</div>
								<div class="col-12">
									<div class="form-group">
										<input
											class="form-control"
											name="subject"
											type="text"
											:placeholder="$t('contact.placeholderSubject')"
										/>
									</div>
								</div>
							</div>
							<div class="form-group mt-3">
								<button
									type="submit"
									class="button button-contactForm boxed-btn"
								>
									{{ $t('contact.submitButton') }}
								</button>
							</div>
						</form>
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
import {gsm, mail, street, town} from '../utilities/usefull-data'

export default {
	components: {ImageTitle},
	data() {
		const x = 3.990595028455405
		const y = 50.43797498955024
		return {
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
	}
}
</script>

<style scoped>
.map {
	height: 400px;
}
</style>
