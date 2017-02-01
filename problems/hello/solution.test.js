const test = require('tape');
const { method } = require('./solution');

test('two stones - sample 1', (assert) => {
  const result = method(1);
  assert.equal(result, 'Alice');
  assert.end();
});

test('two stones - sample 2', (assert) => {
  const result = method(2);
  assert.equal(result, 'Bob');
  assert.end();
});

test('two stones - sample 3', (assert) => {
  const result = method(5);
  assert.equal(result, 'Alice');
  assert.end();
});
