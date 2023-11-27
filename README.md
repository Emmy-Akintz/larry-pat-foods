# Full detailed documentation of larry-pat foods frontend

## Larry-Pat Foods Frontend

### Create a larry-pat food website on which people can do the following

#### Login

This is so that each user has his or her identity which can be used when tracking his or her ordered products or products on cart.

#### SIGNUP

This is so that the user can create a new account in which he or she'll be able to create a new account that can be later used as reference and for identification.

#### RESET PASSWORD

This can be used when a user forgets his or her password. A verification code will be sent to the person's email and he or she will be able to use the verification code to update the password. This can be found in the `LOGIN` page.

#### UPDATE PASSWORD

This can be used when he or she wants to update the password. He or she inputs the previous password once and the new password twice and then if the previous password is correct, it updates. This can be found in the `USER PROFILE` page.

#### CHECK THE PRODUCTS AND THEIR PRICES

All the products and their prices will be gotten from the `LARRY-PAT FOODS (PRODUCTS LIST) DATABASE` and part of it `about four(4)` will be displayed on the PRODUCTS page while the rest will be displayed on the FULLPRODUCTS page.

#### ORDER FOODS

Place order for foods on the website just like jumia.

#### CHECK THE PROGRESS OF AN ORDER

Check the progress of the order just like jumia.

#### SEND EMAILS

Clients can send emails to the admin of the website.

### ACTIVITIES

#### AUTHORIZATION AND VERIFICATION

When the website is opened by the client, the first thing is to check the local storage if there is any existing user token there. If yes the login button will be a path to the `USER PROFILE` page and there's not, it will be a path to the login page.

### PAGES

#### USER PROFILE

This is a page that displays the user's details. The name, email and the option to change password (This will be a path to `UPDATE PASSWORD`). There will also be a return button that can take the client back to the `PARENT PAGE`.

#### LOGIN

This is the page on which the user can supply his or her email and password. If he or she isn't a user just yet, then click the `SIGNUP` page. The `RESET PASSWORD` button can be found on this page.

#### SIGNUP

This is the page on which the user can supply his or her name, email and password to create his or her profile. If his or her profile already exists, then click the path to the `LOGIN` page.

#### UPDATE PASSWORD

This is where the user can change his or her password. The path can be found on the `USER PROFILE` page. The client will provide email, previous password, new password and password confirmation. There is also an exit button that takes the user back to the `PARENT PAGE`.

#### RESET PASSWORD

This is where the user can reset password if it's been forgotten. The path can be found on `LOGIN` page. The user provides email and if the email exists, a verification code is sent to that email and the verification code will be used to give permission to enter a new password and the confirmation else a prompt comes up saying "User email does not exist."

### PARENTPAGE

This is the page that houses all the main pages in form of sections. This is because it is primarily a one page website. The pages under it are `home`, `about`, `products`, `review`, `contact`.

### HOME

This is the first section of the `PARENT PAGE`. This displays a picture of the most noteable product and on the top right, the `USER PROFILE` path is found. The last thing on this section is the "check out" button which is a path to `FULLPRODUCTS` page.

### ABOUT

This is the second section of the `PARENT PAGE`. This contains a little write up that gives a brief description about larry-pat foods as a whole. (This includes the mission and vision of the company).

### PRODUCTS

This is third section of the `PARENT PAGE`. This contains a little display of 4 of the company's product. The button after is a path to the `FULLPRODUCTS` page.

### REVIEW

This is the fourth section of the `PARENT PAGE`. This contains the reviews made by the customers. As the company grows bigger, there will be a `FULLREVIEW` page path underneath the few reviews initially displayed.

### CONTACT

This is the fifth and last section of the `PARENT PAGE`. This contains the contact details and location of the company and the option to `SEND EMAIL`.

### FULLPRODUCTS

This is a subsection of the `PRODUCTS` page. It contains a list of all larry-pat products and a search button so as to reduce the stress of the client. He or she can search for a product they know instead of scrolling through.

## `END OF THAT SECTION`

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
