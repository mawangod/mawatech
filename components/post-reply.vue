<template>
	<div class="comment-form">
		<h4>{{ $t('blog.leaveReply') }}</h4>
		<form class="form-contact comment_form" action="#">
			<div class="row">
				<div class="col-12">
					<div class="form-group">
						<textarea
							class="form-control w-100"
							name="comment"
							cols="30"
							rows="9"
							:placeholder="$t('blog.writeComment')"
						></textarea>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="form-group">
						<input
							class="form-control"
							name="name"
							type="text"
							:placeholder="$t('contact.placeholderName')"
						/>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="form-group">
						<input
							class="form-control"
							name="email"
							type="email"
							:placeholder="$t('contact.placeholderMail')"
						/>
					</div>
				</div>
			</div>
			<div class="form-group">
				<button type="submit" class="button button-contactForm btn_1 boxed-btn">
					{{ $t('button.submitButton') }}
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {}
</script>
