<template>
	<div class="col-lg-3 col-md-6 col-sm-6">
		<div
			:class="[
				'single-counter text-center',
				{
					active: isActive
				}
			]"
		>
			<ICountUp
				:ref="name"
				v-observe-visibility="visibilityChanged"
				class="counter"
				:end-val="value"
				v-bind="settingCountUp"
			></ICountUp>
			<p>{{ title }}</p>
		</div>
	</div>
</template>

<script>
import ICountUp from 'vue-countup-v2'
import {ObserveVisibility} from 'vue-observe-visibility'

export default {
	components: {ICountUp},
	directives: {
		ObserveVisibility
	},
	props: {
		title: {
			type: String,
			required: true
		},
		value: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			default: 'counter'
		},
		isActive: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isVisible: false,
			settingCountUp: {
				delay: -1,
				options: {
					useEasing: true
				}
			}
		}
	},
	methods: {
		visibilityChanged(isVisible) {
			if (isVisible && !this.isVisible) {
				this.isVisible = isVisible
				this.$refs[this.name].start()
			}
		}
	}
}
</script>
