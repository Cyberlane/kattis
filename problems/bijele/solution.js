const method = (readline, print) => {
  const truth = [1, 1, 2, 2, 2, 8];
  print(readline().split(' ').map((val, index) => truth[index] - val).join(' '));
};

exports.method = method;
