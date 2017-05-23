package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Gherkin Java Cucumber 1.0 installed$")
public void Gherkin Java Cucumber 1.0 installed throws Throwable {
    throw new PendingException();
}

@When("^Execute Gherkin Test$")
public void Execute Gherkin Test$ throws Throwable {
    throw new PendingException();
}

@Then ("^Test executes$")
public void Test executes throws Throwable {
    assertEquals("Test executes", "");
}
