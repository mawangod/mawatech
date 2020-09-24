function capitalizeName(name) {
	if (typeof name !== 'string') {
		return ''
	}

	return name
		.split(/(\s|-)+/)
		.map(
			namePart =>
				`${namePart.charAt(0).toUpperCase()}${namePart.slice(1).toLowerCase()}`
		)
		.join('')
}

export default capitalizeName
