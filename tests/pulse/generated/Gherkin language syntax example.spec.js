/* globals gauge */

"use strict";

var assert = require("assert");

/*
* Gherkin language syntax example
* 
* Description
*/

/*
* Preconditions: Precondition
* Should write a setup step here
*/

gauge.step("Step description should Expected result", function() {
  assert.equal("Expected result", "");
});