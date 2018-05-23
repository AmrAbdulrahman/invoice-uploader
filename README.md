# Invoice Uploader
A simple React application where users can submit invoices
1. users attach an `invoice file`
1. they get to add `target date` and `payment amount`
1. add a `receipient` in a modal
1. attach as many additional files as needed, with `description`

## Why?
It's completely for-fun project, where I can show a sample React/Redux application of mine.
It’s completely a for-fun project, aims at demonstrating how to create a sample Read/Redux web application.

## [Requirements](https://github.com/AmrAbdulrahman/invoice-uploader-frontend/tree/master/requirements)
- [description](https://github.com/AmrAbdulrahman/invoice-uploader-frontend/blob/master/requirements/requirements.md)
- [screens mockups](https://github.com/AmrAbdulrahman/invoice-uploader-frontend/blob/master/requirements/workflow.pdf)

## Give It a Look!
[https://invoice-uploader-frontend.herokuapp.com/](https://invoice-uploader-frontend.herokuapp.com/)

## Busy? here's a GIF
![gif](http://g.recordit.co/mgTlyqtuJa.gif)

## Libraries/Frameworks Used
- React
- Redux/Redux-Sauce
- Sagas
- Material-UI
- JSS
- Jest/Enzyme for Unit Testing

## Tools
- [react-scripts](https://github.com/facebook/create-react-app/blob/master/README.md#getting-started)
  - Encapsulates (with ability to eject and take full control):
    - Webpack, Babel, ESlint, ...
  - Smoothly build/deploy React applications with [zero configurations](https://github.com/facebook/create-react-app#philosophy)
  - No locking-in, always possible to [eject](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) at any point of time to have full control over webpack/babel plugins/eslint/... and all other tools.

## UI
- [Material-UI](https://material-ui.com/) which's an awesome implementation of the Material Design for React
- [JSS](http://cssinjs.org/?v=v9.8.1) for the styling
- Layouts are based on [Flex-Grid](https://material-ui.com/layout/grid/#grid), the application is completely **responsive**.

## Testing
**Important Note: To run tests you have to have watchman installed, please check [this issue](https://github.com/facebook/create-react-app/issues/871) for more details, to install watchman please follow [the installation guide](https://facebook.github.io/watchman/docs/install.html) on the official website**

- *philosophy:* trying to isolate components as much as possible and test it independetly. ([that's a good article that explains this philosophy](https://hacks.mozilla.org/2018/04/testing-strategies-for-react-and-redux/))
- shallow tests have been provided for all components

## Deployment
- The application is deployed on Heroku
  - buildpack [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack) has been used.
- The deployment is hooked up with Github and configured to automatically deploy every time the code is `push`ed to the `master`.
  - In a real application env, we should change the configuration to deploy from specific `stable` branch
- loggers are configured only on `development` environment

## Redux State Design
Store consists of two main substores
- **Uploads/Files:** where I keep all uploaded files state
- **Invoice:** where I keep the
  - invoice data (target, amount, ...)
  - invoice file
  - additional files

## UX
- Validations jump in after a submission attempt
- Fields get auto focused automatically when it should be
- Loading indicators globally and per component
- Users can drag and drop files to attach
- Components/Forms dynamically show/disappear based on the form state

## Form-Engine
A custom [form engine](https://github.com/AmrAbdulrahman/invoice-uploader-frontend/tree/master/src/FormEngine) has been implemented for this task
- Benefits
  - [Very simple to use](https://github.com/AmrAbdulrahman/invoice-uploader-frontend/blob/master/src/Pages/InvoiceUploader/AddAdditionalFileForm.js#L25), we just declare our form as part of the state
  - Get a bunch of out of the box utilities for the `Form` and the `Field` objects
    - `Form.isValid, Form.values, Form.transformers, ...`
    - `Field.isValid, Field.shouldShowError, Field.errorMessage, ...`
  - Full control over the engine, its behaviour can be fully customized
  - Provides consistent experience across the application
  - Easily define as many forms inside one component as needed
  - Out of the box validations
- Risks
  - No community driving this engine.
  - A nice documentation has to be provided with simple and complex examples.

## File Structure
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    index.js
    ...app-scope-config-scripts,
    App/
      App
      Router
    Containers/
      Layout
      Pages...
      ...any-other-containers
    Redux/
      ConfigureStore
      ...all-application-redux-definitions
    Sagas/
      ...all-application-sagas
    Services
      ...any-reusable-pure-js-components
    Test/
      Helpers    
```

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!  
