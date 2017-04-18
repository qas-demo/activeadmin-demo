#encoding: utf-8

Given /^Versions API release is 1.0$/ do 
  # enter setup code here
end

When /^[CREATE] POST /api/v1/versions$/ do | expectedResult |
  # Actual Test Execution Code
end

Then /^Expect a version to be created$/ do | actualResult |
  expect actualResult.to_s == "Expect a version to be created"
end