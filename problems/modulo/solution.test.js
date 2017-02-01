const test = require('tape');
const { method } = require('./solution');

test('modulo - sample 1', (assert) => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const readline = () => input.shift();
  const result = method(readline);
  assert.equal(result, 10);
  assert.end();
});

test('modulo - sample 2', (assert) => {
  const input = [
    42,
    84,
    252,
    420,
    840,
    126,
    42,
    84,
    420,
    126,
  ];
  const readline = () => input.shift();
  const result = method(readline);
  assert.equal(result, 1);
  assert.end();
});

test('modulo - sample 3', (assert) => {
  const input = [
    39,
    40,
    41,
    42,
    43,
    44,
    82,
    83,
    84,
    85,
  ];
  const readline = () => input.shift();
  const result = method(readline);
  assert.equal(result, 6);
  assert.end();
});