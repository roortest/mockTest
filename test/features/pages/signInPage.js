'use strict';

function signInPage() {
    this.signin = element(by.css('span.sign-in'));
    this.emailAddress = element(by.css('#signin-username'));
    this.password = element(by.css('#signin-password'));
    this.login = element(by.css('#signin-login'));
}



module.exports = new signInPage();





