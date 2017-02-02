const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('Oddities - sample', (assert) => {
  const input = [
    3,
    10,
    9,
    -5,
  ];
  const expected = [
    '10 is even',
    '9 is odd',
    '-5 is odd',
  ];
  helper(assert, method, input, expected);
});
