// intercept ===> use to wait for the response of api request
// mock data and stub data
// validate xhr request and reponse and validate on UI 


describe("Verify the intercept", () => {

    it("Verify number of users ", () => {

        cy.intercept({
            method: "GET",
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).as("allUsers")
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait("@allUsers").then(function({ request, response }) {
            console.log(request)
            console.log(response)
            expect(response.statusCode).to.eq(200)
            expect(response.body.length).to.eq(100)
        })
    })


    it.only("Verify number of users ", () => {

        cy.intercept({
            method: "GET",
            url: 'https://jsonplaceholder.typicode.com/posts'
        }, {
            myName: "Vasudha Wankhade" // what I want in return
        }).as("allUsers")

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait("@allUsers").then(function({ request, response }) {
            console.log(request)
            console.log(response)
            expect(response.statusCode).to.eq(200)
            expect(response.body.length).to.eq(100)
        })
    })

})