const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('cold - sample 1', (assert) => {
  const input = [
    'aaah',
    'aaaaah',
  ];
  const expected = ['no'];
  helper(assert, method, input, expected);
});

test('cold - sample 1', (assert) => {
  const input = [
    'aaah',
    'ah',
  ];
  const expected = ['go'];
  helper(assert, method, input, expected);
});
