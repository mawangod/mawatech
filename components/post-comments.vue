<template>
	<div class="comments-area">
		<h4>{{ comments && comments.length }} {{ $t('blog.comments') }}</h4>
		<div class="comment-list">
			<div
				v-for="comment in comments"
				:key="comment._id"
				class="single-comment justify-content-between d-flex"
			>
				<div class="user justify-content-between d-flex">
					<div class="desc">
						<p class="comment">
							{{ comment.content }}
						</p>
						<div class="d-flex justify-content-between">
							<div class="d-flex align-items-center">
								<h5>
									{{ comment.author }}
								</h5>
								<p class="date">{{ formatDate(comment.date) }}</p>
							</div>
							<div v-show="devMode" @click="deleteComment(comment)">
								<FontAwesomeIcon
									class="far delete"
									:icon="['far', 'trash-alt']"
								>
								</FontAwesomeIcon>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			options: {year: 'numeric', month: 'long', day: 'numeric'}
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		},
		comments() {
			return this.$store.getters.getPostComments(this.post)
		},
		devMode() {
			return process.env.NODE_ENV === 'development'
		}
	},
	methods: {
		formatDate(date) {
			return new Date(date).toLocaleDateString(this.locale, this.options)
		},
		async deleteComment(comment) {
			await this.$store.dispatch('deleteComment', comment)
		}
	}
}
</script>

<style scoped>
.single-comment {
	padding-bottom: 48px;
}

.btn-reply {
	cursor: pointer;
}

.user,
.desc,
.comment {
	width: 100%;
}

.delete {
	color: #777;
	cursor: pointer;
}
</style>
