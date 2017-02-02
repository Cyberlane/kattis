const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('bijele - sample 1', (assert) => {
  const input = ['0 1 2 2 2 7'];
  const expected = ['1 0 0 0 0 1'];
  helper(assert, method, input, expected);
});

test('bijele - sample 2', (assert) => {
  const input = ['2 1 2 1 2 1'];
  const expected = ['-1 0 0 1 0 7'];
  helper(assert, method, input, expected);
});
