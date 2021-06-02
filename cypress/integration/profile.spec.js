context('Profile', () => {
	beforeEach(() => {
		cy.intercept('GET', '**/profiles', {fixture: 'profiles.json'}).as(
			'getProfiles'
		)
		cy.visit('/')
		cy.get('.alert .w-100 > :nth-child(1)').click()
		cy.get('.main-menu > ul > :nth-child(4) > a').click()
		cy.get('.hero-cap > h2').should('be.visible')
	})

	it('Profiles are displayed', () => {
		cy.wait('@getProfiles').its('response.statusCode').should('eq', 200)
		cy.get('.about-details-cap > h4').should('be.visible')
		cy.get('.wantToWork-caption > h2').should('be.visible')
		cy.get('.team-area > .container > :nth-child(2)')
			.children()
			.should('have.length', 1)
	})

	it('Click on one profile on show his data', () => {
		cy.wait('@getProfiles').its('response.statusCode').should('eq', 200)
		cy.get('[href="/profiles/5f86d6a2b587fc2a64928c85"]')
			.should('be.visible')
			.click()
		cy.get('h2').should('be.visible')
		cy.get('.img-fluid')
			.scrollIntoView({offset: {top: -250}})
			.should('be.visible')
			.and($img => {
				expect($img[0].naturalWidth).to.be.greaterThan(0)
			})
	})
})
