<template>
	<div class="navigation-top">
		<div class="d-sm-flex justify-content-between text-center">
			<p class="like-info">
				<span class="align-middle">
					<FontAwesomeIcon class="fa" :icon="['fas', 'heart']">
					</FontAwesomeIcon>
				</span>
				Lily and 4 people like this
			</p>
			<ul class="social-icons">
				<li>
					<a href="#">
						<FontAwesomeIcon class="fab" :icon="['fab', 'facebook-f']">
						</FontAwesomeIcon>
					</a>
				</li>
				<li>
					<a href="#">
						<FontAwesomeIcon class="fab" :icon="['fab', 'twitter']">
						</FontAwesomeIcon>
					</a>
				</li>
				<li>
					<a href="#">
						<FontAwesomeIcon class="fab" :icon="['fab', 'linkedin-in']">
						</FontAwesomeIcon>
					</a>
				</li>
				<li>
					<a href="#">
						<FontAwesomeIcon class="fab" :icon="['fab', 'instagram']">
						</FontAwesomeIcon>
					</a>
				</li>
			</ul>
		</div>
		<div class="navigation-area">
			<div class="row">
				<div
					class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center"
				>
					<div class="thumb">
						<a href="#">
							<img
								class="img-fluid"
								src="@/assets/img/post/preview.png"
								alt=""
							/>
						</a>
					</div>
					<div class="arrow">
						<a href="#">
							<span class="lnr text-white ti-arrow-left"></span>
						</a>
					</div>
					<div class="detials">
						<p>Prev Post</p>
						<a href="#">
							<h4>Space The Final Frontier</h4>
						</a>
					</div>
				</div>
				<div
					class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center"
				>
					<div class="detials">
						<p>Next Post</p>
						<a href="#">
							<h4>Telescopes 101</h4>
						</a>
					</div>
					<div class="arrow">
						<a href="#">
							<span class="lnr text-white ti-arrow-right"></span>
						</a>
					</div>
					<div class="thumb">
						<a href="#">
							<img class="img-fluid" src="@/assets/img/post/next.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>
