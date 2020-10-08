import {remove as removeDiacritics} from 'diacritics'

function getRawText(text) {
	return text && removeDiacritics(text.trim()).toLowerCase()
}

export default getRawText
