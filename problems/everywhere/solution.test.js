const test = require('tape');
const { method } = require('./solution');
const { helper } = require('../helper');

test('Everywhere - sample', (assert) => {
  const input = [
    2,
    7,
    'saskatoon',
    'toronto',
    'winnipeg',
    'toronto',
    'vancouver',
    'saskatoon',
    'toronto',
    3,
    'edmonton',
    'edmonton',
    'edmonton',
  ];
  const expected = [4, 1];
  helper(assert, method, input, expected);
});
