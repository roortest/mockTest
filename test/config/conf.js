const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');


chai.use(chaiAsPromised);

const config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ["../features/*.feature"],
    baseUrl: "https://www.easyjet.com/",



    directConnect: true,
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 120000,
    allScriptsTimeout: 500000,

    onPrepare() {
        browser.waitForAngularEnabled(false);
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should;
    },



    cucumberOpts: {
        strict: true,
        format: ['node_modules/cucumber-pretty', 'json:reports_json/results.json'],
        tags: ['@flight'],
        require: [
            '../support/*.js',
            '../step_definitions/signIn.steps.js'
        ]
    },

    plugins: [
        {
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                reportName: 'easyJet',
                // openReportInBrowser: true,
                jsonDir: 'reports/test-functional/functional',
                reportPath: 'reports/test-functional/functional'
            }
        }
    ]


};


exports.config = config;
