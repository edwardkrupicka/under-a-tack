describe('imagePage', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/images' , {
      statusCode: 200,
      body: {
        images: [
          {
            id: 16,
            url: 'https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnzxwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80',
            title: 'Last Summer Things Were Greener',
            color: '["green", "blue", "brown", "black"]',
            artist: 'John Byam Liston Shaw',
            type: 'painting'
          },
          {
            id: 17,
            url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80',
            title: 'Vase of Flowers',
            color: ["multi", "black"],
            artist: 'Jan Davidsz de Heem',
            type: 'painting'
          }
      ] 
    }
  })
    cy.intercept("http://localhost:3001/api/v1/images/:16", {
      "data": [
        {
          id: 16,
          url: "https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
          title: "Last Summer Things Were Greener",
          color: ["green", "blue", "brown", "black"],
          artist: "John Byam Liston Shaw",
          type: "painting"
        }
      ]
    })
    cy.visit('http://localhost:3000/images/:16');
  });

  it('should visit the url that corresponds to clicked image\'s id', () => {
    cy.url().should('eq', 'http://localhost:3000/images/:16')
    
  });

  it('should still render the header after routing', () => {
    cy.get('header')
    .get('h1')
    .contains('under a tack!')
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

  it("should display the current image\'s title, description, artist and type", () => {
    cy.get('.image-page')
    .get('.info-wrapper')
    .get('.description-container')
    .get('.title')
    .contains("Last Summer Things Were Greener")
    .next()
    .contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    .next()
    .contains('Artist: John Byam Liston Shaw')
    .next()
    .contains('Type: painting')

  });

  it("should have an 'add to cart' button ", () => {
    cy.get('.image-page')
    .get('button')
    .get('article')
    .get('button')
    .contains("add to cart")
  });

  it('should display the current image', () => {
    cy.get('.image-page')
    .get('.image-container')
    .get('.image-page-img')
    .should('have.attr', 'src').should('include', 'https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80')
  })

  // it('should be able to navigate to the /cart endpoint', () => {
  //   cy.get('header')
  //   .get('.button-container')
  //   .get('a').contains('Home')
  //   .should('have.attr', 'href').and('include','/cart')
  //   .click()
  // })
});