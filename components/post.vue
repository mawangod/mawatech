<template>
	<nuxt-link
		:to="{name: route, params: {id}}"
		class="col-xl-6 col-lg-6 col-md-6"
	>
		<div class="home-blog-single mb-30">
			<div class="blog-img-cap">
				<div class="blog-img blog_item_img">
					<img :src="require(`@/assets/img/gallery/${photo}.png`)" alt="" />
					<a href="#" class="blog_item_date">
						<h3>{{ day }}</h3>
						<p>{{ $t(`month.${month}`) }}</p>
					</a>
				</div>

				<div class="blog-cap">
					<h3>
						<a>
							{{ title }}
						</a>
					</h3>
					<p>
						{{ preview }}
					</p>
					<ul class="blog-info-link">
						<li>
							<a href="#">
								<FontAwesomeIcon class="fa" :icon="['fas', 'user']">
								</FontAwesomeIcon>
								<span>{{ $t(`blog.${tags[0]}`) }},</span
								><span>{{ $t(`blog.${tags[1]}`) }}</span>
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
				</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
import capitalizeName from '../utilities/capitalize-name'

export default {
	filters: {
		capitalize(name) {
			return capitalizeName(name)
		}
	},
	props: {
		id: {
			type: Number,
			required: true
		},
		photo: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		preview: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		},
		tags: {
			type: Array,
			required: true
		},
		comments: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			day: new Date(this.date).getDay(),
			month: new Date(this.date).getMonth(),
			route: 'blog-post'
		}
	}
}
</script>
