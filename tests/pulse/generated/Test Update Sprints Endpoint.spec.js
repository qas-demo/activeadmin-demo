package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^Something interesting$")
public void Something interesting throws Throwable {
    throw new PendingException();
}

@When("^[UPDATE] PUT /api/v1/sprints$")
public void [UPDATE] PUT /api/v1/sprints$ throws Throwable {
    throw new PendingException();
}

@Then ("^Sprint updated$")
public void Sprint updated throws Throwable {
    assertEquals("Sprint updated", "");
}