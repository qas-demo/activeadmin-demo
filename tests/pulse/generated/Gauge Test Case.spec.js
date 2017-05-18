package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Some Pre Cond$")
public void Some Pre Cond throws Throwable {
    throw new PendingException();
}

@When("^Description$")
public void Description$ throws Throwable {
    throw new PendingException();
}

@Then ("^Result$")
public void Result throws Throwable {
    assertEquals("Result", "");
}
