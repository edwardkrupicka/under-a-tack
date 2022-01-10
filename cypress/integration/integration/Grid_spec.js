describe('Grid', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/images/', { statusCode: 200, fixture: 'images.json' })
    cy.visit('http://localhost:3000/');
  });

  it('should be able to visit the page and render the site\'s title', () => {
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('header')
      .get('h1')
      .contains('under a tack!')
  });

  it('should contain a grid full of cards that contain images', () => {
    cy.get('.grid-container')
      .get('a')
      .get('article')
      .get('.card')
      .get('img')
  });

  it('should have a link inside of each card', () => {
    cy.get('.grid-container')
      .get('article')
      .get('.card')
      .get('[href="/images/:16"]')
  })

  it('should have a button that links to the base url', () => {
    cy.get('header')
      .get('.button-container')
      .get('a').contains('Home')
      .should('have.attr', 'href').and('include', '/')
  })

  it('should have a button that links to the /cart endpoint', () => {
    cy.get('header')
      .get('.button-container')
      .get('a').contains('Cart')
      .should('have.attr', 'href').and('include', '/cart')
  })

  it('should link to the image\'s details upon clicking', () => {
    cy.get('.grid-container')
      .get('article')
      .get('.card')
      .get('[href="/images/:16"]')
      .click()
      .get('.grid-container')
      .should('not.exist')
    cy.url().should('eq', 'http://localhost:3000/images/:16')
  })
});