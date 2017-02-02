const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('dicecup - sample 1', (assert) => {
  const input = ['6 6'];
  const expected = [7];
  helper(assert, method, input, expected);
});

test('dicecup - sample 2', (assert) => {
  const input = ['6 4'];
  const expected = [5, 6, 7];
  helper(assert, method, input, expected);
});

test('dicecup - sample 3', (assert) => {
  const input = ['12 20'];
  const expected = [
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
  ];
  helper(assert, method, input, expected);
});
