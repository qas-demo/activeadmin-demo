package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Gherkin must be installed$")
public void Gherkin must be installed throws Throwable {
    throw new PendingException();
}

@When("^Template out gherkin test case$")
public void Template out gherkin test case$ throws Throwable {
    throw new PendingException();
}

@Then ("^Test case executes$")
public void Test case executes throws Throwable {
    assertEquals("Test case executes", "");
}