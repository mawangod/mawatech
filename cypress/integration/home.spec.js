context('Home', () => {
	beforeEach(() => {
		cy.intercept('GET', '**/services', {fixture: 'services.json'}).as(
			'getServices'
		)
		cy.visit('/')
		cy.get('.alert .w-100 > :nth-child(1)').click()
	})

	it('cookies and localstorage', () => {
		cy.get('.alert').should(() => {
			expect(localStorage.getItem('cookie:accepted')).to.eq('true')
		})
	})

	it('main carousel images', () => {
		cy.get('.alert').should('not.exist')
		cy.get('#carousel___BV_inner_ > :nth-child(1)').should(
			'have.class',
			'active'
		)
		cy.get('#carousel').trigger('mouseover')
		cy.get('#carousel > .carousel-control-prev').should('be.visible').click()
		cy.get('#carousel___BV_inner_ > :nth-child(2)').should(
			'have.class',
			'active'
		)
		cy.get('#carousel').trigger('mouseover')
		cy.get('#carousel > .carousel-control-next').should('be.visible').click()
		cy.get('#carousel___BV_inner_ > :nth-child(1)').should(
			'have.class',
			'active'
		)
	})

	it('Services displayed', () => {
		cy.wait('@getServices').its('response.statusCode').should('eq', 200)
		cy.get('.categories-area > .container > :nth-child(2)')
			.children()
			.should('have.length', 3)
	})
})
