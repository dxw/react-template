Feature: Index page

  As a user
  I want to visit the index page
  So that I can start using the app

  Scenario: Visit /
    When I visit /
    Then the page title should be "React template - Index"
    And I should see "Welcome" on the page
