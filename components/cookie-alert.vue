<template>
	<b-alert :show="isOpen" variant="info" class="cookie">
		<b-row align="center">
			<b-col class="grow">
				<slot name="message">
					{{ $t('cookies.reason') }}
					<nuxt-link class="cookie__link" to="/privacy">
						{{ $t('cookies.policy') }}
					</nuxt-link>
					{{ $t('cookies.accept') }}
				</slot>
			</b-col>
			<b-col class="shrink d-flex justify-end" cols="12" md="3">
				<b-button class="ma-2" @click="accept">
					{{ $t('button.accept') }}
				</b-button>
				<b-button class="ma-2" text @click="deny">
					{{ $t('button.deny') }}
				</b-button>
			</b-col>
		</b-row>
	</b-alert>
</template>

<script>
export default {
	name: 'CookieAlert',
	data() {
		return {
			isOpen: false
		}
	},
	created() {
		if (!this.getCookie() === true) {
			this.isOpen = true
		}
	},
	methods: {
		getCookie() {
			if (process.browser) {
				return localStorage.getItem('cookie:accepted', true)
			}
		},
		accept() {
			if (process.browser) {
				this.isOpen = false
				localStorage.setItem('cookie:accepted', true)
			}
		},
		deny() {
			if (process.browser) {
				this.isOpen = false
				localStorage.setItem('cookie:accepted', false)
			}
		}
	}
}
</script>

<style scoped>
.cookie {
	z-index: 1;
	position: fixed;
	bottom: 0;
}

.cookie__link {
	color: red;
	text-decoration: underline;
	transition: all 0.25s;
}

.cookie__link:hover {
	text-decoration: none;
}
</style>
