// establish selectors to use
const selectors = {
  // fields
  email: 'input[data-automation-id="email-field"]', // email field (enter email page)
  password: 'input[data-automation-id="password-field"]', // password field (enter password page)

  // buttons
  continueButton: 'button[data-automation-id="button"]', // continue button (enter email and enter password pages)
  backButton: 'a[class="Link tuRaXfAG6g2QT0SkigAF"]', // back link (enter password page)
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
  expect($(selectors.backButton)).toBeDisplayed(); // verify back button is displayed
  this.clickBackButton(); // click back buttton to return to enter email page
  return expect($(selectors.email)).toBeDisplayed();
}