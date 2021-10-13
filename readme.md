`yarn install` (requires node v14 or later)  
`yarn test`

- Written by Alyssa Feldman
- Added to login.page.js to include additional selectors and functions
- Created loggedin.page.js for objects on page after logging in
- Added additional tests to login.spec.js
    - Happy path test of user successfully logging in
    - Navigating from enter email, to enter password, back to enter email
    - Entering an invalid email address and receiving an error message
    - Enter the incorrect password and receiving an error message
- Updated Chrome driver to use version 94.x