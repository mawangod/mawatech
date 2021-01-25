<template>
	<ul
		:class="{
			hidden: !open
		}"
	>
		<li>
			<nuxt-link to="/" @click="console.log('click')">{{
				$t('header.home')
			}}</nuxt-link>
		</li>
		<li>
			<nuxt-link to="/about">
				{{ $t('header.about') }}
			</nuxt-link>
		</li>
		<li>
			<nuxt-link to="/services">
				{{ $t('header.services') }}
			</nuxt-link>
		</li>
		<li>
			<nuxt-link to="/profiles">
				{{ $t('header.team') }}
			</nuxt-link>
		</li>
		<li>
			<nuxt-link to="/cases">
				{{ $t('header.cases') }}
			</nuxt-link>
		</li>
		<li>
			<nuxt-link to="/blog">
				{{ $t('header.blog') }}
			</nuxt-link>
		</li>
		<li>
			<nuxt-link to="/contact">
				{{ $t('header.contact') }}
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'Header',
	props: {
		open: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		routeName() {
			return this.$route?.name
		}
	},
	watch: {
		routeName(newValue, oldValue) {
			if (newValue !== oldValue && this.open) {
				this.$emit('routeChange')
			}
		}
	}
}
</script>

<style scoped>
.hidden {
	display: none;
}
</style>
