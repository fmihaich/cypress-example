const report = require("multiple-cucumber-html-reporter");
const fs = require("fs-extra");

const { addScreenshotsToReportFiles } = require('./addScreenshots');
const { CUCUMBER_JSON_DIR, createEmptyReportDir } = require('../common/dirDefinitions');

const getReportMetada = (browser) => {
  // Setting report platform according with report library documentation
  // https://www.npmjs.com/package/multiple-cucumber-html-reporter
  let reportPlatform = 'linux';
  if (process.platform == 'darwin') {
    reportPlatform = 'osx';
  } else if (process.platform.includes('win')) {
    reportPlatform = 'windows';
  }

  return {
    app: {
      name: "Duck example - Web",
      version: "Latest"
    },
    browser: {
      name: browser
    },
    device: "Local machine",
    platform: {
      name: reportPlatform
    }
  };
};

const getReportCustomData = (environment) => {
  return {
    title: "Run info",
    data: [
      {
        label: "Project: ",
        value: "Duck example - Web Automation"
      }, {
        label: "Environment: ",
        value: environment
      }, {
        label: "Execution Time: ",
        value: `${new Date().toLocaleString()
          }`
      }
    ]
  };
};


const generateCucumberHtmlReport = (reportDir, browser, env) => {
  report.generate({
    jsonDir: CUCUMBER_JSON_DIR,
    reportPath: reportDir,
    displayDuration: true,
    openReportInBrowser: true,
    useCDN: true,
    pageTitle: "Duck example web automation",
    reportName: `Duck example Web Automation Suite - Report - ${new Date().toLocaleString()}`,
    metadata: getReportMetada(browser),
    customData: getReportCustomData(env)
  });
};

const generateCucumberReport = (reportDir, browser, env) => {
  if (!fs.existsSync(CUCUMBER_JSON_DIR)) {
    console.warn('Report can not be created - There is no cucumber json directory');
  } else {
    createEmptyReportDir(reportDir);
    addScreenshotsToReportFiles();
    generateCucumberHtmlReport(reportDir, browser, env);
  }
};

module.exports = {
  generateCucumberReport,
};
