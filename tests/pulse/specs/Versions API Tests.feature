Feature: Versions API Tests
  Tests the new versions API endpoint CREATE

  Scenario: Versions API Tests
    Given Versions API release is 1.0
    When [CREATE] POST /api/v1/versions
    And Versions API release is 1.0
    Then Expect a version to be created
