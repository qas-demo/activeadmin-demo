Feature: Test Components API
  Components API

  Scenario: Test Components API
    Given Must have API installed
    When [CREATE] POST /api/v1/components
    Then Components created