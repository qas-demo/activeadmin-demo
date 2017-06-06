package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Api v 1.2.3$")
public void Api v 1.2.3 throws Throwable {
    throw new PendingException();
}

@When("^[CREATE] POST /api/v1/versions$")
public void [CREATE] POST /api/v1/versions$ throws Throwable {
    throw new PendingException();
}

@Then ("^A version is created$")
public void A version is created throws Throwable {
    assertEquals("A version is created", "A version is created");
}