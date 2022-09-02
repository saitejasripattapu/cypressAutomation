const { defineConfig } = require("cypress");
const cucumber= require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
          return require('./cypress/plugins/index.js')(on, config)
        },
   specPattern:'cypress/integration/*.feature'
     },
   projectId: 'cotv91',
   reporter: 'mochawesome',

    env: {
          url: 'https://todomvc.com/examples/angular2/',
        }


});
