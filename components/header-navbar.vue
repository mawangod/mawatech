<template>
	<ul>
		<li>
			<nuxt-link to="/">{{ $t('header.home') }}</nuxt-link>
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
		<li>
			<select
				class="switch"
				@change="setLocale(availableLocales[$event.target.selectedIndex])"
			>
				<option
					v-for="locale in availableLocales"
					:key="locale.code"
					:value="getLocaleFormatted(locale.code)"
					:selected="isSelected(locale.code)"
				>
					{{ getLocaleFormatted(locale.code) | capitalize }}
				</option>
			</select>
		</li>
	</ul>
</template>

<script>
import capitalizeName from '../utilities/capitalize-name'

export default {
	name: 'Header',
	filters: {
		capitalize(name) {
			return capitalizeName(name)
		}
	},
	computed: {
		selectedLocale() {
			return (
				this.getLocaleFormatted(this.$i18n.locale) ||
				this.getLocaleFormatted(this.$i18n.defaultLocale)
			)
		},
		availableLocales() {
			return this.$i18n.locales
		}
	},
	methods: {
		setLocale(locale) {
			this.$i18n.setLocale(locale.code)
			this.$emit('toggleSlicknav')
		},
		getLocaleFormatted(locale) {
			return locale.split('-')[0]
		},
		isSelected(locale) {
			return this.selectedLocale === this.getLocaleFormatted(locale)
		}
	}
}
</script>
