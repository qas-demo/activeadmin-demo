FLAGGED FOR ERRRORS
SyntaxError: Unexpected token ILLEGAL/* globals gauge */

"use strict";

var assert = require("assert");

/*
* ${ testCase.description }
*/

/*
* Preconditions: ${ testCase.preCondition }
* Should write a setup step here
*/

describe("${ testCase.name", function(){
  it("should ${ testCase.name}", function() {
    assert("${ testCase.steps[0].expectedResult }" === "${ actualResult }");
  });
});

/*
gauge.step("", function() {
  assert.equal("${ testCase.steps[0].expectedResult }", "${ actualResult }");
});
*/