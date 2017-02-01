const method = readline => {
  return (readline() % 2 ? 'Alice' : 'Bob');
};

exports.method = method;
