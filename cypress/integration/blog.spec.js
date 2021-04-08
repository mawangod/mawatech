context('Home', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.get('.alert .w-100 > :nth-child(1)').click()
		cy.get('.main-menu > ul > :nth-child(6) > a').click()
		cy.get('.hero-cap > h2').should('be.visible')
	})

	it('posts are displayed', () => {
		cy.get('.home-blog-single').should('have.length', 3)
		cy.get('.popular_post_widget > .post_item').should('have.length', 3)
	})

	it('search posts', () => {
		cy.get('.search_widget')
			.find('.form-control')
			.type('7')
			.should('have.value', '7')

		cy.get('.search_widget').find('.btns').click()
		cy.get('.home-blog-single').should('have.length', 1)

		cy.get('.search_widget')
			.find('.form-control')
			.clear()
			.should('have.value', '')

		cy.get('.search_widget').find('.btns').click()
		cy.get('.home-blog-single').should('have.length', 3)
	})

	it('filter posts by tag', () => {
		cy.get('.tag_cloud_widget')
			.find('.list')
			.children()
			.should('have.length', 11)

		cy.get('.tag_cloud_widget').find('.list > :nth-child(2) > a').click()

		cy.get('.home-blog-single').should('have.length', 2)

		cy.get('.tag_cloud_widget').find('.list > :nth-child(2) > a').click()

		cy.get('.home-blog-single').should('have.length', 3)
	})

	it('Click on post and show it', () => {
		cy.get('.blog_left_sidebar > [href="/blog/post-2"]')
			.should('be.visible')
			.click()
		cy.get('.single-post-area').find('.post-title').should('be.visible')
		cy.get('.feature-img')
			.find('.img-fluid')
			.scrollIntoView({offset: {top: -250}})
			.should('be.visible')
			.and($img => {
				expect($img[0].naturalWidth).to.be.greaterThan(0)
			})

		cy.get('.popular_post_widget').find('.post_item').should('exist')

		cy.get('.navigation-area')
			.find('[href="/blog/post-4"]')
			.should('be.visible')

		cy.get('.blog-author').should('be.visible')
	})

	it('Comment a post', () => {
		cy.intercept('POST', '**/comments', {fixture: 'comment.json'}).as(
			'postComment'
		)
		cy.get('.blog_left_sidebar > [href="/blog/post-2"]')
			.should('be.visible')
			.click()

		cy.get('.comment-list').should('be.not.visible')

		cy.get('.comment_form')
			.should('be.visible')
			.find('button')
			.should('have.class', 'disabled')

		cy.get('.comment_form').find('[name="comment"]').type('test')

		cy.get('.comment_form').find('[name="name"]').type('dav')

		cy.get('.comment_form').find('[name="email"]').type('test@hotmail.be')

		cy.get('.comment_form')
			.find('button')
			.should('not.have.class', 'disabled')
			.click()

		cy.get('.comment-list')
			.should('be.visible')
			.children()
			.should('have.length', 1)
	})
})
