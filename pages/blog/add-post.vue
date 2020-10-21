<template>
	<main>
		<ImageTitle
			:title="$t('button.addPost')"
			:url="sliderBackGround"
		></ImageTitle>
		<section class="home-blog-area section-padding">
			<div class="container">
				<div class="row">
					<ValidationObserver v-slot="{invalid, reset}">
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
										rules="required|alpha_spaces|min:3|max:300"
									>
										<div class="form-group">
											<input
												v-model="author"
												class="form-control"
												name="author"
												type="text"
												:placeholder="$t('blog.author')"
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
										name="image"
										rules="image"
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
										rules="length:2"
									>
										<div class="blog_right_sidebar">
											<aside class="single_sidebar_widget tag_cloud_widget">
												<ul class="list">
													<li
														v-for="(tag, index) in availableTags"
														:key="index"
													>
														<a
															:class="{
																active: isActive(tag)
															}"
															@click.prevent="toggleTag(tag, validate)"
														>
															{{ $t(`blog.${tag}`) }}
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
								<b-btn
									type="submit"
									:class="{
										'hero-btn': !invalid
									}"
									:disabled="invalid"
								>
									{{ $t('button.submitButton') }}
								</b-btn>
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
import {tags} from '@/utilities/usefull-data'

export default {
	components: {ValidationObserver, ValidationProvider},
	data() {
		return {
			sliderBackGround,
			author: '',
			title: {fr: '', en: ''},
			description: {fr: '', en: ''},
			availableTags: tags,
			tags: [],
			image: null
		}
	},
	methods: {
		async createNewPost(reset) {
			const formData = new FormData()
			formData.append('image', this.image)
			await this.$store.dispatch('createPost', {
				image: formData,
				author: this.author,
				title: this.title,
				description: this.description,
				tags: this.tags
			})
			this.image = null
			this.author = ''
			this.title = {fr: '', en: ''}
			this.description = {fr: '', en: ''}
			this.tags = []
			reset()
		},
		selectImage(validate) {
			this.image = this.$refs.image.files[0]
			return validate(this.image)
		},
		isActive(tag) {
			return this.tags.includes(tag)
		},
		toggleTag(tag, validate) {
			this.tags = this.tags.includes(tag)
				? this.tags.filter(tagg => tagg !== tag)
				: [...this.tags, tag]
			return validate(this.tags)
		}
	}
}
</script>

<style scoped>
.hidden {
	display: none;
}
</style>
