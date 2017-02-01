const method = readline => {
  readline();
  return readline().split(' ').reduce((a, c) => c < 0 ? a + 1 : a, 0);
};

exports.method = method;
