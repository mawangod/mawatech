context('Case', () => {
	beforeEach(() => {
		cy.intercept('GET', '**/cases', {fixture: 'cases.json'}).as('getCases')
		cy.visit('/')
		cy.get('.alert .w-100 > :nth-child(1)').click()
		cy.get('.main-menu > ul > :nth-child(5) > a').click()
		cy.get('.hero-cap > h2').should('be.visible')
		cy.wait('@getCases').its('response.statusCode').should('eq', 200)
	})

	it('Cases are displayed', () => {
		cy.get('.services-area > .container > :nth-child(2)')
			.children()
			.should('have.length', 1)
	})

	it('Click on one case on show his data', () => {
		cy.get('[href="/cases/5f85670207a995203474463c"]')
			.should('be.visible')
			.click()
		cy.get('h2').should('be.visible')
		cy.get(':nth-child(1) > .row > .col-md-4 > picture.lazyLoad > .img-fluid')
			.scrollIntoView({offset: {top: -250}})
			.should('be.visible')
			.and($img => {
				expect($img[0].naturalWidth).to.be.greaterThan(0)
			})
	})
})
