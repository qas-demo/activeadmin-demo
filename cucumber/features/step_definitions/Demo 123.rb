#encoding: utf-8

Given /^Must have maven installed locally$/ do 
  # enter setup code here
end

When /^Execute Gherkin Test Cases$/ do | expectedResult |
  # Actual Test Execution Code
end

Then /^Test Cases Execute$/ do | actualResult |
  expect actualResult.to_s == "Test Cases Execute"
end