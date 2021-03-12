<template>
	<main>
		<b-carousel
			id="carousel"
			v-model="slideVisible"
			:controls="controls"
			:indicators="indicators"
			:interval="5000"
			fade
			@mouseover.native="activeControl()"
			@mouseleave.native="unactiveControl()"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
		>
			<b-carousel-slide
				v-for="(slide, index) in slides"
				:key="index"
				class="slider-area slider-height"
			>
				<transition
					enter-active-class="slideInDown"
					leave-active-class="slideOutUp"
					appear
				>
					<div v-if="showTransition(index)" class="container">
						<div class="row">
							<div class="col-xl-8 col-lg-7 col-md-8">
								<div class="hero__caption">
									<span>
										{{ $t(`home.${slide.highlight}`) }}
									</span>
									<h1>
										{{ $t(`home.${slide.title}`) }}
									</h1>
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
				</transition>
				<template #img>
					<ImageLoader
						:url="slide.img"
						:alt="$t(`home.${slide.title}`)"
						img-class="img-fluid w-100 d-block"
						height="918"
						width="1920"
					></ImageLoader>
				</template>
			</b-carousel-slide>
		</b-carousel>
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
							<ImageLoader
								url="gallery/about"
								alt="about"
								height="572"
								width="538"
							></ImageLoader>
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
			<TestimonialCarousel></TestimonialCarousel>
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

		<WantToWork></WantToWork>

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
import testimonialBackGround from '@/assets/img/gallery/section_bg04.jpg'
import workBackGround from '@/assets/img/gallery/section_bg03.jpg'
import capitalizeName from '@/utilities/capitalize-name'

export default {
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
			supportBackgroundUrl,
			controls: false,
			indicators: false,
			slideVisible: 0,
			sliding: null,
			slides: [
				{
					title: 'slide1Title',
					highlight: 'slide1Highlight',
					button: 'ourServices',
					message: 'slide1Message',
					link: '/services',
					img: 'slider/cover1'
				},
				{
					title: 'slide2Title',
					highlight: 'slide2Highlight',
					button: 'ourCases',
					message: 'slide2Message',
					link: '/cases',
					img: 'slider/cover2'
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
	},
	methods: {
		activeControl() {
			this.controls = true
			this.indicators = true
		},
		unactiveControl() {
			this.controls = false
			this.indicators = false
		},
		onSlideStart() {
			this.sliding = true
		},
		onSlideEnd() {
			this.sliding = false
		},
		showTransition(slide) {
			return slide === this.slideVisible && !this.sliding
		}
	}
}
</script>

<style>
.carousel-caption {
	right: 25%;
	left: 0;
}

.carousel-indicators {
	z-index: 1;
}
</style>
