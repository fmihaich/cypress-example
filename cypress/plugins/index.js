const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber());
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--disable-web-security');
      launchOptions.args.push('--disable-site-isolation-trials');
      return launchOptions;
    }
  });
}
