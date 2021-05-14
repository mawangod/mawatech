context('Links', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.get('.alert .w-100 > :nth-child(1)').click()
	})

	it('Back-Top Link Work', () => {
		cy.window().its('scrollY').should('eq', 0)
		cy.scrollTo(0, 1000)
		cy.window().its('scrollY').should('eq', 1000)
		cy.get('#back-top').should('be.visible').click()
		cy.window().its('scrollY').should('eq', 0)
	})

	it('Links Home Page', () => {
		cy.get('#carousel').find('a[href="/services"]').should('be.visible').click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Our Services')

		cy.get('.main-menu').find('a[href="/"]').should('be.visible').click()
		cy.get('#carousel').trigger('mouseover')
		cy.get('#carousel')
			.find('.carousel-control-next')
			.should('be.visible')
			.click()
		cy.get('#carousel').find('a[href="/cases"]').should('be.visible').click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Our Portfolio')

		cy.get('.main-menu').find('a[href="/"]').should('be.visible').click()

		cy.get('.support-company-area')
			.find('a[href="/about"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('About Us')

		cy.get('.main-menu').find('a[href="/"]').should('be.visible').click()

		cy.get('.wantToWork-area')
			.find('a[href="/about"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('About Us')
	})

	it.only('Links Team Page', () => {
		cy.get('.main-menu')
			.find('a[href="/profiles"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Our Team')

		cy.get('.wantToWork-area')
			.find('a[href="/about"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('About Us')
	})
})
