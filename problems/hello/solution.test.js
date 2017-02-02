const test = require('tape');
const { method } = require('./solution');

test('Ensure we have hello world!', (assert) => {
  const print = result => {
    assert.equal(result, 'Hello World!');
    assert.end();
  };
  method(print);
});
