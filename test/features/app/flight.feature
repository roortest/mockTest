@flight
Feature: Find a flight for easyJet

  Background:
#    When I SignIn

  Scenario: Add flight destinations details
    When I find a flight from Luton to Alicante
    Then I add departing and return details

    Scenario: Add flight details to basket
      And I add flight details to basket

      Scenario: booker details
        And I add booker's details

        Scenario: Passenger details
          Then I add passenger details

          Scenario: verify basket details
            Then I validate added basket details
