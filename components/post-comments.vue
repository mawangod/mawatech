<template>
	<div class="comments-area">
		<h4>{{ commentIds && commentIds.length }} {{ $t('blog.comments') }}</h4>
		<div class="comment-list">
			<div
				v-for="comment in comments"
				:key="comment.id"
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
									<a href="#">{{ comment.author }}</a>
								</h5>
								<p class="date">{{ formatDate(comment.date) }}</p>
							</div>
							<div class="reply-btn">
								<a href="#" class="btn-reply text-uppercase">
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
		commentIds: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			comments: this.$store.state.comments.filter(comment =>
				this.commentIds.includes(comment.id)
			),
			options: {year: 'numeric', month: 'long', day: 'numeric'}
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
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
</style>
