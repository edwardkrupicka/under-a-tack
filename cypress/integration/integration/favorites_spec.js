describe('favorites', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://under-a-tack.herokuapp.com/api/v1/images', { fixture: 'images' })
      .intercept('GET', 'https://under-a-tack.herokuapp.com/api/v1/favorites', { fixture: 'no_favorites' })
      .visit('http://localhost:3000/favorites')
      .get('.grid')
      .get('a')
      .get('article')
      .get('.card')
      .get('[href="/images/:17"]') 
      .click() 
      .get('.fav-icon')
      .intercept('GET', 'https://under-a-tack.herokuapp.com/api/v1/favorites', { fixture: 'favorites' })
      .visit('https://under-a-tack.herokuapp.com/api/v1/favorites')
    });
  
    it('should be able to visit the page and render the site\'s title', () => {
      cy.get('header')
        .get('h1')
        .contains('under a tack!')
    });

    it('should be able to render the section\'s title', () => {
        cy.get('.fav-grid-container')
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

    it('should have to be able to unfavorite card', () => {
        cy.get('.fav-grid-container')
            .get('article')
            .get('.card')
            .get('[href="/images/:17"]')
            .get('.fav-icon')
            .click()
            .intercept('GET', 'https://under-a-tack.herokuapp.com/api/v1/favorites', { fixture: 'no_favorites' })
            .visit('https://under-a-tack.herokuapp.com/api/v1/favorites')
    })
    
  
  });