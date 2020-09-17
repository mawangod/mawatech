<template>
	<main>
		<div
			class="slider-area2"
			:style="{backgroundImage: `url(${sliderBackGround})`}"
		>
			<div class="slider-height2 hero-overly2 d-flex align-items-center">
				<div class="container">
					<div class="row">
						<div class="col-xl-12">
							<div class="hero-cap hero-cap2 text-center">
								<h2>Contact US</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="contact-section">
			<div class="container">
				<div class="d-none d-sm-block mb-5 pb-4"></div>
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
import sliderBackGround from '@/assets/img/hero/hero2.jpg'

export default {
	data() {
		return {
			sliderBackGround
		}
	}
}
</script>
