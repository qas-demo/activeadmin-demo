package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Precond$")
public void Precond throws Throwable {
    throw new PendingException();
}

@When("^Step$")
public void Step$ throws Throwable {
    throw new PendingException();
}

@Then ("^Result$")
public void Result throws Throwable {
    assertEquals("Result", "");
}