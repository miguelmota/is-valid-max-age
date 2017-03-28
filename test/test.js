var test = require('tape');
var isValidMaxAge = require('../is-valid-max-age');

test('is valid ssn', function (t) {
  t.plan(5);

  t.equal(isValidMaxAge(new Date(1999, 02, 21), 18), false);
  t.equal(isValidMaxAge(new Date(2006, 05, 14), 18), true);

  // junk inputs
  t.equal(isValidMaxAge(1233), false);
  t.equal(isValidMaxAge(true), false);
  t.equal(isValidMaxAge({}), false);
});
