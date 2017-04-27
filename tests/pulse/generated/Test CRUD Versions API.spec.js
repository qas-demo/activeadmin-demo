package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^The api actually is v1$")
public void The api actually is v1 throws Throwable {
    throw new PendingException();
}

@When("^[CREATE] POST /api/v1/versions$")
public void [CREATE] POST /api/v1/versions$ throws Throwable {
    throw new PendingException();
}

@Then ("^A new version is created$")
public void A new version is created throws Throwable {
    assertEquals("A new version is created", "");
}
