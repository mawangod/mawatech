context('Home', () => {
	beforeEach(() => {
		cy.intercept('GET', '**/services', {fixture: 'services.json'}).as(
			'getServices'
		)
		cy.intercept('GET', '**/cases', {fixture: 'cases.json'}).as('getCases')
		cy.intercept('GET', '**/counters', {fixture: 'counters.json'}).as(
			'getCounters'
		)
		cy.intercept('GET', '**/profiles', {fixture: 'profiles.json'}).as(
			'getProfiles'
		)
		cy.visit('/')
		cy.get('.alert .w-100 > :nth-child(1)').click()
	})

	it('cookies and localstorage', () => {
		cy.get('.alert').should(() => {
			expect(localStorage.getItem('cookie:accepted')).to.eq('true')
		})
		cy.get('.alert').should('not.exist')
	})

	it('main carousel images', () => {
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

	it('Services are displayed', () => {
		cy.wait('@getServices').its('response.statusCode').should('eq', 200)
		cy.get('.categories-area > .container > :nth-child(2)')
			.children()
			.should('have.length', 3)
	})

	it('Cases are displayed', () => {
		cy.wait('@getCases').its('response.statusCode').should('eq', 200)
		cy.get('.services-area > .container > :nth-child(2)')
			.children()
			.should('have.length', 1)
	})

	it('quote carousel', () => {
		cy.get('#carouselP___BV_inner_ > :nth-child(1)').should(
			'have.class',
			'active'
		)
		cy.get('#carouselP > .carousel-control-prev').should('be.visible').click()
		cy.get('#carouselP___BV_inner_ > :nth-child(2)').should(
			'have.class',
			'active'
		)
		cy.get('#carouselP > .carousel-control-next').should('be.visible').click()
		cy.get('#carouselP___BV_inner_ > :nth-child(1)').should(
			'have.class',
			'active'
		)
	})

	it('Profiles are displayed', () => {
		cy.wait('@getProfiles').its('response.statusCode').should('eq', 200)
		cy.get('.team-area > .container > :nth-child(2)')
			.children()
			.should('have.length', 2)
	})

	it('Counters are displayed', () => {
		cy.wait('@getServices').its('response.statusCode').should('eq', 200)
		cy.wait('@getCases').its('response.statusCode').should('eq', 200)
		cy.wait('@getProfiles').its('response.statusCode').should('eq', 200)
		cy.wait('@getCounters').its('response.statusCode').should('eq', 200)
		cy.get('.count-down-area > .container > .row')
			.children()
			.should('have.length', 4)
		cy.get('#5f86d69bb587fc2a64928c81 > .single-counter > .counter').contains(
			'0'
		)
		cy.get('#carouselP > .carousel-control-prev').should('be.visible').click()
		cy.get('#5f86d69bb587fc2a64928c81 > .single-counter > .counter').contains(
			'157'
		)
	})

	it('Posts are displayed', () => {
		cy.get('.home-blog-area > .container > :nth-child(2)')
			.children()
			.should('have.length', 2)
	})
})
