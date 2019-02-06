'use strict';

function calendarPage() {
    this.departing_calendar = element.all(by.css('a.selectable[ej-child-click-event="OnSelect(2019, 3, 2)"] > span.day-number'));
    this.return_calendar = element.all(by.css('div.calendar-month > div.day > a.selectable[ej-child-click-event="OnSelect(2019, 3, 23)"]'));
    this.departing = element.all(by.css('button.date-picker-button.button-reset'));
    this.show_flights_btn = element.all(by.css('button.ej-button.rounded-corners.arrow-button.search-submit'));
    this.returning_text = element(by.css("button[data-tab-id='Date Calendar Return']"));
    this.close_button = element(by.css('button#close-drawer-link'));
    this.select_return_field = element(by.css('.return-date-picker'));
    this.select_depart_field = element(by.css('.outbound-date-picker'));
    this.from_field = element(by.css('.ej-input.origin.ui-autocomplete-input'));
    this.to_field = element(by.css('.ej-input.destination.ui-autocomplete-input'));
    this.from_option = element(by.css('ul#ui-id-1 > li >a'));
    this.to_option = element(by.css('ul#ui-id-2 > li >a'));


}
    module.exports = new calendarPage();

