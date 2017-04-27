Feature: Test CRUD Versions API
  Testing a new rest endpoint

  Scenario: Test CRUD Versions API
    Given The api actually is v1
    When [CREATE] POST /api/v1/versions
    Then A new version is created