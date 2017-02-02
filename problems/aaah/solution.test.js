const test = require('tape');
const { method } = require('./solution');

test('cold - sample 1', (assert) => {
  const input = [
    'aaah',
    'aaaaah',
  ];
  const readline = () => input.shift();
  const print = result => {
    assert.equal(result, 'no');
    assert.end();
  };
  method(readline, print);
});

test('cold - sample 1', (assert) => {
  const input = [
    'aaah',
    'ah',
  ];
  const readline = () => input.shift();
  const print = result => {
    assert.equal(result, 'go');
    assert.end();
  }
  method(readline, print);
});
