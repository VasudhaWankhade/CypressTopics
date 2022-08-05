describe("Document", function() {
    before(() => cy.visit('https://webdriveruniversity.com/'))

    //TS -1

    it("Verify title of page by document object", () => {
        cy.document().then(function(doc) {
            expect(doc.title).to.equal('WebDriverUniversity.com')
        })
    })

    //TS-2

    it("Verify title of page by cypress", () => cy.title().then((str) => cy.log(str)))

    //TS-3

    it("Validate heigth and width of page", () => {
        cy.document().then((doc) => {
            let jquery = Cypress.$(doc) // to convert cypress object to jquery object
            cy.log(jquery.height())
            cy.log(jquery.width())
        })
    })

    // TS-4

    it("To change the view of webpage", () => {
        cy.viewport('iphone-6', 'portrait')
        cy.viewport('samsung-note9', 'landscape')
        cy.viewport(1000, 2000)
    })

    // TS-5

    it("Manage cookies with document object", () => {
        cy.document().then((doc) => {
            doc.cookie = "myName = Hello I am Vasudha"
            cy.log(doc.cookie)
        })
    })


    // TS-6

    it.only("Manage cookies with cypress", () => {
        cy.setCookie('name', "Vasudha")
        cy.getCookie('name')
        cy.clearCookie()
    })
})