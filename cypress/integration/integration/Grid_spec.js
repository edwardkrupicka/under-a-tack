describe('Grid', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/images', { fixture: 'images' })
    .intercept('GET', 'http://localhost:3001/api/v1/favorites', { fixture: 'favorites' })
    .intercept('GET', 'http://localhost:3001/api/v1/cart', { fixture: 'cart' })
    .visit('http://localhost:3000/')
  });

  it('should be able to visit the page and render the site\'s title', () => {
    cy.get('header')
      .get('h1')
      .contains('under a tack!')
  });

  it('should contain a grid full of cards that contain images', () => {
    cy.get('.grid')
      .get('a')
      .get('article')
      .get('.card')
      .get('img')
  });

  it('should have a link inside of each card', () => {
    cy.get('.grid')
      .get('article')
      .get('.card')
      .get('[href="/images/:16"]')
  })

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

  it('should have a favorite button inside of each card', () => {
    cy.get('.grid')
    .get('a')
    .get('article')
    .get('.card')
    .get('.fav-img')
  })

  it('should link to the image\'s details upon clicking', () => {
    cy.get('.grid')
      .get('article')
      .get('.card')
      .get('[href="/images/:16"]').click()
    cy.on('uncaught:exception', (err, runnable) => {
        return false
    })
      .get('.grid')
      .should('not.exist')
      .url().should('eq', 'http://localhost:3000/images/:16')
 
    // .intercept('GET', 'http://localhost:3001/api/v1/cart', { fixture: 'cart' }) 
    // cy.url().should('eq', 'http://localhost:3000/images/:16')
    // cy.on('url:changed', (newUrl) => {
    //   expect(newUrl).to.contain('http://localhost:3000/images/:16')
    // })
  })
});