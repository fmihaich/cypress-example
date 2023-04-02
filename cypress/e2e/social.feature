@Social
Feature: Social

  Scenario: Social networks are the expected ones
    Given the user is on the "https://duckduckgo.com" page
    Then the user sees the social media section
    When the user expands the social media icon
    Then the user sees the following social media options:
      | Twitter    |
      | Reddit     |
      | Blog       |
      | Newsletter | 