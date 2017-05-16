package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Have Gherkin Installed$")
public void Have Gherkin Installed throws Throwable {
    throw new PendingException();
}

@When("^Write Gherkin Test Case$")
public void Write Gherkin Test Case$ throws Throwable {
    throw new PendingException();
}

@Then ("^Execution Passes$")
public void Execution Passes throws Throwable {
    assertEquals("Execution Passes", "");
}
