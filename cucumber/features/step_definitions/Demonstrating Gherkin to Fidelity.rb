#encoding: utf-8

Given /^Should log into the UI$/ do 
  # enter setup code here
end

When /^Log into the UI with good credentials$/ do | expectedResult |
  # Actual Test Execution Code
end

Then /^Successful login$/ do | actualResult |
  expect actualResult.to_s == "Successful login"
end