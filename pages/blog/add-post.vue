<template>
	<main>
		<ImageTitle
			:title="$t('button.addPost')"
			:url="sliderBackGround"
		></ImageTitle>
		<section class="home-blog-area section-padding">
			<div class="container">
				<div class="row">
					<ValidationObserver v-slot="{invalid, reset}" tag="div">
						<form
							class="form-contact contact_form"
							enctype="multipart/form-data"
							@submit.prevent="createNewPost(reset)"
						>
							<div class="row">
								<div class="col-12">
									<ValidationProvider
										v-slot="{errors}"
										name="author"
										rules="required"
									>
										<div class="form-group">
											<select
												v-model="author"
												class="form-control"
												name="author"
											>
												<option value="" disabled selected>
													{{ $t('blog.author') }}
												</option>
												<option
													v-for="profile in profiles"
													:key="profile._id"
													:value="profile.name"
												>
													{{ profile.name }}
												</option>
											</select>
											<span v-if="errors[0]" class="input-invalid-message">
												{{ $t(`validation.${errors[0]}`) }}
											</span>
										</div>
									</ValidationProvider>
								</div>
								<div class="col-12">
									<ValidationProvider
										v-slot="{errors}"
										name="title-fr"
										rules="required|alpha_num|min:3|max:30"
									>
										<div class="form-group">
											<input
												v-model="title.fr"
												class="form-control"
												name="title-fr"
												type="text"
												:placeholder="$t('blog.titleFr')"
											/>
											<span v-if="errors[0]" class="input-invalid-message">
												{{ $t(`validation.${errors[0]}`) }}
											</span>
										</div>
									</ValidationProvider>
								</div>
								<div class="col-12">
									<ValidationProvider
										v-slot="{errors}"
										name="title-en"
										rules="required|alpha_num|min:3|max:30"
									>
										<div class="form-group">
											<input
												v-model="title.en"
												class="form-control"
												name="title-en"
												type="text"
												:placeholder="$t('blog.titleEn')"
											/>
											<span v-if="errors[0]" class="input-invalid-message">
												{{ $t(`validation.${errors[0]}`) }}
											</span>
										</div>
									</ValidationProvider>
								</div>
								<div class="col-12">
									<ValidationProvider
										v-slot="{errors}"
										name="descriptionFr"
										rules="required|alpha_num|min:3|max:30"
									>
										<div class="form-group">
											<input
												v-model="description.fr"
												class="form-control"
												name="descriptionFr"
												type="text"
												:placeholder="$t('blog.descriptionFr')"
											/>
											<span v-if="errors[0]" class="input-invalid-message">
												{{ $t(`validation.${errors[0]}`) }}
											</span>
										</div>
									</ValidationProvider>
								</div>
								<div class="col-12">
									<ValidationProvider
										v-slot="{errors}"
										name="descriptionEn"
										rules="required|alpha_num|min:3|max:30"
									>
										<div class="form-group">
											<input
												v-model="description.en"
												class="form-control"
												name="descriptionEn"
												type="text"
												:placeholder="$t('blog.descriptionEn')"
											/>
											<span v-if="errors[0]" class="input-invalid-message">
												{{ $t(`validation.${errors[0]}`) }}
											</span>
										</div>
									</ValidationProvider>
								</div>
								<div class="col-12">
									<ValidationProvider
										v-slot="{errors, validate}"
										ref="imgProvider"
										name="image"
										rules="required|image|size:500000"
									>
										<div class="form-group">
											<label class="form-control" for="image">
												{{ image ? image.name : $t('blog.image') }}
											</label>
											<input
												id="image"
												ref="image"
												type="file"
												class="form-control hidden"
												name="image"
												@change="selectImage(validate)"
											/>
											<span v-if="errors[0]" class="input-invalid-message">
												{{ $t(`validation.${errors[0]}`) }}
											</span>
										</div>
									</ValidationProvider>
								</div>
								<div class="col-12">
									<ValidationProvider
										v-slot="{errors, validate}"
										name="tags"
										rules="required|length:2"
									>
										<div class="blog_right_sidebar">
											<input
												v-model="postTags"
												name="tags"
												class="form-control hidden"
												type="text"
											/>
											<aside class="single_sidebar_widget tag_cloud_widget">
												<ul class="list">
													<li v-for="(tag, index) in tags" :key="index">
														<a
															:class="{
																active: isActive(tag._id)
															}"
															@click.prevent="toggleTag(tag._id, validate)"
														>
															{{ tag.title[locale] }}
														</a>
													</li>
												</ul>
											</aside>
											<span v-if="errors[0]" class="input-invalid-message">
												{{ $t(`validation.${errors[0]}`) }}
											</span>
										</div>
									</ValidationProvider>
								</div>
							</div>
							<div class="form-group mt-3">
								<b-button
									type="submit"
									:class="{
										'hero-btn': !invalid
									}"
									:disabled="invalid"
								>
									{{ $t('button.submitButton') }}
								</b-button>
							</div>
						</form>
					</ValidationObserver>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import sliderBackGround from '@/assets/img/cover/blog.jpg'
import {ValidationObserver, ValidationProvider} from 'vee-validate'
import {format} from 'date-fns'

export default {
	components: {ValidationObserver, ValidationProvider},
	middleware({redirect}) {
		if (process.env.NODE_ENV !== 'development') {
			return redirect('/')
		}
	},
	data() {
		return {
			sliderBackGround,
			author: '',
			title: {fr: '', en: ''},
			description: {fr: '', en: ''},
			postTags: [],
			image: null
		}
	},
	computed: {
		tags() {
			return this.$store.getters.tags
		},
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		},
		profiles() {
			return this.$store.getters.profiles
		}
	},
	mounted() {
		this.$refs.imgProvider.validateSilent(this.$refs.image.files[0])
		if (!this.$store.getters.tags.length) {
			this.$store.dispatch('loadTags')
		}
		if (!this.$store.getters.profiles.length) {
			this.$store.dispatch('loadProfiles')
		}
	},
	methods: {
		async createNewPost(reset) {
			const formData = new FormData()
			formData.append('file', this.image)
			formData.append('author', this.author)
			formData.append('titleFr', this.title.fr)
			formData.append('titleEn', this.title.en)
			formData.append('descriptionFr', this.description.fr)
			formData.append('descriptionEn', this.description.en)
			formData.append('date', format(new Date(), 'yyyy-MM-dd'))
			formData.append('tags', this.postTags)
			const newPost = await this.$store.dispatch('createPost', formData)
			this.image = null
			this.author = ''
			this.title = {fr: '', en: ''}
			this.description = {fr: '', en: ''}
			this.postTags = []
			reset()
			setTimeout(() => {
				this.$router.push({
					name: 'blog-slug',
					params: {slug: newPost.fileName}
				})
			}, 10000)
		},
		async selectImage(validate) {
			const {valid} = await validate(this.$refs.image.files[0])
			if (valid) {
				this.image = this.$refs.image.files[0]
			}
		},
		isActive(tag) {
			return this.postTags.includes(tag)
		},
		toggleTag(tag, validate) {
			this.postTags = this.postTags.includes(tag)
				? this.postTags.filter(postTag => postTag !== tag)
				: [...this.postTags, tag]
			return validate(this.postTags)
		}
	}
}
</script>

<style scoped>
.hidden {
	display: none;
}

.form-select {
	height: 40px;
	width: 100%;
}
</style>
