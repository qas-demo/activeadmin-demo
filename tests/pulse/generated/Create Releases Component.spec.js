/* globals gauge */

"use strict";

var assert = require("assert");

/*
* Create Releases Component
* 
* PUT on Releases should create a release
*/

/*
* Preconditions: Versions API must be implemented at v2
* Should write a setup step here
*/

/*describe("Create Releases Component", function(){
*  it("should [CREATE] POST /api/v1/releases", function() {
*    assert("Release is created" === "");
*  });
* });
*/

gauge.step("[CREATE] POST /api/v1/releases should Release is created", function() {
  assert.equal("Release is created", "");
});