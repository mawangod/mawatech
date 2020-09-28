<template>
	<header>
		<div class="header-area">
			<div class="main-header">
				<div class="header-top d-none d-lg-block">
					<div class="container">
						<div class="col-xl-12">
							<div
								class="row d-flex justify-content-between align-items-center"
							>
								<div class="header-info-left">
									<ul>
										<li>
											<FontAwesomeIcon
												class="far"
												:icon="['far', 'clock']"
											></FontAwesomeIcon>
											{{ $t('header.worktime') }}
										</li>
									</ul>
								</div>
								<div class="header-info-right">
									<ul class="header-social">
										<li>
											<LinkedIcon
												url="https://fr-fr.facebook.com/"
												icon-class="fab"
												:icon="['fab', 'facebook-f']"
											>
											</LinkedIcon>
										</li>
										<li>
											<LinkedIcon
												url="https://twitter.com/"
												icon-class="fab"
												:icon="['fab', 'twitter']"
											>
											</LinkedIcon>
										</li>
										<li>
											<LinkedIcon
												url="https://fr.linkedin.com/"
												icon-class="fab"
												:icon="['fab', 'linkedin-in']"
											>
											</LinkedIcon>
										</li>
										<li>
											<LinkedIcon
												url="https://www.instagram.com/?hl=fr"
												icon-class="fab"
												:icon="['fab', 'instagram']"
											>
											</LinkedIcon>
										</li>
										<li>
											<select
												class="switch"
												:value="selectedLocale"
												@change="
													setLocale(
														availableLocales[$event.target.selectedIndex]
													)
												"
											>
												<option
													v-for="locale in availableLocales"
													:key="locale.code"
													:value="getLocaleFormatted(locale.code)"
												>
													{{ getLocaleFormatted(locale.code) | capitalize }}
												</option>
											</select>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					:class="[
						'header-bottom header-sticky',
						{
							'sticky-bar': sticky
						}
					]"
				>
					<div class="container">
						<div class="row align-items-center">
							<div class="col-xl-2 col-lg-2">
								<div class="logo">
									<nuxt-link to="/">
										<img src="@/assets/img/logo/mawatech-logo.png" alt="" />
									</nuxt-link>
								</div>
							</div>
							<div class="col-xl-10 col-lg-10">
								<div
									class="menu-wrapper d-flex align-items-center justify-content-end"
								>
									<div class="main-menu d-none d-lg-block">
										<nav>
											<ul id="navigation">
												<li>
													<nuxt-link to="/">{{ $t('header.home') }}</nuxt-link>
												</li>
												<li>
													<nuxt-link to="/about">
														{{ $t('header.about') }}
													</nuxt-link>
												</li>
												<li>
													<nuxt-link to="/services">
														{{ $t('header.services') }}
													</nuxt-link>
												</li>
												<li>
													<nuxt-link to="/profiles">
														{{ $t('header.team') }}
													</nuxt-link>
												</li>
												<li>
													<nuxt-link to="/cases">
														{{ $t('header.cases') }}
													</nuxt-link>
												</li>
												<li>
													<nuxt-link to="/blog">
														{{ $t('header.blog') }}
													</nuxt-link>
													<ul class="submenu">
														<li>
															<nuxt-link to="/blog">
																{{ $t('header.blog') }}
															</nuxt-link>
														</li>
														<li>
															<nuxt-link to="/blog/post">
																{{ $t('header.post') }}
															</nuxt-link>
														</li>
													</ul>
												</li>
												<li>
													<nuxt-link to="/contact">
														{{ $t('header.contact') }}
													</nuxt-link>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="mobile_menu d-block d-lg-none"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import capitalizeName from '../utilities/capitalize-name'
import LinkedIcon from './linked-icon.vue'

export default {
	name: 'Header',
	filters: {
		capitalize(name) {
			return capitalizeName(name)
		}
	},
	components: {LinkedIcon},
	props: {
		sticky: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		selectedLocale() {
			return (
				this.getLocaleFormatted(this.$i18n.locale) ||
				this.getLocaleFormatted(this.$i18n.defaultLocale)
			)
		},
		availableLocales() {
			return this.$i18n.locales
		}
	},
	methods: {
		setLocale(locale) {
			this.$i18n.setLocale(locale.code)
		},
		getLocaleFormatted(locale) {
			return locale.split('-')[0]
		}
	}
}
</script>

<style scoped>
.far {
	margin-right: 8px;
	color: #e94d65;
}
</style>
