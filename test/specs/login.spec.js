import * as LoginPage from "../pages/login.page";
import * as LoggedInPage from "../pages/loggedin.page";
describe('Notarize Signer Login Page', () => {
    // extra test to validate back option on password page works
    it('should navigate to password page and back', () => {
        LoginPage.open();
        LoginPage.enterEmail("test@test.com");
        LoginPage.clickContinueButton();
        LoginPage.passwordBack();
        browser.reloadSession();
    });

    // happy path of user entering valid email, valid password, being successfully logged in
    it('should open the login page', () => {
        LoginPage.open();
        LoginPage.enterEmail("alyssa.feldman@hotmail.com");
        LoginPage.clickContinueButton();
        LoginPage.enterPassword("notTest2021*");
        LoginPage.clickContinueButton();
        LoggedInPage.viewLoggedInPage();
        browser.reloadSession();
    });
});