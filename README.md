# netflix-clone-(React-redux-firebase)

deployed on firebase please click ==> https://netflix-clone-c0da9.web.app/

This is Netflix-clone app. User can create profile with google authentication. User can log in and log out. User can have similar netflix user interface experience with the app. User can click any movie image and if there is youtube trailer, it will display and play automatically it after a click. if user want to stop or get rid of the trailer, user can click back to image and trailer will disappear. Banner will display the Tranding Now movie/show. User can select a plan from his/her profile. After clicking a plan web browser will direct you to stripe payment window. User can make payment through checkout.stripe(enter credit card). when the transaction completed, web browser will go back to user's profile automatically.

contents :

--Login/Logout
--Stripe payment
--Netflix Originals
--Tranding Now
--Top Rated
--Action movies
--Comedy movies
--Comedy movies
--Horror movies
--Romance Movies
--Documentaries

Used tmdb Api for this project.

dependencies:

     "@reduxjs/toolkit": "^1.5.0",
        "@stripe/stripe-js": "^1.13.2",
        "@testing-library/jest-dom": "^5.11.9",
        "@testing-library/react": "^11.2.5",
        "@testing-library/user-event": "^12.8.3",
        "axios": "^0.21.1",
        "firebase": "^8.3.1",
        "movie-trailer": "^2.1.0",
        "react": "^17.0.1",
        "react-dom": "^17.0.1",
        "react-redux": "^7.2.2",
        "react-router": "^5.2.0",
        "react-router-dom": "^5.2.0",
        "react-scripts": "4.0.3",
        "react-youtube": "^7.13.1",
        "redux-devtools-extension": "^2.13.9",
        "web-vitals": "^1.1.1"

Setup To run this project, install it locally using npm:

$ cd ../Documents $ npm install npm start

Getting Started with Create React App This project was bootstrapped with Create React App.

Available Scripts In the project directory, you can run:

npm start Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

npm test Launches the test runner in the interactive watch mode. See the section about running tests for more information.

npm run build Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject Note: this is a one-way operation. Once you eject, you can???t go back!

If you aren???t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

Learn More You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
