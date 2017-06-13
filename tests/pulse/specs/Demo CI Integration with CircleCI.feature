Feature: Demo CI Integration with CircleCI
  Demo using CircleCI 2.0

  Scenario: Demo CI Integration with CircleCI
    Given Must be using Circle 2.0
    When [CREATE] POST /api/v1/releases
    Then Release is created