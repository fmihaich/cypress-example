const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  video: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/**/*.feature',
  },
});
