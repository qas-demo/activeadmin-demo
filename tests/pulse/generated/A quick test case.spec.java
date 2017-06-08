package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Must have test runner installed$")
public void Must have test runner installed throws Throwable {
    throw new PendingException();
}

@When("^Run test runner$")
public void Run test runner$ throws Throwable {
    throw new PendingException();
}

@Then ("^Get successful output$")
public void Get successful output throws Throwable {
    assertEquals("Get successful output", "");
}