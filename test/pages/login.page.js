// establish selectors to use
const selectors = {
  // fields
  email: 'input[data-automation-id="email-field"]', // email field (enter email page)
  password: 'input[data-automation-id="password-field"]', // password field (enter password page)
  
  // messages
  emailError: 'div[data-automation-id="validation-message"]', // validation error message (enter email page)
  passwordError: 'p[class="YaWlsm1JvVEfHeoV2Tcs"]', // validation error message (enter pasword page)

  // buttons
  continueButton: 'button[data-automation-id="button"]', // continue button (enter email and enter password pages)
  backButton: '//a[@class="Link tuRaXfAG6g2QT0SkigAF" and contains(text(),"Back")]', // back link (enter password page)
}

// set value for email address field
export function setEmail(Value) {
  return $(selectors.email).setValue(Value);
}

// set value for password field
export function setPassword(Value) {
  return $(selectors.password).setValue(Value);
}

// click continue button
export function clickContinueButton() {
  return $(selectors.continueButton).click();
}

// click back link
export function clickBackButton() {
  return $(selectors.backButton).click();
}

// open web page
export function open() {
  browser.url("https://app.notarize.com/login"); // set url to open
  expect(browser).toHaveUrl('https://app.notarize.com/login');
  return expect($(selectors.email)).toBeDisplayed(); // verify email field is displayed
}

// enter email address
export function enterEmail(email) {
  expect($(selectors.email)).toBeDisplayed(); // verify email field is displayed
  expect($(selectors.continueButton)).toBeDisabled(); // verify continue button is disabled when email blank
  this.setEmail(email); // enter email address
  return expect($(selectors.continueButton)).toBeEnabled(); // verify continue button is enabled with valid email
}

// enter password
export function enterPassword(password) {
  expect($(selectors.password)).toBeDisplayed(); // verify password field is displayed
  expect($(selectors.continueButton)).toBeDisabled(); // verify continue button is disabled when password blank
  this.setPassword(password); // enter password
  return expect($(selectors.continueButton)).toBeEnabled(); // verify continue button is enabled with password
}

// go back to email from password screen
export function passwordBack() {
  expect($(selectors.password)).toBeDisplayed(); // verify password field is displayed
  this.clickBackButton(); // click back buttton to return to enter email page
  return expect($(selectors.email)).toBeDisplayed(); // verify email field is displayed
}

// email required
export function emailError(email) {
  expect($(selectors.email)).toBeDisplayed(); // verify email field is displayed
  this.setEmail(email); // enter email address
  this.clickContinueButton(); // click continue button
  return expect($(selectors.emailError)).toHaveText("Email Is Required"); // verify correct error message is shown
}

// password incorrect
export function passwordError(password) {
  expect($(selectors.password)).toBeDisplayed(); // verify password field is displayed
  this.setPassword(password); // enter password
  this.clickContinueButton(); // click continue button
  return expect($(selectors.passwordError)).toHaveText("* Email or password invalid"); // verify correct error message is shown
}