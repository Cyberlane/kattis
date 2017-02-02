const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('modulo - sample 1', (assert) => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expected = [10];
  helper(assert, method, input, expected);
});

test('modulo - sample 2', (assert) => {
  const input = [
    42,
    84,
    252,
    420,
    840,
    126,
    42,
    84,
    420,
    126,
  ];
  const expected = [1];
  helper(assert, method, input, expected);
});

test('modulo - sample 3', (assert) => {
  const input = [
    39,
    40,
    41,
    42,
    43,
    44,
    82,
    83,
    84,
    85,
  ];
  const expected = [6];
  helper(assert, method, input, expected);
});