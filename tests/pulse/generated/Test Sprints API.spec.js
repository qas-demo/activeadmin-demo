/* globals gauge */

"use strict";

var assert = require("assert");

/*
* Test Sprints API
* 
* Test new REST API Endpoint for Sprints
*/

/*
* Preconditions: Must be deployed on 1.2.23
* Should write a setup step here
*/

/*describe("Test Sprints API", function(){
*  it("should [CREATE] /api/v1/sprints", function() {
*    assert("Sprint is created" === "");
*  });
* });
*/

gauge.step("[CREATE] /api/v1/sprints should Sprint is created", function() {
  assert.equal("Sprint is created", "");
});
