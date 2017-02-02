const helper = (assert, method, input, expected) => {
  const readline = () => input.shift();
  const output = [];
  assert.plan(expected.length);
  const print = result => {
    output.push(result);
    assert.equal(result, expected[output.length - 1]);
  };
  method(readline, print);
};

exports.helper = helper;
