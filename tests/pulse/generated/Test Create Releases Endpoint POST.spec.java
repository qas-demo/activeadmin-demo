package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^$")
public void  throws Throwable {
    throw new PendingException();
}

@When("^[CREATE] POST /api/v1/releases$")
public void [CREATE] POST /api/v1/releases$ throws Throwable {
    throw new PendingException();
}

@Then ("^A release to be created$")
public void A release to be created throws Throwable {
    assertEquals("A release to be created", "");
}