<template>
	<main>
		<ImageTitle title="Contact US" :url="sliderBackGround"></ImageTitle>
		<section class="contact-section">
			<div class="container">
				<div class="d-none d-sm-block mb-5 pb-4">
					<vl-map
						:load-tiles-while-animating="true"
						:load-tiles-while-interacting="true"
						data-projection="EPSG:4326"
						style="height: 400px;"
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
						<h2 class="contact-title">Get in Touch</h2>
					</div>
					<div class="col-lg-8">
						<form
							id="contactForm"
							class="form-contact contact_form"
							action="contact_process.php"
							method="post"
							novalidate="novalidate"
						>
							<div class="row">
								<div class="col-12">
									<div class="form-group">
										<textarea
											id="message"
											class="form-control w-100"
											name="message"
											cols="30"
											rows="9"
											onfocus="this.placeholder = ''"
											onblur="this.placeholder = 'Enter Message'"
											placeholder=" Enter Message"
										></textarea>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<input
											id="name"
											class="form-control valid"
											name="name"
											type="text"
											onfocus="this.placeholder = ''"
											onblur="this.placeholder = 'Enter your name'"
											placeholder="Enter your name"
										/>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<input
											id="email"
											class="form-control valid"
											name="email"
											type="email"
											onfocus="this.placeholder = ''"
											onblur="this.placeholder = 'Enter email address'"
											placeholder="Email"
										/>
									</div>
								</div>
								<div class="col-12">
									<div class="form-group">
										<input
											id="subject"
											class="form-control"
											name="subject"
											type="text"
											onfocus="this.placeholder = ''"
											onblur="this.placeholder = 'Enter Subject'"
											placeholder="Enter Subject"
										/>
									</div>
								</div>
							</div>
							<div class="form-group mt-3">
								<button
									type="submit"
									class="button button-contactForm boxed-btn"
								>
									Send
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
								<h3>Chaussée de beaumont 187</h3>
								<p>Mons, 7000</p>
							</div>
						</div>
						<div class="media contact-info">
							<span class="contact-info__icon">
								<FontAwesomeIcon
									:icon="['fas', 'mobile-alt']"
								></FontAwesomeIcon>
							</span>
							<div class="media-body">
								<h3><span>+32 </span>475/70.45.73</h3>
								<p>Mon to Fri 9am to 6pm</p>
							</div>
						</div>
						<div class="media contact-info">
							<span class="contact-info__icon">
								<FontAwesomeIcon :icon="['far', 'envelope']"></FontAwesomeIcon>
							</span>
							<div class="media-body">
								<h3>mawatechnologie@gmail.com</h3>
								<p>Send us your query anytime!</p>
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

export default {
	components: {ImageTitle},
	data() {
		const x = 3.990595028455405
		const y = 50.43797498955024
		return {
			markerPng,
			sliderBackGround,
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
