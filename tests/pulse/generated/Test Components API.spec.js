package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Must have API installed$")
public void Must have API installed throws Throwable {
    throw new PendingException();
}

@When("^[CREATE] POST /api/v1/components$")
public void [CREATE] POST /api/v1/components$ throws Throwable {
    throw new PendingException();
}

@Then ("^Components created$")
public void Components created throws Throwable {
    assertEquals("Components created", "");
}
