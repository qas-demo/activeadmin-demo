package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Some precondition$")
public void Some precondition throws Throwable {
    throw new PendingException();
}

@When("^Some step$")
public void Some step$ throws Throwable {
    throw new PendingException();
}

@Then ("^Some result$")
public void Some result throws Throwable {
    assertEquals("Some result", "");
}
