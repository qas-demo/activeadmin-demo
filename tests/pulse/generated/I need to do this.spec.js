/* globals gauge */

"use strict";

var assert = require("assert");

/*
* I need to do this
* 
* Some interesting description
*/

/*
* Preconditions: 
* Should write a setup step here
*/

/*describe("I need to do this", function(){
*  it("should I need to do this", function() {
*    assert("This is done" === "");
*  });
* });
*/

gauge.step("I need to do this should This is done", function() {
  assert.equal("This is done", "");
});
