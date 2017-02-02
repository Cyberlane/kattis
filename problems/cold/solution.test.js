const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('cold - sample 1', (assert) => {
  const input = [
    3,
    '5 -10 15'
  ];
  const expected = [1];
  helper(assert, method, input, expected);
});

test('cold - sample 1', (assert) => {
  const input = [
    5,
    '-14 -5 -39 -5 -7'
  ];
  const expected = [5];
  helper(assert, method, input, expected);
});
