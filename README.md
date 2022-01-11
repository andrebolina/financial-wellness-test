# Financial Wellness Test

This project is the <a href="https://www.bolina.dev">André Bolina</a> implementation of the take-home assignment (THA) for the <em>Fullstack Software Engineer | Investment's Team role</em> at <a href="https://www.useorigin.com">Origin</a>.

The THA proposal is to create a Web Interface and an API application for a financial wellness test based on the user's annual gross income and average monthly costs. You can <a href="https://useorigin.notion.site/THA-Web-Interface-API-application-4819947101684706b984f04e9aef9294">click here</a> to access the complete THA doc.

## Technology Stack
The THA doesn't have a required technology stack for its development. I've decided to use Python + React since it's been my working stack for the past years.


## API
### Development notes
I've decided to use Flask instead of a heavy-weight framework since the THA has only a few requirements and business rules. Flask provides speed and flexibility without complexity. It requires much fewer lines of code for a task like that. Although lightweight, Flask is an extensible solution and would support API growth. I think the key points to change to a heavy-weight framework (e.g., Django) would be requirements for authentication, database connection, and team growth (to keep patterns more straightforward).

Also, I've decided to use Marshmallow since, with a thin integration layer, it provides more control for schemas of the API's requests and response, ensuring the fulfillment of the front-end contracts.

### Requirements
In order to run the API, you should have Python >= 3.9.1 and Pipenv installed. All commands below are supposed to be run into the `server` folder and require npm installed*.

<em>* To run the following scripts without using npm, you can check the command line statements into <strong>server/packages.json</strong></em>

### `npm run setup`
Create a pipenv virtual environment and install project dependencies.

### `npm start`
Runs the Flask API in the development mode.\
The API will run on <a href="http://localhost:5000">http://localhost:5000</a>.

### `npm test`
Runs the unit tests.

### `npm run coverage`
Checks the coverage for the unit tests.

### `npm run lint`
Checks Python code using Flake8, a wrapper around three quality code tools.


### `npm run lint:fix`
Automatically formats Python code to conform to the PEP 8 style guide.


## Web Interface
### Development notes
I've decided to use Create React App (CRA)..

I've decided to create my own components instead use a third-party library (e.g. Material-UI) since we have a own UI style. Therefore, it would require a lot of classes/styles override in the library components. Creating my own components I've reached in same result with a smaller bundle size, providing smooth maintenances (less broken updates and conflicts with another libraries) and turning it easier to be incorpored on another project.

I've decided to use component wrapper ...

I've decided to use a lot of dev dependencies ...


### Requirements
In order to run the Web Interface, you should have Node.js >= 16.13.0 and npm >= 8.1.0 installed. All commands below are supposed to be run into `client` folder.

### `npm install`
Installs the project dependencies.

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `build` folder.\

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run coverage`
Launches the test runner with coverage results in the interactive watch mode.

### `npm run format`
Automatically formats Javascript and CSS code to conform to Prettier config.

### `npm run lint`
Checks if Javascript code conforms to Eslint config.

### `npm run lint:fix`
Automatically formats Javascript code to conform to Eslint config.