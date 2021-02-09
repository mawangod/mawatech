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
												:url="facebook"
												icon-class="fab"
												:icon="['fab', 'facebook-f']"
											>
											</LinkedIcon>
										</li>
										<li>
											<LinkedIcon
												:url="twitter"
												icon-class="fab"
												:icon="['fab', 'twitter']"
											>
											</LinkedIcon>
										</li>
										<li>
											<LinkedIcon
												:url="linkedin"
												icon-class="fab"
												:icon="['fab', 'linkedin-in']"
											>
											</LinkedIcon>
										</li>
										<li>
											<LinkedIcon
												:url="instagram"
												icon-class="fab"
												:icon="['fab', 'instagram']"
											>
											</LinkedIcon>
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
							<div class="logo">
								<nuxt-link to="/">
									<img src="@/assets/img/logo/mawatech-logo.png" alt="" />
								</nuxt-link>
							</div>
							<div class="links">
								<div
									class="menu-wrapper d-flex align-items-center justify-content-end"
								>
									<div class="main-menu d-none d-lg-block">
										<NavBar />
									</div>
								</div>
							</div>
							<div class="col-12">
								<div class="mobile_menu d-block d-lg-none">
									<div class="slicknav_menu">
										<a
											href="#"
											role="button"
											class="slicknav_btn"
											@click.stop.prevent="toggleSlicknav"
										>
											<span class="slicknav_icon">
												<span class="slicknav_icon-bar"></span>
												<span class="slicknav_icon-bar"></span>
												<span class="slicknav_icon-bar"></span>
											</span>
										</a>
										<transition
											enter-active-class="slideInDown"
											leave-active-class="slideOutUp"
											appear
										>
											<NavBar
												v-show="slicknavOpened"
												class="slicknav_nav"
												style="animation-duration: 0.2s"
												@toggleSlicknav="toggleSlicknav"
											/>
										</transition>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import {facebook, linkedin, twitter, instagram} from '../utilities/usefull-data'
import LinkedIcon from './linked-icon.vue'
import NavBar from './header-navbar'

export default {
	name: 'Header',
	components: {LinkedIcon, NavBar},
	props: {
		sticky: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			facebook,
			linkedin,
			twitter,
			instagram,
			slicknavOpened: false
		}
	},
	computed: {
		routeName() {
			return this.$route?.name
		}
	},
	watch: {
		routeName(newValue, oldValue) {
			if (newValue !== oldValue && this.slicknavOpened) {
				this.toggleSlicknav()
			}
		}
	},
	methods: {
		toggleSlicknav() {
			this.slicknavOpened = !this.slicknavOpened
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
