export class Login_On_HRM_Site {

    Navigate_To_Website() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        return this
    }

    Fill_Login_Credentials(userName, passWord) {
        cy.get('#txtUsername').type(userName)
        cy.get('#txtPassword').type(passWord)
        cy.get('#btnLogin').click()
        return this
    }

    Validate_Valid_Login() {
        cy.get('#menu_dashboard_index').should('contain', 'Dashboard').and('be.visible')
        return this
    }

    Validate_Invalid_Login() {
        cy.get('#spanMessage').should('have.text', 'Invalid credentials').and('be.visible')
        return this
    }

    Visibility_Of_Forgot_Password() {
        cy.get('#forgotPasswordLink').should('be.visible').and('contain', 'Forgot your password?')
    }

    Navigate_To_Forgot_Password_Link() {
        cy.get('#forgotPasswordLink').click()
            // cy.get('input[class="searchValues"]') //.should('be.visible') //.and('have.text', 'Forgot Your Password?')
    }
}