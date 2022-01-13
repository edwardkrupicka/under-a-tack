describe('favorites', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/favorites', { fixture: 'favorites' })
      .intercept('GET', 'http://localhost:3001/api/v1/images', { fixture: 'images' })
      .intercept('GET', 'http://localhost:3001/api/v1/cart', { fixture: 'cart' })
      .visit('http://localhost:3000/favorites')
    });
  
    it('should be able to visit the page and render the site\'s title', () => {
      cy.get('header')
        .get('h1')
        .contains('under a tack!')
    });

    it('should be able to render the section\'s title', () => {
        cy.get('.favorites')
          .get('h1')
          .contains('favorites')
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

    it('should have a link inside of favorited card', () => {
        cy.get('.fav-grid-container')
          .get('article')
          .get('.card')
          .get('[href="/images/:17"]')
      })
      
    it('should have a favorite button inside of favorited card', () => {
      cy.get('.favorites')
        .get('.fav-grid-container')
        .get('.fav-card')
        .get('a')
        .get('.fav-img')
    })

    it('should have contain the image of the specific card', () => {
      cy.get('.favorites')
        .get('.fav-grid-container')
        .get('.fav-card')
        .get('.fav-image-card').should('have.attr', 'src').should('include', "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80")
  })

    it('should have to be able to unfavorite card', () => {
      cy.get('.favorites')
        .get('.fav-grid-container')
        .get('article')
        .get('.fav-card')
        .get('.fav-img')
        .click()
        .intercept('DELETE', 'http://localhost:3001/api/v1/favorites/17', { fixture: 'deleteFav' })
        .intercept('GET', 'http://localhost:3001/api/v1/favorites', [])
        .get('.fav-card')
        // fav image at which class 
    })
    
  
  });