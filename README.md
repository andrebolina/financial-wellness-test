# Financial Wellness Test

This project is the <a href="https://www.bolina.dev">André Bolina</a> implementation of the take-home assignment (THA) for the Fullstack Software Engineer role at <a href="https://www.useorigin.com">Origin</a>.

The THA proposal is to create a Web Interface and an API application for a financial wellness test based on the user's annual gross income and average monthly costs. You can <a href="https://useorigin.notion.site/THA-Web-Interface-API-application-4819947101684706b984f04e9aef9294">click here</a> to access the complete THA doc.

## Technology Stack
The THA doesn't have a required technology stack for its development. I've decided to use Python + React since it's been my working stack for the past years.


## API
### Development notes
I've decided to use Flask instead of a heavy-weight framework since the THA has only a few requirements and business rules. Flask provides speed and flexibility without complexity. It requires much fewer lines of code for a task like that. Although lightweight, Flask is an extensible solution and would support API growth. I think the key points to change to a heavy-weight framework (e.g., Django) would be requirements for authentication, database connection, and team growth (to keep patterns more straightforward).

Also, I've decided to use Marshmallow since, with a thin integration layer, it provides more control for schemas of the API's requests and response, ensuring the fulfillment of the front-end contracts.

From the dev environment perspective, I've decided to use pytests for the unit tests and flake8 to control the code's format and quality. I also added autopep8 to an easier format fix.

### Requirements
In order to run the API, you should have Python >= 3.9.1 and Pipenv installed. All commands below are supposed to be run into the `api` folder and require npm installed*.

<em>* To run the following scripts without using npm, you can check the command line statements into <strong>api/packages.json</strong></em>

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
I've decided to use Create React App (CRA) to have a quicker start. Also, since the THA requirements aren't complex, I thought I wouldn't need any specific Webpack config. However, if necessary, it's possible, and I did it to use absolute paths and get a cleaner code.

Since THA has its UI style, I've decided to create my components instead of using a third-party library (e.g., Material-UI). Otherwise, it would require a lot of classes/styles override in the external library components. I've reached the same result with a smaller bundle creating my components. Besides it, avoiding third-party libraries provides smooth maintenances and makes it easier to incorporate on another project.

*For the form + result components I've thought about use a state management library (e.g., Redux or React Query) or another decided to use component wrapper ...

From the dev environment perspective, I've decided to use React Testing Library and Jest for the unit tests and Prettier + Eslint to control the code's format and quality. I've decided to use CSS modules to avoid shared styles side-effects and allow a better files structure organization (all files for a single component live in one place). Also, I've used the theme structure to share styles/UI values and facilitate changes in the future.


### Requirements
In order to run the Web Interface, you should have Node.js >= 16.13.0 and npm >= 8.1.0 installed. All commands below are supposed to be run into `web` folder.

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


## Final note

The business rules from <a href="https://useorigin.notion.site/THA-Web-Interface-API-application-4819947101684706b984f04e9aef9294">THA doc</a> have a gap. If the annual costs represent precisely 25% of his annual net compensation, it doesn't match any business rule. So, noticing the other rule with the '<strong>less</strong> 'conditions has a '<strong>or equal</strong>' condition too, I've decided to change the first rule for '<strong>If the user annual costs represents less than <u>or equal</u> 25% of his annual net compensation, his score is HEALTHY</strong>'.