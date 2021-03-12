<template>
	<div class="navigation-top">
		<div class="navigation-area">
			<div class="row">
				<NuxtLink
					v-if="prev"
					:to="{name: 'blog-slug', params: {slug: prev.slug}}"
					class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center"
				>
					<div class="thumb">
						<ImageLoader
							:url="`blog/preview/${prev.img}`"
							:alt="prev.slug"
							img-class="img-fluid"
							height="45"
							width="60"
						></ImageLoader>
					</div>
					<div class="arrow">
						<FontAwesomeIcon
							class="fas lnr text-white"
							:icon="['fas', 'arrow-left']"
						>
						</FontAwesomeIcon>
					</div>
					<div class="detials">
						<p>{{ $t('blog.prevPost') }}</p>
						<h4 class="trunc">{{ prev.title }}</h4>
					</div>
				</NuxtLink>
				<NuxtLink
					v-if="next"
					:to="{name: 'blog-slug', params: {slug: next.slug}}"
					class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center"
				>
					<div class="detials">
						<p>{{ $t('blog.nextPost') }}</p>
						<h4 class="trunc">{{ next.title }}</h4>
					</div>
					<div class="arrow">
						<FontAwesomeIcon
							class="fas lnr text-white"
							:icon="['fas', 'arrow-right']"
						>
						</FontAwesomeIcon>
					</div>
					<div class="thumb">
						<ImageLoader
							:url="`blog/preview/${next.img}`"
							:alt="next.slug"
							img-class="img-fluid"
							height="45"
							width="60"
						></ImageLoader>
					</div>
				</NuxtLink>
				<span v-else>&nbsp;</span>
			</div>
		</div>
	</div>
</template>

<script>
import ImageLoader from './image-loader'

export default {
	components: {ImageLoader},
	props: {
		prev: {
			type: Object,
			default: () => null
		},
		next: {
			type: Object,
			default: () => null
		}
	}
}
</script>

<style scoped>
.trunc {
	width: 200px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.nav-right {
	margin-left: auto;
}
</style>
