context('Footer', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.get('.alert .w-100 > :nth-child(1)').click()
	})

	const data = {
		prefixe: '+32',
		num: '475/70.45.73',
		mail: 'mawatechnologie@gmail.com'
	}

	it('Footer is visible', () => {
		cy.get('.footer-area').should('be.visible')
	})

	it('Footer Logo is visible', () => {
		cy.get('.footer-logo > .nuxt-link-exact-active > img')
			.should('be.visible')
			.and($img => {
				expect($img[0].naturalWidth).to.be.greaterThan(0)
			})
	})

	it('Footer informations data are visible', () => {
		cy.get('.footer-number > h4').contains(`${data.prefixe} ${data.num}`)
		cy.get('.footer-number > p').contains(data.mail)
	})

	it('Footer links work', () => {
		cy.get('.footer-area').find('a[href="/jobs"]').should('be.visible').click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Jobs')

		cy.get('.footer-area')
			.find('a[href="/information"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Information')

		cy.get('.footer-area')
			.find('a[href="/copyright"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Copyright')

		cy.get('.footer-area')
			.find('a[href="/cookies"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Cookies')

		cy.get('.footer-area')
			.find('a[href="/privacy"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Privacy')

		cy.get('.footer-area')
			.find('a[href="/disclaimer"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Disclaimer')
	})
})
