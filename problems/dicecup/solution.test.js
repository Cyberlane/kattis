const test = require('tape');
const { method } = require('./solution');

test('dicecup - sample 1', (assert) => {
  const input = ['6 6'];
  const readline = () => input.shift();
  const expected = [7];
  const output = [];
  assert.plan(expected.length);
  const print = result => {
    output.push(result);
    assert.equal(result, expected[output.length - 1]);
  };
  method(readline, print);
});

test('dicecup - sample 2', (assert) => {
  const input = ['6 4'];
  const readline = () => input.shift();
  const expected = [5, 6, 7];
  const output = [];
  assert.plan(expected.length);
  const print = result => {
    output.push(result);
    assert.equal(result, expected[output.length - 1]);
  };
  method(readline, print);
});

test('dicecup - sample 3', (assert) => {
  const input = ['12 20'];
  const readline = () => input.shift();
  const expected = [
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
  ];
  const output = [];
  assert.plan(expected.length);
  const print = result => {
    output.push(result);
    assert.equal(result, expected[output.length - 1]);
  };
  method(readline, print);
});
