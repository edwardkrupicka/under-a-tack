describe('Main Page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/' , {
          statusCode: 404,
          body: {
            images: [
              {
                id: '16',
                url: 'https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnzxwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80',
                title: 'Last Summer Things Were Greener',
                color: '["green", "blue", "brown", "black"]',
                artist: 'John Byam Liston Shaw',
                type: 'painting'
              },
              {
                id: '17',
                url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80',
                title: 'Vase of Flowers',
                color: ["multi", "black"],
                artist: 'Jan Davidsz de Heem',
                type: 'painting'
              }
          ] 
        }
      })
        cy.visit('http://localhost:3000/');
      });

    it('should be able to visit the page and render the site\'s title', () => {
        cy.url().should('eq','http://localhost:3000/')
        cy.get('header')
        .get('h1')
        .contains('Under-A-Tack')
    });

    // it('Should be able to visit the page and display Navbar"', () => {
    //     cy.get("nav")
    //     .contains("watercolor")
    // });

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
      .should('have.attr', 'href').and('include','/')
    })

    it('should have a button that links to the /cart endpoint', () => {
      cy.get('header')
      .get('.button-container')
      .get('a').contains('Cart')
      .should('have.attr', 'href').and('include','/cart')
    })
  });