Feature: Test Update Sprints Endpoint
  Sprints

  Scenario: Test Update Sprints Endpoint
    Given Something interesting
    When [UPDATE] PUT /api/v1/sprints
    Then Sprint updated