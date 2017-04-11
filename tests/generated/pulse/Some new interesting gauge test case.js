/* globals gauge */

"use strict";

var assert = require("assert");

/*
* Some new interesting gauge test case
* 
* This should show off gauge javascript
*/

/*
* Preconditions: Gauge javascript must be installed
* Should write a setup step here
*/

/*describe("Some new interesting gauge test case", function(){
*  it("should Write a test case in Pulse", function() {
*    assert("Gauge specification file is generated" === "Gauge source code template is not generated");
*  });
* });
*/

gauge.step("Write a test case in Pulse should $[ testCase.steps[0].expectedResult }", function() {
  assert.equal("Gauge specification file is generated", "Gauge source code template is not generated");
});
