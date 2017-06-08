package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Version 1.2.3 of the api must be installed$")
public void Version 1.2.3 of the api must be installed throws Throwable {
    throw new PendingException();
}

@When("^Interesting Step$")
public void Interesting Step$ throws Throwable {
    throw new PendingException();
}

@Then ("^Intereasting result$")
public void Intereasting result throws Throwable {
    assertEquals("Intereasting result", "Intereasting result");
}