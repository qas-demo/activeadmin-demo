package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Library 1.2.3 must be installed$")
public void Library 1.2.3 must be installed throws Throwable {
    throw new PendingException();
}

@When("^The word "gauge" has "n" vowels$")
public void The word "gauge" has "n" vowels$ throws Throwable {
    throw new PendingException();
}

@Then ("^"3"$")
public void "3" throws Throwable {
    assertEquals(""3"", "31");
}