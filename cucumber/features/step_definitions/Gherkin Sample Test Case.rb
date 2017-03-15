#encoding: utf-8

Given /^This is a precondition to the test case.$/ do 
  # enter setup code here
end

When /^This is a description$/ do | expectedResult |
  # Actual Test Execution Code
end

Then /^This is an Expected Result$/ do | actualResult |
  expect actualResult.to_s == "This is an Expected Result"
end