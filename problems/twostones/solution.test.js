const test = require('tape');
const { method } = require('./solution');

test('Ensure we have hello world!', (assert) => {
  assert.equal(method(), 'Hello World!');
  assert.end();
});
