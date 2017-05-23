package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^jdk 1.8.0_x is installed$")
public void jdk 1.8.0_x is installed throws Throwable {
    throw new PendingException();
}

@When("^Execute Gherkin$")
public void Execute Gherkin$ throws Throwable {
    throw new PendingException();
}

@Then ("^Test caser actually runs$")
public void Test caser actually runs throws Throwable {
    assertEquals("Test caser actually runs", "");
}