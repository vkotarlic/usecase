# Frontend use case

This project is created with [Create React App](https://github.com/facebook/create-react-app).
This is use case project for The IT solutions company. It uses Github public API for searching repositories.

## Running project

Project is created using `npm` package manager so for running it you will need node installed on your machine.
To start project first move to project directory and then run

```sh
npm install
npm start
```

This will install all necessary dependencies and run server in the development mode.

## Code style and format

Inside project there are `.eslint.json` and `.prettierrc` files created to enforce wanted code format and style.

Running `npm run lint` will check code for errors and running `npm run lint:fix` will fix all auto fixable errors.

Running `npm run format` will format code according to prettier configuration.

For writing styles SASS is used together with BEM methodology.

## Used libraries

In this project there is several libraries in use. But most important ones are

- recoil - used for state management
- react-use-form - used for managing form data
- axios - used for sending HTTP requests

## Future steps

Some improvements for future are:

- Adding unit tests
- Switching from plain css file to css modules
- Separating advanced search part from search form component
