const method = (readline, print) => {
  const [x, y] = readline().split(' ').map(Number);
  if (x === y) {
    print(x + 1);
  } else if (x < y) {
    for (let i = x + 1; i <= y + 1; i++) {
      print(i);
    }
  } else {
    for (let i = y + 1; i <= x + 1; i++) {
      print(i);
    }
  }
};

exports.method = method;
