import {extend} from 'vee-validate'
/* eslint-disable camelcase */
import {required, email, alpha_spaces, min, max} from 'vee-validate/dist/rules'

extend('required', {
	...required,
	message: 'required'
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
