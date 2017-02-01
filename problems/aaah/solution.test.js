const test = require('tape');
const { method } = require('./solution');

test('cold - sample 1', (assert) => {
  const input = [
    'aaah',
    'aaaaah',
  ];
  const readline = () => input.shift();
  const result = method(readline);
  assert.equal(result, 'no');
  assert.end();
});

test('cold - sample 1', (assert) => {
  const input = [
    'aaah',
    'ah',
  ];
  const readline = () => input.shift();
  const result = method(readline);
  assert.equal(result, 'go');
  assert.end();
});
