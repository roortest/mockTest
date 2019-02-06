'use strict';

function basketPage() {
    this.basket_header = element(by.css('h2#basket-header'));
    this.basket_flight_list = element.all(by.css('.funnel-basket-list'));
    this.basket_outbound_flight = element(by.css('.funnel-basket-flight.outbound-flight'));
    this.basket_return_flight = element(by.css('.funnel-basket-flight.return-flight'));
    this.continue = element.all(by.css('.button-container'));
    this.skip_optional_btn = element(by.css('.button-container'));
    this.accept_and_continue = element(by.css("div.multi-options > div:nth-child(1) > input"));
    this.no_thanks_btn = element.all(by.css('div.link-container > button'));




}
module.exports = new basketPage();