const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('two stones - sample 1', (assert) => {
  const input = [1];
  const expected = ['Alice'];
  helper(assert, method, input, expected);
});

test('two stones - sample 2', (assert) => {
  const input = [2];
  const expected = ['Bob'];
  helper(assert, method, input, expected);
});

test('two stones - sample 3', (assert) => {
  const input = [5];
  const expected = ['Alice'];
  helper(assert, method, input, expected);
});
