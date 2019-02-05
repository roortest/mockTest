'use strict';

const signInPage = require('../../pages/signInPage');
const {defineSupportCode} = require('cucumber');
const {SHORT_DELAY, MID_DELAY, LONG_DELAY} = require('../../../support/constants');

const config = require('../../../config/conf.js');
const EC = protractor.ExpectedConditions;

defineSupportCode(function ({Given, When, Then}) {


    Given(/^I navigate to easyJet Url$/,{retry: 15}, async function () {
        browser.sleep(LONG_DELAY);
        await browser.get(config.config.baseUrl);
        browser.sleep(LONG_DELAY);
        await browser.driver.manage().deleteAllCookies();
        await browser.refresh();
        browser.sleep(MID_DELAY);
    });
});