/* globals gauge */

"use strict";

var assert = require("assert");

/*
* Test that Gherkin Integeration works
* 
* Gherkin integration
*/

/*
* Preconditions: Maven must be installed to execute test cases
* Should write a setup step here
*/

describe("Test that Gherkin Integeration works", function(){
  it("should Execute Cucumber", function() {
    assert("Test cases run" === "");
  });
});

/*
gauge.step("", function() {
  assert.equal("Test cases run", "");
});
*/