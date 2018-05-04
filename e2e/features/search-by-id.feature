Feature: Prove search sequences by trinityId works
  In order to get sequences
  As a user
  I want to search them and obtain them in a pagination mode

  Scenario: List a big set of sequences
    Given I'm on the home page
    And I click the navbar option "Search"
    And I click the navbar option "Sequences by Trinity ID"
    When I introduce "comp5" in the search form "trinity-id"
    Then There are results
