describe('cart', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/cart', { fixture: 'cart' }).as('main')
      .intercept('GET', 'http://localhost:3001/api/v1/images', { fixture: 'images' })
      .intercept('GET', 'http://localhost:3001/api/v1/favorites', { fixture: 'favorites' })
      .visit('http://localhost:3000/cart')
    });
  
    it('should be able to visit the page and render the site\'s title', () => {
      cy.get('header')
        .get('h1')
        .contains('under a tack!')
    });

    it('should be able to render the section\'s title', () => {
        cy.get('.cart')
          .get('h2')
          .contains('your cart')
    });
  
    it('should have a button that links to the base url', () => {
      cy.get('.header')
        .get('.button-container')
        .get('.nav-link').should('have.attr', 'href').and('include', '/')
        .get('.home-icon').should('have.attr', 'src').should('include', 'https://www.svgrepo.com/show/334004/home.svg')
    })
  
    it('should have a button that links to the /favorites endpoint', () => {
      cy.get('.header')
        .get('.button-container')
        .get('.nav-link').next()
        .should('have.attr', 'href').and('include', '/favorites')
        .get('.fav-icon').should('have.attr', 'src').should('include', 'https://www.svgrepo.com/show/333996/heart.svg')
    })
  
    it('should have a button that links to the /cart endpoint', () => {
      cy.get('.header')
        .get('.button-container')
        .get('.nav-link')
        .next()
        .next()
        .should('have.attr', 'href').and('include', '/cart')
        .get('.cart-icon').should('have.attr', 'src').should('include', 'https://www.svgrepo.com/show/333784/cart-alt.svg')
    })

    it('should have item, quantity and price ', () => {
        cy.get('.cart')
          .get('.cart-columns')
          .get('.cart-text')
          .contains('Item')
          .get('.cart-text')
          .contains('Quantity')
          .get('.cart-text')
          .contains('Price')
    })

    it('should have specific image of item in cart', () => {
        cy.get('.cart')
          .get('.cart-items')
          .get('.single-item')
          .get('.cart-img-container')
          .get('.cart-img').should('have.attr', 'src').should('include', "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80")
    })

    it('should have remove from cart button', () => {
      cy.get('.cart')
        .get('.cart-items')
        .get('.single-item')
        .get('.remove-item').should('have.attr', 'src').should('include', '/static/media/trash.52c14f332636c0a4c49ae37894774e46.svg')
    })
    
});