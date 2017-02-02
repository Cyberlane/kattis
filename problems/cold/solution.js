const method = (readline, print) => {
  readline();
  print(readline().split(' ').reduce((a, c) => c < 0 ? a + 1 : a, 0));
};

exports.method = method;
