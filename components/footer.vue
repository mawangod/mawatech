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
									<nuxt-link to="/">
										<img
											src="@/assets/img/logo/mawatech-logo-footer.png"
											alt=""
										/>
									</nuxt-link>
								</div>
								<div class="footer-tittle">
									<div class="footer-pera">
										<p class="info1">
											{{ $t('footer.slogan') }}
										</p>
									</div>
								</div>
								<div class="footer-number">
									<h4>
										<span>
											{{ gsm.prefixe }}
										</span>
										{{ gsm.num }}
									</h4>
									<p>{{ mail }}</p>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
							<div class="single-footer-caption mb-50">
								<div class="footer-tittle">
									<h4>{{ $t('footer.general') }}</h4>
									<ul>
										<li v-for="(tab, index) in generalTabs" :key="index">
											<nuxt-link :to="`/${tab}`">
												{{ $t(`footer.${tab}`) }}
											</nuxt-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
							<div class="single-footer-caption mb-50">
								<div class="footer-tittle">
									<h4>{{ $t('footer.about') }}</h4>
									<ul>
										<li v-for="(tab, index) in aboutTabs" :key="index">
											<nuxt-link :to="`/${tab}`">
												{{ $t(`footer.${tab}`) }}
											</nuxt-link>
										</li>
									</ul>
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
									{{ $t('footer.underCopyright') }}
								</p>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4">
							<div class="footer-social f-right">
								<LinkedIcon
									:url="facebook"
									icon-class="fab"
									:icon="['fab', 'facebook-f']"
								>
								</LinkedIcon>
								<LinkedIcon
									:url="twitter"
									icon-class="fab"
									:icon="['fab', 'twitter']"
								>
								</LinkedIcon>
								<LinkedIcon
									:url="linkedin"
									icon-class="fab"
									:icon="['fab', 'linkedin-in']"
								>
								</LinkedIcon>
								<LinkedIcon
									:url="instagram"
									icon-class="fab"
									:icon="['fab', 'instagram']"
								>
								</LinkedIcon>
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
import {
	gsm,
	mail,
	facebook,
	linkedin,
	twitter,
	instagram
} from '../utilities/usefull-data'
import LinkedIcon from './linked-icon.vue'

export default {
	components: {LinkedIcon},
	data() {
		return {
			backgroundUrl,
			mail,
			gsm,
			facebook,
			linkedin,
			twitter,
			instagram,
			generalTabs: ['jobs', 'information', 'copyright'],
			aboutTabs: ['cookies', 'privacy', 'disclaimer']
		}
	},
	methods: {
		addMailtoNewsletter() {}
	}
}
</script>
