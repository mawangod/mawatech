context('Header', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.get('.alert .w-100 > :nth-child(1)').click()
	})

	const data = {
		fr: 'Accueil',
		en: 'Home'
	}

	it('Header is visible', () => {
		cy.get('.header-top').should('be.visible')
		cy.get('.header-bottom').should('be.visible')
	})

	it('Header Logo is visible', () => {
		cy.get('.header-bottom')
			.find('.logo')
			.find('img')
			.should('be.visible')
			.and($img => {
				expect($img[0].naturalWidth).to.be.greaterThan(0)
			})
	})

	it('Header links work', () => {
		cy.get('.main-menu').find('a[href="/about"]').should('be.visible').click()
		cy.get('.hero-cap > h2').should('be.visible').contains('About Us')

		cy.get('.main-menu')
			.find('a[href="/services"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Our Services')

		cy.get('.main-menu')
			.find('a[href="/profiles"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Our Team')

		cy.get('.main-menu').find('a[href="/cases"]').should('be.visible').click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Our Portfolio')

		cy.get('.main-menu').find('a[href="/blog"]').should('be.visible').click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Blog')

		cy.get('.main-menu').find('a[href="/contact"]').should('be.visible').click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Contact US')

		cy.get('.main-menu').find('a[href="/"]').should('be.visible').click()
		cy.get('#carousel').should('be.visible')
	})

	it('Header mobile is visible', () => {
		cy.viewport(550, 750)
		cy.get('.slicknav_nav').should('be.not.visible')
		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav').should('be.visible')

		cy.get('.slicknav_nav')
			.find('a[href="/about"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('About Us')

		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav')
			.find('a[href="/services"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Our Services')

		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav')
			.find('a[href="/profiles"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Our Team')

		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav')
			.find('a[href="/cases"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Our Portfolio')

		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav').find('a[href="/blog"]').should('be.visible').click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Blog')

		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav')
			.find('a[href="/contact"]')
			.should('be.visible')
			.click()
		cy.get('.hero-cap > h2').should('be.visible').contains('Contact US')

		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav').find('a[href="/"]').should('be.visible').click()
		cy.get('#carousel').should('be.visible')
	})

	it('Header Select language work', () => {
		cy.get('.main-menu').find('select').should('be.visible').select('en')
		cy.get('.main-menu')
			.find('a[href="/"]')
			.should('be.visible')
			.contains(data.en)

		cy.get('.main-menu').find('select').should('be.visible').select('fr')
		cy.get('.main-menu')
			.find('a[href="/"]')
			.should('be.visible')
			.contains(data.fr)
	})

	it('Header Mobile Switch Language', () => {
		cy.viewport(550, 750)

		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav').find('select').should('be.visible').select('fr')

		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav')
			.find('a[href="/"]')
			.should('be.visible')
			.contains(data.fr)

		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav').find('select').should('be.visible').select('en')
		cy.get('.slicknav_btn').should('be.visible').click()
		cy.get('.slicknav_nav')
			.find('a[href="/"]')
			.should('be.visible')
			.contains(data.en)
	})
})
