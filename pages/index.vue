<template>
	<main>
		<div
			class="slider-area"
			:style="{backgroundImage: `url(${sliderBackGround})`}"
		>
			<VueSlickCarousel v-bind="settingSlider" class="slider-active">
				<div
					v-for="(slide, index) in slides"
					:key="index"
					class="single-slider slider-height d-flex align-items-center"
				>
					<div class="container">
						<div class="row">
							<div class="col-xl-8 col-lg-7 col-md-8">
								<div class="hero__caption">
									<span>
										{{ $t(`home.${slide.highlight}`) }}
									</span>
									<h1>{{ $t(`home.${slide.title}`) }}</h1>
									<p>
										{{ $t(`home.${slide.message}`) }}
									</p>
									<div class="hero__btn">
										<nuxt-link :to="slide.link" class="btn hero-btn">
											{{ $t(`button.${slide.button}`) }}
										</nuxt-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</VueSlickCarousel>
		</div>
		<div class="categories-area section-padding30">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-tittle mb-70">
							<span>{{ $t('services.highlight') }}</span>
							<h2>{{ $t('services.bestService') }}</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<Service
						v-for="service in services"
						:id="service._id"
						:key="service._id"
						v-bind="service"
					></Service>
				</div>
			</div>
		</div>
		<div
			class="support-company-area pt-100 pb-100 section-bg fix"
			:style="{backgroundImage: `url(${supportBackgroundUrl})`}"
		>
			<div class="container">
				<div class="row align-items-center">
					<div class="col-xl-6 col-lg-6">
						<div class="support-location-img">
							<img src="@/assets/img/gallery/about.png" alt="" />
						</div>
					</div>
					<div class="col-xl-6 col-lg-6">
						<div class="right-caption">
							<div class="section-tittle section-tittle2 mb-50">
								<span>{{ $t('about.title') }}</span>
								<h2>{{ $t('about.subtitle') }}</h2>
							</div>
							<div class="support-caption">
								<p class="pera-top">
									{{ $t('about.missionPart1') }}
								</p>
								<p class="mb-65">
									{{ $t('about.visionPart1') }}
								</p>
								<nuxt-link to="/about" class="btn post-btn">
									{{ $t('button.moreAboutUs') }}
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="services-area section-padding3">
			<div class="container">
				<div class="row">
					<div class="cl-xl-7 col-lg-8 col-md-10">
						<div class="section-tittle mb-70">
							<span>{{ $t('cases.highlight') }}</span>
							<h2>{{ $t('cases.featuredCase') }}</h2>
						</div>
					</div>
				</div>
				<div v-if="cases && cases.length" class="row">
					<Case
						v-for="cas in cases"
						:id="cas._id"
						:key="cas._id"
						v-bind="cas"
					></Case>
				</div>
			</div>
		</div>
		<div
			class="testimonial-area testimonial-padding"
			:style="{backgroundImage: `url(${testimonialBackGround})`}"
		>
			<div class="container">
				<div class="row d-flex justify-content-center">
					<div class="col-xl-10 col-lg-10 col-md-9">
						<VueSlickCarousel
							v-if="profiles && profiles.length"
							v-bind="settingSlider"
							class="h1-testimonial-active"
						>
							<div
								v-for="profile in profiles"
								:key="profile._id"
								class="single-testimonial text-center"
							>
								<div class="testimonial-caption">
									<div class="testimonial-top-cap">
										<FontAwesomeIcon
											class="quote"
											:icon="['fas', 'quote-right']"
										>
										</FontAwesomeIcon>
										<p>
											{{ profile.slogan[locale] }}
										</p>
									</div>
									<div
										class="testimonial-founder d-flex align-items-center justify-content-center"
									>
										<div class="founder-img">
											<img
												:src="
													require(`@/assets/img/profiles/preview/${profile.img}.png`)
												"
												alt=""
											/>
										</div>
										<div class="founder-text">
											<span>{{ profile.name }}</span>
											<p>{{ profile.job }}</p>
										</div>
									</div>
								</div>
							</div>
						</VueSlickCarousel>
					</div>
				</div>
			</div>
		</div>
		<div class="count-down-area pb-120">
			<div class="container">
				<div class="row justify-content-between">
					<Counter
						v-for="counter in counters"
						:id="counter._id"
						:key="counter._id"
						:value="counter.value"
						:title="$t(`about.${counter.title}`)"
						:is-active="counter.active"
					></Counter>
				</div>
			</div>
		</div>
		<div class="team-area section-padding30">
			<div class="container">
				<div class="row">
					<div class="cl-xl-7 col-lg-8 col-md-10">
						<div class="section-tittle mb-70">
							<span>{{ $t('team.highlight') }}</span>
							<h2>{{ $t('team.bestTeam') | capitalize }}</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<Profile
						v-for="profile in profiles"
						:id="profile._id"
						:key="profile._id"
						v-bind="profile"
					>
					</Profile>
				</div>
			</div>
		</div>
		<section
			class="wantToWork-area w-padding2 section-bg"
			:style="{backgroundImage: `url(${workBackGround})`}"
		>
			<div class="container">
				<div class="row align-items-center justify-content-between">
					<div class="col-xl-7 col-lg-9 col-md-8">
						<div class="wantToWork-caption wantToWork-caption2">
							<h2>
								{{ $t('team.searching') }}<br />
								{{ $t('team.consultant') }}
							</h2>
						</div>
					</div>
					<div class="col-xl-3 col-lg-3 col-md-4">
						<nuxt-link to="/about" class="btn btn-black f-right">
							{{ $t('button.moreAboutUs') }}
						</nuxt-link>
					</div>
				</div>
			</div>
		</section>

		<client-only>
			<div class="home-blog-area section-padding30">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="section-tittle mb-100">
								<span>{{ $t('blog.highlight') }}</span>
								<h2>{{ $t('blog.title') | capitalize }}</h2>
							</div>
						</div>
					</div>

					<div class="row">
						<Post
							v-for="post in displayedPosts"
							:key="post.slug"
							class="col-xl-6 col-lg-6 col-md-6"
							v-bind="post"
						></Post>
					</div>
				</div>
			</div>
		</client-only>
	</main>
</template>

<script>
import supportBackgroundUrl from '@/assets/img/gallery/section_bg02.jpg'
import sliderBackGround from '@/assets/img/hero/h1_hero.jpg'
import testimonialBackGround from '@/assets/img/gallery/section_bg04.jpg'
import workBackGround from '@/assets/img/gallery/section_bg03.jpg'
import VueSlickCarousel from 'vue-slick-carousel'
import capitalizeName from '@/utilities/capitalize-name'

export default {
	components: {VueSlickCarousel},
	filters: {
		capitalize(name) {
			return capitalizeName(name)
		}
	},
	async asyncData({app, $content}) {
		const posts = await $content('posts', app.i18n.locale)
			.only(['title', 'description', 'img', 'slug', 'author', 'tags', 'date'])
			.sortBy('date', 'desc')
			.fetch()
		return {
			posts
		}
	},
	data() {
		return {
			workBackGround,
			testimonialBackGround,
			sliderBackGround,
			supportBackgroundUrl,
			settingSlider: {
				lazyLoad: 'ondemand',
				arrows: true,
				dots: true
			},
			slides: [
				{
					title: 'slide1Title',
					highlight: 'slide1Highlight',
					button: 'ourServices',
					message: 'slide1Message',
					link: '/services'
				},
				{
					title: 'slide2Title',
					highlight: 'slide2Highlight',
					button: 'ourCases',
					message: 'slide2Message',
					link: '/cases'
				}
			]
		}
	},
	computed: {
		profiles() {
			return this.$store.getters.profiles.slice(0, 3)
		},
		services() {
			return this.$store.getters.services.slice(0, 3)
		},
		cases() {
			return this.$store.getters.cases.slice(0, 2)
		},
		counters() {
			return this.$store.getters.counters
		},
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		},
		displayedPosts() {
			return this.posts && this.posts.slice(0, 2)
		}
	},
	watch: {
		async locale(newValue, oldValue) {
			if (newValue !== oldValue) {
				this.posts = await this.$content('posts', newValue)
					.only([
						'title',
						'description',
						'img',
						'slug',
						'author',
						'tags',
						'date'
					])
					.sortBy('date', 'desc')
					.fetch()
			}
		}
	},
	mounted() {
		if (!this.$store.getters.cases.length) {
			this.$store.dispatch('loadCases')
		}
		if (!this.$store.getters.counters.length) {
			this.$store.dispatch('loadCounters')
		}
		if (!this.$store.getters.services.length) {
			this.$store.dispatch('loadServices')
		}
		if (!this.$store.getters.profiles.length) {
			this.$store.dispatch('loadProfiles')
		}
	}
}
</script>

<style scoped>
.slider-area {
	margin-top: -1px;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
}
</style>
