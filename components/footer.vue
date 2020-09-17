<template>
	<footer>
		<div
			class="footer-area section-bg"
			:style="{backgroundImage: `url(${backgroundUrl})`}"
		>
			<div class="container">
				<div class="footer-top footer-padding">
					<div class="row d-flex justify-content-between">
						<div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
							<div class="single-footer-caption mb-50">
								<div class="footer-logo">
									<a href="index.html">
										<img
											src="@/assets/img/logo/mawatech-logo-footer.png"
											alt=""
										/>
									</a>
								</div>
								<div class="footer-tittle">
									<div class="footer-pera">
										<p class="info1">
											My modern, professional and sophisticated consultancy
											website
										</p>
									</div>
								</div>
								<div class="footer-number">
									<h4><span>+32 </span>475/70.45.73</h4>
									<p>mawatechnologie@gmail.com</p>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
							<div class="single-footer-caption mb-50">
								<div class="footer-tittle">
									<h4>General</h4>
									<ul>
										<li><a href="#">Advanced</a></li>
										<li><a href="#">Management</a></li>
										<li><a href="#">Corporate</a></li>
										<li><a href="#">Customer</a></li>
										<li><a href="#">Information</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
							<div class="single-footer-caption mb-50">
								<div class="footer-tittle">
									<h4>Explore</h4>
									<ul>
										<li><a href="#">Cookies</a></li>
										<li><a href="#">About</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Proparties</a></li>
										<li><a href="#">Licenses</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6 col-sm-8">
							<div class="single-footer-caption mb-50">
								<div class="footer-tittle">
									<h4>Location</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-bottom">
					<div class="row d-flex justify-content-between align-items-center">
						<div class="col-xl-9 col-lg-8">
							<div class="footer-copy-right">
								<p>
									Copyright &copy; All rights reserved
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import backgroundUrl from '@/assets/img/gallery/footer_bg.jpg'

export default {
	data() {
		return {
			backgroundUrl
		}
	}
}
</script>
