<template>
	<div class="col-lg-4">
		<div class="blog_right_sidebar">
			<aside class="single_sidebar_widget search_widget">
				<form>
					<ValidationProvider
						v-slot="{errors}"
						name="search"
						rules="alpha_num|max:30"
					>
						<div class="form-group">
							<div class="input-group mb-3">
								<input
									v-model="searchTerm"
									type="search"
									class="form-control"
									:placeholder="$t('blog.search')"
								/>
								<div class="input-group-append">
									<button
										class="btns"
										type="button"
										@click.prevent="$emit('search', searchTerm)"
									>
										<FontAwesomeIcon :icon="['fas', 'search']">
										</FontAwesomeIcon>
									</button>
								</div>
							</div>
							<span v-if="errors[0]" class="input-invalid-message">
								{{ $t(`validation.${errors[0]}`) }}
							</span>
						</div>
					</ValidationProvider>
				</form>
			</aside>

			<aside class="single_sidebar_widget tag_cloud_widget">
				<h4 class="widget_title">{{ $t('blog.popularTags') | capitalize }}</h4>
				<ul class="list">
					<li v-for="(tag, index) in tags" :key="index">
						<a
							:class="{
								active: isActive(tag)
							}"
							@click.prevent="$emit('tags', tag)"
						>
							{{ $t(`blog.${tag}`) }}
						</a>
					</li>
				</ul>
			</aside>

			<aside class="single_sidebar_widget popular_post_widget">
				<h4 class="widget_title">
					{{ $t('blog.recentPosts') | capitalize }}
				</h4>
				<div
					v-for="(recentPost, index) in recentPosts"
					:key="index"
					class="media post_item"
				>
					<img
						class="img-fluid"
						:src="require(`@/assets/img/blog/preview/${recentPost.img}.png`)"
					/>
					<div class="media-body">
						<nuxt-link
							:to="{name: 'blog-slug', params: {slug: recentPost.slug}}"
						>
							<h3 class="trunc">{{ recentPost.title }}</h3>
							<p>{{ formatDate(recentPost.date) }}</p>
						</nuxt-link>
					</div>
				</div>
			</aside>

			<aside class="single_sidebar_widget newsletter_widget">
				<h4 class="widget_title">{{ $t('blog.newsletter') }}</h4>

				<form>
					<ValidationProvider
						v-slot="{errors}"
						name="email"
						rules="email|min:3|max:30"
					>
						<div class="form-group">
							<input
								v-model="email"
								type="email"
								class="form-control"
								:placeholder="$t('blog.enterMail')"
							/>
							<span v-if="errors[0]" class="input-invalid-message">
								{{ $t(`validation.${errors[0]}`) }}
							</span>
						</div>
					</ValidationProvider>
					<button
						class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
					>
						{{ $t('button.subscribe') }}
					</button>
				</form>
			</aside>
		</div>
	</div>
</template>

<script>
import {ValidationProvider} from 'vee-validate'
import capitalizeName from '../utilities/capitalize-name'

export default {
	components: {ValidationProvider},
	filters: {
		capitalize(name) {
			return capitalizeName(name)
		}
	},
	props: {
		activeTags: {
			type: Array,
			default: () => []
		},
		recentPosts: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			searchTerm: '',
			email: '',
			options: {year: 'numeric', month: 'long', day: 'numeric'},
			tags: [
				'project',
				'love',
				'technology',
				'travel',
				'restaurant',
				'lifeStyle',
				'design'
			]
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale || this.$i18n.defaultLocale
		}
	},
	methods: {
		isActive(tag) {
			return this.activeTags.includes(tag)
		},
		formatDate(date) {
			return new Date(date).toLocaleDateString(this.locale, this.options)
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
</style>
