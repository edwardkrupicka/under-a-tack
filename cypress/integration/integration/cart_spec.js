describe('cart', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/cart', { fixture: 'cart' })
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

    it('should have to be able to remove from cart', () => {
        cy.get('.cart')
          .get('.cart-items')
          .get('.single-item')
          .get('.remove-item')
          .click()
          .intercept('Delete', 'http://localhost:3001/api/v1/cart', [])

    })
    
  
  });