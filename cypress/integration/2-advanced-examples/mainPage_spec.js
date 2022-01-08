describe('Under-a-tack mainPage', () => {

    beforeEach(() => {
        cy.intercept("GET", "http://localhost:3001/api/v1/images/" , {
            "data": [
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
                },
                {
                "id": 18,
                "url": "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80",
                "title": "Springtime",
                "color": ["green", "blue", "white"],
                "artist": "Philip Wilson Steer",
                "type": "painting"
                },
                {
                "id": 19,
                "url": "https://images.unsplash.com/photo-1576769267415-9642010aa962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80",
                "title": "Changing the Letter",
                "color": ["red", "blue", "green", "yellow"],
                "artist": "Joseph Edward Southall",
                "type": "painting"
                },
                {
                "id": 20,
                "url": "https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80",
                "title": "Near Brodick, Isle Of Arran, Scotland",
                "color": ["yellow", "blue", "green"],
                "artist": "William Andrews Nesfield",
                "type": "painting"
                }
                ]
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