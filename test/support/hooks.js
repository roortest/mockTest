'use strict';
const Cucumber = require('cucumber');
const { defineSupportCode } = require('cucumber');
const fs = require('fs');
const mkdirp = require('mkdirp');
const conf = require('../config/conf').config;
const reporter = require('cucumber-html-reporter');
const report = require('cucumber-html-report');

const jsonReports = `${process.cwd()}/reports/json`;
const htmlReports = `${process.cwd()}/reports/html`;
const targetJson = `${jsonReports}/cucumber_report.json`;
const { Given, When, Then } = require('cucumber');





defineSupportCode(({ After }) => {
    After(function(scenario, done) {
        const world = this;
        if (scenario.result.status === 'failed') {
            browser.takeScreenshot().then(stream => {
                const decodedImage = new Buffer(stream.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
                world.attach(decodedImage, 'image/png');
            })
                .then(() => {
                    done();
                });
        } else {
            done();
        }
    });
});
