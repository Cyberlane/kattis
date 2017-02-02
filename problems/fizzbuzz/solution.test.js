const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('Fizzbuzz - sample 1', (assert) => {
  const input = ['2 3 7'];
  const expected = [
    1,
    'Fizz',
    'Buzz',
    'Fizz',
    5,
    'FizzBuzz',
    7,
  ];
  helper(assert, method, input, expected);
});

test('Fizzbuzz - sample 2', (assert) => {
  const input = ['2 4 7'];
  const expected = [
    1,
    'Fizz',
    3,
    'FizzBuzz',
    5,
    'Fizz',
    7,
  ];
  helper(assert, method, input, expected);
});

test('Fizzbuzz - sample 3', (assert) => {
  const input = ['3 5 7'];
  const expected = [
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
  ];
  helper(assert, method, input, expected);
});
