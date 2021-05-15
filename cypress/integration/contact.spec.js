context('Contact', () => {
	beforeEach(() => {
		cy.intercept('POST', '**/api/mail', {fixture: 'mail.json'}).as('postMail')
		cy.visit('/')
		cy.get('.alert .w-100 > :nth-child(1)').click()
		cy.get('.main-menu').find('a[href="/contact"]').should('be.visible').click()
	})

	const data = {
		name: 'dav',
		text: 'tesst',
		email: 'pc@gmail.com',
		subject: 'test',
		finalMessage: 'Thank you for contacting us, we will get back to you soon'
	}

	it('The map are displayed', () => {
		cy.get('.contact-section')
			.find('iframe')
			.its('0.contentDocument')
			.should('exist')
			.its('body')
			.should('not.be.undefined')
	})

	it('Sending mail', () => {
		cy.get('.form-contact')
			.find('button[type="submit"]')
			.should('have.class', 'disabled')
		cy.get('.form-contact')
			.find('[name="message"]')
			.should('be.visible')
			.type(data.text)
		cy.get('.form-contact')
			.find('[name="name"]')
			.should('be.visible')
			.type(data.name)
		cy.get('.form-contact')
			.find('[name="email"]')
			.should('be.visible')
			.type(data.email)
		cy.get('.form-contact')
			.find('[name="subject"]')
			.should('be.visible')
			.type(data.subject)
		cy.get('.form-contact')
			.find('button[type="submit"]')
			.should('not.have.class', 'disabled')
			.click()

		cy.get('.form-contact').should('not.exist')

		cy.get('.col-lg-8 > p').contains(data.finalMessage)
	})
})
