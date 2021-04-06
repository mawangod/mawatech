context('Home', () => {
	beforeEach(() => {
		cy.intercept('GET', '**/services', {fixture: 'services.json'}).as(
			'getServices'
		)
		cy.visit('/')
		cy.get('.alert .w-100 > :nth-child(1)').click()
		cy.get('.main-menu > ul > :nth-child(3) > a').click()
		cy.get('.hero-cap > h2').should('be.visible')
	})

	it('Services are displayed', () => {
		cy.wait('@getServices').its('response.statusCode').should('eq', 200)
		cy.get('.categories-area > .container > :nth-child(2)')
			.children()
			.should('have.length', 3)
	})

	it('Click on one service on show his data', () => {
		cy.wait('@getServices').its('response.statusCode').should('eq', 200)
		cy.get('[href="/services/5f86d6acb587fc2a64928c86"]')
			.should('be.visible')
			.click()
		cy.get('h2').should('be.visible')
		cy.get(':nth-child(1) > .row > .col-md-4 > .img-fluid')
			.scrollIntoView({offset: {top: -250}})
			.should('exist')
			.and($img => {
				expect($img[0].naturalWidth).to.be.greaterThan(0)
			})
	})
})
