# Financial Wellness Test - André Bolina implementation of an Origin THA

This project is the <a href="https://www.bolina.dev">André Bolina</a> implementation of the take-home assignment for the <em>Fullstack Software Engineer | Investment's Team role</em> at <a href="https://www.useorigin.com">Origin</a>.

The THA is to create a web interface and an API application for a financial wellness test based on user's input for his annual gross income and average monthly costs. <a href="https://useorigin.notion.site/THA-Web-Interface-API-application-4819947101684706b984f04e9aef9294">Click here</a> to access the fully THA doc.

<br>

## Technology Stack
The technology stack to use wasn't a requirement of the THA. I've decided to use Python + React, since it's has been my day to day stack at least for the past year.

<br>

## API

### Requirements
In order to run the API you should have Python, PIP and Pipenv installed. All commands bellow are suppossed to be runned into `server` folder and requires npm installed*.

<em>* You can check the final scripts into <strong>server/packages.json</strong> to execute them without npm.</em>
### `npm run setup`
Create a virtual environment for the project and install all dependencies, including dev ones.

### `npm start`
Runs the flask api in the development mode.\
The API will run on <a href="http://localhost:5000">http://localhost:5000</a>.

### `npm test`
Runs the unit tests.

### `npm run coverage`
Runs the unit tests coverage.

<br>

## Web Interface

### Requirements
In order to run the Web Interface you should have Node.js and npm installed. All commands bellow are suppossed to be runned into `client` folder.

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run coverage`
Launches the test runner with coverage results in the interactive watch mode.

### `npm run format`
Format js, jsx, and css project files according to prettier config.

### `npm run lint`
Check js and jsx project files according to Eslint config.


### `npm run lint:fix`
Format js and jsx project files according to to Eslint config.