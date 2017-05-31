package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^$")
public void  throws Throwable {
    throw new PendingException();
}

@When("^As a user, I want WIFI$")
public void As a user, I want WIFI$ throws Throwable {
    throw new PendingException();
}

@Then ("^WIFI is connected$")
public void WIFI is connected throws Throwable {
    assertEquals("WIFI is connected", "");
}