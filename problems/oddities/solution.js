const method = (readline, print) => {
  let tests = new Number(readline()) + 1;
  while (--tests) {
    const number = new Number(readline());
    if (number % 2 === 0) {
      print(number + ' is even');
    } else {
      print(number + ' is odd');
    }
  }
};

exports.method = method;
