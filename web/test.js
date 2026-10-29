const assert = require("assert");
const _ = require("lodash");

assert.deepStrictEqual(_.uniq(["a", "b", "a"]), ["a", "b"]);
console.log("ok");
