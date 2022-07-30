import { Login_On_HRM_Site } from '../present/modules/pom'

const loginOne = new Login_On_HRM_Site()

describe("Validate login functionality on orange hrm site", () => {

    beforeEach(() => {
        loginOne.Navigate_To_Website()
    })
    it("Validate logged in successfully", () => {
        loginOne.Fill_Login_Credentials("Admin", 'admin123')
        loginOne.Validate_Valid_Login()
    })

    it("Valid Invalid login", () => {
        loginOne.Fill_Login_Credentials("Admin", 'admin1243')
        loginOne.Validate_Invalid_Login()
    })

    it.only("Validate forgot password link", () => {
        loginOne.Visibility_Of_Forgot_Password()
        loginOne.Navigate_To_Forgot_Password_Link()

    })



})