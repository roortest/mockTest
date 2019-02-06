'use strict';

const signInPage = require('../../pages/signInPage');
const calendarPage = require('../../pages/calendarPage');
const pickFlightPage = require('../../pages/pickFlightPage');
const basketPage = require('../../pages/basketPage');
const checkoutPage = require('../../pages/checkoutPage');

const {defineSupportCode} = require('cucumber');
const {SHORT_DELAY, MID_DELAY, LONG_DELAY} = require('../../../support/constants');

const conf = require('../../../config/conf').config;
const EC = protractor.ExpectedConditions;


defineSupportCode(function ({Given, When, Then}) {


    When(/^I SignIn$/, {timeout: 60 * 1000}, async function () {
        await signInPage.signIn();
    });


    When(/^I find a flight from Luton to Alicante$/, {timeout: 60 * 1000}, async function () {
        browser.sleep(SHORT_DELAY);
        await calendarPage.from_field.clear();
        await calendarPage.from_field.sendKeys('Luton');
        browser.sleep(SHORT_DELAY);
        await calendarPage.from_option.click();
        browser.sleep(SHORT_DELAY);
        await calendarPage.to_field.clear();
        await calendarPage.to_field.sendKeys('Alicante');
        browser.sleep(SHORT_DELAY);
        await calendarPage.to_option.click();
        browser.sleep(SHORT_DELAY);

    });


    Then(/^I add departing and return details$/, {timeout: 60 * 1000}, async function () {
        browser.sleep(SHORT_DELAY);
        await calendarPage.select_depart_field.click();
        browser.sleep(SHORT_DELAY);
        await calendarPage.departing_calendar.first().click();
        browser.sleep(SHORT_DELAY);
        await calendarPage.close_button.click();
        browser.sleep(SHORT_DELAY);
        await calendarPage.select_return_field.click();
        browser.sleep(SHORT_DELAY);
        await expect(calendarPage.returning_text.isDisplayed());
        browser.sleep(MID_DELAY);
        await expect(calendarPage.return_calendar.last().isDisplayed());
        browser.sleep(SHORT_DELAY);
        await calendarPage.return_calendar.last().click();
        browser.sleep(SHORT_DELAY);
    });

    Then(/^I click on show flights$/, {timeout: 60 * 1000}, async function () {
        await calendarPage.show_flights_btn.isDisplayed();
        browser.sleep(SHORT_DELAY);
        await calendarPage.show_flights_btn.first().click();
        browser.sleep(MID_DELAY);

    });


    Given(/^I add flight details to basket$/, {timeout: 60 * 1000}, async function () {

        await expect(pickFlightPage.pickflights_header.isDisplayed());
        await expect(pickFlightPage.pickflights_header.getText()).to.eventually.equal('Pick flights');
        await expect(pickFlightPage.selectYourFlights_header.first().getText()).to.eventually.equal('Now select your flights');

        await expect(pickFlightPage.lowest_fare_flights.isDisplayed());
        await pickFlightPage.lowest_fare_flights.first().click();
        await pickFlightPage.lowest_fare_flights.last().click();

    });



    Then(/^I click Continue$/, {timeout: 60 * 1000}, async function () {
        await basketPage.continue.isDisplayed();
        await basketPage.continue.first().click();
        browser.sleep(SHORT_DELAY);


    });


    Then(/^I skip optional fields$/, {timeout: 60 * 1000}, async function () {

        await basketPage.skip_optional_btn.isDisplayed();
        await basketPage.skip_optional_btn.click();
        browser.sleep(SHORT_DELAY);
        await basketPage.skip_optional_btn.click();
        browser.sleep(MID_DELAY);
        await basketPage.skip_optional_btn.click();
        browser.sleep(MID_DELAY);
        await basketPage.accept_and_continue.click();
        browser.sleep(SHORT_DELAY);
        await basketPage.continue.first().click();
        browser.sleep(SHORT_DELAY);
        await basketPage.no_thanks_btn.first().click();
        browser.sleep(MID_DELAY);

    });


    Then(/^I proceed to checkout page$/, {timeout: 60 * 1000}, async function () {
        browser.sleep(SHORT_DELAY);
        await checkoutPage.sigin_or_create_account.isDisplayed();
        await expect(checkoutPage.sigin_or_create_account.getText()).to.eventually.equal("Sign in or Create account");
        browser.sleep(SHORT_DELAY);
        await checkoutPage.new_customet_btn.click();
        browser.sleep(SHORT_DELAY);
        await checkoutPage.signup_email.click();
        await checkoutPage.signup_email.sendKeys('roortest@gmail.com');
        browser.sleep(SHORT_DELAY);
        await checkoutPage.continue_create_btn.click();
        browser.sleep(SHORT_DELAY);

    });


    Given(/^I add booker's details$/, {timeout: 60 * 1000}, async function () {
        browser.sleep(SHORT_DELAY);
        await checkoutPage.bookers_details();
        browser.sleep(SHORT_DELAY);

    });


    Then(/^I add passenger details$/, {timeout: 60 * 1000}, async function () {
        browser.sleep(SHORT_DELAY);
        await checkoutPage.passenger_details();
        browser.sleep(SHORT_DELAY);

    });


    Then(/^I validate added basket details$/, {timeout: 60 * 1000}, async function () {
        await basketPage.basket_header.isDisplayed();
        await expect(basketPage.basket_flight_list.isDisplayed());
        await expect(basketPage.basket_outbound_flight.isDisplayed());
        await expect(basketPage.basket_return_flight.isDisplayed());

    });


});