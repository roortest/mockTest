@flight
Feature: Find a flight for easyJet

  Background:
#    When I SignIn

  Scenario: Add flight destinations details
    When I find a flight from Luton to Alicante
    Then I add departing and return details
    And I click on show flights

  Scenario: Add flight details to basket
    And I add flight details to basket
    Then I verified added details to basket
    And I click Continue
    When I skip optional fields

  Scenario: checkout
    Then I proceed to checkout page

  Scenario: booker details
    And I add booker's details

  Scenario: Passenger details
    And I add passenger details

  Scenario: verify basket details
    Then I validate added basket details
