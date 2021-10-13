import * as LoginPage from "../pages/login.page";
import * as LoggedInPage from "../pages/loggedin.page";
describe('Notarize Signer Login Page', () => {
  // validate happy path of user entering valid email, valid password, being successfully logged in
    it('should open the login page', () => {
      LoginPage.open();
      LoginPage.enterEmail("alyssa.feldman@hotmail.com");
      LoginPage.clickContinueButton();
      LoginPage.enterPassword("notTest2021*");
      LoginPage.clickContinueButton();
      LoggedInPage.viewLoggedInPage();
      browser.reloadSession();
    });    
  
  // validate back option on password page brings user to enter email page
    it('should navigate to password page and back', () => {
        LoginPage.open();
        LoginPage.enterEmail("test@test.com");
        LoginPage.clickContinueButton();
        LoginPage.passwordBack();
        browser.reloadSession();
    });

  // validate email is required error message shows with invalid email format
    it('should invalid email', () => {
      LoginPage.open();
      LoginPage.emailError("alyssa");
      browser.reloadSession();
    });

  // validate password is incorrect error message shows with incorrect password
    it('should display password error message', () => {
      LoginPage.open();
      LoginPage.enterEmail("test@test.com");
      LoginPage.clickContinueButton();
      LoginPage.passwordError("test");
      browser.reloadSession();
    });
});