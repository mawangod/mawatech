<template>
	<div class="slider-area2" :style="{backgroundImage: `url(${url})`}">
		<div class="slider-height2 hero-overly2 d-flex align-items-center">
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="hero-cap hero-cap2 text-center">
							<h2>{{ title }}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ImageTitle',
	props: {
		title: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		}
	}
}
</script>
