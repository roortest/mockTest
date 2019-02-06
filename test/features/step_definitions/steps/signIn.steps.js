'use strict';

const signInPage = require('../../pages/signInPage');
const {defineSupportCode} = require('cucumber');
const {SHORT_DELAY, MID_DELAY, LONG_DELAY} = require('../../../support/constants');

const conf = require('../../../config/conf').config;
const EC = protractor.ExpectedConditions;

defineSupportCode(function ({Given, When, Then}) {


    Given(/^I wait (\d+) seconds?$/, function (seconds, callback) {
        this.client.sleep(seconds * 1000);
        callback();
    });


    When(/^I SignIn$/, {timeout: 60 * 1000}, async function () {
        await browser.driver.findElement(by.css('span.sign-in')).click();
        browser.sleep(SHORT_DELAY);

        await signInPage.emailAddress.sendKeys('rchittathuru@gmail.com');
        browser.sleep(SHORT_DELAY);


       await signInPage.password.sendKeys('Lakshay75');
        browser.sleep(SHORT_DELAY);

       await signInPage.login.click();
        browser.sleep(SHORT_DELAY);


    });

    When(/^I find a flight from Luton to Alicante$/, {timeout: 60 * 1000},async function () {

       await browser.driver.findElement(by.css('.ej-input.origin.ui-autocomplete-input')).clear();
        await browser.driver.findElement(by.css('.ej-input.origin.ui-autocomplete-input')).sendKeys('Luton');
        browser.sleep(SHORT_DELAY);
        await browser.driver.findElement(by.css('.ej-input.origin.ui-autocomplete-input')).click();

        await browser.driver.findElement(by.css('.ej-input.destination.ui-autocomplete-input')).clear();
        await browser.driver.findElement(by.css('.ej-input.destination.ui-autocomplete-input')).sendKeys('Alicante');
        browser.sleep(SHORT_DELAY);
        await browser.driver.findElement(by.css('a.selectable > span.chosen-date')).click();
        await browser.driver.findElement(by.css('a.selectable > span.day-number')).click();

        await browser.driver.findElement(by.css('span.day-number')).click();
        await browser.driver.findElement(by.css('button.ej-button.rounded-corners.arrow-button.search-submit')).click();

    });
});