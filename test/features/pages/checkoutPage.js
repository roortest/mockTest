'use strict';

function checkoutPage() {

    this.sigin_or_create_account = element(by.css('#drawer-title-funnel-sign-in-or-sign-up'));
    this.new_customet_btn = element(by.css('input#new-customer-radio'));
    this.signup_email = element(by.css('#signup-email'));
    this.continue_create_btn = element(by.css('input#signup-login'));
    this.bookers_header = element.all(by.css(".component-title>h2[tabindex=\'-1\']"));

}

module.exports = new checkoutPage();