/* globals gauge */

"use strict";

var assert = require("assert");

/*
* Releases API Endpoint
* 
* Test releases API
*/

/*
* Preconditions: Api must be /v1 build 213
* Should write a setup step here
*/

/*describe("Releases API Endpoint", function(){
*  it("should [CREATE] POST /api/v1/releases", function() {
*    assert("Creates a release" === "");
*  });
* });
*/

gauge.step("[CREATE] POST /api/v1/releases should Creates a release", function() {
  assert.equal("Creates a release", "");
});