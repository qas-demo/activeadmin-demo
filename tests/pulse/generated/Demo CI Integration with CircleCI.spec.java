package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Must be using Circle 2.0$")
public void Must be using Circle 2.0 throws Throwable {
    throw new PendingException();
}

@When("^[CREATE] POST /api/v1/releases$")
public void [CREATE] POST /api/v1/releases$ throws Throwable {
    throw new PendingException();
}

@Then ("^Release is created$")
public void Release is created throws Throwable {
    assertEquals("Release is created", "");
}