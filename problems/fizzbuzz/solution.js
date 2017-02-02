const method = (readline, print) => {
  const [x, y, n] = readline().split(' ').map(Number);
  for (let i = 1; i <= n; i++) {
    const fizz = (i % x) === 0;
    const buzz = (i % y) === 0;
    if (fizz && buzz) {
      print('FizzBuzz');
    } else if (fizz) {
      print('Fizz');
    } else if (buzz) {
      print('Buzz');
    } else {
      print(i);
    }
  }
};

exports.method = method;
