/* globals gauge */

"use strict";

var assert = require("assert");

/*
* Demo 123
* 
* This is a demo test case
*/

/*
* Preconditions: Must have maven installed locally
* Should write a setup step here
*/

describe("Demo 123", function(){
  it("should Execute Gherkin Test Cases", function() {
    assert("Test Cases Execute" === "Test Cases Execute");
  });
});

/*
gauge.step("", function() {
  assert.equal("Test Cases Execute", "");
});
*/
