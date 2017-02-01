const test = require('tape');
const { method } = require('./solution');

test('cold - sample 1', (assert) => {
  const input = [
    3,
    '5 -10 15'
  ];
  const readline = () => input.shift();
  const result = method(readline);
  assert.equal(result, 1);
  assert.end();
});

test('cold - sample 1', (assert) => {
  const input = [
    5,
    '-14 -5 -39 -5 -7'
  ];
  const readline = () => input.shift();
  const result = method(readline);
  assert.equal(result, 5);
  assert.end();
});
