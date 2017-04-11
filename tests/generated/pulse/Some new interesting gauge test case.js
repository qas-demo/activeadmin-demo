FLAGGED FOR ERRRORS
SyntaxError: Unexpected identifier/* globals gauge */

"use strict";

var assert = require("assert");

/*
* ${ testCase.name }
* 
* ${ testCase.description }
*/

/*
* Preconditions: ${ testCase.preCondition }
* Should write a setup step here
*/

/*describe("${ testCase.name}", function(){
*  it("should ${ testCase.steps[0].description }", function() {
*    assert("${ testCase.steps[0].expectedResult }" === "${ actualResult }");
*  });
* });
*/

gauge.step("${ testCase.steps[0].description should $[ testCase.steps[0].expectedResult }", function() {
  assert.equal("${ testCase.steps[0].expectedResult }", "${ actualResult }");
});
