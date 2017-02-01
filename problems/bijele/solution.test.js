const test = require('tape');
const { method } = require('./solution');

test('bijele - sample 1', (assert) => {
  const input = ['0 1 2 2 2 7'];
  const readline = () => input.shift();
  const result = method(readline);
  assert.equal(result, '1 0 0 0 0 1');
  assert.end();
});

test('bijele - sample 2', (assert) => {
  const input = ['2 1 2 1 2 1'];
  const readline = () => input.shift();
  const result = method(readline);
  assert.equal(result, '-1 0 0 1 0 7');
  assert.end();
});
