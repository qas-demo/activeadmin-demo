/* globals gauge */
"use strict";
var assert = require("assert");

/*
* Name: Test Releases API Endpoint
* Description: Test new release api CRUD endpoint -> create
*
* Preconditions: APi release 1.0
*/

gauge.step("[CREATE] POST /api/v1/releases should Release is created", function() {
  assert.equal("Release is created", "");
});
