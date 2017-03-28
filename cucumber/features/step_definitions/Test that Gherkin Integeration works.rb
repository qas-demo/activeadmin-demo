#encoding: utf-8

Given /^Maven must be installed to execute test cases$/ do 
  # enter setup code here
end

When /^Execute Cucumber$/ do | expectedResult |
  # Actual Test Execution Code
end

Then /^Test cases run$/ do | actualResult |
  expect actualResult.to_s == "Test cases run"
end