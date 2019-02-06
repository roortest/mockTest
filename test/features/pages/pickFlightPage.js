'use strict';

function pickFlightPage() {
this.pickflights_header = element(by.css('h1'));
this.selectYourFlights_header = element.all(by.css('h2'));
this.lowest_fare_flights = element.all(by.css('span.banner-gap.is-lowest-selectable-fare'));





}

module.exports = new pickFlightPage();
