/* globals gauge */

"use strict";

var assert = require("assert");

/*
* Demo Gauge and Javascript
* 
* This is meant to demo gauge and javascript
*/

/*
* Preconditions: The gauge binary must be installed
* Should write a setup step here
*/

describe("Demo Gauge and Javascript", function(){
  it("should Execute gauge test runner", function() {
    assert("Get some test results back" === "Get some test results back");
  });
});

/*
gauge.step("", function() {
  assert.equal("Get some test results back", "");
});
*/
