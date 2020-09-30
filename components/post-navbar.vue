<template>
	<div class="navigation-top">
		<div class="d-sm-flex justify-content-between text-center">
			<p class="like-info">
				<span class="align-middle">
					<FontAwesomeIcon class="fa" :icon="['fas', 'heart']">
					</FontAwesomeIcon>
				</span>
				Lily and 4 people like this
			</p>
			<ul class="social-icons">
				<li>
					<a href="#">
						<FontAwesomeIcon class="fab" :icon="['fab', 'facebook-f']">
						</FontAwesomeIcon>
					</a>
				</li>
				<li>
					<a href="#">
						<FontAwesomeIcon class="fab" :icon="['fab', 'twitter']">
						</FontAwesomeIcon>
					</a>
				</li>
				<li>
					<a href="#">
						<FontAwesomeIcon class="fab" :icon="['fab', 'linkedin-in']">
						</FontAwesomeIcon>
					</a>
				</li>
				<li>
					<a href="#">
						<FontAwesomeIcon class="fab" :icon="['fab', 'instagram']">
						</FontAwesomeIcon>
					</a>
				</li>
			</ul>
		</div>
		<div class="navigation-area">
			<div class="row">
				<NuxtLink
					v-if="prev"
					:to="{name: 'blog-slug', params: {slug: prev.slug}}"
					class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center"
				>
					<div class="thumb">
						<img
							class="img-fluid"
							:src="require(`@/assets/img/blog/preview/${prev.img}.png`)"
							alt=""
						/>
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
						<img
							class="img-fluid"
							:src="require(`@/assets/img/blog/preview/${next.img}.png`)"
							alt=""
						/>
					</div>
				</NuxtLink>
				<span v-else>&nbsp;</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
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
