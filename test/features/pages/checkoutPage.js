'use strict';

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
    this.email_address = elemnet(by.css('#email-textbox-readonly'));
    this.password = element(by.css('#password-textbox'));
    this.address = element(by.css('#house-number-textbox'));
    this.town = element(by.css('#town-city-textbox'));
    this.postcode = element(by.css('#postcode-textbox'));
    this.phone_number = element(by.css('#phone-number-textbox'));
    this.mailing_option = element(by.css('#mailing-option-3p-in'));
    this.continue_btn = element.all(by.css('div.button-container.centered-container > button'));




        this.business_btn = element(by.css('#reason-1-b37cb4bc-8354-4370-89c3-b99c46a89f57'));
        this.title = element(by.css('#title-dropdown-adult-1'));
        this.passenger_first_name = element(by.css('#firstname-textbox-adult-1'));
        this.passenger_last_name = element(by.css('#lastname-textbox-adult-1'));
        this.age = element(by.css('#age-dropdown-adult-1'));
        this.insurance_cover = element(by.css('#noCover'));
        this.continue_btn = element.all(by.css('div.button-container.centered-container > button'));




         this.bookers_details = async function(){
             await this.title.click();
             await this.title.select_mrs.click();
             await checkoutPage.first_name.click();
             await checkoutPage.first_name.sendKeys('test');
             await checkoutPage.surname.click();
             await checkoutPage.surname.sendKeys('test1');
             await checkoutPage.password.click();
             await checkoutPage.password.sendKeys('Test123');
             await checkoutPage.address.click();
             await checkoutPage.address.sendKeys('wembley');
             await checkoutPage.town.click();
             await checkoutPage.town.sendKeys('london');

             await checkoutPage.postcode.click();
             await checkoutPage.postcode.sendKeys('ha0 5ll');
             await checkoutPage.phone_number.click();
             await checkoutPage.phone_number.sendKeys('783489001');
             await checkoutPage.mailing_option.click();
             browser.sleep(SHORT_DELAY);
             await checkoutPage.continue_btn;
             browser.sleep(SHORT_DELAY);


    }



}

module.exports = new checkoutPage();