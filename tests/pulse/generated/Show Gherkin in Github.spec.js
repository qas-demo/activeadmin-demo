package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Pre Cond$")
public void Pre Cond throws Throwable {
    throw new PendingException();
}

@When("^Description$")
public void Description$ throws Throwable {
    throw new PendingException();
}

@Then ("^Some result$")
public void Some result throws Throwable {
    assertEquals("Some result", "");
}
