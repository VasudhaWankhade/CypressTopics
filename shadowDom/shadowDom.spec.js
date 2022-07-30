// shadow dom ==> dom inside dom 
// If there is a dom and there is a seperate content that have different styling then it is in shadow dom


//There are two ways to verify shadow dom

// first ==> always take element exact above the shadow 
//       ==> use .shadow() method ==> will give all content in shadow dom
//       ==> always confirm that shadow element is open

//second ==> instead of using shadow() method we can change cypress.json configuration "includeShadowdom" = true

describe("Verify the shadow dom elements", () => {

    it("Verify shadow dom", () => {
        cy.visit('http://127.0.0.1:5500/cypress/integration/present/shadowDom/index.html')
        cy.get('button').click()
            // cy.get('#name') // never found because it is inside the shadow dom
        cy.get('#shadowHost').shadow().find('#name').type("Vasudha")
    })

    it.only("Verify shadow dom on second site", () => {
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app[apptitle="BOOKS"]').shadow()
            .find('#input')
            .type("HELLO")
    })
})