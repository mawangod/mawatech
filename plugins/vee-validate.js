import {extend} from 'vee-validate'
/* eslint-disable camelcase */
import {
	required,
	email,
	alpha_spaces,
	min,
	max,
	image
} from 'vee-validate/dist/rules'

extend('required', {
	...required,
	message: 'required'
})

extend('image', {...image, message: 'image'})

extend('length', {
	validate: value => {
		return value && value.length >= 2
	},
	message: 'length2min'
})

extend('email', {
	...email,
	message: 'email'
})

extend('alpha_spaces', {
	...alpha_spaces,
	message: 'alpha'
})

extend('max', {
	...max,
	params: ['length'],
	message: 'max{length}'
})

extend('min', {
	...min,
	params: ['length'],
	message: 'min{length}'
})

extend('alpha_num', {
	validate: value => {
		return /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i.test(value)
	},
	message: 'alpha_num'
})
