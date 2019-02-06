'use strict';

const signInPage = require('../../pages/signInPage');
const calendarPage = require('../../pages/calendarPage');
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



    When(/^I find a flight from Luton to Alicante$/, {timeout: 60 * 1000}, async function () {
        browser.sleep(SHORT_DELAY);
        await browser.driver.findElement(by.css('.ej-input.origin.ui-autocomplete-input')).clear();
        await browser.driver.findElement(by.css('.ej-input.origin.ui-autocomplete-input')).sendKeys('Luton');
        browser.sleep(SHORT_DELAY);
        await browser.driver.findElement(by.css('ul#ui-id-1 > li >a')).click();

        await browser.driver.findElement(by.css('.ej-input.destination.ui-autocomplete-input')).clear();
        await browser.driver.findElement(by.css('.ej-input.destination.ui-autocomplete-input')).sendKeys('Alicante');
        browser.sleep(SHORT_DELAY);
        await browser.driver.findElement(by.css('ul#ui-id-2 > li >a')).click();
        browser.sleep(SHORT_DELAY);

    });



    Then(/^I add departing and return details$/, {timeout: 60 * 1000}, async function () {
        browser.sleep(SHORT_DELAY);
        await browser.driver.findElement(by.css('.outbound-date-picker')).click();
        browser.sleep(SHORT_DELAY);
        await calendarPage.departing_calendar.first().click();
        browser.sleep(SHORT_DELAY);
        await browser.driver.findElement(by.css('button#close-drawer-link')).click();
        browser.sleep(SHORT_DELAY);
        await browser.driver.findElement(by.css('.return-date-picker')).click();
        browser.sleep(SHORT_DELAY);
        await expect(calendarPage.returning_text.isDisplayed());
        await browser.sleep(MID_DELAY);
        browser.actions().mouseMove(calendarPage.return_calendar.first()).perform();
        await calendarPage.return_calendar.first().click();
        browser.sleep(MID_DELAY);
        await calendarPage.search_flights_btn.first().click();
        browser.sleep(MID_DELAY);

    });


    Given(/^I add booker's details$/, function () {

    });


    Then(/^I add passenger details$/, function () {

    });


    Then(/^I validate added basket details$/, function () {

    });


    Given(/^I add flight details to basket$/, function () {

    });


});