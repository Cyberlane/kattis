const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('Apaxiaans - sample 1', (assert) => {
  const input = ['bob'];
  const expected = ['bob'];
  helper(assert, method, input, expected);
});

test('Apaxiaans - sample 1', (assert) => {
  const input = ['booob'];
  const expected = ['bob'];
  helper(assert, method, input, expected);
});

test('Apaxiaans - sample 1', (assert) => {
  const input = ['boooooobapalaxxxxios'];
  const expected = ['bobapalaxios'];
  helper(assert, method, input, expected);
});
