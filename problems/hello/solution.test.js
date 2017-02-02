const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('Ensure we have hello world!', (assert) => {
  const input = [];
  const expected = ['Hello World!'];
  helper(assert, method, input, expected);
});
