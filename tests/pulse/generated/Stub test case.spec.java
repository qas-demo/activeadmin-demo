package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Some interesting precondtion$")
public void Some interesting precondtion throws Throwable {
    throw new PendingException();
}

@When("^A nice step$")
public void A nice step$ throws Throwable {
    throw new PendingException();
}

@Then ("^Some result$")
public void Some result throws Throwable {
    assertEquals("Some result", "");
}