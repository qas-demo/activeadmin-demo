Feature: Test Gherkin Integration Support
  Testing Gherkin Integration support to ensure it works with test steps and results

  Scenario: Test Gherkin Integration Support
    Given Gherkin Ruby Must be installed in the project
    When Log In to the UI with correct credentials
    Then Login works