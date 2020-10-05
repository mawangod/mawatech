<template>
	<main>
		<ImageTitle
			:title="$t('footer.copyright')"
			:url="sliderBackGround"
		></ImageTitle>
		<div class="about-details section-padding30">
			<div class="container">
				<div class="row">
					<div class="offset-xl-1 col-lg-8">
						<div class="about-details-cap mb-50">
							<h4>{{ $t('copyright.title') }}</h4>
							<p>
								{{ $t('about.missionPart1') }}
							</p>
							<p>
								{{ $t('about.missionPart2') }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/copyright.jpg'

export default {
	data() {
		return {
			sliderBackGround
		}
	}
}
</script>
