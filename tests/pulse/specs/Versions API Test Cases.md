Feature: Versions API Test Cases
  This should test the versions API endpoint

  Scenario: Versions API Test Cases
    Given Must be on API version 1
    When [CREATE] POST /api/v1/versions
    And Must be on API version 1
    Then Create a new version
