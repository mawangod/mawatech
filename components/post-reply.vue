<template>
	<div class="comment-form">
		<h4>{{ $t('blog.leaveReply') }}</h4>
		<ValidationObserver v-slot="{invalid, reset}">
			<form
				class="form-contact comment_form"
				@submit.prevent="submitComment(reset)"
			>
				<div class="row">
					<div class="col-12">
						<ValidationProvider
							v-slot="{errors}"
							name="comment"
							rules="required|min:3|max:300"
						>
							<div class="form-group">
								<textarea
									v-model="content"
									class="form-control w-100"
									type="text"
									name="comment"
									cols="30"
									rows="9"
									:placeholder="$t('blog.writeComment')"
								></textarea>
								<span v-if="errors[0]" class="input-invalid-message">
									{{ $t(`validation.${errors[0]}`) }}
								</span>
							</div>
						</ValidationProvider>
					</div>
					<div class="col-sm-6">
						<ValidationProvider
							v-slot="{errors}"
							name="author"
							rules="required|alpha_spaces|min:3|max:30"
						>
							<div class="form-group">
								<input
									v-model="author"
									class="form-control"
									name="name"
									type="text"
									:placeholder="$t('contact.placeholderName')"
								/>
								<span v-if="errors[0]" class="input-invalid-message">
									{{ $t(`validation.${errors[0]}`) }}
								</span>
							</div>
						</ValidationProvider>
					</div>
					<div class="col-sm-6">
						<ValidationProvider
							v-slot="{errors}"
							name="email"
							rules="required|email|min:3|max:30"
						>
							<div class="form-group">
								<input
									v-model="mail"
									class="form-control"
									name="email"
									type="email"
									:placeholder="$t('contact.placeholderMail')"
								/>
								<span v-if="errors[0]" class="input-invalid-message">
									{{ $t(`validation.${errors[0]}`) }}
								</span>
							</div>
						</ValidationProvider>
					</div>
				</div>
				<div class="form-group">
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
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate'

export default {
	components: {ValidationObserver, ValidationProvider},
	props: {
		post: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			content: '',
			author: '',
			mail: '',
			options: {year: 'numeric', month: 'long', day: 'numeric'}
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		},
		currentDate() {
			return new Date().toLocaleDateString(this.locale, this.options)
		}
	},
	methods: {
		async submitComment(reset) {
			await this.$store.dispatch('createComment', {
				author: this.author,
				content: this.content,
				mail: this.mail,
				date: this.currentDate,
				post: this.post
			})
			this.author = ''
			this.content = ''
			this.mail = ''
			reset()
		}
	}
}
</script>

<style scoped>
.hero-btn:hover {
	background-color: #ff2143;
}
</style>
