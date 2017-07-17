package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^API version for word counts must be 1.2.23$")
public void API version for word counts must be 1.2.23 throws Throwable {
    throw new PendingException();
}

@When("^The word "gauge" should have "3" vowels$")
public void The word "gauge" should have "3" vowels$ throws Throwable {
    throw new PendingException();
}

@Then ("^"3"$")
public void "3" throws Throwable {
    assertEquals(""3"", "");
}
