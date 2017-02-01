const method = readline => {
  const truth = [1, 1, 2, 2, 2, 8];
  return readline().split(' ').map((val, index) => truth[index] - val).join(' ');
};

exports.method = method;
