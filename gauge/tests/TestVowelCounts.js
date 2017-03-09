/* globals gauge*/

"use strict";

var assert = require("assert");

gauge.step("The word consonant has <3> vowels", function(number) {
    assert.equal("3", number);
});
