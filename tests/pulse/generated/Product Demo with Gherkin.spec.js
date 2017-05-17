package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Must have gherkin cucumber ruby installed$")
public void Must have gherkin cucumber ruby installed throws Throwable {
    throw new PendingException();
}

@When("^Execute a gherkin test$")
public void Execute a gherkin test$ throws Throwable {
    throw new PendingException();
}

@Then ("^Test case executes$")
public void Test case executes throws Throwable {
    assertEquals("Test case executes", "");
}