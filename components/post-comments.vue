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
									<a>{{ comment.author }}</a>
								</h5>
								<p class="date">{{ formatDate(comment.date) }}</p>
							</div>
							<div class="reply-btn">
								<a class="btn-reply text-uppercase">
									{{ $t('button.reply') }}
								</a>
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
		}
	},
	methods: {
		formatDate(date) {
			return new Date(date).toLocaleDateString(this.locale, this.options)
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
</style>
