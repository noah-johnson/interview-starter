// establish selectors to use
const selectors = {
    closeButton: 'i[data-automation-id="illustration-modal-close"]', // close button (additional verification page)
    headerButton: 'button[data-automation-id="account-menu-header"]', // account menu header (logged in page)
}

// click close button
export function clickCloseButton() {
    return $(selectors.closeButton).click();
}

// view page after user logs in
export function viewLoggedInPage() {
    if ($(selectors.closeButton).isDisplayed) { // sometimes an additional verification page is shown
        this.clickCloseButton(); // if modal is shown, click to exit out of it
    }
    return expect($(selectors.headerButton)).toBeDisplayed(); // verify logged in page is displayed
}