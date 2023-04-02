@Search
Feature: Search

  Scenario: Dog search
    Given the user is on the "https://duckduckgo.com" page
    When the user enters "dog" as seach keyword
    Then the user sees a list of at least "2" links
  
  Scenario: Cat search - Example of failing scenario
    Given the user is on the "https://duckduckgo.com" page
    When the user enters "cat" as seach keyword
    Then the user sees a list of at least "300" links
