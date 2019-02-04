'use strict';

const signInPage = require('../pages/signInPage');
const {defineSupportCode} = require('cucumber');
const {SHORT_DELAY, MID_DELAY, LONG_DELAY} = require('../../support/constants');

const config = require('../../config/conf.js');
const EC = protractor.ExpectedConditions;

defineSupportCode(function ({Given, When, Then}) {

    Given('/^I navigate to easyJet Url$/', async function () {
        await browser.get(config.config.baseUrl);
        await browser.driver.manage()
            .deleteAllCookies();
        await browser.refresh();
        browser.sleep(SHORT_DELAY);
    });


    Given('/^I Signin$/', async function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Given('I enter From address', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


});