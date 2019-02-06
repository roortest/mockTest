const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);



const config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/**/*.feature'],
    baseUrl:'https://www.easyjet.com/en/',
    Email: 'rchittathuru@gmail.com',
    Password:'Lakshay75',


    // seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 120000,
    allScriptsTimeout: 500000,


    onPrepare() {
        browser.manage().window().maximize();

        browser.waitForAngularEnabled(true).then(function () {
                return browser.driver.get(config.baseUrl);
        }).then(function () {
            return true;
        });



        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should;
    },



    cucumberOpts: {
        strict: true,
        format: ['node_modules/cucumber-pretty','json:reports_json/results.json'],
        tags: ['@flight'],
        require: [
            '../support/*.js',
            '../features/step_definitions/**/*.steps.js'
        ]
    },

    plugins: [
        {
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                reportName: 'easyjet',
                // openReportInBrowser: true,
                jsonDir: 'reports/tests/functional',
                reportPath: 'reports/tests/functional'
            }
        }
    ]


};


exports.config = config;
