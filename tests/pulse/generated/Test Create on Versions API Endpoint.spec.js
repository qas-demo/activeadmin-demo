/* globals gauge */

"use strict";

var assert = require("assert");

/*
* Test Create on Versions API Endpoint
* This is to test a POST on the Versions API
*
* Preconditions: 
* Should write a setup step here
*/

gauge.step("[CREATE] POST /api/v1/versions should A new version is created", function() {
  assert.equal("A new version is created", "");
});