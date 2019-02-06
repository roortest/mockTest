'use strict';

function calendarPage() {
    this.departing_calendar = element.all(by.css('a.selectable[ej-child-click-event="OnSelect(2019, 2, 21)"] > span.day-number'));
    this.return_calendar = element.all(by.css('div.calendar-month > div.day > a.selectable[ej-child-click-event="OnSelect(2019, 2, 21)"]'));
    this.departing = element.all(by.css('button.date-picker-button.button-reset'));
    this.search_flights_btn = element.all(by.css('button.ej-button.rounded-corners.arrow-button.search-submit'));
    this.returning_text = element(by.css("button[data-tab-id='Date Calendar Return']"));

}
    module.exports = new calendarPage();

