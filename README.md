This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Luke APIwalker

In addition to the index route, you should have a route to display specific characters and a route to display specific planets. Here are a couple considerations to keep in mind:

Since the search form is shown on every route and we want to preserve its state across route changes, does it need to be rendered inside each route component?

Typically we pass an empty array as the second argument to our useEffect calls to ensure that the API request is only made once. How can we force the useEffect callback to also run when the ID for a given route pattern has changed? Hint: think about putting a variable inside that array.

By reading the Star Wars API documentation, create a User Interface that does the following tasks:

Create a dropdown menu that allows the user to choose the resource they are looking for 

Next to the dropdown menu, create an input field that accepts a number that will be used to query a specific id.

Add a button to allow them to send a request to the API.

On submission, navigate to the appropriate route and render at least 4 attributes for that specific resource.

If the request is unsuccessful, create an error message that says "These aren't the droids you're looking for" with a picture of Obi-Wan Kenobi.

NINJA BONUS: If the resource is "people", output the name of the character's homeworld (you may need to make another request)

NINJA BONUS: If the resource is "people", extract the ID from the homeworld URL provided, and render a link to that specific planet. It's okay if the link text is simply "homeworld."

NINJA BONUS: Add additional resources aside from people and planets to the dropdown.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
