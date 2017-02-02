const method = (readline, print) => {
  print(readline() % 2 ? 'Alice' : 'Bob');
};

exports.method = method;
