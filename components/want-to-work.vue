<template>
	<section
		class="wantToWork-area w-padding2 section-bg"
		:style="{backgroundImage: `url(${workBackGround})`}"
	>
		<div class="container">
			<div class="row align-items-center justify-content-between">
				<div class="col-xl-9 col-lg-8 col-md-7">
					<div class="wantToWork-caption wantToWork-caption2">
						<h2>
							{{ $t('team.searching') }}<br />
							{{ $t('team.consultant') }}
						</h2>
					</div>
				</div>
				<div class="col-xl-3 col-lg-4 col-md-5">
					<nuxt-link to="/about" class="btn btn-black f-right">
						{{ $t('button.moreAboutUs') }}
					</nuxt-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import workBackGround from '@/assets/img/gallery/section_bg03.jpg'
export default {
	data() {
		return {
			workBackGround
		}
	}
}
</script>
