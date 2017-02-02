const test = require('tape');
const { method } = require('./solution');

test('two stones - sample 1', (assert) => {
  const input = [1];
  const readline = () => input.shift();
  const print = result => {
    assert.equal(result, 'Alice');
    assert.end();
  };
  method(readline, print);
});

test('two stones - sample 2', (assert) => {
  const input = [2];
  const readline = () => input.shift();
  const print = result => {
    assert.equal(result, 'Bob');
    assert.end();
  };
  method(readline, print);
});

test('two stones - sample 3', (assert) => {
  const input = [5];
  const readline = () => input.shift();
  const print = result => {
    assert.equal(result, 'Alice');
    assert.end();
  };
  method(readline, print);
});
