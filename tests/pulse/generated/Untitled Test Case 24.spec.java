package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Some precondition$")
public void Some precondition throws Throwable {
    throw new PendingException();
}

@When("^A test step description$")
public void A test step description$ throws Throwable {
    throw new PendingException();
}

@Then ("^A test step result$")
public void A test step result throws Throwable {
    assertEquals("A test step result", "");
}
