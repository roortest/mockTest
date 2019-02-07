'use strict';

const {SHORT_DELAY, MID_DELAY, LONG_DELAY} = require('../../support/constants');
const conf = require('../../config/conf').config;

function checkoutPage() {

    this.sigin_or_create_account = element(by.css('#drawer-title-funnel-sign-in-or-sign-up'));
    this.new_customet_btn = element(by.css('input#new-customer-radio'));
    this.signup_email = element(by.css('#signup-email'));
    this.continue_create_btn = element(by.css('input#signup-login'));
    this.bookers_header = element.all(by.css(".component-title>h2[tabindex=\'-1\']"));


    this.title = element(by.css('select#title-dropdown'));
    this.select_mrs = element(by.css('#title-dropdown > option:nth-child(2)'));
    this.first_name = element(by.css('input#firstname-textbox'));
    this.surname = element(by.css('input#lastname-textbox'));
    this.email_address = element(by.css('#email-textbox-readonly'));
    this.password = element(by.css('#password-textbox'));
    this.address = element(by.css('#house-number-textbox'));
    this.town = element(by.css('#town-city-textbox'));
    this.postcode = element(by.css('#postcode-textbox'));
    this.phone_number = element(by.css('#phone-number-textbox'));
    this.mailing_option = element.all(by.css('.mailing-preference-option.ej-radio'));
    this.continue_btn = element.all(by.css('.button-container.centered-container > button'));
    this.form = element(by.css('form.ej-form'));


    this.business_btn = element.all(by.css('.reason-option-wrapper.ej-radio'));
    this.pssenger_title = element(by.css('#title-dropdown-adult-1'));
    this.select_passengr_title = element(by.css('#title-dropdown-adult-1 > option:nth-child(2)'));
    this.select_age = element(by.css('#age-dropdown-adult-1 > option:nth-child(2)'));
    this.passenger_first_name = element(by.css('#firstname-textbox-adult-1'));
    this.passenger_last_name = element(by.css('#lastname-textbox-adult-1'));
    this.age = element(by.css('#age-dropdown-adult-1'));
    this.insurance_cover = element(by.css('#noCover'));
    this.continue_btn = element.all(by.css('div.button-container.centered-container > button.ej-button'));


    this.bookers_details = async function () {
        await this.title.click();
        await this.select_mrs.click();
        await this.first_name.click();
        await this.first_name.sendKeys('test');
        await this.surname.click();
        await this.surname.sendKeys('tester');
        await this.password.click();
        await this.password.sendKeys('Test123');
        await this.address.click();
        await this.address.sendKeys('wembley');
        await this.town.click();
        await this.form.click();
        await this.town.sendKeys('london');
        await this.form.click();
        await this.postcode.click();
        await this.form.click();
        await this.postcode.sendKeys('ha0 3qr');
        await this.form.click();
        await this.phone_number.click();
        browser.sleep(SHORT_DELAY);
        await this.form.click();
        await this.phone_number.sendKeys('783489001');
        await this.form.click();
        browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        await this.mailing_option.last().click();
        browser.sleep(SHORT_DELAY);


        browser.executeScript('window.scrollTo(0,10000);').then(function(){

            console.log('++++++SCROLLED Down+++++');
        });
        await this.continue_btn.first().click();
        browser.sleep(MID_DELAY);


    };


    this.passenger_details = async function () {
        await this.business_btn.first().click();
        await this.pssenger_title.click();
        await  this.select_passengr_title.click();
        await this.passenger_first_name.click();
        await this.passenger_first_name.sendKeys('passng');
        await this.passenger_last_name.click();
        await this.passenger_last_name.sendKeys('passenge');
        await this.age.click();
        await this.select_age.click();
        browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        await this.insurance_cover.click();
        browser.sleep(MID_DELAY);

        browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(SHORT_DELAY);
        await this.continue_btn.first().click();
        browser.sleep(MID_DELAY);



    };


}

module.exports = new checkoutPage();