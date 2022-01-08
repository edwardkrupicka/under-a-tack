describe('Under-a-tack mainPage', () => {
    beforeEach(() => {
        cy.intercept("GET", "http://localhost:3001/api/v1/images/" , {
          statusCode: 200,
          body: {
            data: [
              {
                "id": "16",
                "url": "https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
                "title": "Last Summer Things Were Greener",
                "color": ["green", "blue", "brown", "black"],
                "artist": "John Byam Liston Shaw",
                "type": "painting"
              },
              {
                "id": "17",
                "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80",
                "title": "Vase of Flowers",
                "color": ["multi", "black"],
                "artist": "Jan Davidsz de Heem",
                "type": "painting"
              }
          ] 
        }
      })
        cy.visit('http://localhost:3000');
      });

    it('Should be able to visit the page and render the Title"', () => {
        cy.get("h1")
        .contains("Under-A-Tack")
    });

    // it('Should be able to visit the page and display Navbar"', () => {
    //     cy.get("nav")
    //     .contains("watercolor")
    // });

    it("Should display images", () => {
        cy.get("img")
    });
  });