@flight
Feature: easyJet

  Scenario: Add flight details and verify basket details
    Given I find a flight from Luton to Alicante
    And I add departing and return details
    And I click on show flights
    And I add flight details to basket
    Then I proceed to checkout page
    And I add booker's details
    And I add passenger details
    Then I validate added basket details




