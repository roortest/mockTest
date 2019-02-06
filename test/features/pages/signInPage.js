'use strict';

const {SHORT_DELAY, MID_DELAY, LONG_DELAY} = require('../../support/constants');
const conf = require('../../config/conf').config;

function signInPage() {
    this.signin = element(by.css('span.sign-in'));
    this.emailAddress = element(by.css('#signin-username'));
    this.password = element(by.css('#signin-password'));
    this.login = element(by.css('#signin-login'));




    this.sign_In = async function () {
        await this.enterUrEmail();
        await this.enterPassword();
        await this.clicklogin();


    };


    this.signIn = async function () {
        await this.signin.click();
        browser.sleep(SHORT_DELAY);

        await this.emailAddress.sendKeys(this.conf.Email);
        browser.sleep(SHORT_DELAY);


        await this.password.sendKeys(this.conf.Password);
        browser.sleep(SHORT_DELAY);

        await this.login.click();
        browser.sleep(SHORT_DELAY);


    };


    this.enterUrEmail = async function () {
        await this.emailAddress.sendKeys(this.conf.Email);
    };

    this.enterPassword = async function () {
        await this.password.sendKeys(this.conf.Password);
    };

    this.clicklogin = function () {
        this.login.click();
        browser.sleep(SHORT_DELAY);
    };

    this.waitFor = function (selector) {
        return browser.wait(function () {
            return browser.isElementPresent(selector);
        }, LONG_DELAY);
    };


    this.defaultTime = function () {
        this.setDefaultTimeout(60 * 1000);
    };

}

module.exports = new signInPage();





