<template>
	<ul class="blog-info-link">
		<li>
			<a href="#">
				<FontAwesomeIcon class="fa" :icon="['fas', 'user']"> </FontAwesomeIcon>
				<span>{{ $t(`blog.${tags[0]}`) }},</span>
				<span>{{ $t(`blog.${tags[1]}`) }}</span>
			</a>
		</li>
		<li>
			<a href="#">
				<FontAwesomeIcon class="fa" :icon="['fas', 'comments']">
				</FontAwesomeIcon>
				{{ comments.length }} {{ $t('blog.comments') }}
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		tags: {
			type: Array,
			required: true
		},
		comments: {
			type: Array,
			required: true
		}
	}
}
</script>
