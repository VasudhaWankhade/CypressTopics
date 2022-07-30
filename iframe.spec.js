//iframe ==> documents inside documents
// can be found by jquery and javascript
// jquery is library which is written in javascript language




describe("Verify iframes in cypress", function() {
    beforeEach(function() {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
    })
    it.only("Verify iframe by jquery", () => {

        //Validate wheather Home is active or not

        // cy.get('#frame').then(function(iframe) {
        //     let body = iframe.contents().find('body')
        //     cy.wrap(body).as('bodyInIframe')
        //     cy.get('@bodyInIframe').find('a[href="index.html"]').parent().should('have.attr', 'class', 'active')
        // })

        cy.Validate_iframe_Active_Link_By_Jquery('frame', 'a[href="index.html"]')

    })

    it("Verify iframe by javascript", () => {

        cy.get('#frame').then(function(iframe) {
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('iframeBody')
            cy.get('@iframeBody').find('a[href="index.html"]').parent().should('have.class', 'active')
        })

    })
})